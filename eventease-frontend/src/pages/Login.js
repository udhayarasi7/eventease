import React, { useState } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from '@mui/icons-material';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'user', // 'user' or 'provider'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Call backend login API
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const loggedInUser = response.data.user;

      // Check if userType matches login selection
      if (loggedInUser.userType !== formData.userType) {
        setError(`This email is registered as a ${loggedInUser.userType}. Please login as ${loggedInUser.userType === 'provider' ? 'Provider' : 'User'}.`);
        return;
      }

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setError('');

      // Redirect based on userType
      if (loggedInUser.userType === 'provider') {
        navigate('/provider/dashboard');
      } else {
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ 
        p: 4, 
        boxShadow: 3, 
        borderRadius: 2, 
        backgroundColor: 'background.paper' 
      }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Welcome Back
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Sign in to your EventEase {formData.userType === 'provider' ? 'Provider' : 'User'} Account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>I am a</InputLabel>
            <Select
              name="userType"
              value={formData.userType}
              label="I am a"
              onChange={handleChange}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="provider">Service Provider</MenuItem>
            </Select>
          </FormControl>

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
          
          <Box sx={{ textAlign: 'right', mt: 1, mb: 3 }}>
            <Link to="/forgot-password" style={{ 
              textDecoration: 'none', 
              color: '#7c3aed',
              fontSize: '0.875rem'
            }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mb: 3 }}
          >
            Sign In as {formData.userType === 'provider' ? 'Provider' : 'User'}
          </Button>

          <Divider sx={{ my: 3 }}>or continue with</Divider>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{ py: 1.5 }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Facebook />}
              sx={{ py: 1.5 }}
            >
              Facebook
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link to="/register" style={{ 
                textDecoration: 'none', 
                color: '#7c3aed',
                fontWeight: 'bold'
              }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
