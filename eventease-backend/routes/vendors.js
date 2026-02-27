// routes/vendors.js
import express from 'express';
import Vendor from '../models/Vendor.js';

const router = express.Router();

/**
 * POST /api/vendors/register
 * -> Register a new vendor profile
 */
router.post('/register', async (req, res) => {
  try {
    const vendorData = req.body;
    
    // Check if vendor already exists for this user
    const existingVendor = await Vendor.findOne({ userId: vendorData.userId });
    if (existingVendor) {
      return res.status(400).json({ 
        message: 'Vendor profile already exists for this user. Please update instead.' 
      });
    }

    // Set location from shopAddress if not provided
    if (!vendorData.location && vendorData.shopAddress) {
      vendorData.location = {
        city: vendorData.shopAddress.city,
        state: vendorData.shopAddress.state,
        country: vendorData.shopAddress.country || 'India'
      };
    }

    // Create vendor
    const vendor = await Vendor.create(vendorData);
    res.status(201).json({ 
      message: 'Vendor profile created successfully. Pending approval.',
      vendor 
    });
  } catch (err) {
    console.error('POST /api/vendors/register error', err);
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Vendor profile already exists' });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

/**
 * GET /api/vendors/category/:category
 * -> Get vendors by category (only approved ones)
 */
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const vendors = await Vendor.find({ 
      category,
      isApproved: true 
    }).lean();
    res.json(vendors);
  } catch (err) {
    console.error('GET /api/vendors/category/:category error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/vendors
 * GET /api/vendors/list
 * -> Return array of all vendors (lean documents) - only approved
 */
router.get(['/','/list'], async (req, res) => {
  try {
    const vendors = await Vendor.find({ isApproved: true }).lean();
    res.json(vendors);
  } catch (err) {
    console.error('GET /api/vendors error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/vendors/user/:userId
 * -> Return vendor by userId (for provider dashboard)
 */
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ error: 'Missing user id' });

    const vendor = await Vendor.findOne({ userId }).lean();
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

    res.json(vendor);
  } catch (err) {
    console.error('GET /api/vendors/user/:userId error', err);
    if (err.name === 'CastError') return res.status(400).json({ error: 'Invalid user id' });
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/vendors/:id
 * -> Return single vendor by id
 * Note: this route must come AFTER the /list route(s) and /user/:userId so 'list' and 'user' don't get matched as :id
 */
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: 'Missing vendor id' });

    const vendor = await Vendor.findById(id).lean();
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

    res.json(vendor);
  } catch (err) {
    console.error('GET /api/vendors/:id error', err);
    if (err.name === 'CastError') return res.status(400).json({ error: 'Invalid vendor id' });
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/vendors/:id/rate
 * -> Submit or update a rating for a vendor
 */
router.post('/:id/rate', async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, userId, reviewImages } = req.body;

    if (rating === undefined) {
      return res.status(400).json({ message: 'Rating value is required' });
    }

    const numericRating = Number(rating);
    if (!Number.isFinite(numericRating) || numericRating < 1 || numericRating > 5) {
      return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
    }

    const vendor = await Vendor.findById(id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    if (!Array.isArray(vendor.ratings)) {
      vendor.ratings = [];
    }

    const normalizedImages = Array.isArray(reviewImages)
      ? reviewImages
          .filter((img) => typeof img === 'string' && img.length <= 2_000_000)
          .slice(0, 5)
      : undefined;

    if (userId) {
      const existingIndex = vendor.ratings.findIndex(r => r.userId?.toString() === userId);
      if (existingIndex !== -1) {
        vendor.ratings[existingIndex].value = numericRating;
        vendor.ratings[existingIndex].createdAt = new Date();
        if (normalizedImages) {
          vendor.ratings[existingIndex].images = normalizedImages;
        }
      } else {
        vendor.ratings.push({
          userId,
          value: numericRating,
          ...(normalizedImages ? { images: normalizedImages } : {})
        });
      }
    } else {
      vendor.ratings.push({
        value: numericRating,
        ...(normalizedImages ? { images: normalizedImages } : {})
      });
    }

    const totalRatings = vendor.ratings.reduce((sum, entry) => sum + entry.value, 0);
    vendor.reviewsCount = vendor.ratings.length;
    vendor.rating = Number((totalRatings / (vendor.reviewsCount || 1)).toFixed(2));

    await vendor.save();

    res.json({
      message: 'Rating submitted successfully',
      vendor
    });
  } catch (err) {
    console.error('POST /api/vendors/:id/rate error', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
