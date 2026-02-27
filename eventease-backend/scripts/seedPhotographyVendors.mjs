// scripts/seedPhotographyVendors.mjs
// Usage: node scripts/seedPhotographyVendors.mjs
// This script deletes existing vendors with category 'photography' and inserts the prepared list.

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vendor from '../models/Vendor.js';

dotenv.config();

const VENDORS = [
  { name: 'Dreamscape Photography', category: 'photography', price: 35000, currency:'INR', location:{city:'Mumbai',state:'Maharashtra',country:'India'}, rating:4.9, reviewsCount:234, featured:true, contact:{email:'hello@dreamscape.com', phone:'+91 98765 43210', website:'www.dreamscape.com'}, description:'Professional wedding photography services.'},
  { name: 'Ethereal Images Studio', category: 'photography', price: 45000, currency:'INR', location:{city:'Delhi',state:'NCR',country:'India'}, rating:4.8, reviewsCount:189, featured:true, contact:{email:'studio@ethereal.com', phone:'+91 98765 43211', website:'www.ethereal.com'}, description:'Studio and wedding photography.'},
  { name: 'Heartstrings Photography', category: 'photography', price: 28000, currency:'INR', location:{city:'Bangalore',state:'Karnataka',country:'India'}, rating:4.7, reviewsCount:156, contact:{email:'connect@heartstrings.com', phone:'+91 98765 43212', website:'www.heartstrings.com'}, description:'Candid and traditional wedding photography.'},

  { name: 'Soulful Snapshots', category: 'photography', price:95000, location:{city:'Chennai',state:'Tamil Nadu',country:'India'}, rating:4.9, reviewsCount:278, featured:true, contact:{email:'info@soulful.com', phone:'+91 98765 43213', website:'www.soulful.com'}},
  { name: 'Luminous Moments', category: 'photography', price:55000, location:{city:'Hyderabad',state:'Telangana',country:'India'}, rating:4.6, reviewsCount:134, contact:{email:'moments@luminous.com', phone:'+91 98765 43214', website:'www.luminous.com'}},
  { name: 'Timeless Visuals', category: 'photography', price:72000, location:{city:'Kolkata',state:'West Bengal',country:'India'}, rating:4.8, reviewsCount:198, featured:true, contact:{email:'visuals@timeless.com', phone:'+91 98765 43215', website:'www.timeless.com'}},

  { name: 'Blissful Frames', category:'photography', price:48000, location:{city:'Pune',state:'Maharashtra',country:'India'}, rating:4.7, reviewsCount:167, contact:{email:'frames@blissful.com', phone:'+91 98765 43216', website:'www.blissful.com'}},
  { name: 'Royal Lens Studio', category:'photography', price:150000, location:{city:'Jaipur',state:'Rajasthan',country:'India'}, rating:4.9, reviewsCount:312, featured:true, contact:{email:'royal@lensstudio.com', phone:'+91 98765 43217', website:'www.royallens.com'}},
  { name: 'Enchanted Visuals', category:'photography', price:280000, location:{city:'Goa',state:'',country:'India'}, rating:4.7, reviewsCount:145, contact:{email:'goa@enchanted.com', phone:'+91 98765 43218', website:'www.enchantedgoa.com'}},

  { name: 'Celestial Shots', category:'photography', price:68000, location:{city:'Ahmedabad',state:'Gujarat',country:'India'}, rating:4.8, reviewsCount:223, featured:true, contact:{email:'shots@celestial.com', phone:'+91 98765 43219', website:'www.celestial.com'}},
  { name: 'Golden Hour Photography', category:'photography', price:45000, location:{city:'Chandigarh',state:'',country:'India'}, rating:4.7, reviewsCount:178, contact:{email:'golden@hour.com', phone:'+91 98765 43220', website:'www.goldenhour.com'}},
  { name: 'Vintage Vows Studio', category:'photography', price:52000, location:{city:'Lucknow',state:'Uttar Pradesh',country:'India'}, rating:4.6, reviewsCount:156, contact:{email:'vintage@vows.com', phone:'+91 98765 43221', website:'www.vintagevows.com'}},

  { name: 'Majestic Moments', category:'photography', price:220000, location:{city:'Udaipur',state:'Rajasthan',country:'India'}, rating:4.9, reviewsCount:267, featured:true, contact:{email:'info@majestic.com', phone:'+91 98765 43222', website:'www.majestic.com'}},
  { name: 'Pure Emotions', category:'photography', price:75000, location:{city:'Kerala',state:'',country:'India'}, rating:4.7, reviewsCount:189, contact:{email:'emotions@pure.com', phone:'+91 98765 43223', website:'www.pureemotions.com'}},
  { name: 'Elegant Frames', category:'photography', price:95000, location:{city:'Delhi',state:'NCR',country:'India'}, rating:4.8, reviewsCount:234, featured:true, contact:{email:'frames@elegant.com', phone:'+91 98765 43224', website:'www.elegantframes.com'}},

  { name: 'Divine Captures', category:'photography', price:85000, location:{city:'Varanasi',state:'Uttar Pradesh',country:'India'}, rating:4.9, reviewsCount:298, contact:{email:'captures@divine.com', phone:'+91 98765 43225', website:'www.divinecaptures.com'}},
  { name: 'Serene Shots', category:'photography', price:65000, location:{city:'Shimla',state:'Himachal',country:'India'}, rating:4.7, reviewsCount:167, contact:{email:'shots@serene.com', phone:'+91 98765 43226', website:'www.sereneshots.com'}},
  { name: 'Grand Visuals', category:'photography', price:180000, location:{city:'Mumbai',state:'Maharashtra',country:'India'}, rating:4.8, reviewsCount:245, featured:true, contact:{email:'visuals@grand.com', phone:'+91 98765 43227', website:'www.grandvisuals.com'}},

  { name: 'Radiant Memories', category:'photography', price:72000, location:{city:'Chennai',state:'Tamil Nadu',country:'India'}, rating:4.7, reviewsCount:178, contact:{email:'memories@radiant.com', phone:'+91 98765 43228', website:'www.radiantmemories.com'}},
  { name: 'Precious Moments', category:'photography', price:88000, location:{city:'Bangalore',state:'Karnataka',country:'India'}, rating:4.9, reviewsCount:312, featured:true, contact:{email:'moments@precious.com', phone:'+91 98765 43229', website:'www.preciousmoments.com'}},
  { name: 'Blissful Unions', category:'photography', price:68000, location:{city:'Hyderabad',state:'Telangana',country:'India'}, rating:4.8, reviewsCount:234, contact:{email:'unions@blissful.com', phone:'+91 98765 43230', website:'www.blissfulunions.com'}},

  { name: 'Eternal Bonds', category:'photography', price:78000, location:{city:'Kolkata',state:'West Bengal',country:'India'}, rating:4.9, reviewsCount:289, featured:true, contact:{email:'bonds@eternal.com', phone:'+91 98765 43231', website:'www.eternalbonds.com'}},
  { name: 'Magic Moments Studio', category:'photography', price:52000, location:{city:'Pune',state:'Maharashtra',country:'India'}, rating:4.7, reviewsCount:156, contact:{email:'studio@magicmoments.com', phone:'+91 98765 43232', website:'www.magicmoments.com'}},
  { name: 'Heavenly Frames', category:'photography', price:95000, location:{city:'Jaipur',state:'Rajasthan',country:'India'}, rating:4.8, reviewsCount:223, featured:true, contact:{email:'frames@heavenly.com', phone:'+91 98765 43233', website:'www.heavenlyframes.com'}},

  { name: 'Divine Moments', category:'photography', price:125000, location:{city:'Delhi',state:'NCR',country:'India'}, rating:4.9, reviewsCount:278, featured:true, contact:{email:'moments@divine.com', phone:'+91 98765 43234', website:'www.divinemoments.com'}},
  { name: 'Royal Wedding Photos', category:'photography', price:110000, location:{city:'Mysore',state:'Karnataka',country:'India'}, rating:4.8, reviewsCount:245, contact:{email:'royal@weddingphotos.com', phone:'+91 98765 43235', website:'www.royalweddingphotos.com'}},
  { name: 'Cherished Memories', category:'photography', price:68000, location:{city:'Coimbatore',state:'Tamil Nadu',country:'India'}, rating:4.7, reviewsCount:189, contact:{email:'memories@cherished.com', phone:'+91 98765 43236', website:'www.cherishedmemories.com'}},

  { name: 'Perfect Shots', category:'photography', price:72000, location:{city:'Ahmedabad',state:'Gujarat',country:'India'}, rating:4.8, reviewsCount:234, contact:{email:'shots@perfect.com', phone:'+91 98765 43237', website:'www.perfectshots.com'}},
  { name: 'Dream Wedding Photos', category:'photography', price:195000, location:{city:'Goa',state:'',country:'India'}, rating:4.9, reviewsCount:312, featured:true, contact:{email:'dream@weddingphotos.com', phone:'+91 98765 43238', website:'www.dreamweddingphotos.com'}},
  { name: 'Elegant Expressions', category:'photography', price:58000, location:{city:'Chandigarh',state:'',country:'India'}, rating:4.7, reviewsCount:167, contact:{email:'expressions@elegant.com', phone:'+91 98765 43239', website:'www.elegantexpressions.com'}},

  { name: 'Timeless Treasures', category:'photography', price:82000, location:{city:'Lucknow',state:'Uttar Pradesh',country:'India'}, rating:4.8, reviewsCount:245, contact:{email:'treasures@timeless.com', phone:'+91 98765 43240', website:'www.timelesstreasures.com'}},
  { name: 'Sacred Moments', category:'photography', price:78000, location:{city:'Amritsar',state:'Punjab',country:'India'}, rating:4.9, reviewsCount:289, featured:true, contact:{email:'moments@sacred.com', phone:'+91 98765 43241', website:'www.sacredmoments.com'}},
  { name: 'Blissful Beginnings', category:'photography', price:62000, location:{city:'Bhopal',state:'Madhya Pradesh',country:'India'}, rating:4.7, reviewsCount:178, contact:{email:'beginnings@blissful.com', phone:'+91 98765 43242', website:'www.blissfulbeginnings.com'}},

  { name: 'Golden Memories', category:'photography', price:71000, location:{city:'Indore',state:'Madhya Pradesh',country:'India'}, rating:4.8, reviewsCount:223, contact:{email:'memories@golden.com', phone:'+91 98765 43243', website:'www.goldenmemories.com'}},
  { name: 'Royal Heritage Photos', category:'photography', price:145000, location:{city:'Jodhpur',state:'Rajasthan',country:'India'}, rating:4.9, reviewsCount:267, contact:{email:'heritage@royalphotos.com', phone:'+91 98765 43244', website:'www.royalheritagephotos.com'}},
  { name: 'Divine Light Studio', category:'photography', price:69000, location:{city:'Kochi',state:'Kerala',country:'India'}, rating:4.7, reviewsCount:189, contact:{email:'studio@divinelight.com', phone:'+91 98765 43245', website:'www.divinelightstudio.com'}},

  { name: 'Eternal Love Photos', category:'photography', price:75000, location:{city:'Nagpur',state:'Maharashtra',country:'India'}, rating:4.8, reviewsCount:234, contact:{email:'love@eternalphotos.com', phone:'+91 98765 43246', website:'www.eternallovephotos.com'}},
  { name: 'Magic Touch Photography', category:'photography', price:82000, location:{city:'Surat',state:'Gujarat',country:'India'}, rating:4.9, reviewsCount:278, featured:true, contact:{email:'touch@magictouchphoto.com', phone:'+91 98765 43247', website:'www.magictouchphotography.com'}},
  { name: 'Heavenly Weddings', category:'photography', price:68000, location:{city:'Visakhapatnam',state:'Andhra Pradesh',country:'India'}, rating:4.7, reviewsCount:156, contact:{email:'weddings@heavenly.com', phone:'+91 98765 43248', website:'www.heavenlyweddings.com'}},

  { name: 'Royal Moments', category:'photography', price:72000, location:{city:'Patna',state:'Bihar',country:'India'}, rating:4.8, reviewsCount:245, contact:{email:'moments@royal.com', phone:'+91 98765 43249', website:'www.royalmoments.com'}},
  { name: 'Divine Wedding Studio', category:'photography', price:88000, location:{city:'Guwahati',state:'Assam',country:'India'}, rating:4.9, reviewsCount:312, contact:{email:'studio@divinewedding.com', phone:'+91 98765 43250', website:'www.divineweddingstudio.com'}},
  { name: 'Elegant Wedding Photos', category:'photography', price:65000, location:{city:'Bhubaneswar',state:'Odisha',country:'India'}, rating:4.7, reviewsCount:178, contact:{email:'photos@elegantwedding.com', phone:'+91 98765 43251', website:'www.elegantweddingphotos.com'}},

  { name: 'Timeless Wedding Studio', category:'photography', price:78000, location:{city:'Dehradun',state:'Uttarakhand',country:'India'}, rating:4.8, reviewsCount:223, contact:{email:'studio@timelesswedding.com', phone:'+91 98765 43252', website:'www.timelessweddingstudio.com'}},
  { name: 'Royal Palace Photos', category:'photography', price:165000, location:{city:'Udaipur',state:'Rajasthan',country:'India'}, rating:4.9, reviewsCount:289, featured:true, contact:{email:'palace@royalphotos.com', phone:'+91 98765 43253', website:'www.royalpalacephotos.com'}},
  { name: 'Divine Celebration', category:'photography', price:92000, location:{city:'Mumbai',state:'Maharashtra',country:'India'}, rating:4.7, reviewsCount:167, contact:{email:'celebration@divine.com', phone:'+91 98765 43254', website:'www.divinecelebration.com'}},

  { name: 'Eternal Bliss Photos', category:'photography', price:105000, location:{city:'Delhi',state:'NCR',country:'India'}, rating:4.8, reviewsCount:234, featured:true, contact:{email:'bliss@eternalphotos.com', phone:'+91 98765 43255', website:'www.eternalblissphotos.com'}},
  { name: 'Magic Wedding Moments', category:'photography', price:98000, location:{city:'Bangalore',state:'Karnataka',country:'India'}, rating:4.9, reviewsCount:278, featured:true, contact:{email:'moments@magicwedding.com', phone:'+91 98765 43256', website:'www.magicweddingmoments.com'}},
  { name: 'Heavenly Bliss Studio', category:'photography', price:74000, location:{city:'Chennai',state:'Tamil Nadu',country:'India'}, rating:4.7, reviewsCount:189, contact:{email:'bliss@heavenlystudio.com', phone:'+91 98765 43257', website:'www.heavenlyblissstudio.com'}},

  { name: 'Royal Celebration', category:'photography', price:89000, location:{city:'Kolkata',state:'West Bengal',country:'India'}, rating:4.8, reviewsCount:245, contact:{email:'celebration@royal.com', phone:'+91 98765 43258', website:'www.royalcelebration.com'}},
  { name: 'Divine Union Photos', category:'photography', price:112000, location:{city:'Hyderabad',state:'Telangana',country:'India'}, rating:4.9, reviewsCount:312, contact:{email:'union@divinephotos.com', phone:'+91 98765 43259', website:'www.divineunionphotos.com'}}
];

async function run() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/eventease';
  await mongoose.connect(uri);
  console.log('Connected to DB');

  // Remove existing photography vendors so we have a clean replace
  const deleteRes = await Vendor.deleteMany({ category: 'photography' });
  console.log('Deleted existing photography vendors:', deleteRes.deletedCount);

  // Insert new list
  try {
    const result = await Vendor.insertMany(VENDORS, { ordered: false });
    console.log('Inserted vendors:', result.length);
  } catch (err) {
    // insertMany can throw if duplicates etc; log and continue
    console.error('InsertMany error (some inserts may have failed):', err.message || err);
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
  console.log('Done.');
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal seed error', err);
  process.exit(1);
});
