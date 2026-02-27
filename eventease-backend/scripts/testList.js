// scripts/testList.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Vendor from '../models/Vendor.js';

dotenv.config();

async function run() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/eventease';
  await mongoose.connect(uri);
  const vendors = await Vendor.find().lean();
  console.log('vendors:', vendors.map(v => ({ id: v._id, name: v.name })));
  await mongoose.disconnect();
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
