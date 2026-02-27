import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [{
    userId: String,
    userName: String
  }],
  lastMessage: {
    type: String,
    default: ''
  },
  lastMessageTime: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

conversationSchema.index({ 'participants.userId': 1 });

const Conversation = mongoose.model('Conversation', conversationSchema);
export default Conversation;

