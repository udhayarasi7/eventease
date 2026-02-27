import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
  Chip,
  Paper,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  alpha,
  IconButton,
  Pagination,
} from '@mui/material';
import {
  ArrowBack,
  LocationOn,
  Star,
  LocalFlorist,
  Favorite,
  FavoriteBorder,
  Email,
  Phone,
  Language,
  Palette,
  Celebration,
} from '@mui/icons-material';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`service-tabpanel-${index}`}
      aria-labelledby={`service-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const StageDecorationsService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 9,
    name: 'Stage Decorations',
    category: 'decoration',
    description: 'Professional stage decoration services for weddings, corporate events, and celebrations. Create stunning backdrops, thematic stages, and elegant setups with premium materials and creative designs.',
    rating: 4.6,
    reviewCount: 98,
    location: 'Pan India',
    price: '₹25,000',
    featured: false,
    deliveryTime: '2-3 days setup',
  };

  const providers = [
    // Premium Stage Designers
    {
      id: 901, name: 'Grand Stage Designs', rating: 4.9, reviewCount: 312, location: 'Delhi, NCR', price: 450000,
      email: 'info@grandstage.com', phone: '+91 98765 43210', website: 'www.grandstagedesigns.com', featured: true,
      specialties: ['Wedding Stages', 'LED Backdrops', 'Premium Setup']
    },
    {
      id: 902, name: 'Royal Stage Creators', rating: 4.8, reviewCount: 278, location: 'Mumbai, Maharashtra', price: 380000,
      email: 'royal@stagecreators.com', phone: '+91 98765 43211', website: 'www.royalstagecreators.com', featured: true,
      specialties: ['Royal Themes', 'Traditional Setup', 'Cultural Designs']
    },
    {
      id: 903, name: 'Elegant Stage Solutions', rating: 4.7, reviewCount: 234, location: 'Bangalore, Karnataka', price: 320000,
      email: 'solutions@elegantstage.com', phone: '+91 98765 43212', website: 'www.elegantstages.com', featured: true,
      specialties: ['Modern Stages', 'Minimalist Designs', 'Contemporary Setup']
    },
    {
      id: 904, name: 'Luxury Stage Designs', rating: 4.9, reviewCount: 345, location: 'Chennai, Tamil Nadu', price: 280000,
      email: 'luxury@stagedesigns.com', phone: '+91 98765 43213', website: 'www.luxurystagedesigns.com', featured: true,
      specialties: ['South Indian Style', 'Traditional Themes', 'Cultural Setup']
    },
    {
      id: 905, name: 'Premium Stage Studio', rating: 4.6, reviewCount: 189, location: 'Hyderabad, Telangana', price: 195000,
      email: 'premium@stagestudio.com', phone: '+91 98765 43214', website: 'www.premiumstagestudio.com', featured: false,
      specialties: ['Hyderabadi Style', 'Nizam Themes', 'Traditional Decor']
    },
    {
      id: 906, name: 'Royal Event Stages', rating: 4.8, reviewCount: 267, location: 'Kolkata, West Bengal', price: 210000,
      email: 'royal@eventstages.com', phone: '+91 98765 43215', website: 'www.royaleventstages.com', featured: true,
      specialties: ['Bengali Style', 'Cultural Themes', 'Traditional Setup']
    },

    // Additional Stage Specialists
    {
      id: 907, name: 'Grand Stage Concepts', rating: 4.7, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 185000,
      email: 'concepts@grandstage.com', phone: '+91 98765 43216', website: 'www.grandstageconcepts.com', featured: true,
      specialties: ['Rajasthani Themes', 'Palace Style', 'Traditional Decor']
    },
    {
      id: 908, name: 'Elegant Backdrops', rating: 4.9, reviewCount: 289, location: 'Delhi, NCR', price: 420000,
      email: 'elegant@backdrops.com', phone: '+91 98765 43217', website: 'www.elegantbackdrops.com', featured: true,
      specialties: ['LED Backdrops', 'Floral Stages', 'Premium Designs']
    },
    {
      id: 909, name: 'Luxury Stage Setup', rating: 4.8, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 340000,
      email: 'luxury@stagesetup.com', phone: '+91 98765 43218', website: 'www.luxurystagesetup.com', featured: true,
      specialties: ['Complete Setup', 'Theme Based', 'Custom Designs']
    },
    {
      id: 910, name: 'Traditional Stage Masters', rating: 4.7, reviewCount: 198, location: 'Varanasi, Uttar Pradesh', price: 95000,
      email: 'masters@traditionalstage.com', phone: '+91 98765 43219', website: 'www.traditionalstagemasters.com', featured: false,
      specialties: ['Traditional Setup', 'Religious Events', 'Cultural Themes']
    },
    {
      id: 911, name: 'Premium Stage Designs', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 335000,
      email: 'premium@stagedesigns.com', phone: '+91 98765 43220', website: 'www.premiumstagedesigns.com', featured: true,
      specialties: ['Premium Setup', 'Luxury Stages', 'Event Decor']
    },
    {
      id: 912, name: 'Royal Stage Studio', rating: 4.8, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 390000,
      email: 'royal@stagestudio.com', phone: '+91 98765 43221', website: 'www.royalstagestudio.com', featured: true,
      specialties: ['Palace Style', 'Royal Themes', 'Luxury Stages']
    },
    {
      id: 913, name: 'Elegant Stage Decor', rating: 4.6, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 165000,
      email: 'elegant@stagedecor.com', phone: '+91 98765 43222', website: 'www.elegantstagedecor.com', featured: false,
      specialties: ['South Indian Style', 'Traditional Stages', 'Cultural Setup']
    },
    {
      id: 914, name: 'Grand Stage Solutions', rating: 4.9, reviewCount: 334, location: 'Delhi, NCR', price: 440000,
      email: 'solutions@grandstage.com', phone: '+91 98765 43223', website: 'www.grandstagesolutions.com', featured: true,
      specialties: ['Complete Solutions', 'Theme Based', 'Custom Stages']
    },
    {
      id: 915, name: 'Luxury Stage Stylists', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 360000,
      email: 'luxury@stylists.com', phone: '+91 98765 43224', website: 'www.luxurystagestylists.com', featured: true,
      specialties: ['Styling Services', 'Luxury Stages', 'Premium Setup']
    },
    {
      id: 916, name: 'Royal Stage Designers', rating: 4.8, reviewCount: 289, location: 'Hyderabad, Telangana', price: 205000,
      email: 'royal@stagedesigners.com', phone: '+91 98765 43225', website: 'www.royalstagedesigners.com', featured: true,
      specialties: ['Hyderabadi Style', 'Traditional Stages', 'Cultural Designs']
    },
    {
      id: 917, name: 'Elegant Stage Concepts', rating: 4.6, reviewCount: 201, location: 'Kolkata, West Bengal', price: 155000,
      email: 'elegant@stageconcepts.com', phone: '+91 98765 43226', website: 'www.elegantstageconcepts.com', featured: false,
      specialties: ['Bengali Style', 'Traditional Stages', 'Cultural Setup']
    },
    {
      id: 918, name: 'Grand Stage Studio', rating: 4.9, reviewCount: 345, location: 'Jaipur, Rajasthan', price: 375000,
      email: 'grand@stagestudio.com', phone: '+91 98765 43227', website: 'www.grandstagestudio.com', featured: true,
      specialties: ['Rajasthani Style', 'Palace Stages', 'Traditional Setup']
    },
    {
      id: 919, name: 'Luxury Stage Planners', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 410000,
      email: 'luxury@stageplanners.com', phone: '+91 98765 43228', website: 'www.luxurystageplanners.com', featured: true,
      specialties: ['Complete Planning', 'Theme Based', 'Luxury Setup']
    },
    {
      id: 920, name: 'Royal Stage Designers', rating: 4.7, reviewCount: 234, location: 'Mumbai, Maharashtra', price: 330000,
      email: 'royal@stagedesigners.com', phone: '+91 98765 43229', website: 'www.royalstagedesigners.com', featured: true,
      specialties: ['Event Design', 'Luxury Stages', 'Custom Themes']
    },
    {
      id: 921, name: 'Elegant Stage Decorators', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 325000,
      email: 'elegant@stagedecorators.com', phone: '+91 98765 43230', website: 'www.elegantstagedecorators.com', featured: true,
      specialties: ['Stage Design', 'Theme Based', 'Custom Setup']
    },
    {
      id: 922, name: 'Grand Stage Stylists', rating: 4.8, reviewCount: 267, location: 'Chennai, Tamil Nadu', price: 195000,
      email: 'grand@stylists.com', phone: '+91 98765 43231', website: 'www.grandstagestylists.com', featured: true,
      specialties: ['Styling Services', 'Traditional Stages', 'Cultural Themes']
    },
    {
      id: 923, name: 'Luxury Stage Masters', rating: 4.7, reviewCount: 223, location: 'Hyderabad, Telangana', price: 185000,
      email: 'luxury@stagemasters.com', phone: '+91 98765 43232', website: 'www.luxurystagemasters.com', featured: false,
      specialties: ['Hyderabadi Style', 'Traditional Stages', 'Cultural Setup']
    },
    {
      id: 924, name: 'Royal Stage Concepts', rating: 4.9, reviewCount: 345, location: 'Kolkata, West Bengal', price: 215000,
      email: 'royal@stageconcepts.com', phone: '+91 98765 43233', website: 'www.royalstageconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Stages']
    },
    {
      id: 925, name: 'Elegant Stage Solutions', rating: 4.6, reviewCount: 189, location: 'Jaipur, Rajasthan', price: 175000,
      email: 'elegant@stagesolutions.com', phone: '+91 98765 43234', website: 'www.elegantstagesolutions.com', featured: false,
      specialties: ['Event Solutions', 'Traditional Stages', 'Cultural Themes']
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBookNow = (providerId) => {
    console.log('Booking provider:', providerId);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const scrollToProviders = () => {
    setTabValue(0);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const startIndex = (page - 1) * providersPerPage;
  const currentProviders = providers.slice(startIndex, startIndex + providersPerPage);
  const totalPages = Math.ceil(providers.length / providersPerPage);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 3, color: 'white' }}>
            <Link color="inherit" onClick={() => navigate('/services')} sx={{ cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>
              Services
            </Link>
            <Link color="inherit" onClick={() => navigate('/services?category=decoration')} sx={{ cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>
              Decoration
            </Link>
            <Typography color="primary.light">{service.name}</Typography>
          </Breadcrumbs>

          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/services')}
            sx={{ mb: 3, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'primary.light', color: 'primary.light' } }}
            variant="outlined"
          >
            Back to Services
          </Button>

          <Box sx={{ maxWidth: '800px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip 
                label={service.category} 
                color="primary" 
                size="small" 
                sx={{ color: 'white', backgroundColor: alpha('#1976d2', 0.8) }}
              />
              <Chip 
                label="Professional Setup" 
                color="secondary" 
                size="small" 
                variant="outlined"
                sx={{ color: 'white', borderColor: 'white' }}
              />
            </Box>
            
            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              {service.name}
            </Typography>
            
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'primary.light', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Starting from {service.price}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Rating value={service.rating} precision={0.1} readOnly sx={{ color: 'primary.light' }} />
              <Typography variant="h6" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {service.rating} ({service.reviewCount} reviews)
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <LocationOn sx={{ color: 'primary.light' }} />
              <Typography variant="body1" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Available in {service.location}
              </Typography>
            </Box>

            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              {service.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  minWidth: 160, 
                  height: 48,
                  fontSize: '1.1rem',
                  bgcolor: 'primary.main', 
                  '&:hover': { bgcolor: 'primary.dark' } 
                }}
                onClick={scrollToProviders}
              >
                Book Now
              </Button>
              <IconButton
                onClick={handleWishlistToggle}
                sx={{ 
                  color: 'white',
                  border: '1px solid white',
                  width: 48,
                  height: 48,
                  '&:hover': { 
                    borderColor: 'primary.light', 
                    color: 'primary.light',
                    bgcolor: alpha('#ffffff', 0.1)
                  } 
                }}
              >
                {isWishlisted ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
              <Typography variant="body2" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Paper sx={{ width: '100%', mb: 4 }} id="providers-section">
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Stage Decor Services" icon={<Celebration />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Professional Stage Designers
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Showing {currentProviders.length} of {providers.length} stage decoration services
              </Typography>
            </Box>

            {/* Fixed Grid - 3 cards per row */}
            <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
              {currentProviders.map((provider) => (
                <Grid item xs={4} key={provider.id} sx={{ width: '32%', flexBasis: '32%', maxWidth: '32%' }}>
                  <Card 
                    sx={{ 
                      height: '340px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      border: provider.featured ? '2px solid' : '1px solid',
                      borderColor: provider.featured ? 'primary.main' : 'divider',
                      '&:hover': { 
                        transform: 'translateY(-4px)', 
                        boxShadow: 4 
                      } 
                    }}
                  >
                    <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      {/* Featured Badge */}
                      {provider.featured && (
                        <Chip 
                          label="Featured" 
                          color="primary" 
                          size="small" 
                          sx={{ mb: 1, alignSelf: 'flex-start' }}
                        />
                      )}

                      {/* Provider Name and Price */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ flex: 1, mr: 1, fontSize: '1.1rem' }}>
                          {provider.name}
                        </Typography>
                        <Typography variant="h6" color="primary" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>
                          {formatPrice(provider.price)}
                        </Typography>
                      </Box>

                      {/* Category */}
                      <Chip 
                        label="Stage Decorations" 
                        size="small" 
                        variant="outlined"
                        sx={{ mb: 1, alignSelf: 'flex-start' }}
                      />

                      {/* Specialties */}
                      <Box sx={{ mb: 1 }}>
                        {provider.specialties.slice(0, 2).map((specialty, index) => (
                          <Chip 
                            key={index}
                            label={specialty} 
                            size="small" 
                            variant="filled"
                            color="secondary"
                            sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem', height: 20 }}
                          />
                        ))}
                      </Box>

                      {/* Location */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {provider.location}
                        </Typography>
                      </Box>

                      {/* Rating */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Rating value={provider.rating} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {provider.rating} ({provider.reviewCount} reviews)
                        </Typography>
                      </Box>

                      {/* Contact Information */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                          <Email sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography variant="body2" fontSize="0.75rem" noWrap>
                            {provider.email}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                          <Phone sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography variant="body2" fontSize="0.75rem">
                            {provider.phone}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Language sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography variant="body2" fontSize="0.75rem" noWrap>
                            {provider.website}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Book Now Button */}
                      <Button 
                        variant="contained" 
                        fullWidth
                        onClick={() => handleBookNow(provider.id)}
                        sx={{ 
                          mt: 'auto',
                          height: 36,
                          fontSize: '0.9rem',
                          fontWeight: 'bold'
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          </TabPanel>
        </Paper>
      </Container>
    </Box>
  );
};

export default StageDecorationsService;