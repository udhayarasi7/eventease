import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Person,
  Chat,
  Business,
  LocationOn,
  Phone,
  Email,
  Language,
  Edit,
  Description,
} from '@mui/icons-material';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`provider-tabpanel-${index}`}
      aria-labelledby={`provider-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login');
      return;
    }

    if (storedUser.userType !== 'provider') {
      navigate('/home');
      return;
    }

    setUser(storedUser);
    fetchVendorProfile(storedUser._id || storedUser.id);
    fetchConversations(storedUser._id || storedUser.id);
  }, [navigate]);

  const fetchVendorProfile = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/api/vendors/user/${userId}`);
      setVendor(response.data);
    } catch (err) {
      console.error('Error fetching vendor:', err);
      if (err.response?.status === 404) {
        // Vendor profile not found - user needs to complete onboarding
        setVendor(null);
      } else {
        setError('Failed to load vendor profile. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchConversations = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/api/conversations/${userId}`);
      setConversations(response.data || []);
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setConversations([]);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditProfile = () => {
    navigate('/provider/onboarding');
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

  if (loading) {
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
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Provider Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your vendor profile and communicate with customers
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <Paper elevation={2} sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="My Profile" icon={<Person />} iconPosition="start" />
          <Tab label="Messages" icon={<Chat />} iconPosition="start" />
        </Tabs>

        {/* Profile Tab */}
        <TabPanel value={tabValue} index={0}>
          {vendor ? (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: '2rem' }}>
                    {getInitials(vendor.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {vendor.name}
                    </Typography>
                    <Chip 
                      label={vendor.category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Uncategorized'} 
                      color="primary" 
                      variant="outlined" 
                      sx={{ mt: 1 }}
                    />
                    {vendor.isApproved ? (
                      <Chip label="Approved" color="success" size="small" sx={{ ml: 1, mt: 1 }} />
                    ) : (
                      <Chip label="Pending Approval" color="warning" size="small" sx={{ ml: 1, mt: 1 }} />
                    )}
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<Edit />}
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Business /> Business Information
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {vendor.description && (
                          <Box>
                            <Typography variant="body2" color="text.secondary">Description</Typography>
                            <Typography variant="body1">{vendor.description}</Typography>
                          </Box>
                        )}
                        {vendor.price && (
                          <Box>
                            <Typography variant="body2" color="text.secondary">Starting Price</Typography>
                            <Typography variant="body1" fontWeight="bold" color="primary">
                              ₹{vendor.price.toLocaleString('en-IN')}
                            </Typography>
                          </Box>
                        )}
                        {vendor.category && (
                          <Box>
                            <Typography variant="body2" color="text.secondary">Category</Typography>
                            <Typography variant="body1">
                              {vendor.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOn /> Address
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {vendor.shopAddress && (
                          <Typography variant="body1">
                            {vendor.shopAddress.street && `${vendor.shopAddress.street}, `}
                            {vendor.shopAddress.city && `${vendor.shopAddress.city}, `}
                            {vendor.shopAddress.state && `${vendor.shopAddress.state} `}
                            {vendor.shopAddress.pincode && `- ${vendor.shopAddress.pincode}`}
                            {vendor.shopAddress.country && `, ${vendor.shopAddress.country}`}
                          </Typography>
                        )}
                        {!vendor.shopAddress && (
                          <Typography variant="body2" color="text.secondary">No address provided</Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Phone /> Contact Information
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {vendor.contact?.email && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Email fontSize="small" color="action" />
                            <Typography variant="body1">{vendor.contact.email}</Typography>
                          </Box>
                        )}
                        {vendor.contact?.phone && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Phone fontSize="small" color="action" />
                            <Typography variant="body1">{vendor.contact.phone}</Typography>
                          </Box>
                        )}
                        {vendor.contact?.website && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Language fontSize="small" color="action" />
                            <Typography variant="body1" component="a" href={`https://${vendor.contact.website}`} target="_blank" rel="noreferrer" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                              {vendor.contact.website}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                {vendor.certificates && vendor.certificates.length > 0 && (
                  <Grid item xs={12}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Description /> Certificates
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {vendor.certificates.map((cert, index) => (
                            <Chip
                              key={index}
                              label={cert.name}
                              variant="outlined"
                              onClick={() => cert.url && window.open(cert.url, '_blank')}
                              sx={{ cursor: cert.url ? 'pointer' : 'default' }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No vendor profile found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Complete your vendor profile to start offering services
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate('/provider/onboarding')}
                startIcon={<Business />}
              >
                Create Vendor Profile
              </Button>
            </Box>
          )}
        </TabPanel>

        {/* Messages Tab */}
        <TabPanel value={tabValue} index={1}>
          {conversations.length > 0 ? (
            <Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Your Conversations
              </Typography>
              <Grid container spacing={2}>
                {conversations.map((conv) => {
                  const otherParticipant = conv.participants.find(p => p.userId !== (user._id || user.id));
                  return (
                    <Grid item xs={12} key={conv._id}>
                      <Card
                        variant="outlined"
                        sx={{
                          cursor: 'pointer',
                          '&:hover': { boxShadow: 2 },
                        }}
                        onClick={() => {
                          // Navigate to chat with the other participant
                          const otherUserId = otherParticipant?.userId;
                          if (otherUserId) {
                            navigate(`/chat/${otherUserId}`, {
                              state: {
                                vendor: vendor,
                                otherUser: otherParticipant
                              }
                            });
                          }
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                              <Typography variant="h6" fontWeight="bold">
                                {otherParticipant?.userName || 'User'}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {conv.lastMessage}
                              </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                              {new Date(conv.lastMessageTime).toLocaleDateString()}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Chat sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No messages yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                When customers contact you, their messages will appear here
              </Typography>
            </Box>
          )}
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default ProviderDashboard;

