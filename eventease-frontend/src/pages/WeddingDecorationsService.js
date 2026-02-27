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

const WeddingDecorationsService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 7,
    name: 'Wedding Decorations',
    category: 'decoration',
    description: 'Complete wedding decoration services with theme-based setups. Transform your wedding venue into a magical space with our expert decorators specializing in luxury wedding decorations.',
    rating: 4.9,
    reviewCount: 203,
    location: 'Pan India',
    price: '₹75,000',
    featured: true,
    deliveryTime: 'Setup on event day',
  };

  const providers = [
    // Premium Wedding Decorators
    {
      id: 701, name: 'Royal Wedding Decorators', rating: 4.9, reviewCount: 345, location: 'Delhi, NCR', price: 400000,
      email: 'royal@weddingdecor.com', phone: '+91 98765 43310', website: 'www.royalweddingdecor.com', featured: true,
      specialties: ['Luxury Themes', 'Grand Setups', 'International Styles']
    },
    {
      id: 702, name: 'Elegant Events Decor', rating: 4.8, reviewCount: 278, location: 'Mumbai, Maharashtra', price: 350000,
      email: 'elegant@events.com', phone: '+91 98765 43311', website: 'www.eleganteventsdecor.com', featured: true,
      specialties: ['Contemporary Designs', 'Luxury Florals', 'Custom Themes']
    },
    {
      id: 703, name: 'Grand Wedding Designs', rating: 4.7, reviewCount: 234, location: 'Bangalore, Karnataka', price: 280000,
      email: 'grand@weddingdesigns.com', phone: '+91 98765 43312', website: 'www.grandweddingdesigns.com', featured: true,
      specialties: ['South Indian Style', 'Traditional Decor', 'Modern Fusion']
    },
    {
      id: 704, name: 'Luxury Decor Studio', rating: 4.9, reviewCount: 312, location: 'Chennai, Tamil Nadu', price: 320000,
      email: 'luxury@decorstudio.com', phone: '+91 98765 43313', website: 'www.luxurydecorstudio.com', featured: true,
      specialties: ['Tamil Wedding Style', 'Floral Decor', 'Traditional Setup']
    },
    {
      id: 705, name: 'Dream Wedding Creators', rating: 4.6, reviewCount: 189, location: 'Hyderabad, Telangana', price: 250000,
      email: 'dream@weddingcreators.com', phone: '+91 98765 43314', website: 'www.dreamweddingcreators.com', featured: false,
      specialties: ['Hyderabadi Style', 'Nizam Inspired', 'Traditional Decor']
    },
    {
      id: 706, name: 'Elite Wedding Planners', rating: 4.8, reviewCount: 267, location: 'Kolkata, West Bengal', price: 300000,
      email: 'elite@weddingplanners.com', phone: '+91 98765 43315', website: 'www.eliteweddingplanners.com', featured: true,
      specialties: ['Bengali Style', 'Traditional Decor', 'Cultural Themes']
    },

    // Additional Premium Decorators
    {
      id: 707, name: 'Royal Palace Decor', rating: 4.7, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 380000,
      email: 'palace@royaldecor.com', phone: '+91 98765 43316', website: 'www.royalpalacedecor.com', featured: true,
      specialties: ['Rajasthani Style', 'Palace Themes', 'Traditional Decor']
    },
    {
      id: 708, name: 'Grandeur Events', rating: 4.9, reviewCount: 289, location: 'Delhi, NCR', price: 420000,
      email: 'grandeur@events.com', phone: '+91 98765 43317', website: 'www.grandeurevents.com', featured: true,
      specialties: ['Luxury Decor', 'International Themes', 'Custom Designs']
    },
    {
      id: 709, name: 'Ethereal Wedding Designs', rating: 4.8, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 360000,
      email: 'ethereal@wedding.com', phone: '+91 98765 43318', website: 'www.etherealwedding.com', featured: true,
      specialties: ['Contemporary Style', 'Minimalist Decor', 'Modern Themes']
    },
    {
      id: 710, name: 'Traditional Decor Masters', rating: 4.7, reviewCount: 198, location: 'Varanasi, Uttar Pradesh', price: 220000,
      email: 'traditional@decor.com', phone: '+91 98765 43319', website: 'www.traditionaldecor.com', featured: false,
      specialties: ['Traditional Indian', 'Cultural Themes', 'Religious Decor']
    },
    {
      id: 711, name: 'Luxury Floral Designs', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 290000,
      email: 'luxury@floral.com', phone: '+91 98765 43320', website: 'www.luxuryfloral.com', featured: true,
      specialties: ['Floral Decor', 'Garden Themes', 'Natural Designs']
    },
    {
      id: 712, name: 'Royal Wedding Studio', rating: 4.8, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 450000,
      email: 'royal@weddingstudio.com', phone: '+91 98765 43321', website: 'www.royalweddingstudio.com', featured: true,
      specialties: ['Palace Decor', 'Royal Themes', 'Luxury Setup']
    },
    {
      id: 713, name: 'Elegant Decor Solutions', rating: 4.6, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 240000,
      email: 'elegant@decors.com', phone: '+91 98765 43322', website: 'www.elegantdecors.com', featured: false,
      specialties: ['South Indian Style', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 714, name: 'Grand Wedding Concepts', rating: 4.9, reviewCount: 334, location: 'Delhi, NCR', price: 380000,
      email: 'concepts@wedding.com', phone: '+91 98765 43323', website: 'www.grandweddingconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 715, name: 'Luxury Event Stylists', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 320000,
      email: 'luxury@stylists.com', phone: '+91 98765 43324', website: 'www.luxurystylists.com', featured: true,
      specialties: ['Styling Services', 'Luxury Decor', 'Premium Setup']
    },
    {
      id: 716, name: 'Royal Decor Creators', rating: 4.8, reviewCount: 289, location: 'Hyderabad, Telangana', price: 270000,
      email: 'royal@decorcreators.com', phone: '+91 98765 43325', website: 'www.royaldecorcreators.com', featured: true,
      specialties: ['Hyderabadi Style', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 717, name: 'Elegant Wedding Designs', rating: 4.6, reviewCount: 201, location: 'Kolkata, West Bengal', price: 230000,
      email: 'elegant@weddingdesigns.com', phone: '+91 98765 43326', website: 'www.elegantweddingdesigns.com', featured: false,
      specialties: ['Bengali Style', 'Traditional Decor', 'Cultural Setup']
    },
    {
      id: 718, name: 'Grand Decor Studio', rating: 4.9, reviewCount: 345, location: 'Jaipur, Rajasthan', price: 410000,
      email: 'grand@decorstudio.com', phone: '+91 98765 43327', website: 'www.granddecorstudio.com', featured: true,
      specialties: ['Rajasthani Style', 'Palace Themes', 'Traditional Decor']
    },
    {
      id: 719, name: 'Luxury Wedding Planners', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 390000,
      email: 'luxury@weddingplanners.com', phone: '+91 98765 43328', website: 'www.luxuryweddingplanners.com', featured: true,
      specialties: ['Complete Decor', 'Theme Based', 'Luxury Setup']
    },
    {
      id: 720, name: 'Royal Event Designers', rating: 4.7, reviewCount: 234, location: 'Mumbai, Maharashtra', price: 340000,
      email: 'royal@eventdesigners.com', phone: '+91 98765 43329', website: 'www.royaleventdesigners.com', featured: true,
      specialties: ['Event Design', 'Luxury Decor', 'Custom Themes']
    },
    {
      id: 721, name: 'Elegant Floral Decor', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 280000,
      email: 'elegant@floral.com', phone: '+91 98765 43330', website: 'www.elegantfloral.com', featured: true,
      specialties: ['Floral Designs', 'Garden Themes', 'Natural Decor']
    },
    {
      id: 722, name: 'Grand Wedding Stylists', rating: 4.8, reviewCount: 267, location: 'Chennai, Tamil Nadu', price: 260000,
      email: 'grand@stylists.com', phone: '+91 98765 43331', website: 'www.grandstylists.com', featured: true,
      specialties: ['Styling Services', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 723, name: 'Luxury Decor Masters', rating: 4.7, reviewCount: 223, location: 'Hyderabad, Telangana', price: 250000,
      email: 'luxury@masters.com', phone: '+91 98765 43332', website: 'www.luxurymasters.com', featured: false,
      specialties: ['Hyderabadi Style', 'Traditional Decor', 'Cultural Setup']
    },
    {
      id: 724, name: 'Royal Wedding Concepts', rating: 4.9, reviewCount: 345, location: 'Kolkata, West Bengal', price: 310000,
      email: 'royal@concepts.com', phone: '+91 98765 43333', website: 'www.royalconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 725, name: 'Elegant Event Solutions', rating: 4.6, reviewCount: 189, location: 'Jaipur, Rajasthan', price: 290000,
      email: 'elegant@solutions.com', phone: '+91 98765 43334', website: 'www.elegantsolutions.com', featured: false,
      specialties: ['Event Solutions', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 726, name: 'Grand Decor Designs', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 370000,
      email: 'grand@designs.com', phone: '+91 98765 43335', website: 'www.granddesigns.com', featured: true,
      specialties: ['Design Services', 'Luxury Decor', 'Custom Themes']
    },
    {
      id: 727, name: 'Luxury Wedding Studio', rating: 4.9, reviewCount: 334, location: 'Mumbai, Maharashtra', price: 430000,
      email: 'luxury@studio.com', phone: '+91 98765 43336', website: 'www.luxurystudio.com', featured: true,
      specialties: ['Studio Services', 'Luxury Decor', 'Premium Setup']
    },
    {
      id: 728, name: 'Royal Floral Designs', rating: 4.7, reviewCount: 245, location: 'Bangalore, Karnataka', price: 270000,
      email: 'royal@floral.com', phone: '+91 98765 43337', website: 'www.royalfloral.com', featured: true,
      specialties: ['Floral Decor', 'Garden Themes', 'Natural Designs']
    },
    {
      id: 729, name: 'Elegant Wedding Concepts', rating: 4.8, reviewCount: 289, location: 'Chennai, Tamil Nadu', price: 240000,
      email: 'elegant@concepts.com', phone: '+91 98765 43338', website: 'www.elegantconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 730, name: 'Grand Event Stylists', rating: 4.6, reviewCount: 201, location: 'Hyderabad, Telangana', price: 230000,
      email: 'grand@stylists.com', phone: '+91 98765 43339', website: 'www.grandstylists.com', featured: false,
      specialties: ['Styling Services', 'Traditional Decor', 'Cultural Setup']
    },
    {
      id: 731, name: 'Luxury Decor Solutions', rating: 4.9, reviewCount: 345, location: 'Kolkata, West Bengal', price: 320000,
      email: 'luxury@solutions.com', phone: '+91 98765 43340', website: 'www.luxurysolutions.com', featured: true,
      specialties: ['Decor Solutions', 'Theme Based', 'Custom Setup']
    },
    {
      id: 732, name: 'Royal Wedding Stylists', rating: 4.8, reviewCount: 278, location: 'Jaipur, Rajasthan', price: 390000,
      email: 'royal@stylists.com', phone: '+91 98765 43341', website: 'www.royalstylists.com', featured: true,
      specialties: ['Styling Services', 'Palace Themes', 'Traditional Decor']
    },
    {
      id: 733, name: 'Elegant Event Designers', rating: 4.7, reviewCount: 234, location: 'Delhi, NCR', price: 350000,
      email: 'elegant@designers.com', phone: '+91 98765 43342', website: 'www.elegantdesigners.com', featured: true,
      specialties: ['Event Design', 'Luxury Decor', 'Custom Themes']
    },
    {
      id: 734, name: 'Grand Floral Decor', rating: 4.9, reviewCount: 312, location: 'Mumbai, Maharashtra', price: 300000,
      email: 'grand@floral.com', phone: '+91 98765 43343', website: 'www.grandfloral.com', featured: true,
      specialties: ['Floral Designs', 'Garden Themes', 'Natural Decor']
    },
    {
      id: 735, name: 'Luxury Wedding Concepts', rating: 4.8, reviewCount: 267, location: 'Bangalore, Karnataka', price: 280000,
      email: 'luxury@concepts.com', phone: '+91 98765 43344', website: 'www.luxuryconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 736, name: 'Royal Event Solutions', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 220000,
      email: 'royal@solutions.com', phone: '+91 98765 43345', website: 'www.royalsolutions.com', featured: false,
      specialties: ['Event Solutions', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 737, name: 'Elegant Decor Studio', rating: 4.9, reviewCount: 334, location: 'Hyderabad, Telangana', price: 260000,
      email: 'elegant@studio.com', phone: '+91 98765 43346', website: 'www.elegantstudio.com', featured: true,
      specialties: ['Studio Services', 'Traditional Decor', 'Cultural Setup']
    },
    {
      id: 738, name: 'Grand Wedding Designers', rating: 4.7, reviewCount: 245, location: 'Kolkata, West Bengal', price: 240000,
      email: 'grand@designers.com', phone: '+91 98765 43347', website: 'www.granddesigners.com', featured: false,
      specialties: ['Design Services', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 739, name: 'Luxury Event Creators', rating: 4.8, reviewCount: 289, location: 'Jaipur, Rajasthan', price: 380000,
      email: 'luxury@creators.com', phone: '+91 98765 43348', website: 'www.luxurycreators.com', featured: true,
      specialties: ['Event Creation', 'Palace Themes', 'Traditional Decor']
    },
    {
      id: 740, name: 'Royal Wedding Solutions', rating: 4.9, reviewCount: 345, location: 'Delhi, NCR', price: 410000,
      email: 'royal@solutions.com', phone: '+91 98765 43349', website: 'www.royalsolutions.com', featured: true,
      specialties: ['Complete Solutions', 'Luxury Decor', 'Custom Setup']
    },
    {
      id: 741, name: 'Elegant Floral Studio', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 290000,
      email: 'elegant@floralstudio.com', phone: '+91 98765 43350', website: 'www.elegantfloralstudio.com', featured: true,
      specialties: ['Floral Studio', 'Garden Themes', 'Natural Decor']
    },
    {
      id: 742, name: 'Grand Event Concepts', rating: 4.8, reviewCount: 278, location: 'Bangalore, Karnataka', price: 270000,
      email: 'grand@concepts.com', phone: '+91 98765 43351', website: 'www.grandconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 743, name: 'Luxury Decor Designers', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 230000,
      email: 'luxury@designers.com', phone: '+91 98765 43352', website: 'www.luxurydesigners.com', featured: false,
      specialties: ['Design Services', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 744, name: 'Royal Wedding Studio', rating: 4.9, reviewCount: 334, location: 'Hyderabad, Telangana', price: 320000,
      email: 'royal@weddingstudio.com', phone: '+91 98765 43353', website: 'www.royalweddingstudio.com', featured: true,
      specialties: ['Studio Services', 'Traditional Decor', 'Cultural Setup']
    },
    {
      id: 745, name: 'Elegant Event Stylists', rating: 4.7, reviewCount: 245, location: 'Kolkata, West Bengal', price: 250000,
      email: 'elegant@stylists.com', phone: '+91 98765 43354', website: 'www.elegantstylists.com', featured: false,
      specialties: ['Styling Services', 'Traditional Decor', 'Cultural Themes']
    },
    {
      id: 746, name: 'Grand Decor Creators', rating: 4.8, reviewCount: 289, location: 'Jaipur, Rajasthan', price: 370000,
      email: 'grand@creators.com', phone: '+91 98765 43355', website: 'www.grandcreators.com', featured: true,
      specialties: ['Creation Services', 'Palace Themes', 'Traditional Decor']
    },
    {
      id: 747, name: 'Luxury Wedding Designers', rating: 4.9, reviewCount: 345, location: 'Delhi, NCR', price: 390000,
      email: 'luxury@designers.com', phone: '+91 98765 43356', website: 'www.luxurydesigners.com', featured: true,
      specialties: ['Design Services', 'Luxury Decor', 'Custom Themes']
    },
    {
      id: 748, name: 'Royal Event Studio', rating: 4.7, reviewCount: 256, location: 'Mumbai, Maharashtra', price: 340000,
      email: 'royal@studio.com', phone: '+91 98765 43357', website: 'www.royalstudio.com', featured: true,
      specialties: ['Studio Services', 'Luxury Decor', 'Custom Setup']
    },
    {
      id: 749, name: 'Elegant Decor Concepts', rating: 4.8, reviewCount: 278, location: 'Bangalore, Karnataka', price: 280000,
      email: 'elegant@concepts.com', phone: '+91 98765 43358', website: 'www.elegantconcepts.com', featured: true,
      specialties: ['Concept Designs', 'Theme Based', 'Custom Decor']
    },
    {
      id: 750, name: 'Grand Wedding Studio', rating: 4.6, reviewCount: 201, location: 'Chennai, Tamil Nadu', price: 240000,
      email: 'grand@studio.com', phone: '+91 98765 43359', website: 'www.grandstudio.com', featured: false,
      specialties: ['Studio Services', 'Traditional Decor', 'Cultural Themes']
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
            <Tab label="Decoration Services" icon={<LocalFlorist />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Premium Wedding Decorators
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Showing {currentProviders.length} of {providers.length} luxury decor services
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
                        label="Wedding Decorations" 
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

export default WeddingDecorationsService;