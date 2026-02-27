import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import autoRoutes from "./routes/autoRoutes.js";
import vendorsRouter from './routes/vendors.js';
import Message from './models/Message.js';
import Conversation from './models/Conversation.js';

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const httpServer = createServer(app);

// Socket.IO setup with CORS
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", autoRoutes);
app.use("/api/vendors", vendorsRouter);

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  // Join a conversation room
  socket.on('join-conversation', async ({ userId, vendorId }) => {
    const conversationId = [userId, vendorId].sort().join('-');
    socket.join(conversationId);
    console.log(`User ${userId} joined conversation ${conversationId}`);
    
    // Emit conversation history
    try {
      const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });
      socket.emit('conversation-history', messages);
    } catch (error) {
      console.error('Error fetching conversation history:', error);
    }
  });

  // Handle new message
  socket.on('send-message', async ({ conversationId, senderId, senderName, receiverId, receiverName, message }) => {
    try {
      // Save message to database
      const newMessage = new Message({
        conversationId,
        senderId,
        senderName,
        receiverId,
        receiverName,
        message
      });
      await newMessage.save();

      // Update or create conversation
      const participants = [
        { userId: senderId, userName: senderName },
        { userId: receiverId, userName: receiverName }
      ];
      await Conversation.findOneAndUpdate(
        { 'participants.userId': { $all: [senderId, receiverId] } },
        {
          participants,
          lastMessage: message,
          lastMessageTime: new Date()
        },
        { upsert: true, new: true }
      );

      // Emit message to all clients in the conversation room
      io.to(conversationId).emit('receive-message', {
        _id: newMessage._id,
        conversationId: newMessage.conversationId,
        senderId: newMessage.senderId,
        senderName: newMessage.senderName,
        receiverId: newMessage.receiverId,
        receiverName: newMessage.receiverName,
        message: newMessage.message,
        read: newMessage.read,
        createdAt: newMessage.createdAt,
        updatedAt: newMessage.updatedAt
      });
    } catch (error) {
      console.error('Error sending message:', error);
      socket.emit('message-error', { error: 'Failed to send message' });
    }
  });

  // Handle typing indicator
  socket.on('typing', ({ conversationId, userId, isTyping }) => {
    socket.to(conversationId).emit('user-typing', { userId, isTyping });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// API route to get conversations for a user
app.get('/api/conversations/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const conversations = await Conversation.find({
      'participants.userId': userId
    }).sort({ lastMessageTime: -1 });
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API route to get messages for a conversation
app.get('/api/messages/:conversationId', async (req, res) => {
  try {
    const { conversationId } = req.params;
    const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Socket.IO server ready`);
});
