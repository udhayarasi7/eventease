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
  Videocam,
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

const EventVideographyService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 3,
    name: 'Event Videography',
    category: 'videography',
    description: 'Professional event videography services to capture your special moments in motion. Our expert videographers specialize in cinematic storytelling, drone shots, and professional editing.',
    rating: 4.6,
    reviewCount: 67,
    location: 'Pan India',
    price: '₹35,000',
    featured: true,
    deliveryTime: '2-3 weeks',
  };

  const providers = [
    {
      id: 301, name: 'Cinematic Moments Studio', rating: 4.8, reviewCount: 189, location: 'Mumbai, Maharashtra', price: 75000,
      email: 'hello@cinematicmoments.com', phone: '+91 98765 43410', website: 'www.cinematicmoments.com', featured: true
    },
    {
      id: 302, name: 'Motion Magic Films', rating: 4.9, reviewCount: 234, location: 'Delhi, NCR', price: 95000,
      email: 'films@motionmagic.com', phone: '+91 98765 43411', website: 'www.motionmagicfilms.com', featured: true
    },
    {
      id: 303, name: 'Epic Video Productions', rating: 4.7, reviewCount: 156, location: 'Bangalore, Karnataka', price: 65000,
      email: 'productions@epicvideo.com', phone: '+91 98765 43412', website: 'www.epicvideoproductions.com', featured: false
    },
    {
      id: 304, name: 'Dream Reel Studios', rating: 4.8, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 72000,
      email: 'studios@dreamreel.com', phone: '+91 98765 43413', website: 'www.dreamreelstudios.com', featured: true
    },
    {
      id: 305, name: 'Visual Symphony Films', rating: 4.6, reviewCount: 134, location: 'Hyderabad, Telangana', price: 58000,
      email: 'films@visualsymphony.com', phone: '+91 98765 43414', website: 'www.visualsymphonyfilms.com', featured: false
    },
    {
      id: 306, name: 'Timeless Motion Pictures', rating: 4.8, reviewCount: 198, location: 'Kolkata, West Bengal', price: 68000,
      email: 'pictures@timelessmotion.com', phone: '+91 98765 43415', website: 'www.timelessmotionpictures.com', featured: true
    },
    {
      id: 307, name: 'Action Frame Videos', rating: 4.7, reviewCount: 167, location: 'Pune, Maharashtra', price: 52000,
      email: 'videos@actionframe.com', phone: '+91 98765 43416', website: 'www.actionframevideos.com', featured: false
    },
    {
      id: 308, name: 'Royal Cinematography', rating: 4.9, reviewCount: 312, location: 'Jaipur, Rajasthan', price: 120000,
      email: 'cinema@royal.com', phone: '+91 98765 43417', website: 'www.royalcinematography.com', featured: true
    },
    {
      id: 309, name: 'Drone Vision Films', rating: 4.7, reviewCount: 145, location: 'Goa', price: 85000,
      email: 'films@dronevision.com', phone: '+91 98765 43418', website: 'www.dronevisionfilms.com', featured: false
    },
    {
      id: 310, name: 'Magic Motion Studio', rating: 4.8, reviewCount: 223, location: 'Ahmedabad, Gujarat', price: 62000,
      email: 'studio@magicmotion.com', phone: '+91 98765 43419', website: 'www.magicmotionstudio.com', featured: true
    },
    {
      id: 311, name: 'Cine Story Productions', rating: 4.7, reviewCount: 178, location: 'Chandigarh', price: 48000,
      email: 'productions@cinestory.com', phone: '+91 98765 43420', website: 'www.cinestoryproductions.com', featured: false
    },
    {
      id: 312, name: 'Vintage Reel Studio', rating: 4.6, reviewCount: 156, location: 'Lucknow, Uttar Pradesh', price: 45000,
      email: 'studio@vintagereel.com', phone: '+91 98765 43421', website: 'www.vintagereelstudio.com', featured: false
    },
    {
      id: 313, name: 'Majestic Motion Films', rating: 4.9, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 110000,
      email: 'films@majesticmotion.com', phone: '+91 98765 43422', website: 'www.majesticmotionfilms.com', featured: true
    },
    {
      id: 314, name: 'Pure Motion Videos', rating: 4.7, reviewCount: 189, location: 'Kerala', price: 68000,
      email: 'videos@puremotion.com', phone: '+91 98765 43423', website: 'www.puremotionvideos.com', featured: false
    },
    {
      id: 315, name: 'Elegant Motion Pictures', rating: 4.8, reviewCount: 234, location: 'Delhi, NCR', price: 88000,
      email: 'pictures@elegantmotion.com', phone: '+91 98765 43424', website: 'www.elegantmotionpictures.com', featured: true
    },
    {
      id: 316, name: 'Divine Video Productions', rating: 4.9, reviewCount: 298, location: 'Varanasi, Uttar Pradesh', price: 78000,
      email: 'productions@divinevideo.com', phone: '+91 98765 43425', website: 'www.divinevideoproductions.com', featured: false
    },
    {
      id: 317, name: 'Serene Motion Studio', rating: 4.7, reviewCount: 167, location: 'Shimla, Himachal', price: 58000,
      email: 'studio@serenemotion.com', phone: '+91 98765 43426', website: 'www.serenemotionstudio.com', featured: false
    },
    {
      id: 318, name: 'Grand Video Productions', rating: 4.8, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 95000,
      email: 'productions@grandvideo.com', phone: '+91 98765 43427', website: 'www.grandvideoproductions.com', featured: true
    },
    {
      id: 319, name: 'Radiant Motion Films', rating: 4.7, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 65000,
      email: 'films@radiantmotion.com', phone: '+91 98765 43428', website: 'www.radiantmotionfilms.com', featured: false
    },
    {
      id: 320, name: 'Precious Motion Memories', rating: 4.9, reviewCount: 312, location: 'Bangalore, Karnataka', price: 82000,
      email: 'memories@preciousmotion.com', phone: '+91 98765 43429', website: 'www.preciousmotionmemories.com', featured: true
    },
    {
      id: 321, name: 'Blissful Video Stories', rating: 4.8, reviewCount: 234, location: 'Hyderabad, Telangana', price: 72000,
      email: 'stories@blissfulvideo.com', phone: '+91 98765 43430', website: 'www.blissfulvideostories.com', featured: false
    },
    {
      id: 322, name: 'Eternal Motion Pictures', rating: 4.9, reviewCount: 289, location: 'Kolkata, West Bengal', price: 88000,
      email: 'pictures@eternalmotion.com', phone: '+91 98765 43431', website: 'www.eternalmotionpictures.com', featured: true
    },
    {
      id: 323, name: 'Magic Reel Studio', rating: 4.7, reviewCount: 156, location: 'Pune, Maharashtra', price: 55000,
      email: 'studio@magicreel.com', phone: '+91 98765 43432', website: 'www.magicreelstudio.com', featured: false
    },
    {
      id: 324, name: 'Heavenly Motion Films', rating: 4.8, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 78000,
      email: 'films@heavenlymotion.com', phone: '+91 98765 43433', website: 'www.heavenlymotionfilms.com', featured: true
    },
    {
      id: 325, name: 'Divine Motion Studio', rating: 4.9, reviewCount: 278, location: 'Delhi, NCR', price: 105000,
      email: 'studio@divinemotion.com', phone: '+91 98765 43434', website: 'www.divinemotionstudio.com', featured: true
    },
    {
      id: 326, name: 'Royal Video Productions', rating: 4.8, reviewCount: 245, location: 'Mysore, Karnataka', price: 92000,
      email: 'productions@royalvideo.com', phone: '+91 98765 43435', website: 'www.royalvideoproductions.com', featured: true
    },
    {
      id: 327, name: 'Cherished Motion Memories', rating: 4.7, reviewCount: 189, location: 'Coimbatore, Tamil Nadu', price: 68000,
      email: 'memories@cherishedmotion.com', phone: '+91 98765 43436', website: 'www.cherishedmotionmemories.com', featured: false
    },
    {
      id: 328, name: 'Perfect Motion Shots', rating: 4.8, reviewCount: 234, location: 'Ahmedabad, Gujarat', price: 72000,
      email: 'shots@perfectmotion.com', phone: '+91 98765 43437', website: 'www.perfectmotionshots.com', featured: true
    },
    {
      id: 329, name: 'Dream Motion Films', rating: 4.9, reviewCount: 312, location: 'Goa', price: 125000,
      email: 'films@dreammotion.com', phone: '+91 98765 43438', website: 'www.dreammotionfilms.com', featured: true
    },
    {
      id: 330, name: 'Elegant Video Expressions', rating: 4.7, reviewCount: 167, location: 'Chandigarh', price: 60000,
      email: 'expressions@elegantvideo.com', phone: '+91 98765 43439', website: 'www.elegantvideoexpressions.com', featured: false
    },
    {
      id: 331, name: 'Timeless Video Treasures', rating: 4.8, reviewCount: 245, location: 'Lucknow, Uttar Pradesh', price: 75000,
      email: 'treasures@timelessvideo.com', phone: '+91 98765 43440', website: 'www.timelessvideotreasures.com', featured: true
    },
    {
      id: 332, name: 'Sacred Motion Studio', rating: 4.9, reviewCount: 289, location: 'Amritsar, Punjab', price: 82000,
      email: 'studio@sacredmotion.com', phone: '+91 98765 43441', website: 'www.sacredmotionstudio.com', featured: true
    },
    {
      id: 333, name: 'Blissful Motion Beginnings', rating: 4.7, reviewCount: 178, location: 'Bhopal, Madhya Pradesh', price: 58000,
      email: 'beginnings@blissfulmotion.com', phone: '+91 98765 43442', website: 'www.blissfulmotionbeginnings.com', featured: false
    },
    {
      id: 334, name: 'Golden Motion Memories', rating: 4.8, reviewCount: 223, location: 'Indore, Madhya Pradesh', price: 65000,
      email: 'memories@goldenmotion.com', phone: '+91 98765 43443', website: 'www.goldenmotionmemories.com', featured: true
    },
    {
      id: 335, name: 'Royal Heritage Videos', rating: 4.9, reviewCount: 267, location: 'Jodhpur, Rajasthan', price: 115000,
      email: 'videos@royalheritage.com', phone: '+91 98765 43444', website: 'www.royalheritagevideos.com', featured: true
    },
    {
      id: 336, name: 'Divine Light Motion', rating: 4.7, reviewCount: 189, location: 'Kochi, Kerala', price: 62000,
      email: 'motion@divinelight.com', phone: '+91 98765 43445', website: 'www.divinelightmotion.com', featured: false
    },
    {
      id: 337, name: 'Eternal Love Videos', rating: 4.8, reviewCount: 234, location: 'Nagpur, Maharashtra', price: 68000,
      email: 'videos@eternallove.com', phone: '+91 98765 43446', website: 'www.eternallovevideos.com', featured: true
    },
    {
      id: 338, name: 'Magic Touch Videos', rating: 4.9, reviewCount: 278, location: 'Surat, Gujarat', price: 75000,
      email: 'videos@magictouch.com', phone: '+91 98765 43447', website: 'www.magictouchvideos.com', featured: true
    },
    {
      id: 339, name: 'Heavenly Wedding Videos', rating: 4.7, reviewCount: 156, location: 'Visakhapatnam, Andhra', price: 65000,
      email: 'videos@heavenlywedding.com', phone: '+91 98765 43448', website: 'www.heavenlyweddingvideos.com', featured: false
    },
    {
      id: 340, name: 'Royal Motion Studio', rating: 4.8, reviewCount: 245, location: 'Patna, Bihar', price: 70000,
      email: 'studio@royalmotion.com', phone: '+91 98765 43449', website: 'www.royalmotionstudio.com', featured: true
    },
    {
      id: 341, name: 'Divine Wedding Videos', rating: 4.9, reviewCount: 312, location: 'Guwahati, Assam', price: 82000,
      email: 'videos@divinewedding.com', phone: '+91 98765 43450', website: 'www.divineweddingvideos.com', featured: true
    },
    {
      id: 342, name: 'Elegant Event Videos', rating: 4.7, reviewCount: 178, location: 'Bhubaneswar, Odisha', price: 58000,
      email: 'videos@elegantevent.com', phone: '+91 98765 43451', website: 'www.eleganteventvideos.com', featured: false
    },
    {
      id: 343, name: 'Timeless Event Studio', rating: 4.8, reviewCount: 223, location: 'Dehradun, Uttarakhand', price: 72000,
      email: 'studio@timelessevent.com', phone: '+91 98765 43452', website: 'www.timelesseventstudio.com', featured: true
    },
    {
      id: 344, name: 'Royal Palace Videos', rating: 4.9, reviewCount: 289, location: 'Udaipur, Rajasthan', price: 135000,
      email: 'videos@royalpalace.com', phone: '+91 98765 43453', website: 'www.royalpalacevideos.com', featured: true
    },
    {
      id: 345, name: 'Divine Celebration Videos', rating: 4.7, reviewCount: 167, location: 'Mumbai, Maharashtra', price: 85000,
      email: 'videos@divinecelebration.com', phone: '+91 98765 43454', website: 'www.divinecelebrationvideos.com', featured: false
    },
    {
      id: 346, name: 'Eternal Bliss Videos', rating: 4.8, reviewCount: 234, location: 'Delhi, NCR', price: 95000,
      email: 'videos@eternalbliss.com', phone: '+91 98765 43455', website: 'www.eternalblissvideos.com', featured: true
    },
    {
      id: 347, name: 'Magic Wedding Videos', rating: 4.9, reviewCount: 278, location: 'Bangalore, Karnataka', price: 88000,
      email: 'videos@magicwedding.com', phone: '+91 98765 43456', website: 'www.magicweddingvideos.com', featured: true
    },
    {
      id: 348, name: 'Heavenly Bliss Studio', rating: 4.7, reviewCount: 189, location: 'Chennai, Tamil Nadu', price: 68000,
      email: 'studio@heavenlybliss.com', phone: '+91 98765 43457', website: 'www.heavenlyblissstudio.com', featured: false
    },
    {
      id: 349, name: 'Royal Celebration Videos', rating: 4.8, reviewCount: 245, location: 'Kolkata, West Bengal', price: 82000,
      email: 'videos@royalcelebration.com', phone: '+91 98765 43458', website: 'www.royalcelebrationvideos.com', featured: true
    },
    {
      id: 350, name: 'Divine Union Videos', rating: 4.9, reviewCount: 312, location: 'Hyderabad, Telangana', price: 98000,
      email: 'videos@divineunion.com', phone: '+91 98765 43459', website: 'www.divineunionvideos.com', featured: true
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
            <Link color="inherit" onClick={() => navigate('/services?category=videography')} sx={{ cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>
              Videography
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
            <Tab label="Service Providers" icon={<Videocam />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Available Event Videographers
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
                        label="Event Videography" 
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

export default EventVideographyService;
