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
  Restaurant,
  Favorite,
  FavoriteBorder,
  Email,
  Phone,
  Language,
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

const SouthIndianSpecialistsService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 6,
    name: 'South Indian Specialists',
    category: 'catering',
    description: 'Authentic South Indian cuisine specialists for traditional ceremonies. Experience the rich flavors of Tamil, Telugu, Kannada, and Malayali culinary traditions with our expert chefs.',
    rating: 4.8,
    reviewCount: 134,
    location: 'South India',
    price: '₹12,000',
    featured: true,
    deliveryTime: '2-5 days',
  };

  const providers = [
    // Premium South Indian Caterers
    {
      id: 601, name: 'Anandha Bhavan Caterers', rating: 4.9, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 150000,
      email: 'info@anandhabhavan.com', phone: '+91 98765 43250', website: 'www.anandhabhavan.com', featured: true,
      specialties: ['Traditional Tamil', 'Chettinad Cuisine', 'Wedding Feasts']
    },
    {
      id: 602, name: 'Saravana Bhavan Elite', rating: 4.8, reviewCount: 345, location: 'Coimbatore, Tamil Nadu', price: 80000,
      email: 'elite@saravana.com', phone: '+91 98765 43251', website: 'www.saravanaelite.com', featured: true,
      specialties: ['Pure Vegetarian', 'Traditional Meals', 'Temple Style']
    },
    {
      id: 603, name: 'A2B Catering Services', rating: 4.7, reviewCount: 289, location: 'Bangalore, Karnataka', price: 140000,
      email: 'catering@a2b.com', phone: '+91 98765 43252', website: 'www.a2bcatering.com', featured: false,
      specialties: ['Andhra Meals', 'Karnataka Special', 'Udupi Style']
    },
    {
      id: 604, name: 'Kerala Spice Masters', rating: 4.9, reviewCount: 234, location: 'Kochi, Kerala', price: 160000,
      email: 'masters@keralaspice.com', phone: '+91 98765 43253', website: 'www.keralaspicemasters.com', featured: true,
      specialties: ['Kerala Sadhya', 'Seafood Special', 'Traditional Onam']
    },
    {
      id: 605, name: 'Andhra Gunpowder', rating: 4.8, reviewCount: 198, location: 'Hyderabad, Telangana', price: 75000,
      email: 'catering@andhragunpowder.com', phone: '+91 98765 43254', website: 'www.andhragunpowder.com', featured: true,
      specialties: ['Andhra Special', 'Spicy Curries', 'Traditional Biryani']
    },
    {
      id: 606, name: 'Mysore Traditional Kitchen', rating: 4.7, reviewCount: 167, location: 'Mysore, Karnataka', price: 190000,
      email: 'kitchen@mysore.com', phone: '+91 98765 43255', website: 'www.mysorekitchen.com', featured: false,
      specialties: ['Mysore Palace Style', 'Traditional Karnataka', 'Festival Meals']
    },

    // Additional South Indian Caterers
    {
      id: 607, name: 'Madurai Meenakshi Caterers', rating: 4.8, reviewCount: 223, location: 'Madurai, Tamil Nadu', price: 145000,
      email: 'catering@meenakshi.com', phone: '+91 98765 43256', website: 'www.maduraicaterers.com', featured: true,
      specialties: ['Temple Cuisine', 'Traditional Tamil', 'Festival Special']
    },
    {
      id: 608, name: 'Coorg Spice Garden', rating: 4.7, reviewCount: 156, location: 'Madikeri, Karnataka', price: 200000,
      email: 'garden@coorg.com', phone: '+91 98765 43257', website: 'www.coorgspice.com', featured: false,
      specialties: ['Coorg Special', 'Pork Curries', 'Traditional Kodava']
    },
    {
      id: 609, name: 'Trivandrum Traditional', rating: 4.9, reviewCount: 267, location: 'Thiruvananthapuram, Kerala', price: 155000,
      email: 'traditional@trivandrum.com', phone: '+91 98765 43258', website: 'www.trivandrumcatering.com', featured: true,
      specialties: ['Kerala Traditional', 'Seafood Feast', 'Onam Special']
    },
    {
      id: 610, name: 'Vizag Coastal Kitchen', rating: 4.8, reviewCount: 189, location: 'Visakhapatnam, Andhra', price: 165000,
      email: 'coastal@vizag.com', phone: '+91 98765 43259', website: 'www.vizagcoastal.com', featured: true,
      specialties: ['Coastal Andhra', 'Seafood Special', 'Traditional Meals']
    },
    {
      id: 611, name: 'Udupi Sri Krishna', rating: 4.7, reviewCount: 312, location: 'Udupi, Karnataka', price: 200000,
      email: 'catering@udupi.com', phone: '+91 98765 43260', website: 'www.udupicatering.com', featured: false,
      specialties: ['Udupi Style', 'Pure Vegetarian', 'Temple Food']
    },
    {
      id: 612, name: 'Chettinad Grand', rating: 4.9, reviewCount: 278, location: 'Karaikudi, Tamil Nadu', price: 250000,
      email: 'grand@chettinad.com', phone: '+91 98765 43261', website: 'www.chettinadgrand.com', featured: true,
      specialties: ['Chettinad Special', 'Non-Vegetarian', 'Traditional Feast']
    },
    {
      id: 613, name: 'Malabar Coast Caterers', rating: 4.8, reviewCount: 234, location: 'Kozhikode, Kerala', price: 175000,
      email: 'coast@malabar.com', phone: '+91 98765 43262', website: 'www.malabarcaterers.com', featured: true,
      specialties: ['Malabar Cuisine', 'Moplah Special', 'Traditional Kerala']
    },
    {
      id: 614, name: 'Bangalore Traditional', rating: 4.7, reviewCount: 289, location: 'Bangalore, Karnataka', price: 140000,
      email: 'traditional@bangalore.com', phone: '+91 98765 43263', website: 'www.bangalorecatering.com', featured: false,
      specialties: ['Karnataka Style', 'Traditional Meals', 'Festival Food']
    },
    {
      id: 615, name: 'Tamil Nadu Spice Route', rating: 4.8, reviewCount: 245, location: 'Salem, Tamil Nadu', price: 135000,
      email: 'route@tnspice.com', phone: '+91 98765 43264', website: 'www.tnspiceroute.com', featured: true,
      specialties: ['Traditional Tamil', 'Kongu Cuisine', 'Regional Special']
    },
    {
      id: 616, name: 'Gods Own Kitchen', rating: 4.9, reviewCount: 312, location: 'Kochi, Kerala', price: 185000,
      email: 'kitchen@godsown.com', phone: '+91 98765 43265', website: 'www.godsownkitchen.com', featured: true,
      specialties: ['Kerala Traditional', 'Christian Cuisine', 'Seafood Special']
    },
    {
      id: 617, name: 'Andhra Traditional', rating: 4.7, reviewCount: 178, location: 'Vijayawada, Andhra', price: 125000,
      email: 'traditional@andhra.com', phone: '+91 98765 43266', website: 'www.andhratrad.com', featured: false,
      specialties: ['Andhra Meals', 'Traditional Curries', 'Regional Special']
    },
    {
      id: 618, name: 'Mangalore Coastal', rating: 4.8, reviewCount: 223, location: 'Mangalore, Karnataka', price: 95000,
      email: 'coastal@mangalore.com', phone: '+91 98765 43267', website: 'www.mangalorecoastal.com', featured: true,
      specialties: ['Coastal Karnataka', 'Seafood Special', 'Traditional Meals']
    },
    {
      id: 619, name: 'Tirupati Balaji Caterers', rating: 4.9, reviewCount: 345, location: 'Tirupati, Andhra', price: 110000,
      email: 'balaji@tirupati.com', phone: '+91 98765 43268', website: 'www.tirupaticaterers.com', featured: false,
      specialties: ['Temple Style', 'Pure Vegetarian', 'Traditional Andhra']
    },
    {
      id: 620, name: 'Karnataka Palace Kitchen', rating: 4.8, reviewCount: 267, location: 'Mysore, Karnataka', price: 220000,
      email: 'palace@karnataka.com', phone: '+91 98765 43269', website: 'www.karnatakapalace.com', featured: true,
      specialties: ['Royal Cuisine', 'Traditional Karnataka', 'Festival Meals']
    },
    {
      id: 621, name: 'Kerala Traditional Feast', rating: 4.7, reviewCount: 189, location: 'Thrissur, Kerala', price: 145000,
      email: 'feast@kerala.com', phone: '+91 98765 43270', website: 'www.keralafeast.com', featured: false,
      specialties: ['Traditional Sadhya', 'Festival Food', 'Regional Special']
    },
    {
      id: 622, name: 'Tamil Wedding Specialists', rating: 4.9, reviewCount: 312, location: 'Chennai, Tamil Nadu', price: 195000,
      email: 'wedding@tamil.com', phone: '+91 98765 43271', website: 'www.tamilwedding.com', featured: true,
      specialties: ['Wedding Feast', 'Traditional Tamil', 'Grand Meals']
    },
    {
      id: 623, name: 'Andhra Spice Kings', rating: 4.8, reviewCount: 234, location: 'Guntur, Andhra', price: 160000,
      email: 'kings@andhra.com', phone: '+91 98765 43272', website: 'www.andhrakings.com', featured: true,
      specialties: ['Spicy Andhra', 'Traditional Curries', 'Regional Special']
    },
    {
      id: 624, name: 'Karnataka Heritage Kitchen', rating: 4.7, reviewCount: 278, location: 'Hampi, Karnataka', price: 1350000,
      email: 'heritage@karnataka.com', phone: '+91 98765 43273', website: 'www.karnatakaheritage.com', featured: false,
      specialties: ['Traditional Karnataka', 'Heritage Recipes', 'Regional Food']
    },
    {
      id: 625, name: 'Kerala Coastal Delight', rating: 4.9, reviewCount: 289, location: 'Alappuzha, Kerala', price: 170000,
      email: 'delight@kerala.com', phone: '+91 98765 43274', website: 'www.keralacoastal.com', featured: true,
      specialties: ['Coastal Kerala', 'Seafood Special', 'Traditional Meals']
    },
    {
      id: 626, name: 'Tamil Traditional Masters', rating: 4.8, reviewCount: 245, location: 'Trichy, Tamil Nadu', price: 140000,
      email: 'masters@tamil.com', phone: '+91 98765 43275', website: 'www.tamilmasters.com', featured: true,
      specialties: ['Traditional Tamil', 'Regional Special', 'Festival Food']
    },
    {
      id: 627, name: 'Andhra Coastal Kitchen', rating: 4.7, reviewCount: 167, location: 'Kakinada, Andhra', price: 150000,
      email: 'coastal@andhra.com', phone: '+91 98765 43276', website: 'www.andhracoastal.com', featured: false,
      specialties: ['Coastal Andhra', 'Seafood Special', 'Traditional Meals']
    },
    {
      id: 628, name: 'Karnataka Spice Route', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 180000,
      email: 'route@karnataka.com', phone: '+91 98765 43277', website: 'www.karnatakaroute.com', featured: true,
      specialties: ['Traditional Karnataka', 'Regional Special', 'Festival Meals']
    },
    {
      id: 629, name: 'Kerala Traditional Kitchen', rating: 4.8, reviewCount: 234, location: 'Kottayam, Kerala', price: 155000,
      email: 'kitchen@kerala.com', phone: '+91 98765 43278', website: 'www.keralakitchen.com', featured: true,
      specialties: ['Traditional Kerala', 'Christian Cuisine', 'Festival Food']
    },
    {
      id: 630, name: 'Tamil Nadu Heritage', rating: 4.7, reviewCount: 189, location: 'Thanjavur, Tamil Nadu', price: 165000,
      email: 'heritage@tamil.com', phone: '+91 98765 43279', website: 'www.tamilheritage.com', featured: false,
      specialties: ['Heritage Tamil', 'Traditional Recipes', 'Regional Special']
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
            <Link color="inherit" onClick={() => navigate('/services?category=catering')} sx={{ cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>
              Catering
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
              {service.featured && (
                <Chip 
                  label="Featured" 
                  color="secondary" 
                  size="small" 
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                />
              )}
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
            <Tab label="Catering Services" icon={<Restaurant />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                South Indian Catering Specialists
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Showing {currentProviders.length} of {providers.length} services
              </Typography>
            </Box>

            {/* Fixed Grid - 3 cards per row, no responsiveness */}
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
                        label="South Indian Catering" 
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

export default SouthIndianSpecialistsService;