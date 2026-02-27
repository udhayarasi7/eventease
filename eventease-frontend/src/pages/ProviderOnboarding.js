import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Paper,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Chip,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  Add,
  Delete,
  Business,
  LocationOn,
  Phone,
  Email,
  Language,
  Description,
} from '@mui/icons-material';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const SERVICE_CATEGORIES = [
  { value: 'photography', label: 'Wedding Photography' },
  { value: 'videography', label: 'Event Videography' },
  { value: 'catering', label: 'Wedding Catering' },
  { value: 'corporate-catering', label: 'Corporate Catering' },
  { value: 'south-indian', label: 'South Indian Specialists' },
  { value: 'decorations', label: 'Wedding Decorations' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'planning', label: 'Wedding Planning' },
  { value: 'venue', label: 'Venue' },
  { value: 'makeup', label: 'Makeup & Styling' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'music', label: 'Music & DJ' },
];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
  'Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    category: '',
    description: '',
    price: '',
    
    // Shop Address
    shopStreet: '',
    shopCity: '',
    shopState: '',
    shopCountry: 'India',
    shopPincode: '',
    
    // Contact Info
    email: '',
    phone: '',
    website: '',
    
    // Certificates
    certificates: [],
    
    // Certificate form (for adding new)
    certificateName: '',
    certificateUrl: '',
  });

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
    setFormData(prev => ({
      ...prev,
      email: storedUser.email || '',
      name: storedUser.companyName || `${storedUser.firstName} ${storedUser.lastName}` || '',
    }));
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCertificate = () => {
    if (!formData.certificateName || !formData.certificateUrl) {
      setError('Please fill in certificate name and URL');
      return;
    }

    setFormData(prev => ({
      ...prev,
      certificates: [...prev.certificates, {
        name: prev.certificateName,
        url: prev.certificateUrl,
      }],
      certificateName: '',
      certificateUrl: '',
    }));
  };

  const handleRemoveCertificate = (index) => {
    setFormData(prev => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.name || !formData.category || !formData.shopCity || !formData.shopState) {
      setError('Please fill in all required fields (Name, Category, City, State)');
      setLoading(false);
      return;
    }

    if (!formData.email && !formData.phone) {
      setError('Please provide at least email or phone number');
      setLoading(false);
      return;
    }

    try {
      const vendorData = {
        userId: user._id || user.id,
        name: formData.name,
        category: formData.category,
        description: formData.description,
        price: formData.price ? parseFloat(formData.price) : null,
        shopAddress: {
          street: formData.shopStreet,
          city: formData.shopCity,
          state: formData.shopState,
          country: formData.shopCountry,
          pincode: formData.shopPincode,
        },
        location: {
          city: formData.shopCity,
          state: formData.shopState,
          country: formData.shopCountry,
        },
        contact: {
          email: formData.email || user.email,
          phone: formData.phone,
          website: formData.website,
        },
        certificates: formData.certificates,
        isApproved: false, // Admin approval pending
      };

      const response = await axios.post(`${API_URL}/api/vendors/register`, vendorData);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/provider/dashboard');
      }, 2000);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Failed to register vendor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Business sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Complete Your Provider Profile
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Fill in your business details to start offering services on EventEase
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Profile submitted successfully! Your vendor profile is pending approval.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {/* Basic Information Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business /> Basic Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Business/Service Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  helperText="This will be displayed as your vendor name"
                  sx={{ mb: 1 }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Service Category *</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="Service Category *"
                    displayEmpty
                    sx={{ mb: 1 }}
                  >
                    <MenuItem value="" disabled>
                      <em>Select your service category</em>
                    </MenuItem>
                    {SERVICE_CATEGORIES.map((cat) => (
                      <MenuItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5, mb: 1 }}>
                    Choose the category that best matches your service. This determines where your vendor profile appears.
                  </Typography>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Starting Price (₹)"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  InputProps={{ startAdornment: '₹' }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your services, experience, and what makes you unique..."
                />
              </Grid>
            </Grid>
          </Box>

          {/* Shop Address Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn /> Shop Address
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="shopStreet"
                  value={formData.shopStreet}
                  onChange={handleChange}
                  placeholder="Building number, street name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City *"
                  name="shopCity"
                  value={formData.shopCity}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>State *</InputLabel>
                  <Select
                    name="shopState"
                    value={formData.shopState}
                    onChange={handleChange}
                    label="State *"
                  >
                    {INDIAN_STATES.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="shopPincode"
                  value={formData.shopPincode}
                  onChange={handleChange}
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="shopCountry"
                  value={formData.shopCountry}
                  onChange={handleChange}
                  disabled
                />
              </Grid>
            </Grid>
          </Box>

          {/* Contact Information Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone /> Contact Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{ startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} /> }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{ startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} /> }}
                  helperText="At least email or phone is required"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.example.com"
                  InputProps={{ startAdornment: <Language sx={{ mr: 1, color: 'text.secondary' }} /> }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Certificates Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Description /> Certificates & Qualifications
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {formData.certificates.length > 0 && (
              <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.certificates.map((cert, index) => (
                  <Chip
                    key={index}
                    label={cert.name}
                    onDelete={() => handleRemoveCertificate(index)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            )}

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullWidth
                  label="Certificate Name"
                  name="certificateName"
                  value={formData.certificateName}
                  onChange={handleChange}
                  placeholder="e.g., ISO Certification"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullWidth
                  label="Certificate URL"
                  name="certificateUrl"
                  value={formData.certificateUrl}
                  onChange={handleChange}
                  placeholder="Link to certificate document"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={handleAddCertificate}
                  sx={{ height: '56px' }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              Note: You can add links to your certificates. Later, you can upload files directly.
            </Typography>
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/home')}
              disabled={loading}
            >
              Skip for Now
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading || success}
              sx={{ minWidth: 150 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit Profile'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProviderOnboarding;

