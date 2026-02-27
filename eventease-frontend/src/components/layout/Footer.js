import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              EventEase
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              The all-in-one platform for seamless event planning, connecting users with verified service providers.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} to="/services" color="inherit" underline="hover">
                Services
              </MuiLink>
              <MuiLink component={Link} to="/providers" color="inherit" underline="hover">
                Providers
              </MuiLink>
              <MuiLink component={Link} to="/about" color="inherit" underline="hover">
                About Us
              </MuiLink>
              <MuiLink component={Link} to="/contact" color="inherit" underline="hover">
                Contact
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" color="inherit" underline="hover">
                Help Center
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Blog
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                Tutorials
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                FAQs
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Event Street, City
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@eventease.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          &copy; 2023 EventEase. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;