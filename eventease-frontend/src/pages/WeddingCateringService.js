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
  Favorite,
  FavoriteBorder,
  Email,
  Phone,
  Language,
  Restaurant,
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

const WeddingCateringService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 4,
    name: 'Wedding Catering',
    category: 'catering',
    description: 'Exquisite wedding catering services offering a wide range of cuisines to make your special day memorable. From traditional Indian feasts to international delicacies, our caterers provide exceptional food quality and service.',
    rating: 4.0,
    reviewCount: 156,
    location: 'Pan India',
    price: '₹3,45,000',
    featured: true,
    deliveryTime: 'Custom planning required',
  };

  const providers = [
    {
      id: 401, name: 'Sri Sai Catering', rating: 4.2, reviewCount: 189, location: 'Mumbai, Maharashtra', price: 345000,
      email: 'hello@srisaicatering.com', phone: '+91 98765 43510', website: 'www.srisaicatering.com', featured: true
    },
    {
      id: 402, name: 'Laxmi Catering Services', rating: 4.3, reviewCount: 234, location: 'Delhi, NCR', price: 420000,
      email: 'services@laxmicatering.com', phone: '+91 98765 43511', website: 'www.laxmicatering.com', featured: true
    },
    {
      id: 403, name: 'Modern Feast Caterers', rating: 4.1, reviewCount: 156, location: 'Bangalore, Karnataka', price: 380000,
      email: 'caterers@modernfeast.com', phone: '+91 98765 43512', website: 'www.modernfeast.com', featured: false
    },
    {
      id: 404, name: 'Balaji Catering', rating: 4.4, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 395000,
      email: 'services@balajicatering.com', phone: '+91 98765 43513', website: 'www.balajicatering.com', featured: true
    },
    {
      id: 405, name: 'Elite Dining Solutions', rating: 4.0, reviewCount: 134, location: 'Hyderabad, Telangana', price: 360000,
      email: 'solutions@elitedining.com', phone: '+91 98765 43514', website: 'www.elitedining.com', featured: false
    },
    {
      id: 406, name: 'Ganesh Caterers', rating: 4.3, reviewCount: 198, location: 'Kolkata, West Bengal', price: 410000,
      email: 'caterers@ganeshcatering.com', phone: '+91 98765 43515', website: 'www.ganeshcatering.com', featured: true
    },
    {
      id: 407, name: 'Contemporary Cuisine Co.', rating: 4.1, reviewCount: 167, location: 'Pune, Maharashtra', price: 480000,
      email: 'info@contemporarycuisine.com', phone: '+91 98765 43516', website: 'www.contemporarycuisine.com', featured: false
    },
    {
      id: 408, name: 'Venkateshwara Catering', rating: 4.5, reviewCount: 312, location: 'Jaipur, Rajasthan', price: 1250000,
      email: 'catering@venkateshwara.com', phone: '+91 98765 43517', website: 'www.venkateshwaracatering.com', featured: true
    },
    {
      id: 409, name: 'Gourmet Wedding Feasts', rating: 4.2, reviewCount: 145, location: 'Goa', price: 850000,
      email: 'feasts@gourmetwedding.com', phone: '+91 98765 43518', website: 'www.gourmetwedding.com', featured: false
    },
    {
      id: 410, name: 'Saraswati Caterers', rating: 4.3, reviewCount: 223, location: 'Ahmedabad, Gujarat', price: 370000,
      email: 'caterers@saraswati.com', phone: '+91 98765 43519', website: 'www.saraswaticaterers.com', featured: true
    },
    {
      id: 411, name: 'Premium Plates Catering', rating: 4.1, reviewCount: 178, location: 'Chandigarh', price: 520000,
      email: 'catering@premiumplates.com', phone: '+91 98765 43520', website: 'www.premiumplates.com', featured: false
    },
    {
      id: 412, name: 'Hanuman Catering Services', rating: 4.0, reviewCount: 156, location: 'Lucknow, Uttar Pradesh', price: 420000,
      email: 'services@hanumancatering.com', phone: '+91 98765 43521', website: 'www.hanumancatering.com', featured: false
    },
    {
      id: 413, name: 'Luxury Catering Concepts', rating: 4.4, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 2200000,
      email: 'concepts@luxurycatering.com', phone: '+91 98765 43522', website: 'www.luxurycatering.com', featured: true
    },
    {
      id: 414, name: 'Durga Catering', rating: 4.2, reviewCount: 189, location: 'Kerala', price: 380000,
      email: 'catering@durgacatering.com', phone: '+91 98765 43523', website: 'www.durgacatering.com', featured: false
    },
    {
      id: 415, name: 'Global Fusion Caterers', rating: 4.3, reviewCount: 234, location: 'Delhi, NCR', price: 950000,
      email: 'caterers@globalfusion.com', phone: '+91 98765 43524', website: 'www.globalfusion.com', featured: true
    },
    {
      id: 416, name: 'Shiv Shakti Catering', rating: 4.5, reviewCount: 298, location: 'Varanasi, Uttar Pradesh', price: 480000,
      email: 'catering@shivshakti.com', phone: '+91 98765 43525', website: 'www.shivshakticatering.com', featured: false
    },
    {
      id: 417, name: 'Artisan Food Creations', rating: 4.1, reviewCount: 167, location: 'Shimla, Himachal', price: 680000,
      email: 'creations@artisanfood.com', phone: '+91 98765 43526', website: 'www.artisanfood.com', featured: false
    },
    {
      id: 418, name: 'Krishna Catering Services', rating: 4.4, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 850000,
      email: 'services@krishnacatering.com', phone: '+91 98765 43527', website: 'www.krishnacatering.com', featured: true
    },
    {
      id: 419, name: 'Modern Traditional Mix', rating: 4.2, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 550000,
      email: 'info@moderntraditional.com', phone: '+91 98765 43528', website: 'www.moderntraditional.com', featured: false
    },
    {
      id: 420, name: 'Radha Krishna Caterers', rating: 4.5, reviewCount: 312, location: 'Bangalore, Karnataka', price: 720000,
      email: 'caterers@radhakrishna.com', phone: '+91 98765 43529', website: 'www.radhakrishnacaterers.com', featured: true
    },
    {
      id: 421, name: 'Epicurean Delights', rating: 4.3, reviewCount: 234, location: 'Hyderabad, Telangana', price: 1200000,
      email: 'delights@epicurean.com', phone: '+91 98765 43530', website: 'www.epicureandelights.com', featured: false
    },
    {
      id: 422, name: 'Sai Baba Catering', rating: 4.4, reviewCount: 289, location: 'Kolkata, West Bengal', price: 460000,
      email: 'catering@saibaba.com', phone: '+91 98765 43531', website: 'www.saibabacatering.com', featured: true
    },
    {
      id: 423, name: 'Culinary Masters Inc.', rating: 4.2, reviewCount: 156, location: 'Pune, Maharashtra', price: 1500000,
      email: 'info@culinarymasters.com', phone: '+91 98765 43532', website: 'www.culinarymasters.com', featured: false
    },
    {
      id: 424, name: 'Shree Catering Services', rating: 4.3, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 410000,
      email: 'services@shreecatering.com', phone: '+91 98765 43533', website: 'www.shreecatering.com', featured: true
    },
    {
      id: 425, name: 'Five Star Wedding Feasts', rating: 4.5, reviewCount: 278, location: 'Delhi, NCR', price: 2800000,
      email: 'feasts@fivestarwedding.com', phone: '+91 98765 43534', website: 'www.fivestarwedding.com', featured: true
    },
    {
      id: 426, name: 'Om Catering', rating: 4.4, reviewCount: 245, location: 'Mysore, Karnataka', price: 390000,
      email: 'catering@omcatering.com', phone: '+91 98765 43535', website: 'www.omcatering.com', featured: true
    },
    {
      id: 427, name: 'Royal Banquet Services', rating: 4.6, reviewCount: 312, location: 'Goa', price: 3500000,
      email: 'services@royalbanquet.com', phone: '+91 98765 43536', website: 'www.royalbanquet.com', featured: true
    },
    {
      id: 428, name: 'Gayatri Caterers', rating: 4.3, reviewCount: 167, location: 'Chandigarh', price: 420000,
      email: 'caterers@gayatri.com', phone: '+91 98765 43537', website: 'www.gayatricaterers.com', featured: false
    },
    {
      id: 429, name: 'Platinum Plate Catering', rating: 4.7, reviewCount: 289, location: 'Lucknow, Uttar Pradesh', price: 4200000,
      email: 'catering@platinumplate.com', phone: '+91 98765 43538', website: 'www.platinumplate.com', featured: true
    },
    {
      id: 430, name: 'Santoshi Maa Catering', rating: 4.2, reviewCount: 223, location: 'Amritsar, Punjab', price: 380000,
      email: 'catering@santoshimaa.com', phone: '+91 98765 43539', website: 'www.santoshimaacatering.com', featured: false
    },
    {
      id: 431, name: 'Executive Chef Services', rating: 4.5, reviewCount: 267, location: 'Bhopal, Madhya Pradesh', price: 1800000,
      email: 'services@executivechef.com', phone: '+91 98765 43540', website: 'www.executivechef.com', featured: true
    },
    {
      id: 432, name: 'Mahalaxmi Catering', rating: 4.3, reviewCount: 234, location: 'Indore, Madhya Pradesh', price: 450000,
      email: 'catering@mahalaxmi.com', phone: '+91 98765 43541', website: 'www.mahalaxmicatering.com', featured: true
    },
    {
      id: 433, name: 'Grandeur Catering Co.', rating: 4.8, reviewCount: 312, location: 'Jodhpur, Rajasthan', price: 4800000,
      email: 'info@grandeurcatering.com', phone: '+91 98765 43542', website: 'www.grandeurcatering.com', featured: true
    },
    {
      id: 434, name: 'Annapurna Caterers', rating: 4.4, reviewCount: 189, location: 'Kochi, Kerala', price: 420000,
      email: 'caterers@annapurna.com', phone: '+91 98765 43543', website: 'www.annapurnacaterers.com', featured: false
    },
    {
      id: 435, name: 'Signature Events Catering', rating: 4.6, reviewCount: 278, location: 'Nagpur, Maharashtra', price: 2200000,
      email: 'catering@signatureevents.com', phone: '+91 98765 43544', website: 'www.signatureevents.com', featured: true
    },
    {
      id: 436, name: 'Bhagya Lakshmi Catering', rating: 4.3, reviewCount: 156, location: 'Surat, Gujarat', price: 395000,
      email: 'catering@bhagyalakshmi.com', phone: '+91 98765 43545', website: 'www.bhagyalakshmi.com', featured: false
    },
    {
      id: 437, name: 'Elite Wedding Cuisine', rating: 4.7, reviewCount: 345, location: 'Visakhapatnam, Andhra', price: 3200000,
      email: 'cuisine@elitewedding.com', phone: '+91 98765 43546', website: 'www.elitewedding.com', featured: true
    },
    {
      id: 438, name: 'Shubh Catering Services', rating: 4.2, reviewCount: 234, location: 'Patna, Bihar', price: 410000,
      email: 'services@shubhcatering.com', phone: '+91 98765 43547', website: 'www.shubhcatering.com', featured: true
    },
    {
      id: 439, name: 'Master Chef Catering', rating: 4.9, reviewCount: 412, location: 'Guwahati, Assam', price: 5000000,
      email: 'catering@masterchef.com', phone: '+91 98765 43548', website: 'www.masterchefcatering.com', featured: true
    },
    {
      id: 440, name: 'Mata Rani Caterers', rating: 4.3, reviewCount: 178, location: 'Bhubaneswar, Odisha', price: 380000,
      email: 'caterers@matarani.com', phone: '+91 98765 43549', website: 'www.matarani.com', featured: false
    },
    {
      id: 441, name: 'Premium Wedding Feasts', rating: 4.8, reviewCount: 289, location: 'Dehradun, Uttarakhand', price: 3800000,
      email: 'feasts@premiumwedding.com', phone: '+91 98765 43550', website: 'www.premiumwedding.com', featured: true
    },
    {
      id: 442, name: 'Jai Hanuman Catering', rating: 4.4, reviewCount: 223, location: 'Udaipur, Rajasthan', price: 420000,
      email: 'catering@jaihanuman.com', phone: '+91 98765 43551', website: 'www.jaihanumancatering.com', featured: true
    },
    {
      id: 443, name: 'Gourmet Excellence', rating: 4.7, reviewCount: 367, location: 'Mumbai, Maharashtra', price: 4200000,
      email: 'excellence@gourmet.com', phone: '+91 98765 43552', website: 'www.gourmetexcellence.com', featured: true
    },
    {
      id: 444, name: 'Shri Catering Services', rating: 4.3, reviewCount: 245, location: 'Delhi, NCR', price: 450000,
      email: 'services@shricatering.com', phone: '+91 98765 43553', website: 'www.shricatering.com', featured: false
    },
    {
      id: 445, name: 'Royal Wedding Caterers', rating: 4.9, reviewCount: 456, location: 'Bangalore, Karnataka', price: 4500000,
      email: 'caterers@royalwedding.com', phone: '+91 98765 43554', website: 'www.royalweddingcaterers.com', featured: true
    },
    {
      id: 446, name: 'Divine Taste Catering', rating: 4.5, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 850000,
      email: 'catering@divinetaste.com', phone: '+91 98765 43555', website: 'www.divinetaste.com', featured: true
    },
    {
      id: 447, name: 'Luxury Dining Experience', rating: 4.8, reviewCount: 334, location: 'Kolkata, West Bengal', price: 3800000,
      email: 'experience@luxurydining.com', phone: '+91 98765 43556', website: 'www.luxurydining.com', featured: true
    },
    {
      id: 448, name: 'Shubham Catering', rating: 4.4, reviewCount: 267, location: 'Hyderabad, Telangana', price: 420000,
      email: 'catering@shubham.com', phone: '+91 98765 43557', website: 'www.shubhamcatering.com', featured: false
    },
    {
      id: 449, name: 'Grand Wedding Feasts', rating: 4.9, reviewCount: 423, location: 'Pune, Maharashtra', price: 4800000,
      email: 'feasts@grandwedding.com', phone: '+91 98765 43558', website: 'www.grandwedding.com', featured: true
    },
    {
      id: 450, name: 'Maha Laxmi Caterers', rating: 4.5, reviewCount: 312, location: 'Jaipur, Rajasthan', price: 950000,
      email: 'caterers@mahalaxmi.com', phone: '+91 98765 43559', website: 'www.mahalaxmicaterers.com', featured: true
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
            <Tab label="Service Providers" icon={<Restaurant />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Available Wedding Caterers
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
                      height: '320px',
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
                        label="Wedding Catering" 
                        size="small" 
                        variant="outlined"
                        sx={{ mb: 2, alignSelf: 'flex-start' }}
                      />

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

export default WeddingCateringService;