import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Divider,
  Chip,
  Paper,
  Autocomplete,
  TextField,
} from '@mui/material';
import { Edit, Save, Person, Business, LocationOn, Phone, Email } from '@mui/icons-material';

// Mock data for dropdowns
const STATES = {
  'United States': ['New York', 'California', 'Texas', 'Florida', 'Illinois'],
  'India': ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh'],
  'Indonesia': ['Jakarta', 'West Java', 'East Java', 'Bali', 'Sumatra'],
  'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  'Canada': ['Ontario', 'Quebec', 'British Columbia', 'Alberta']
};

const CITIES = {
  'New York': ['New York City', 'Buffalo', 'Rochester'],
  'California': ['Los Angeles', 'San Francisco', 'San Diego'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
  'Delhi': ['New Delhi', 'Delhi Cantonment'],
  'Jakarta': ['Central Jakarta', 'South Jakarta', 'West Jakarta']
};

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: 'user',
    companyName: '',
    age: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
    about: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [success, setSuccess] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const buildStateFromUser = (user) => ({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    userType: user.userType || 'user',
    companyName: user.companyName || '',
    age: user.age || '',
    phone: user.phone || '',
    city: user.city || '',
    state: user.state || '',
    pincode: user.pincode || '',
    about: user.about || '',
  });

  useEffect(() => {
    const storedUserRaw = localStorage.getItem('user');
    if (!storedUserRaw) {
      setLoading(false);
      setFetchError('Please log in to view your profile.');
      return;
    }
    try {
      const storedUser = JSON.parse(storedUserRaw);
      if (!storedUser?._id) {
        setLoading(false);
        setFetchError('Invalid user session. Please log in again.');
        return;
      }
      setCurrentUserId(storedUser._id);
      fetchUserProfile(storedUser._id);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setFetchError('Unable to read stored user information.');
    }
  }, []);

  const fetchUserProfile = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/user/${userId}`);
      const user = response.data.user;
      setUserData(buildStateFromUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      setFetchError('');
    } catch (err) {
      console.error(err);
      setFetchError(err.response?.data?.message || 'Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'age' || name === 'phone' || name === 'pincode') && value && !/^[0-9\b]+$/.test(value)) return;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!currentUserId) return;
    try {
      const payload = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        companyName: userData.companyName,
        phone: userData.phone,
        age: userData.age,
        city: userData.city,
        state: userData.state,
        pincode: userData.pincode,
        about: userData.about,
      };
      const response = await axios.put(`http://localhost:5000/api/auth/user/${currentUserId}`, payload);
      const updatedUser = response.data.user;
      setUserData(buildStateFromUser(updatedUser));
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setEditMode(false);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      setFetchError('');
    } catch (err) {
      console.error(err);
      setFetchError(err.response?.data?.message || 'Failed to update profile.');
    }
  };

  const getInitials = () => {
    return `${userData.firstName?.[0] || ''}${userData.lastName?.[0] || ''}`.toUpperCase();
  };

  const getCities = () => {
    return CITIES[userData.state] || [];
  };

  const handleDeleteAccount = async () => {
    if (!currentUserId) return;
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmed) return;
    setDeleteLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/auth/user/${currentUserId}`);
      localStorage.removeItem('user');
      setDeleteLoading(false);
      navigate('/register');
    } catch (err) {
      console.error(err);
      setFetchError(err.response?.data?.message || 'Failed to delete account.');
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" color="text.secondary">Loading profile...</Typography>
      </Container>
    );
  }

  const locationText = userData.city || userData.state
    ? [userData.city, userData.state].filter(Boolean).join(', ')
    : 'Location not set';
  const heroSubText = userData.userType === 'provider'
    ? (userData.companyName || 'Trusted Service Provider')
    : 'EventEase Community Member';

  const InfoRow = ({ icon: IconComponent, label, value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      <IconComponent sx={{ color: 'primary.main' }} />
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {label}
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {value || 'Not provided'}
        </Typography>
      </Box>
    </Box>
  );

  const FieldBlock = ({ label, children }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 0.6 }}>
        {label}
      </Typography>
      {children}
    </Box>
  );

  const renderTextValue = (value, placeholder = '-') => (
    <Typography variant="body1" fontWeight={500}>
      {value || placeholder}
    </Typography>
  );

  return (
    <Box sx={{ bgcolor: '#f2f2f7', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            background: 'linear-gradient(120deg, #6a5af9 0%, #b43bf6 100%)',
            borderRadius: '24px',
            p: 4,
            mb: 4,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            boxShadow: '0 18px 36px rgba(106, 90, 249, 0.35)'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Chip
              label={userData.userType === 'provider' ? 'Service Provider' : 'User'}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 2
              }}
            />
            <Typography variant="h3" fontWeight="700" sx={{ mb: 1 }}>
              {userData.firstName || 'Welcome'}, {userData.lastName}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
              {heroSubText}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
              📍 {locationText}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={editMode ? <Save /> : <Edit />}
                onClick={editMode ? handleSave : () => setEditMode(true)}
                disabled={!!fetchError}
                sx={{
                  bgcolor: 'white',
                  color: '#6a5af9',
                  px: 3,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                }}
              >
                {editMode ? 'Save Changes' : 'Edit Profile'}
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleDeleteAccount}
                disabled={deleteLoading}
                sx={{
                  borderColor: 'rgba(255,255,255,0.6)',
                  color: 'white',
                  px: 3
                }}
              >
                {deleteLoading ? 'Deleting...' : 'Delete Account'}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 4, mt: 4, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                  Email
                </Typography>
                <Typography variant="body1" fontWeight="600">
                  {userData.email}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                  Phone
                </Typography>
                <Typography variant="body1" fontWeight="600">
                  {userData.phone || 'Not added'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Avatar
            sx={{
              width: 140,
              height: 140,
              bgcolor: 'white',
              color: '#6a5af9',
              fontSize: '3rem',
              fontWeight: '700',
              boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
            }}
          >
            {getInitials()}
          </Avatar>
        </Box>

        {fetchError && (
          <Paper sx={{ p: 2, mb: 2, bgcolor: 'error.light', color: 'white', textAlign: 'center' }}>
            <Typography variant="h6">{fetchError}</Typography>
          </Paper>
        )}

        {success && (
          <Paper sx={{ p: 2, mb: 2, bgcolor: 'success.light', color: 'white', textAlign: 'center' }}>
            <Typography variant="h6">{success}</Typography>
          </Paper>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardHeader
              title="Profile Details"
              subheader={editMode ? 'Make your changes and click Save when finished.' : 'Switch to edit mode to update your information.'}
            />
            <Divider />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FieldBlock label="First Name">
                      {editMode ? (
                        <TextField
                          name="firstName"
                          value={userData.firstName}
                          onChange={handleChange}
                          size="small"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.firstName)
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FieldBlock label="Last Name">
                      {editMode ? (
                        <TextField
                          name="lastName"
                          value={userData.lastName}
                          onChange={handleChange}
                          size="small"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.lastName)
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FieldBlock label="Email">
                      {editMode ? (
                        <TextField
                          name="email"
                          type="email"
                          value={userData.email}
                          onChange={handleChange}
                          size="small"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.email)
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FieldBlock label="Phone">
                      {editMode ? (
                        <TextField
                          name="phone"
                          value={userData.phone}
                          onChange={handleChange}
                          size="small"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.phone, 'Not added')
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FieldBlock label="Age">
                      {editMode ? (
                        <TextField
                          name="age"
                          value={userData.age}
                          onChange={handleChange}
                          size="small"
                          type="number"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.age, 'Not set')
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FieldBlock label="Pincode">
                      {editMode ? (
                        <TextField
                          name="pincode"
                          value={userData.pincode}
                          onChange={handleChange}
                          size="small"
                          fullWidth
                        />
                      ) : (
                        renderTextValue(userData.pincode, 'Not set')
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FieldBlock label="City">
                      {editMode ? (
                        <Autocomplete
                          value={userData.city || null}
                          onChange={(event, newValue) => {
                            setUserData(prev => ({ ...prev, city: newValue || '' }));
                          }}
                          options={getCities()}
                          disabled={!userData.state}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              placeholder="Select city"
                            />
                          )}
                        />
                      ) : (
                        renderTextValue(userData.city, 'Not set')
                      )}
                    </FieldBlock>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FieldBlock label="State">
                      {editMode ? (
                        <Autocomplete
                          value={userData.state || null}
                          onChange={(event, newValue) => {
                            setUserData(prev => ({
                              ...prev,
                              state: newValue || '',
                              city: ''
                            }));
                          }}
                          options={Object.keys(STATES)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              placeholder="Select state"
                            />
                          )}
                        />
                      ) : (
                        renderTextValue(userData.state, 'Not set')
                      )}
                    </FieldBlock>
                  </Grid>
                  {userData.userType === 'provider' && (
                    <Grid item xs={12} md={8}>
                      <FieldBlock label="Company Name">
                        {editMode ? (
                          <TextField
                            name="companyName"
                            value={userData.companyName}
                            onChange={handleChange}
                            size="small"
                            fullWidth
                          />
                        ) : (
                          renderTextValue(userData.companyName, 'Not added')
                        )}
                      </FieldBlock>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <FieldBlock label="About">
                      {editMode ? (
                        <TextField
                          name="about"
                          value={userData.about}
                          onChange={handleChange}
                          multiline
                          rows={4}
                          fullWidth
                        />
                      ) : (
                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                          {userData.about || 'No bio added yet.'}
                        </Typography>
                      )}
                    </FieldBlock>
                  </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3 }}>
            <CardHeader title="Contact & Bio" />
            <Divider />
            <CardContent>
              <InfoRow icon={Email} label="Email" value={userData.email} />
              <InfoRow icon={Phone} label="Phone" value={userData.phone} />
              <InfoRow icon={LocationOn} label="Location" value={locationText} />
              {userData.userType === 'provider' && (
                <InfoRow icon={Business} label="Company" value={userData.companyName} />
              )}
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom>About</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {userData.about || 'Tell people more about yourself by adding a short bio.'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;