import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Avatar,
  Chip,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  Send,
  ArrowBack,
  Person,
} from '@mui/icons-material';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

const Chat = () => {
  const { vendorId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get vendor info from location state or fetch it
  const vendorInfo = location.state?.vendor || null;
  
  const [user, setUser] = useState(null);
  const [vendor, setVendor] = useState(vendorInfo);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Get user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Fetch vendor info if not provided
  useEffect(() => {
    const fetchVendor = async () => {
      if (!vendor && vendorId) {
        try {
          const response = await axios.get(`${API_URL}/api/vendors/${vendorId}`);
          setVendor(response.data);
        } catch (error) {
          console.error('Error fetching vendor:', error);
        }
      }
    };
    fetchVendor();
  }, [vendorId, vendor]);

  // Initialize Socket.IO connection
  useEffect(() => {
    if (!user || !vendor) return;

    const newSocket = io(SOCKET_URL, {
      transports: ['websocket', 'polling'],
    });

    setSocket(newSocket);

    // Join conversation
    const conversationId = [user._id || user.id, vendorId || vendor.backendId || vendor._id].sort().join('-');
    
    newSocket.emit('join-conversation', {
      userId: user._id || user.id,
      vendorId: vendorId || vendor.backendId || vendor._id
    });

    // Listen for conversation history
    newSocket.on('conversation-history', (historyMessages) => {
      setMessages(historyMessages || []);
      setLoading(false);
    });

    // Listen for new messages
    newSocket.on('receive-message', (message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    });

    // Listen for typing indicator
    newSocket.on('user-typing', ({ userId, isTyping: typing }) => {
      if (userId !== (user._id || user.id)) {
        setIsTyping(typing);
      }
    });

    // Listen for errors
    newSocket.on('message-error', (error) => {
      console.error('Message error:', error);
    });

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, [user, vendor, vendorId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !socket || !user || !vendor) return;

    const conversationId = [user._id || user.id, vendorId || vendor.backendId || vendor._id].sort().join('-');
    const senderName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email || 'User';
    const receiverName = vendor.name || 'Vendor';

    const messageData = {
      conversationId,
      senderId: user._id || user.id,
      senderName,
      receiverId: vendorId || vendor.backendId || vendor._id,
      receiverName,
      message: newMessage.trim()
    };

    socket.emit('send-message', messageData);
    setNewMessage('');

    // Clear typing indicator
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    socket.emit('typing', { conversationId, userId: user._id || user.id, isTyping: false });
  };

  const handleTyping = (e) => {
    setNewMessage(e.target.value);

    if (!socket || !user || !vendor) return;

    const conversationId = [user._id || user.id, vendorId || vendor.backendId || vendor._id].sort().join('-');

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Emit typing indicator
    socket.emit('typing', { conversationId, userId: user._id || user.id, isTyping: true });

    // Clear typing indicator after 3 seconds of no typing
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit('typing', { conversationId, userId: user._id || user.id, isTyping: false });
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading && messages.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
        {/* Header */}
        <Paper elevation={2} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
              <ArrowBack />
            </IconButton>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {vendor ? getInitials(vendor.name) : <Person />}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold">
                {vendor ? vendor.name : 'Loading...'}
              </Typography>
              {vendor && (
                <Typography variant="body2" color="text.secondary">
                  {vendor.location || ''}
                </Typography>
              )}
            </Box>
            {vendor && (
              <Chip 
                label={`₹${vendor.price?.toLocaleString('en-IN') || '0'}`}
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        </Paper>

        {/* Messages Area */}
        <Paper
          elevation={2}
          sx={{
            flex: 1,
            p: 2,
            mb: 2,
            borderRadius: 2,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
          }}
        >
          {messages.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'text.secondary',
              }}
            >
              <Typography variant="body1" align="center">
                No messages yet. Start the conversation!
              </Typography>
            </Box>
          ) : (
            <>
              {messages.map((message, index) => {
                const isOwnMessage = (message.senderId === (user?._id || user?.id));
                return (
                  <Box
                    key={message._id || index}
                    sx={{
                      display: 'flex',
                      justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '70%',
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isOwnMessage ? 'primary.main' : 'background.paper',
                        color: isOwnMessage ? 'white' : 'text.primary',
                      }}
                    >
                      {!isOwnMessage && (
                        <Typography variant="caption" sx={{ display: 'block', mb: 0.5, opacity: 0.8 }}>
                          {message.senderName}
                        </Typography>
                      )}
                      <Typography variant="body1">{message.message}</Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 0.5,
                          opacity: 0.7,
                          fontSize: '0.7rem',
                        }}
                      >
                        {new Date(message.createdAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
              {isTyping && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                      {vendor?.name || 'Vendor'} is typing...
                    </Typography>
                  </Box>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </Paper>

        {/* Input Area */}
        <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleTyping}
              onKeyPress={handleKeyPress}
              variant="outlined"
              size="small"
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' }, '&:disabled': { bgcolor: 'grey.300' } }}
            >
              <Send />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Chat;

