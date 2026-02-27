import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Vendor from '../models/Vendor.js';
import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';

dotenv.config();

async function clearAllUsers() {
  try {
    // Connect to database
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Delete only messages and conversations from user-created accounts
    // (Built-in vendors don't have userId, so their chats don't exist yet)
    const messagesDeleted = await Message.deleteMany({});
    console.log(`✅ Deleted ${messagesDeleted.deletedCount} messages`);

    const conversationsDeleted = await Conversation.deleteMany({});
    console.log(`✅ Deleted ${conversationsDeleted.deletedCount} conversations`);

    // Delete only vendors that were created by users (have userId field)
    // Built-in vendors don't have userId, so they won't be deleted
    const vendorsDeleted = await Vendor.deleteMany({ userId: { $exists: true, $ne: null } });
    console.log(`✅ Deleted ${vendorsDeleted.deletedCount} user-created vendors`);

    // Delete all users (both users and providers)
    const usersDeleted = await User.deleteMany({});
    console.log(`✅ Deleted ${usersDeleted.deletedCount} users (including providers)`);

    console.log('\n✅ All users, vendors, conversations, and messages have been deleted!');
    console.log('✅ You can now start fresh with new signups.');
    
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

clearAllUsers();

