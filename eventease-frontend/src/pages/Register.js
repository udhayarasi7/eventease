import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
  Alert,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Paper,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Business,
} from '@mui/icons-material';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user', // 'user' or 'provider'
    companyName: '', // Only for providers
    // Optional user fields
    phone: '',
    age: '',
    city: '',
    state: '',
    pincode: '',
    about: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const preferredUserType = localStorage.getItem('preferredUserType');
    if (preferredUserType === 'provider') {
      setFormData(prev => ({ ...prev, userType: 'provider' }));
      localStorage.removeItem('preferredUserType');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.userType === 'provider' && !formData.companyName) {
      setError('Company name is required for service providers');
      return;
    }
    
    if (!agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    try {
      // Send registration data to backend
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      setError('');
      
      // Save user data to localStorage
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      // If provider, redirect to onboarding page
      if (formData.userType === 'provider') {
        navigate('/provider/onboarding');
      } else {
        // If user, redirect to login
        alert('Registration successful! Please login.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ 
        p: 4, 
        boxShadow: 3, 
        borderRadius: 2, 
        backgroundColor: 'background.paper' 
      }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Create Your Account
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Join EventEase to {formData.userType === 'user' ? 'plan your perfect events' : 'offer your services'}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {/* User Type Selection */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <FormLabel component="legend" sx={{ mb: 2, fontWeight: 'bold' }}>
              I am signing up as:
            </FormLabel>
            <RadioGroup
              row
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              sx={{ justifyContent: 'center', gap: 2 }}
            >
              <Paper 
                elevation={formData.userType === 'user' ? 3 : 1}
                sx={{ 
                  p: 2, 
                  borderRadius: 2, 
                  border: formData.userType === 'user' ? '2px solid' : '1px solid',
                  borderColor: formData.userType === 'user' ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  flex: 1,
                  maxWidth: 200,
                  textAlign: 'center',
                  transition: 'all 0.2s',
                }}
                onClick={() => setFormData({...formData, userType: 'user'})}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Person sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                      <Typography variant="body1" fontWeight="medium">
                        User
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Looking for services
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0 }}
                />
              </Paper>
              
              <Paper 
                elevation={formData.userType === 'provider' ? 3 : 1}
                sx={{ 
                  p: 2, 
                  borderRadius: 2, 
                  border: formData.userType === 'provider' ? '2px solid' : '1px solid',
                  borderColor: formData.userType === 'provider' ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  flex: 1,
                  maxWidth: 200,
                  textAlign: 'center',
                  transition: 'all 0.2s',
                }}
                onClick={() => setFormData({...formData, userType: 'provider'})}
              >
                <FormControlLabel
                  value="provider"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Business sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                      <Typography variant="body1" fontWeight="medium">
                        Provider
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Offering services
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0 }}
                />
              </Paper>
            </RadioGroup>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Box>

          {formData.userType === 'provider' && (
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              margin="normal"
              required
            />
          )}

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
          />

          {/* Additional optional fields for users */}
          {formData.userType === 'user' && (
            <>
              <Divider sx={{ my: 3 }}>Additional Information (Optional)</Divider>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                  helperText="Optional"
                />
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  margin="normal"
                  helperText="Optional"
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  margin="normal"
                  helperText="Optional"
                />
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  margin="normal"
                  helperText="Optional"
                />
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  margin="normal"
                  helperText="Optional"
                />
              </Box>

              <TextField
                fullWidth
                label="About Me"
                name="about"
                multiline
                rows={3}
                value={formData.about}
                onChange={handleChange}
                margin="normal"
                helperText="Optional - Tell us about yourself"
                placeholder="Share a bit about yourself..."
              />
            </>
          )}

          <FormControlLabel
            control={
              <Checkbox 
                checked={agreeToTerms} 
                onChange={(e) => setAgreeToTerms(e.target.checked)} 
                color="primary" 
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{' '}
                <Link to="/terms" style={{ color: '#7c3aed' }}>
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" style={{ color: '#7c3aed' }}>
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ mt: 2, mb: 3 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mb: 3 }}
          >
            Create {formData.userType === 'provider' ? 'Provider' : 'User'} Account
          </Button>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Link to="/login" style={{ 
                textDecoration: 'none', 
                color: '#7c3aed',
                fontWeight: 'bold'
              }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
