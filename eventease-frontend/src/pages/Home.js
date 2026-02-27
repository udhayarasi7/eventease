import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Search as SearchIcon,
  EventAvailable as CalendarIcon,
  Chat as MessageIcon,
  Star as StarIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Find Verified Providers",
      description: "Browse through a curated list of trusted service providers with detailed profiles and customer reviews."
    },
    {
      icon: <CalendarIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Real-time Availability",
      description: "Check real-time availability and instantly book your preferred vendors without any back-and-forth."
    },
    {
      icon: <MessageIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Integrated Chat System",
      description: "Communicate directly with service providers through our secure in-platform messaging system."
    },
    {
      icon: <StarIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Review & Rating System",
      description: "Share your experiences and read authentic reviews to make informed decisions."
    },
    {
      icon: <UpdateIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "More Updates Coming Soon",
      description: "We're constantly working on new features to make your event planning experience even better!"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant={isMobile ? 'h3' : 'h2'} fontWeight="bold" gutterBottom>
              Simplify Your Event Planning
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              EventEase is the all-in-one platform that connects you with verified service providers, making ceremonial planning seamless and stress-free.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  '&:hover': { 
                    borderColor: 'white',
                    bgcolor: 'white',
                    color: 'primary.main'
                  }
                }}
              >
                Browse Services
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Why Choose EventEase?
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Our platform offers everything you need to plan your perfect event without the stress
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {features.map((feature, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                <Card 
                  sx={{ 
                    width: '100%',
                    maxWidth: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s', 
                    '&:hover': { 
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                    m: 'auto',
                    // Special styling for the "Coming Soon" card
                    ...(index === 4 && {
                      border: `2px dashed ${theme.palette.primary.main}`,
                      background: 'transparent',
                      '&:hover': {
                        background: 'rgba(124, 58, 237, 0.05)',
                        transform: 'translateY(-8px) scale(1.02)',
                      }
                    })
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      alignItems: 'center',
                      textAlign: 'center',
                      // Special styling for the "Coming Soon" card content
                      ...(index === 4 && {
                        color: theme.palette.primary.dark,
                      })
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      fontWeight="bold" 
                      gutterBottom 
                      sx={{ 
                        mb: 2,
                        // Special styling for the "Coming Soon" card title
                        ...(index === 4 && {
                          color: theme.palette.primary.main,
                        })
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        flexGrow: 1,
                        // Special styling for the "Coming Soon" card description
                        ...(index === 4 && {
                          color: theme.palette.text.secondary,
                          fontStyle: 'italic',
                        })
                      }}
                    >
                      {feature.description}
                    </Typography>
                    
                    {/* Add a "Coming Soon" badge for the fifth card */}
                    {index === 4 && (
                      <Box
                        sx={{
                          mt: 2,
                          px: 2,
                          py: 0.5,
                          backgroundColor: theme.palette.primary.light,
                          color: 'white',
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                        }}
                      >
                        COMING SOON
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;