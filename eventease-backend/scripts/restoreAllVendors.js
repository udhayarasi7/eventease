import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Vendor from '../models/Vendor.js';

dotenv.config();

// All vendor data from ServiceDetail.js - these are the built-in vendors
const VENDORS = [
  { name: 'Dreamscape Photography', category: 'photography', price: 35000, currency: 'INR', location: { city: 'Mumbai', state: 'Maharashtra', country: 'India' }, rating: 4.9, reviewsCount: 234, featured: true, contact: { email: 'hello@dreamscape.com', phone: '+91 98765 43210', website: 'www.dreamscape.com' }, description: 'Professional wedding photography services.', isApproved: true },
  { name: 'Ethereal Images Studio', category: 'photography', price: 45000, currency: 'INR', location: { city: 'Delhi', state: 'NCR', country: 'India' }, rating: 4.8, reviewsCount: 189, featured: true, contact: { email: 'studio@ethereal.com', phone: '+91 98765 43211', website: 'www.ethereal.com' }, description: 'Studio and wedding photography.', isApproved: true },
  { name: 'Heartstrings Photography', category: 'photography', price: 28000, currency: 'INR', location: { city: 'Bangalore', state: 'Karnataka', country: 'India' }, rating: 4.7, reviewsCount: 156, featured: false, contact: { email: 'connect@heartstrings.com', phone: '+91 98765 43212', website: 'www.heartstrings.com' }, description: 'Candid and traditional wedding photography.', isApproved: true },
  { name: 'Soulful Snapshots', category: 'photography', price: 95000, currency: 'INR', location: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' }, rating: 4.9, reviewsCount: 278, featured: true, contact: { email: 'info@soulful.com', phone: '+91 98765 43213', website: 'www.soulful.com' }, isApproved: true },
  { name: 'Luminous Moments', category: 'photography', price: 55000, currency: 'INR', location: { city: 'Hyderabad', state: 'Telangana', country: 'India' }, rating: 4.6, reviewsCount: 134, featured: false, contact: { email: 'moments@luminous.com', phone: '+91 98765 43214', website: 'www.luminous.com' }, isApproved: true },
  { name: 'Timeless Visuals', category: 'photography', price: 72000, currency: 'INR', location: { city: 'Kolkata', state: 'West Bengal', country: 'India' }, rating: 4.8, reviewsCount: 198, featured: true, contact: { email: 'visuals@timeless.com', phone: '+91 98765 43215', website: 'www.timeless.com' }, isApproved: true },
  { name: 'Blissful Frames', category: 'photography', price: 48000, currency: 'INR', location: { city: 'Pune', state: 'Maharashtra', country: 'India' }, rating: 4.7, reviewsCount: 167, featured: false, contact: { email: 'frames@blissful.com', phone: '+91 98765 43216', website: 'www.blissful.com' }, isApproved: true },
  { name: 'Royal Lens Studio', category: 'photography', price: 150000, currency: 'INR', location: { city: 'Jaipur', state: 'Rajasthan', country: 'India' }, rating: 4.9, reviewsCount: 312, featured: true, contact: { email: 'royal@lensstudio.com', phone: '+91 98765 43217', website: 'www.royallens.com' }, isApproved: true },
  { name: 'Enchanted Visuals', category: 'photography', price: 280000, currency: 'INR', location: { city: 'Goa', state: '', country: 'India' }, rating: 4.7, reviewsCount: 145, featured: false, contact: { email: 'goa@enchanted.com', phone: '+91 98765 43218', website: 'www.enchantedgoa.com' }, isApproved: true },
  { name: 'Celestial Shots', category: 'photography', price: 68000, currency: 'INR', location: { city: 'Ahmedabad', state: 'Gujarat', country: 'India' }, rating: 4.8, reviewsCount: 223, featured: true, contact: { email: 'shots@celestial.com', phone: '+91 98765 43219', website: 'www.celestial.com' }, isApproved: true },
  { name: 'Golden Hour Photography', category: 'photography', price: 45000, currency: 'INR', location: { city: 'Chandigarh', state: '', country: 'India' }, rating: 4.7, reviewsCount: 178, featured: false, contact: { email: 'golden@hour.com', phone: '+91 98765 43220', website: 'www.goldenhour.com' }, isApproved: true },
  { name: 'Vintage Vows Studio', category: 'photography', price: 52000, currency: 'INR', location: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' }, rating: 4.6, reviewsCount: 156, featured: false, contact: { email: 'vintage@vows.com', phone: '+91 98765 43221', website: 'www.vintagevows.com' }, isApproved: true },
  { name: 'Majestic Moments', category: 'photography', price: 220000, currency: 'INR', location: { city: 'Udaipur', state: 'Rajasthan', country: 'India' }, rating: 4.9, reviewsCount: 267, featured: true, contact: { email: 'info@majestic.com', phone: '+91 98765 43222', website: 'www.majestic.com' }, isApproved: true },
  { name: 'Pure Emotions', category: 'photography', price: 75000, currency: 'INR', location: { city: 'Kerala', state: '', country: 'India' }, rating: 4.7, reviewsCount: 189, featured: false, contact: { email: 'emotions@pure.com', phone: '+91 98765 43223', website: 'www.pureemotions.com' }, isApproved: true },
  { name: 'Elegant Frames', category: 'photography', price: 95000, currency: 'INR', location: { city: 'Delhi', state: 'NCR', country: 'India' }, rating: 4.8, reviewsCount: 234, featured: true, contact: { email: 'frames@elegant.com', phone: '+91 98765 43224', website: 'www.elegantframes.com' }, isApproved: true },
  { name: 'Divine Captures', category: 'photography', price: 85000, currency: 'INR', location: { city: 'Varanasi', state: 'Uttar Pradesh', country: 'India' }, rating: 4.9, reviewsCount: 298, featured: false, contact: { email: 'captures@divine.com', phone: '+91 98765 43225', website: 'www.divinecaptures.com' }, isApproved: true },
  { name: 'Serene Shots', category: 'photography', price: 65000, currency: 'INR', location: { city: 'Shimla', state: 'Himachal', country: 'India' }, rating: 4.7, reviewsCount: 167, featured: false, contact: { email: 'shots@serene.com', phone: '+91 98765 43226', website: 'www.sereneshots.com' }, isApproved: true },
  { name: 'Grand Visuals', category: 'photography', price: 180000, currency: 'INR', location: { city: 'Mumbai', state: 'Maharashtra', country: 'India' }, rating: 4.8, reviewsCount: 245, featured: true, contact: { email: 'visuals@grand.com', phone: '+91 98765 43227', website: 'www.grandvisuals.com' }, isApproved: true },
  { name: 'Radiant Memories', category: 'photography', price: 72000, currency: 'INR', location: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' }, rating: 4.7, reviewsCount: 178, featured: false, contact: { email: 'memories@radiant.com', phone: '+91 98765 43228', website: 'www.radiantmemories.com' }, isApproved: true },
  { name: 'Precious Moments', category: 'photography', price: 88000, currency: 'INR', location: { city: 'Bangalore', state: 'Karnataka', country: 'India' }, rating: 4.9, reviewsCount: 312, featured: true, contact: { email: 'moments@precious.com', phone: '+91 98765 43229', website: 'www.preciousmoments.com' }, isApproved: true },
  { name: 'Blissful Unions', category: 'photography', price: 68000, currency: 'INR', location: { city: 'Hyderabad', state: 'Telangana', country: 'India' }, rating: 4.8, reviewsCount: 234, featured: false, contact: { email: 'unions@blissful.com', phone: '+91 98765 43230', website: 'www.blissfulunions.com' }, isApproved: true },
  { name: 'Eternal Bonds', category: 'photography', price: 78000, currency: 'INR', location: { city: 'Kolkata', state: 'West Bengal', country: 'India' }, rating: 4.9, reviewsCount: 289, featured: true, contact: { email: 'bonds@eternal.com', phone: '+91 98765 43231', website: 'www.eternalbonds.com' }, isApproved: true },
  { name: 'Magic Moments Studio', category: 'photography', price: 52000, currency: 'INR', location: { city: 'Pune', state: 'Maharashtra', country: 'India' }, rating: 4.7, reviewsCount: 156, featured: false, contact: { email: 'studio@magicmoments.com', phone: '+91 98765 43232', website: 'www.magicmoments.com' }, isApproved: true },
  { name: 'Heavenly Frames', category: 'photography', price: 95000, currency: 'INR', location: { city: 'Jaipur', state: 'Rajasthan', country: 'India' }, rating: 4.8, reviewsCount: 223, featured: true, contact: { email: 'frames@heavenly.com', phone: '+91 98765 43233', website: 'www.heavenlyframes.com' }, isApproved: true },
  { name: 'Divine Moments', category: 'photography', price: 125000, currency: 'INR', location: { city: 'Delhi', state: 'NCR', country: 'India' }, rating: 4.9, reviewsCount: 278, featured: true, contact: { email: 'moments@divine.com', phone: '+91 98765 43234', website: 'www.divinemoments.com' }, isApproved: true },
  { name: 'Royal Wedding Photos', category: 'photography', price: 110000, currency: 'INR', location: { city: 'Mysore', state: 'Karnataka', country: 'India' }, rating: 4.8, reviewsCount: 245, featured: true, contact: { email: 'royal@weddingphotos.com', phone: '+91 98765 43235', website: 'www.royalweddingphotos.com' }, isApproved: true },
  { name: 'Cherished Memories', category: 'photography', price: 68000, currency: 'INR', location: { city: 'Coimbatore', state: 'Tamil Nadu', country: 'India' }, rating: 4.7, reviewsCount: 189, featured: false, contact: { email: 'memories@cherished.com', phone: '+91 98765 43236', website: 'www.cherishedmemories.com' }, isApproved: true },
  { name: 'Perfect Shots', category: 'photography', price: 72000, currency: 'INR', location: { city: 'Ahmedabad', state: 'Gujarat', country: 'India' }, rating: 4.8, reviewsCount: 234, featured: true, contact: { email: 'shots@perfect.com', phone: '+91 98765 43237', website: 'www.perfectshots.com' }, isApproved: true },
  { name: 'Dream Wedding Photos', category: 'photography', price: 195000, currency: 'INR', location: { city: 'Goa', state: '', country: 'India' }, rating: 4.9, reviewsCount: 312, featured: true, contact: { email: 'dream@weddingphotos.com', phone: '+91 98765 43238', website: 'www.dreamweddingphotos.com' }, isApproved: true },
  { name: 'Elegant Expressions', category: 'photography', price: 58000, currency: 'INR', location: { city: 'Chandigarh', state: '', country: 'India' }, rating: 4.7, reviewsCount: 167, featured: false, contact: { email: 'expressions@elegant.com', phone: '+91 98765 43239', website: 'www.elegantexpressions.com' }, isApproved: true },
  { name: 'Timeless Treasures', category: 'photography', price: 82000, currency: 'INR', location: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' }, rating: 4.8, reviewsCount: 245, featured: true, contact: { email: 'treasures@timeless.com', phone: '+91 98765 43240', website: 'www.timelesstreasures.com' }, isApproved: true },
  { name: 'Sacred Moments', category: 'photography', price: 78000, currency: 'INR', location: { city: 'Amritsar', state: 'Punjab', country: 'India' }, rating: 4.9, reviewsCount: 289, featured: true, contact: { email: 'moments@sacred.com', phone: '+91 98765 43241', website: 'www.sacredmoments.com' }, isApproved: true },
  { name: 'Blissful Beginnings', category: 'photography', price: 62000, currency: 'INR', location: { city: 'Bhopal', state: 'Madhya Pradesh', country: 'India' }, rating: 4.7, reviewsCount: 178, featured: false, contact: { email: 'beginnings@blissful.com', phone: '+91 98765 43242', website: 'www.blissfulbeginnings.com' }, isApproved: true },
  { name: 'Golden Memories', category: 'photography', price: 71000, currency: 'INR', location: { city: 'Indore', state: 'Madhya Pradesh', country: 'India' }, rating: 4.8, reviewsCount: 223, featured: true, contact: { email: 'memories@golden.com', phone: '+91 98765 43243', website: 'www.goldenmemories.com' }, isApproved: true },
  { name: 'Royal Heritage Photos', category: 'photography', price: 145000, currency: 'INR', location: { city: 'Jodhpur', state: 'Rajasthan', country: 'India' }, rating: 4.9, reviewsCount: 267, featured: true, contact: { email: 'heritage@royalphotos.com', phone: '+91 98765 43244', website: 'www.royalheritagephotos.com' }, isApproved: true },
  { name: 'Divine Light Studio', category: 'photography', price: 69000, currency: 'INR', location: { city: 'Kochi', state: 'Kerala', country: 'India' }, rating: 4.7, reviewsCount: 189, featured: false, contact: { email: 'studio@divinelight.com', phone: '+91 98765 43245', website: 'www.divinelightstudio.com' }, isApproved: true },
  { name: 'Eternal Love Photos', category: 'photography', price: 75000, currency: 'INR', location: { city: 'Nagpur', state: 'Maharashtra', country: 'India' }, rating: 4.8, reviewsCount: 234, featured: true, contact: { email: 'love@eternalphotos.com', phone: '+91 98765 43246', website: 'www.eternallovephotos.com' }, isApproved: true },
  { name: 'Magic Touch Photography', category: 'photography', price: 82000, currency: 'INR', location: { city: 'Surat', state: 'Gujarat', country: 'India' }, rating: 4.9, reviewsCount: 278, featured: true, contact: { email: 'touch@magicphoto.com', phone: '+91 98765 43247', website: 'www.magictouchphotography.com' }, isApproved: true },
  { name: 'Heavenly Weddings', category: 'photography', price: 68000, currency: 'INR', location: { city: 'Visakhapatnam', state: 'Andhra', country: 'India' }, rating: 4.7, reviewsCount: 156, featured: false, contact: { email: 'weddings@heavenly.com', phone: '+91 98765 43248', website: 'www.heavenlyweddings.com' }, isApproved: true },
  { name: 'Royal Moments', category: 'photography', price: 72000, currency: 'INR', location: { city: 'Patna', state: 'Bihar', country: 'India' }, rating: 4.8, reviewsCount: 245, featured: true, contact: { email: 'moments@royal.com', phone: '+91 98765 43249', website: 'www.royalmoments.com' }, isApproved: true },
  { name: 'Divine Wedding Studio', category: 'photography', price: 88000, currency: 'INR', location: { city: 'Guwahati', state: 'Assam', country: 'India' }, rating: 4.9, reviewsCount: 312, featured: true, contact: { email: 'studio@divinewedding.com', phone: '+91 98765 43250', website: 'www.divineweddingstudio.com' }, isApproved: true },
  { name: 'Elegant Wedding Photos', category: 'photography', price: 65000, currency: 'INR', location: { city: 'Bhubaneswar', state: 'Odisha', country: 'India' }, rating: 4.7, reviewsCount: 178, featured: false, contact: { email: 'photos@elegantwedding.com', phone: '+91 98765 43251', website: 'www.elegantweddingphotos.com' }, isApproved: true },
  { name: 'Timeless Wedding Studio', category: 'photography', price: 78000, currency: 'INR', location: { city: 'Dehradun', state: 'Uttarakhand', country: 'India' }, rating: 4.8, reviewsCount: 223, featured: true, contact: { email: 'studio@timelesswedding.com', phone: '+91 98765 43252', website: 'www.timelessweddingstudio.com' }, isApproved: true },
  { name: 'Royal Palace Photos', category: 'photography', price: 165000, currency: 'INR', location: { city: 'Udaipur', state: 'Rajasthan', country: 'India' }, rating: 4.9, reviewsCount: 289, featured: true, contact: { email: 'palace@royalphotos.com', phone: '+91 98765 43253', website: 'www.royalpalacephotos.com' }, isApproved: true },
  { name: 'Divine Celebration', category: 'photography', price: 92000, currency: 'INR', location: { city: 'Mumbai', state: 'Maharashtra', country: 'India' }, rating: 4.7, reviewsCount: 167, featured: false, contact: { email: 'celebration@divine.com', phone: '+91 98765 43254', website: 'www.divinecelebration.com' }, isApproved: true },
  { name: 'Eternal Bliss Photos', category: 'photography', price: 105000, currency: 'INR', location: { city: 'Delhi', state: 'NCR', country: 'India' }, rating: 4.8, reviewsCount: 234, featured: true, contact: { email: 'bliss@eternalphotos.com', phone: '+91 98765 43255', website: 'www.eternalblissphotos.com' }, isApproved: true },
  { name: 'Magic Wedding Moments', category: 'photography', price: 98000, currency: 'INR', location: { city: 'Bangalore', state: 'Karnataka', country: 'India' }, rating: 4.9, reviewsCount: 278, featured: true, contact: { email: 'moments@magicwedding.com', phone: '+91 98765 43256', website: 'www.magicweddingmoments.com' }, isApproved: true },
  { name: 'Heavenly Bliss Studio', category: 'photography', price: 74000, currency: 'INR', location: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' }, rating: 4.7, reviewsCount: 189, featured: false, contact: { email: 'bliss@heavenlystudio.com', phone: '+91 98765 43257', website: 'www.heavenlyblissstudio.com' }, isApproved: true },
  { name: 'Royal Celebration', category: 'photography', price: 89000, currency: 'INR', location: { city: 'Kolkata', state: 'West Bengal', country: 'India' }, rating: 4.8, reviewsCount: 245, featured: true, contact: { email: 'celebration@royal.com', phone: '+91 98765 43258', website: 'www.royalcelebration.com' }, isApproved: true },
  { name: 'Divine Union Photos', category: 'photography', price: 112000, currency: 'INR', location: { city: 'Hyderabad', state: 'Telangana', country: 'India' }, rating: 4.9, reviewsCount: 312, featured: true, contact: { email: 'union@divinephotos.com', phone: '+91 98765 43259', website: 'www.divineunionphotos.com' }, isApproved: true }
];

async function restoreVendors() {
  try {
    // Connect to database
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Transform vendors to match Vendor model structure
    // Built-in vendors don't have userId (they're system vendors, not user-created)
    const vendorsWithAddress = VENDORS.map((vendor, index) => {
      // Parse location string if needed
      let city = vendor.location.city || 'Unknown';
      let state = vendor.location.state || '';
      
      // If city has comma, split it (e.g., "Mumbai, Maharashtra" -> city="Mumbai", state="Maharashtra")
      if (city.includes(',')) {
        const parts = city.split(',').map(s => s.trim());
        city = parts[0] || 'Unknown';
        state = parts[1] || state || '';
      }
      
      // Ensure state is set if empty
      if (!state && city) {
        // Try to infer state from city if possible
        state = '';
      }
      
      // Ensure we have at least a city
      if (!city || city === 'Unknown') {
        city = vendor.name.split(' ')[0]; // Fallback to first word of name
      }
      
      return {
        name: vendor.name,
        category: vendor.category,
        description: vendor.description || `Professional ${vendor.category} services.`,
        price: vendor.price,
        currency: vendor.currency || 'INR',
        shopAddress: {
          city: city,
          state: state || 'Maharashtra', // Default state if empty
          country: vendor.location.country || 'India',
          street: '',
          pincode: ''
        },
        location: {
          city: city,
          state: state || 'Maharashtra',
          country: vendor.location.country || 'India'
        },
        rating: vendor.rating || 0,
        reviewsCount: vendor.reviewsCount || 0,
        featured: vendor.featured || false,
        contact: vendor.contact || {},
        isApproved: true, // Built-in vendors are pre-approved
        // No userId - these are built-in system vendors (userId is optional)
      };
    });

    // Drop and recreate the userId index to ensure it's sparse
    try {
      await Vendor.collection.dropIndex('userId_1');
      console.log('🗑️  Dropped existing userId index');
    } catch (err) {
      if (err.code !== 27) { // 27 = IndexNotFound
        console.log('⚠️  Could not drop index (may not exist):', err.message);
      }
    }
    
    // Recreate index with sparse option
    try {
      await Vendor.collection.createIndex({ userId: 1 }, { unique: true, sparse: true });
      console.log('✅ Recreated userId index with sparse option');
    } catch (err) {
      console.log('⚠️  Index creation warning:', err.message);
    }

    // Delete ALL existing built-in vendors (those without userId)
    const deleteRes = await Vendor.deleteMany({ 
      userId: { $exists: false } // Only delete built-in vendors (no userId)
    });
    console.log(`🗑️  Deleted ${deleteRes.deletedCount} existing built-in vendors (without userId)`);

    // Insert vendors one by one to see actual errors
    console.log(`\n📝 Inserting ${vendorsWithAddress.length} vendors...`);
    let successCount = 0;
    let errorCount = 0;
    const errors = [];
    
    for (const vendor of vendorsWithAddress) {
      try {
        await Vendor.create(vendor);
        successCount++;
        if (successCount % 10 === 0) {
          console.log(`   ✅ Inserted ${successCount} vendors so far...`);
        }
      } catch (createErr) {
        errorCount++;
        errors.push({ name: vendor.name, error: createErr.message });
        if (errorCount <= 10) {
          console.log(`   ❌ Error inserting "${vendor.name}": ${createErr.message}`);
        }
      }
    }
    
    console.log(`\n✅ Successfully inserted ${successCount} vendors`);
    if (errorCount > 0) {
      console.log(`⚠️  ${errorCount} vendors failed to insert`);
      if (errorCount > 10) {
        console.log(`   (Showing first 10 errors above)`);
      }
    }

    console.log('\n✅ All built-in vendors have been restored!');
    console.log(`✅ Total vendors in database: ${await Vendor.countDocuments({})}`);
    
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

restoreVendors();

