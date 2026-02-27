// scripts/seedAllServices.js
// Usage: node scripts/seedAllServices.js
// This script seeds vendors for services 2-7: Pre-Wedding Shoot, Event Videography, Wedding Catering, Corporate Catering, South Indian Specialists, Wedding Decorations

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vendor from '../models/Vendor.js';

dotenv.config();

// Generate vendor data for each service category
const generateVendors = (category, serviceName, basePrice, count = 10) => {
  const cities = [
    { city: 'Mumbai', state: 'Maharashtra' },
    { city: 'Delhi', state: 'NCR' },
    { city: 'Bangalore', state: 'Karnataka' },
    { city: 'Chennai', state: 'Tamil Nadu' },
    { city: 'Hyderabad', state: 'Telangana' },
    { city: 'Kolkata', state: 'West Bengal' },
    { city: 'Pune', state: 'Maharashtra' },
    { city: 'Jaipur', state: 'Rajasthan' },
    { city: 'Ahmedabad', state: 'Gujarat' },
    { city: 'Chandigarh', state: 'Punjab' },
    { city: 'Lucknow', state: 'Uttar Pradesh' },
    { city: 'Udaipur', state: 'Rajasthan' },
    { city: 'Kerala', state: 'Kerala' },
    { city: 'Goa', state: 'Goa' },
    { city: 'Amritsar', state: 'Punjab' },
  ];

  const vendors = [];
  
  // Generate name prefixes based on category
  let namePrefixes = [];
  if (category === 'photography') {
    namePrefixes = ['Dream', 'Ethereal', 'Luminous', 'Timeless', 'Celestial', 'Elegant', 'Divine', 'Royal', 'Heavenly', 'Magic'];
  } else if (category === 'catering') {
    namePrefixes = ['Royal', 'Grand', 'Delicious', 'Exquisite', 'Flavors', 'Taste', 'Feast', 'Banquet', 'Culinary', 'Gourmet'];
  } else if (category === 'decoration') {
    namePrefixes = ['Elegant', 'Royal', 'Magical', 'Dreamy', 'Luxury', 'Grand', 'Divine', 'Enchanted', 'Blissful', 'Heavenly'];
  }

  const suffixes = ['Studio', 'Services', 'Events', 'Decor', 'Catering', 'Delights', 'Collections', 'Experience', 'Designs', 'Creations'];

  for (let i = 0; i < count; i++) {
    const city = cities[i % cities.length];
    const prefix = namePrefixes[i % namePrefixes.length];
    const suffix = suffixes[i % suffixes.length];
    const vendorName = `${prefix} ${suffix}`;
    
    // Calculate price with variation
    const priceVariation = (Math.random() * 0.6 + 0.7); // 0.7 to 1.3
    const price = Math.round(basePrice * priceVariation);
    
    // Calculate rating (4.5 to 5.0)
    const rating = Math.round((Math.random() * 0.5 + 4.5) * 10) / 10;
    const reviewsCount = Math.floor(Math.random() * 200 + 50);
    const featured = i < 3 || Math.random() > 0.7;
    
    const vendorNumber = i + 1;
    const email = vendorName.toLowerCase().replace(/\s+/g, '') + '@example.com';
    const phone = `+91 ${Math.floor(Math.random() * 90000 + 10000)} ${Math.floor(Math.random() * 90000 + 10000)}`;
    const website = `www.${vendorName.toLowerCase().replace(/\s+/g, '')}.com`;

    vendors.push({
      name: vendorName,
      category: category,
      price: price,
      currency: 'INR',
      location: {
        city: city.city,
        state: city.state,
        country: 'India'
      },
      shopAddress: {
        city: city.city,
        state: city.state,
        country: 'India',
        pincode: `${Math.floor(Math.random() * 900000 + 100000)}`
      },
      rating: rating,
      reviewsCount: reviewsCount,
      featured: featured,
      contact: {
        email: email,
        phone: phone,
        website: website
      },
      description: `Professional ${serviceName.toLowerCase()} services in ${city.city}.`,
      isApproved: true,
    });
  }

  return vendors;
};

