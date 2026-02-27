import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema({
  // Link to User account (optional - built-in vendors don't have userId)
  // unique: true with sparse: true means only non-null userIds must be unique
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Built-in system vendors don't have userId
    unique: true,
    sparse: true // Multiple null values allowed; non-null values must be unique
  },
  name: { type: String, required: true },
  slug: String,
  category: { type: String, required: true },
  description: String,
  price: Number,
  currency: { type: String, default: 'INR' },
  // Shop address details
  shopAddress: {
    street: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: 'India' },
    pincode: String
  },
  location: { city: String, state: String, country: String },
  // Certificates (array of URLs or file paths)
  certificates: [{
    name: String,
    url: String,
    issueDate: Date,
    expiryDate: Date
  }],
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  contact: {
    email: String,
    phone: String,
    website: String
  },
  gallery: [String],
  ratings: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    value: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    images: [String]
  }],
  availability: String,
  // Approval status
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Vendor = mongoose.model('Vendor', VendorSchema);

export default Vendor;
