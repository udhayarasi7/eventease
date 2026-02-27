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

const FloralArrangementsService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 8,
    name: 'Floral Arrangements',
    category: 'decoration',
    description: 'Beautiful floral arrangements with fresh seasonal flowers. Transform your events with stunning floral designs, from elegant bouquets to grand installations using premium fresh flowers.',
    rating: 4.7,
    reviewCount: 145,
    location: 'Pan India',
    price: '₹15,000',
    featured: false,
    deliveryTime: 'Same day',
  };

  const providers = [
    // Premium Floral Designers
    {
      id: 801, name: 'Bloom & Blossom Florists', rating: 4.9, reviewCount: 278, location: 'Delhi, NCR', price: 250000,
      email: 'hello@bloomblossom.com', phone: '+91 98765 43410', website: 'www.bloomblossom.com', featured: true,
      specialties: ['Wedding Florals', 'Event Decor', 'Premium Flowers']
    },
    {
      id: 802, name: 'Eternal Blooms Studio', rating: 4.8, reviewCount: 234, location: 'Mumbai, Maharashtra', price: 180000,
      email: 'studio@eternalblooms.com', phone: '+91 98765 43411', website: 'www.eternalblooms.com', featured: true,
      specialties: ['Floral Installations', 'Seasonal Arrangements', 'Custom Designs']
    },
    {
      id: 803, name: 'Petals & Posies', rating: 4.7, reviewCount: 189, location: 'Bangalore, Karnataka', price: 120000,
      email: 'info@petalsposies.com', phone: '+91 98765 43412', website: 'www.petalsposies.com', featured: true,
      specialties: ['Garden Style', 'Fresh Florals', 'Rustic Arrangements']
    },
    {
      id: 804, name: 'Royal Flower Designs', rating: 4.9, reviewCount: 312, location: 'Chennai, Tamil Nadu', price: 150000,
      email: 'royal@flowerdesigns.com', phone: '+91 98765 43413', website: 'www.royalflowerdesigns.com', featured: true,
      specialties: ['Traditional Garlands', 'South Indian Style', 'Fresh Flowers']
    },
    {
      id: 805, name: 'Floral Fantasy', rating: 4.6, reviewCount: 156, location: 'Hyderabad, Telangana', price: 95000,
      email: 'fantasy@floral.com', phone: '+91 98765 43414', website: 'www.floralfantasy.com', featured: false,
      specialties: ['Contemporary Designs', 'Mixed Arrangements', 'Modern Style']
    },
    {
      id: 806, name: 'Heavenly Blooms', rating: 4.8, reviewCount: 267, location: 'Kolkata, West Bengal', price: 110000,
      email: 'blooms@heavenly.com', phone: '+91 98765 43415', website: 'www.heavenlyblooms.com', featured: true,
      specialties: ['Bengali Style', 'Traditional Florals', 'Cultural Designs']
    },

    // Additional Floral Specialists
    {
      id: 807, name: 'Rose Garden Florists', rating: 4.7, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 85000,
      email: 'hello@rosegarden.com', phone: '+91 98765 43416', website: 'www.rosegardenflorists.com', featured: true,
      specialties: ['Rose Arrangements', 'Premium Roses', 'Luxury Bouquets']
    },
    {
      id: 808, name: 'Orchid Elegance', rating: 4.9, reviewCount: 289, location: 'Delhi, NCR', price: 220000,
      email: 'elegance@orchid.com', phone: '+91 98765 43417', website: 'www.orchidelegance.com', featured: true,
      specialties: ['Orchid Specialists', 'Exotic Flowers', 'Premium Arrangements']
    },
    {
      id: 809, name: 'Lily Valley Florists', rating: 4.8, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 140000,
      email: 'valley@lily.com', phone: '+91 98765 43418', website: 'www.lilyvalley.com', featured: true,
      specialties: ['Lily Arrangements', 'Fresh Flowers', 'Event Florals']
    },
    {
      id: 810, name: 'Traditional Flower Masters', rating: 4.7, reviewCount: 198, location: 'Varanasi, Uttar Pradesh', price: 45000,
      email: 'masters@traditional.com', phone: '+91 98765 43419', website: 'www.traditionalflowers.com', featured: false,
      specialties: ['Traditional Garlands', 'Religious Events', 'Fresh Flowers']
    },
    {
      id: 811, name: 'Premium Petals', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 135000,
      email: 'premium@petals.com', phone: '+91 98765 43420', website: 'www.premiumpetals.com', featured: true,
      specialties: ['Premium Flowers', 'Luxury Arrangements', 'Event Decor']
    },
    {
      id: 812, name: 'Royal Rose Studio', rating: 4.8, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 190000,
      email: 'royal@rose.com', phone: '+91 98765 43421', website: 'www.royalrose.com', featured: true,
      specialties: ['Rose Specialists', 'Palace Style', 'Luxury Florals']
    },
    {
      id: 813, name: 'Elegant Florals', rating: 4.6, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 65000,
      email: 'elegant@florals.com', phone: '+91 98765 43422', website: 'www.elegantflorals.com', featured: false,
      specialties: ['South Indian Style', 'Traditional Florals', 'Fresh Flowers']
    },
    {
      id: 814, name: 'Grand Floral Concepts', rating: 4.9, reviewCount: 334, location: 'Delhi, NCR', price: 240000,
      email: 'concepts@floral.com', phone: '+91 98765 43423', website: 'www.grandfloral.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 815, name: 'Luxury Bloom Stylists', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 160000,
      email: 'luxury@bloom.com', phone: '+91 98765 43424', website: 'www.luxurybloom.com', featured: true,
      specialties: ['Styling Services', 'Luxury Florals', 'Premium Setup']
    },
    {
      id: 816, name: 'Royal Flower Creators', rating: 4.8, reviewCount: 289, location: 'Hyderabad, Telangana', price: 105000,
      email: 'royal@flowercreators.com', phone: '+91 98765 43425', website: 'www.royalflowercreators.com', featured: true,
      specialties: ['Hyderabadi Style', 'Traditional Florals', 'Cultural Designs']
    },
    {
      id: 817, name: 'Elegant Flower Designs', rating: 4.6, reviewCount: 201, location: 'Kolkata, West Bengal', price: 55000,
      email: 'elegant@flowerdesigns.com', phone: '+91 98765 43426', website: 'www.elegantflowerdesigns.com', featured: false,
      specialties: ['Bengali Style', 'Traditional Florals', 'Cultural Setup']
    },
    {
      id: 818, name: 'Grand Floral Studio', rating: 4.9, reviewCount: 345, location: 'Jaipur, Rajasthan', price: 175000,
      email: 'grand@floralstudio.com', phone: '+91 98765 43427', website: 'www.grandfloralstudio.com', featured: true,
      specialties: ['Rajasthani Style', 'Palace Florals', 'Traditional Arrangements']
    },
    {
      id: 819, name: 'Luxury Flower Planners', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 210000,
      email: 'luxury@flowerplanners.com', phone: '+91 98765 43428', website: 'www.luxuryflowerplanners.com', featured: true,
      specialties: ['Complete Florals', 'Theme Based', 'Luxury Setup']
    },
    {
      id: 820, name: 'Royal Flower Designers', rating: 4.7, reviewCount: 234, location: 'Mumbai, Maharashtra', price: 130000,
      email: 'royal@flowerdesigners.com', phone: '+91 98765 43429', website: 'www.royalflowerdesigners.com', featured: true,
      specialties: ['Event Design', 'Luxury Florals', 'Custom Themes']
    },
    {
      id: 821, name: 'Elegant Bloom Decor', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 125000,
      email: 'elegant@bloom.com', phone: '+91 98765 43430', website: 'www.elegantbloom.com', featured: true,
      specialties: ['Floral Designs', 'Garden Themes', 'Natural Arrangements']
    },
    {
      id: 822, name: 'Grand Flower Stylists', rating: 4.8, reviewCount: 267, location: 'Chennai, Tamil Nadu', price: 95000,
      email: 'grand@stylists.com', phone: '+91 98765 43431', website: 'www.grandstylists.com', featured: true,
      specialties: ['Styling Services', 'Traditional Florals', 'Cultural Themes']
    },
    {
      id: 823, name: 'Luxury Flower Masters', rating: 4.7, reviewCount: 223, location: 'Hyderabad, Telangana', price: 85000,
      email: 'luxury@masters.com', phone: '+91 98765 43432', website: 'www.luxuryflowermasters.com', featured: false,
      specialties: ['Hyderabadi Style', 'Traditional Florals', 'Cultural Setup']
    },
    {
      id: 824, name: 'Royal Bloom Concepts', rating: 4.9, reviewCount: 345, location: 'Kolkata, West Bengal', price: 115000,
      email: 'royal@concepts.com', phone: '+91 98765 43433', website: 'www.royalbloom.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 825, name: 'Elegant Flower Solutions', rating: 4.6, reviewCount: 189, location: 'Jaipur, Rajasthan', price: 75000,
      email: 'elegant@solutions.com', phone: '+91 98765 43434', website: 'www.elegantflowers.com', featured: false,
      specialties: ['Event Solutions', 'Traditional Florals', 'Cultural Themes']
    },
    {
      id: 826, name: 'Grand Floral Designs', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 165000,
      email: 'grand@designs.com', phone: '+91 98765 43435', website: 'www.grandfloraldesigns.com', featured: true,
      specialties: ['Design Services', 'Luxury Florals', 'Custom Themes']
    },
    {
      id: 827, name: 'Luxury Bloom Studio', rating: 4.9, reviewCount: 334, location: 'Mumbai, Maharashtra', price: 195000,
      email: 'luxury@studio.com', phone: '+91 98765 43436', website: 'www.luxurybloomstudio.com', featured: true,
      specialties: ['Studio Services', 'Luxury Florals', 'Premium Setup']
    },
    {
      id: 828, name: 'Royal Petal Designs', rating: 4.7, reviewCount: 245, location: 'Bangalore, Karnataka', price: 110000,
      email: 'royal@petal.com', phone: '+91 98765 43437', website: 'www.royalpetal.com', featured: true,
      specialties: ['Fresh Petals', 'Garden Themes', 'Natural Designs']
    },
    {
      id: 829, name: 'Elegant Flower Concepts', rating: 4.8, reviewCount: 289, location: 'Chennai, Tamil Nadu', price: 70000,
      email: 'elegant@concepts.com', phone: '+91 98765 43438', website: 'www.elegantflowerconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 830, name: 'Grand Bloom Stylists', rating: 4.6, reviewCount: 201, location: 'Hyderabad, Telangana', price: 60000,
      email: 'grand@stylists.com', phone: '+91 98765 43439', website: 'www.grandbloom.com', featured: false,
      specialties: ['Styling Services', 'Traditional Florals', 'Cultural Setup']
    },
    {
      id: 831, name: 'Luxury Floral Solutions', rating: 4.9, reviewCount: 345, location: 'Kolkata, West Bengal', price: 135000,
      email: 'luxury@solutions.com', phone: '+91 98765 43440', website: 'www.luxuryflorals.com', featured: true,
      specialties: ['Floral Solutions', 'Theme Based', 'Custom Setup']
    },
    {
      id: 832, name: 'Royal Flower Stylists', rating: 4.8, reviewCount: 278, location: 'Jaipur, Rajasthan', price: 155000,
      email: 'royal@stylists.com', phone: '+91 98765 43441', website: 'www.royalflowerstylists.com', featured: true,
      specialties: ['Styling Services', 'Palace Florals', 'Traditional Arrangements']
    },
    {
      id: 833, name: 'Elegant Event Florists', rating: 4.7, reviewCount: 234, location: 'Delhi, NCR', price: 145000,
      email: 'elegant@eventflorists.com', phone: '+91 98765 43442', website: 'www.eleganteventflorists.com', featured: true,
      specialties: ['Event Florals', 'Luxury Arrangements', 'Custom Themes']
    },
    {
      id: 834, name: 'Grand Petal Decor', rating: 4.9, reviewCount: 312, location: 'Mumbai, Maharashtra', price: 125000,
      email: 'grand@petal.com', phone: '+91 98765 43443', website: 'www.grandpetal.com', featured: true,
      specialties: ['Petal Designs', 'Garden Themes', 'Natural Florals']
    },
    {
      id: 835, name: 'Luxury Flower Concepts', rating: 4.8, reviewCount: 267, location: 'Bangalore, Karnataka', price: 115000,
      email: 'luxury@concepts.com', phone: '+91 98765 43444', website: 'www.luxuryflowerconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 836, name: 'Royal Event Florals', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 50000,
      email: 'royal@event.com', phone: '+91 98765 43445', website: 'www.royaleventflorals.com', featured: false,
      specialties: ['Event Florals', 'Traditional Arrangements', 'Cultural Themes']
    },
    {
      id: 837, name: 'Elegant Floral Studio', rating: 4.9, reviewCount: 334, location: 'Hyderabad, Telangana', price: 95000,
      email: 'elegant@studio.com', phone: '+91 98765 43446', website: 'www.elegantfloralstudio.com', featured: true,
      specialties: ['Studio Services', 'Traditional Florals', 'Cultural Setup']
    },
    {
      id: 838, name: 'Grand Flower Designers', rating: 4.7, reviewCount: 245, location: 'Kolkata, West Bengal', price: 65000,
      email: 'grand@designers.com', phone: '+91 98765 43447', website: 'www.grandflowerdesigners.com', featured: false,
      specialties: ['Design Services', 'Traditional Florals', 'Cultural Themes']
    },
    {
      id: 839, name: 'Luxury Bloom Creators', rating: 4.8, reviewCount: 289, location: 'Jaipur, Rajasthan', price: 145000,
      email: 'luxury@creators.com', phone: '+91 98765 43448', website: 'www.luxurybloomcreators.com', featured: true,
      specialties: ['Bloom Creation', 'Palace Florals', 'Traditional Arrangements']
    },
    {
      id: 840, name: 'Royal Floral Solutions', rating: 4.9, reviewCount: 345, location: 'Delhi, NCR', price: 230000,
      email: 'royal@solutions.com', phone: '+91 98765 43449', website: 'www.royalflorals.com', featured: true,
      specialties: ['Complete Solutions', 'Luxury Florals', 'Custom Setup']
    },
    {
      id: 841, name: 'Elegant Petal Studio', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 105000,
      email: 'elegant@petalstudio.com', phone: '+91 98765 43450', website: 'www.elegantpetalstudio.com', featured: true,
      specialties: ['Petal Studio', 'Garden Themes', 'Natural Arrangements']
    },
    {
      id: 842, name: 'Grand Event Concepts', rating: 4.8, reviewCount: 278, location: 'Bangalore, Karnataka', price: 100000,
      email: 'grand@concepts.com', phone: '+91 98765 43451', website: 'www.grandeventconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 843, name: 'Luxury Floral Designers', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 55000,
      email: 'luxury@designers.com', phone: '+91 98765 43452', website: 'www.luxuryfloraldesigners.com', featured: false,
      specialties: ['Design Services', 'Traditional Florals', 'Cultural Themes']
    },
    {
      id: 844, name: 'Royal Bloom Studio', rating: 4.9, reviewCount: 334, location: 'Hyderabad, Telangana', price: 120000,
      email: 'royal@bloomstudio.com', phone: '+91 98765 43453', website: 'www.royalbloomstudio.com', featured: true,
      specialties: ['Studio Services', 'Traditional Florals', 'Cultural Setup']
    },
    {
      id: 845, name: 'Elegant Event Stylists', rating: 4.7, reviewCount: 245, location: 'Kolkata, West Bengal', price: 70000,
      email: 'elegant@stylists.com', phone: '+91 98765 43454', website: 'www.eleganteventstylists.com', featured: false,
      specialties: ['Styling Services', 'Traditional Florals', 'Cultural Themes']
    },
    {
      id: 846, name: 'Grand Floral Creators', rating: 4.8, reviewCount: 289, location: 'Jaipur, Rajasthan', price: 135000,
      email: 'grand@creators.com', phone: '+91 98765 43455', website: 'www.grandfloralcreators.com', featured: true,
      specialties: ['Creation Services', 'Palace Florals', 'Traditional Arrangements']
    },
    {
      id: 847, name: 'Luxury Flower Designers', rating: 4.9, reviewCount: 345, location: 'Delhi, NCR', price: 205000,
      email: 'luxury@designers.com', phone: '+91 98765 43456', website: 'www.luxuryflowerdesigners.com', featured: true,
      specialties: ['Design Services', 'Luxury Florals', 'Custom Themes']
    },
    {
      id: 848, name: 'Royal Event Studio', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 140000,
      email: 'royal@studio.com', phone: '+91 98765 43457', website: 'www.royaleventstudio.com', featured: true,
      specialties: ['Studio Services', 'Luxury Florals', 'Custom Setup']
    },
    {
      id: 849, name: 'Elegant Floral Concepts', rating: 4.8, reviewCount: 278, location: 'Bangalore, Karnataka', price: 95000,
      email: 'elegant@concepts.com', phone: '+91 98765 43458', website: 'www.elegantfloralconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Florals']
    },
    {
      id: 850, name: 'Grand Flower Studio', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 45000,
      email: 'grand@studio.com', phone: '+91 98765 43459', website: 'www.grandflowerstudio.com', featured: false,
      specialties: ['Studio Services', 'Traditional Florals', 'Cultural Themes']
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
                label="Fresh Flowers" 
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
            <Tab label="Floral Services" icon={<LocalFlorist />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Professional Florists
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Showing {currentProviders.length} of {providers.length} floral arrangement services
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
                        label="Floral Arrangements" 
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

export default FloralArrangementsService;