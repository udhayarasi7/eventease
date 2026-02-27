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
  PhotoLibrary,
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

const PreWeddingShootService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 2,
    name: 'Pre-Wedding Shoot',
    category: 'photography',
    description: 'Beautiful pre-wedding photoshoots to capture your love story in stunning locations. Our photographers specialize in creative couple photography that tells your unique love story.',
    rating: 4.7,
    reviewCount: 89,
    location: 'Pan India',
    price: '₹18,000',
    featured: true,
    deliveryTime: '1 week',
  };

  const providers = [
    // Providers from first page
    {
      id: 101, name: 'Dreamscape Photography', rating: 4.9, reviewCount: 234, location: 'Mumbai, Maharashtra', price: 35000,
      email: 'hello@dreamscape.com', phone: '+91 98765 43210', website: 'www.dreamscape.com', featured: true
    },
    {
      id: 102, name: 'Ethereal Images Studio', rating: 4.8, reviewCount: 189, location: 'Delhi, NCR', price: 45000,
      email: 'studio@ethereal.com', phone: '+91 98765 43211', website: 'www.ethereal.com', featured: true
    },
    {
      id: 103, name: 'Heartstrings Photography', rating: 4.7, reviewCount: 156, location: 'Bangalore, Karnataka', price: 28000,
      email: 'connect@heartstrings.com', phone: '+91 98765 43212', website: 'www.heartstrings.com', featured: false
    },
    {
      id: 104, name: 'Soulful Snapshots', rating: 4.9, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 32000,
      email: 'info@soulful.com', phone: '+91 98765 43213', website: 'www.soulful.com', featured: true
    },
    {
      id: 105, name: 'Luminous Moments', rating: 4.6, reviewCount: 134, location: 'Hyderabad, Telangana', price: 25000,
      email: 'moments@luminous.com', phone: '+91 98765 43214', website: 'www.luminous.com', featured: false
    },
    {
      id: 106, name: 'Timeless Visuals', rating: 4.8, reviewCount: 198, location: 'Kolkata, West Bengal', price: 38000,
      email: 'visuals@timeless.com', phone: '+91 98765 43215', website: 'www.timeless.com', featured: true
    },

    // New Pre-Wedding specific providers
    {
      id: 201, name: 'Love Story Photography', rating: 4.8, reviewCount: 156, location: 'Mumbai, Maharashtra', price: 35000,
      email: 'hello@lovestory.com', phone: '+91 98765 43260', website: 'www.lovestory.com', featured: true
    },
    {
      id: 202, name: 'Romantic Frames Studio', rating: 4.9, reviewCount: 234, location: 'Delhi, NCR', price: 45000,
      email: 'studio@romanticframes.com', phone: '+91 98765 43261', website: 'www.romanticframes.com', featured: true
    },
    {
      id: 203, name: 'Couple Moments', rating: 4.7, reviewCount: 128, location: 'Bangalore, Karnataka', price: 28000,
      email: 'moments@couple.com', phone: '+91 98765 43262', website: 'www.couplemoments.com', featured: false
    },
    {
      id: 204, name: 'Eternal Love Shots', rating: 4.8, reviewCount: 189, location: 'Chennai, Tamil Nadu', price: 32000,
      email: 'shots@eternallove.com', phone: '+91 98765 43263', website: 'www.eternalloveshots.com', featured: true
    },
    {
      id: 205, name: 'Blissful Couples', rating: 4.6, reviewCount: 95, location: 'Hyderabad, Telangana', price: 25000,
      email: 'couples@blissful.com', phone: '+91 98765 43264', website: 'www.blissfulcouples.com', featured: false
    },
    {
      id: 206, name: 'Dreamy Duo Photography', rating: 4.9, reviewCount: 267, location: 'Kolkata, West Bengal', price: 38000,
      email: 'duo@dreamy.com', phone: '+91 98765 43265', website: 'www.dreamyduo.com', featured: true
    },
    {
      id: 207, name: 'Romance Captured', rating: 4.7, reviewCount: 142, location: 'Pune, Maharashtra', price: 22000,
      email: 'captured@romance.com', phone: '+91 98765 43266', website: 'www.romancecaptured.com', featured: false
    },
    {
      id: 208, name: 'Love Lens Studio', rating: 4.8, reviewCount: 178, location: 'Jaipur, Rajasthan', price: 42000,
      email: 'studio@lovelens.com', phone: '+91 98765 43267', website: 'www.lovelens.com', featured: true
    },
    {
      id: 209, name: 'Couple Chronicles', rating: 4.9, reviewCount: 245, location: 'Goa', price: 55000,
      email: 'chronicles@couple.com', phone: '+91 98765 43268', website: 'www.couplechronicles.com', featured: true
    },
    {
      id: 210, name: 'Romantic Tales', rating: 4.7, reviewCount: 134, location: 'Ahmedabad, Gujarat', price: 30000,
      email: 'tales@romantic.com', phone: '+91 98765 43269', website: 'www.romantictales.com', featured: false
    },
    {
      id: 211, name: 'Sunset Couples', rating: 4.8, reviewCount: 167, location: 'Chandigarh', price: 28000,
      email: 'couples@sunset.com', phone: '+91 98765 43270', website: 'www.sunsetcouples.com', featured: true
    },
    {
      id: 212, name: 'Urban Love Stories', rating: 4.6, reviewCount: 112, location: 'Lucknow, Uttar Pradesh', price: 24000,
      email: 'stories@urbanlove.com', phone: '+91 98765 43271', website: 'www.urbanlovestories.com', featured: false
    },
    {
      id: 213, name: 'Destination Couples', rating: 4.9, reviewCount: 189, location: 'Udaipur, Rajasthan', price: 48000,
      email: 'couples@destination.com', phone: '+91 98765 43272', website: 'www.destinationcouples.com', featured: true
    },
    {
      id: 214, name: 'Pure Romance Photos', rating: 4.7, reviewCount: 156, location: 'Kerala', price: 32000,
      email: 'photos@pureromance.com', phone: '+91 98765 43273', website: 'www.pureromancephotos.com', featured: false
    },
    {
      id: 215, name: 'Elegant Pairs', rating: 4.8, reviewCount: 223, location: 'Delhi, NCR', price: 40000,
      email: 'pairs@elegant.com', phone: '+91 98765 43274', website: 'www.elegantpairs.com', featured: true
    },
    {
      id: 216, name: 'Divine Couples', rating: 4.9, reviewCount: 278, location: 'Varanasi, Uttar Pradesh', price: 35000,
      email: 'couples@divine.com', phone: '+91 98765 43275', website: 'www.divinecouples.com', featured: false
    },
    {
      id: 217, name: 'Serene Partners', rating: 4.7, reviewCount: 134, location: 'Shimla, Himachal', price: 42000,
      email: 'partners@serene.com', phone: '+91 98765 43276', website: 'www.serenepartners.com', featured: false
    },
    {
      id: 218, name: 'Grand Romance', rating: 4.8, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 52000,
      email: 'romance@grand.com', phone: '+91 98765 43277', website: 'www.grandromance.com', featured: true
    },
    {
      id: 219, name: 'Radiant Pairs', rating: 4.7, reviewCount: 167, location: 'Chennai, Tamil Nadu', price: 30000,
      email: 'pairs@radiant.com', phone: '+91 98765 43278', website: 'www.radiantpairs.com', featured: false
    },
    {
      id: 220, name: 'Precious Couples', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 38000,
      email: 'couples@precious.com', phone: '+91 98765 43279', website: 'www.preciouscouples.com', featured: true
    },
    {
      id: 221, name: 'Blissful Unions Pre-Wedding', rating: 4.8, reviewCount: 234, location: 'Hyderabad, Telangana', price: 32000,
      email: 'prewedding@blissful.com', phone: '+91 98765 43280', website: 'www.blissfulprewedding.com', featured: false
    },
    {
      id: 222, name: 'Eternal Bonds Pre-Shoot', rating: 4.9, reviewCount: 289, location: 'Kolkata, West Bengal', price: 42000,
      email: 'preshoot@eternal.com', phone: '+91 98765 43281', website: 'www.eternalpreshoot.com', featured: true
    },
    {
      id: 223, name: 'Magic Love Studio', rating: 4.7, reviewCount: 156, location: 'Pune, Maharashtra', price: 26000,
      email: 'studio@magiclove.com', phone: '+91 98765 43282', website: 'www.magiclovestudio.com', featured: false
    },
    {
      id: 224, name: 'Heavenly Couples', rating: 4.8, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 45000,
      email: 'couples@heavenly.com', phone: '+91 98765 43283', website: 'www.heavenlycouples.com', featured: true
    },
    {
      id: 225, name: 'Divine Romance', rating: 4.9, reviewCount: 278, location: 'Delhi, NCR', price: 50000,
      email: 'romance@divine.com', phone: '+91 98765 43284', website: 'www.divineromance.com', featured: true
    },
    {
      id: 226, name: 'Royal Couples', rating: 4.8, reviewCount: 245, location: 'Mysore, Karnataka', price: 48000,
      email: 'couples@royal.com', phone: '+91 98765 43285', website: 'www.royalcouples.com', featured: true
    },
    {
      id: 227, name: 'Cherished Love', rating: 4.7, reviewCount: 189, location: 'Coimbatore, Tamil Nadu', price: 32000,
      email: 'love@cherished.com', phone: '+91 98765 43286', website: 'www.cherishedlove.com', featured: false
    },
    {
      id: 228, name: 'Perfect Pairs', rating: 4.8, reviewCount: 234, location: 'Ahmedabad, Gujarat', price: 35000,
      email: 'pairs@perfect.com', phone: '+91 98765 43287', website: 'www.perfectpairs.com', featured: true
    },
    {
      id: 229, name: 'Dream Pre-Wedding', rating: 4.9, reviewCount: 312, location: 'Goa', price: 65000,
      email: 'prewedding@dream.com', phone: '+91 98765 43288', website: 'www.dreamprewedding.com', featured: true
    },
    {
      id: 230, name: 'Elegant Romance', rating: 4.7, reviewCount: 167, location: 'Chandigarh', price: 30000,
      email: 'romance@elegant.com', phone: '+91 98765 43289', website: 'www.elegantromance.com', featured: false
    },
    {
      id: 231, name: 'Timeless Love', rating: 4.8, reviewCount: 245, location: 'Lucknow, Uttar Pradesh', price: 38000,
      email: 'love@timeless.com', phone: '+91 98765 43290', website: 'www.timelesslove.com', featured: true
    },
    {
      id: 232, name: 'Sacred Couples', rating: 4.9, reviewCount: 289, location: 'Amritsar, Punjab', price: 40000,
      email: 'couples@sacred.com', phone: '+91 98765 43291', website: 'www.sacredcouples.com', featured: true
    },
    {
      id: 233, name: 'Blissful Romance', rating: 4.7, reviewCount: 178, location: 'Bhopal, Madhya Pradesh', price: 28000,
      email: 'romance@blissful.com', phone: '+91 98765 43292', website: 'www.blissfulromance.com', featured: false
    },
    {
      id: 234, name: 'Golden Love', rating: 4.8, reviewCount: 223, location: 'Indore, Madhya Pradesh', price: 32000,
      email: 'love@golden.com', phone: '+91 98765 43293', website: 'www.goldenlove.com', featured: true
    },
    {
      id: 235, name: 'Royal Romance', rating: 4.9, reviewCount: 267, location: 'Jodhpur, Rajasthan', price: 55000,
      email: 'romance@royal.com', phone: '+91 98765 43294', website: 'www.royalromance.com', featured: true
    },
    {
      id: 236, name: 'Divine Love Studio', rating: 4.7, reviewCount: 189, location: 'Kochi, Kerala', price: 34000,
      email: 'studio@divinelove.com', phone: '+91 98765 43295', website: 'www.divinelovestudio.com', featured: false
    },
    {
      id: 237, name: 'Eternal Romance', rating: 4.8, reviewCount: 234, location: 'Nagpur, Maharashtra', price: 36000,
      email: 'romance@eternal.com', phone: '+91 98765 43296', website: 'www.eternalromance.com', featured: true
    },
    {
      id: 238, name: 'Magic Romance', rating: 4.9, reviewCount: 278, location: 'Surat, Gujarat', price: 38000,
      email: 'romance@magic.com', phone: '+91 98765 43297', website: 'www.magicromance.com', featured: true
    },
    {
      id: 239, name: 'Heavenly Romance', rating: 4.7, reviewCount: 156, location: 'Visakhapatnam, Andhra', price: 32000,
      email: 'romance@heavenly.com', phone: '+91 98765 43298', website: 'www.heavenlyromance.com', featured: false
    },
    {
      id: 240, name: 'Royal Love', rating: 4.8, reviewCount: 245, location: 'Patna, Bihar', price: 35000,
      email: 'love@royal.com', phone: '+91 98765 43299', website: 'www.royallove.com', featured: true
    },
    {
      id: 241, name: 'Divine Pre-Wedding', rating: 4.9, reviewCount: 312, location: 'Guwahati, Assam', price: 42000,
      email: 'prewedding@divine.com', phone: '+91 98765 43300', website: 'www.divineprewedding.com', featured: true
    },
    {
      id: 242, name: 'Elegant Pre-Shoot', rating: 4.7, reviewCount: 178, location: 'Bhubaneswar, Odisha', price: 30000,
      email: 'preshoot@elegant.com', phone: '+91 98765 43301', website: 'www.elegantpreshoot.com', featured: false
    },
    {
      id: 243, name: 'Timeless Pre-Wedding', rating: 4.8, reviewCount: 223, location: 'Dehradun, Uttarakhand', price: 38000,
      email: 'prewedding@timeless.com', phone: '+91 98765 43302', website: 'www.timelessprewedding.com', featured: true
    },
    {
      id: 244, name: 'Royal Pre-Shoot', rating: 4.9, reviewCount: 289, location: 'Udaipur, Rajasthan', price: 60000,
      email: 'preshoot@royal.com', phone: '+91 98765 43303', website: 'www.royalpreshoot.com', featured: true
    },
    {
      id: 245, name: 'Divine Couple Studio', rating: 4.7, reviewCount: 167, location: 'Mumbai, Maharashtra', price: 45000,
      email: 'studio@divinecouple.com', phone: '+91 98765 43304', website: 'www.divinecouplestudio.com', featured: false
    },
    {
      id: 246, name: 'Eternal Pre-Wedding', rating: 4.8, reviewCount: 234, location: 'Delhi, NCR', price: 48000,
      email: 'prewedding@eternal.com', phone: '+91 98765 43305', website: 'www.eternalprewedding.com', featured: true
    },
    {
      id: 247, name: 'Magic Pre-Shoot', rating: 4.9, reviewCount: 278, location: 'Bangalore, Karnataka', price: 46000,
      email: 'preshoot@magic.com', phone: '+91 98765 43306', website: 'www.magicpreshoot.com', featured: true
    },
    {
      id: 248, name: 'Heavenly Pre-Wedding', rating: 4.7, reviewCount: 189, location: 'Chennai, Tamil Nadu', price: 37000,
      email: 'prewedding@heavenly.com', phone: '+91 98765 43307', website: 'www.heavenlyprewedding.com', featured: false
    },
    {
      id: 249, name: 'Royal Love Story', rating: 4.8, reviewCount: 245, location: 'Kolkata, West Bengal', price: 42000,
      email: 'story@royallove.com', phone: '+91 98765 43308', website: 'www.royallovestory.com', featured: true
    },
    {
      id: 250, name: 'Divine Romance Studio', rating: 4.9, reviewCount: 312, location: 'Hyderabad, Telangana', price: 50000,
      email: 'studio@divineromance.com', phone: '+91 98765 43309', website: 'www.divineromancestudio.com', featured: true
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
            <Link color="inherit" onClick={() => navigate('/services?category=photography')} sx={{ cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>
              Photography
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
            <Tab label="Service Providers" icon={<PhotoLibrary />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Available Pre-Wedding Photographers
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
                        label="Pre-Wedding Shoot" 
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

export default PreWeddingShootService;