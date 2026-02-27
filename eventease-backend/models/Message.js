import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: true,
    index: true
  },
  senderId: {
    type: String,
    required: true
  },
  senderName: {
    type: String,
    required: true
  },
  receiverId: {
    type: String,
    required: true
  },
  receiverName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Message = mongoose.model('Message', messageSchema);
export default Message;