// Define vendors for each service
const allVendors = [
  // Service 2: Pre-Wedding Shoot (photography)
  ...generateVendors('photography', 'Pre-Wedding Shoot', 18000, 15).map(v => ({
    ...v,
    name: v.name + ' Pre-Wedding',
  })),
  
  // Service 3: Event Videography (photography)
  ...generateVendors('photography', 'Event Videography', 35000, 15).map(v => ({
    ...v,
    name: v.name + ' Videography',
  })),
  
  // Service 4: Wedding Catering (catering)
  ...generateVendors('catering', 'Wedding Catering', 45000, 20),
  
  // Service 5: Corporate Catering (catering)
  ...generateVendors('catering', 'Corporate Catering', 85000, 15).map(v => ({
    ...v,
    name: v.name + ' Corporate',
  })),
  
  // Service 6: South Indian Specialists (catering)
  ...generateVendors('catering', 'South Indian Specialists', 70000, 12).map(v => ({
    ...v,
    name: v.name + ' South Indian',
    location: {
      city: v.location.city,
      state: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana'][Math.floor(Math.random() * 5)],
      country: 'India'
    },
  })),
  
  // Service 7: Wedding Decorations (decoration)
  ...generateVendors('decoration', 'Wedding Decorations', 75000, 20),
];

async function run() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/eventease';
  await mongoose.connect(uri);
  console.log('Connected to DB');

  // Delete existing vendors for services 2-7 only (not Wedding Photography which is service 1)
  // We'll delete based on name patterns to avoid deleting Wedding Photography vendors
  
  // Delete Pre-Wedding Shoot vendors
  const deletePreWedding = await Vendor.deleteMany({ 
    category: 'photography',
    name: { $regex: /Pre-Wedding/i },
    userId: { $exists: false }
  });
  console.log(`Deleted Pre-Wedding Shoot vendors: ${deletePreWedding.deletedCount}`);
  
  // Delete Event Videography vendors
  const deleteVideography = await Vendor.deleteMany({ 
    category: 'photography',
    name: { $regex: /Videography/i },
    userId: { $exists: false }
  });
  console.log(`Deleted Event Videography vendors: ${deleteVideography.deletedCount}`);
  
  // Delete Wedding Catering vendors (but not Corporate or South Indian)
  const deleteWeddingCatering = await Vendor.deleteMany({ 
    category: 'catering',
    name: { $not: { $regex: /(Corporate|South Indian)/i } },
    userId: { $exists: false }
  });
  console.log(`Deleted Wedding Catering vendors: ${deleteWeddingCatering.deletedCount}`);
  
  // Delete Corporate Catering vendors
  const deleteCorporateCatering = await Vendor.deleteMany({ 
    category: 'catering',
    name: { $regex: /Corporate/i },
    userId: { $exists: false }
  });
  console.log(`Deleted Corporate Catering vendors: ${deleteCorporateCatering.deletedCount}`);
  
  // Delete South Indian Specialists vendors
  const deleteSouthIndian = await Vendor.deleteMany({ 
    category: 'catering',
    name: { $regex: /South Indian/i },
    userId: { $exists: false }
  });
  console.log(`Deleted South Indian Specialists vendors: ${deleteSouthIndian.deletedCount}`);
  
  // Delete Wedding Decorations vendors
  const deleteDecorations = await Vendor.deleteMany({ 
    category: 'decoration',
    userId: { $exists: false }
  });
  console.log(`Deleted Wedding Decorations vendors: ${deleteDecorations.deletedCount}`);

  // Insert new vendors
  try {
    const result = await Vendor.insertMany(allVendors, { ordered: false });
    console.log(`\n✅ Successfully inserted ${result.length} vendors:`);
    console.log(`   - Pre-Wedding Shoot: ${allVendors.filter(v => v.name.includes('Pre-Wedding')).length}`);
    console.log(`   - Event Videography: ${allVendors.filter(v => v.name.includes('Videography')).length}`);
    console.log(`   - Wedding Catering: ${allVendors.filter(v => v.category === 'catering' && !v.name.includes('Corporate') && !v.name.includes('South Indian')).length}`);
    console.log(`   - Corporate Catering: ${allVendors.filter(v => v.name.includes('Corporate')).length}`);
    console.log(`   - South Indian Specialists: ${allVendors.filter(v => v.name.includes('South Indian')).length}`);
    console.log(`   - Wedding Decorations: ${allVendors.filter(v => v.category === 'decoration').length}`);
  } catch (err) {
    // insertMany can throw if duplicates etc; log and continue
    if (err.writeErrors) {
      console.log(`✅ Inserted ${err.insertedCount} vendors`);
      console.log(`⚠️  ${err.writeErrors.length} vendors already exist (skipped)`);
    } else {
      console.error('InsertMany error:', err.message || err);
    }
  }

  // Helpful indexes
  try {
    await Vendor.collection.createIndex({ category: 1 });
    await Vendor.collection.createIndex({ price: 1 });
    await Vendor.collection.createIndex({ rating: -1 });
  } catch (e) {
    console.warn('Index creation warning:', e.message || e);
  }

  await mongoose.disconnect();
  console.log('\n✅ Done seeding all services!');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal seed error', err);
  process.exit(1);
});

