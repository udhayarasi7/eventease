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
  Business,
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

const CorporateCateringService = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const providersPerPage = 6;

  const backgroundImage = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 5,
    name: 'Corporate Catering',
    category: 'catering',
    description: 'Professional corporate catering services for meetings, conferences, office parties, and corporate events. We provide efficient, high-quality catering solutions tailored to your business needs.',
    rating: 4.3,
    reviewCount: 203,
    location: 'Pan India',
    price: '₹85,000',
    featured: true,
    deliveryTime: '1-2 days notice',
  };

  const providers = [
    {
      id: 501, name: 'Corporate Feast Solutions', rating: 4.5, reviewCount: 189, location: 'Mumbai, Maharashtra', price: 120000,
      email: 'solutions@corporatefeast.com', phone: '+91 98765 43610', website: 'www.corporatefeast.com', featured: true
    },
    {
      id: 502, name: 'Business Dining Experts', rating: 4.6, reviewCount: 234, location: 'Delhi, NCR', price: 1500000,
      email: 'experts@businessdining.com', phone: '+91 98765 43611', website: 'www.businessdining.com', featured: true
    },
    {
      id: 503, name: 'Office Catering Pro', rating: 4.4, reviewCount: 156, location: 'Bangalore, Karnataka', price: 950000,
      email: 'pro@officecatering.com', phone: '+91 98765 43612', website: 'www.officecatering.com', featured: false
    },
    {
      id: 504, name: 'Executive Meal Services', rating: 4.7, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 1100000,
      email: 'services@executivemeal.com', phone: '+91 98765 43613', website: 'www.executivemeal.com', featured: true
    },
    {
      id: 505, name: 'Corporate Cuisine Co.', rating: 4.3, reviewCount: 134, location: 'Hyderabad, Telangana', price: 105000,
      email: 'co@corporatecuisine.com', phone: '+91 98765 43614', website: 'www.corporatecuisine.com', featured: false
    },
    {
      id: 506, name: 'Business Buffet Services', rating: 4.5, reviewCount: 198, location: 'Kolkata, West Bengal', price: 105000,
      email: 'services@businessbuffet.com', phone: '+91 98765 43615', website: 'www.businessbuffet.com', featured: true
    },
    {
      id: 507, name: 'Meeting Meal Masters', rating: 4.4, reviewCount: 167, location: 'Pune, Maharashtra', price: 90000,
      email: 'masters@meetingmeal.com', phone: '+91 98765 43616', website: 'www.meetingmeal.com', featured: false
    },
    {
      id: 508, name: 'Premium Corporate Catering', rating: 4.8, reviewCount: 312, location: 'Jaipur, Rajasthan', price: 180000,
      email: 'catering@premiumcorporate.com', phone: '+91 98765 43617', website: 'www.premiumcorporate.com', featured: true
    },
    {
      id: 509, name: 'Conference Catering Pro', rating: 4.5, reviewCount: 145, location: 'Goa', price: 1350000,
      email: 'pro@conferencecatering.com', phone: '+91 98765 43618', website: 'www.conferencecatering.com', featured: false
    },
    {
      id: 510, name: 'Office Lunch Specialists', rating: 4.6, reviewCount: 223, location: 'Ahmedabad, Gujarat', price: 95000,
      email: 'specialists@officelunch.com', phone: '+91 98765 43619', website: 'www.officelunch.com', featured: true
    },
    {
      id: 511, name: 'Corporate Event Caterers', rating: 4.4, reviewCount: 178, location: 'Chandigarh', price: 120000,
      email: 'caterers@corporateevent.com', phone: '+91 98765 43620', website: 'www.corporateevent.com', featured: false
    },
    {
      id: 512, name: 'Business Meeting Meals', rating: 4.3, reviewCount: 156, location: 'Lucknow, Uttar Pradesh', price: 88000,
      email: 'meals@businessmeeting.com', phone: '+91 98765 43621', website: 'www.businessmeeting.com', featured: false
    },
    {
      id: 513, name: 'Executive Dining Solutions', rating: 4.7, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 160000,
      email: 'solutions@executivedining.com', phone: '+91 98765 43622', website: 'www.executivedining.com', featured: true
    },
    {
      id: 514, name: 'Corporate Snack Services', rating: 4.5, reviewCount: 189, location: 'Kerala', price: 85000,
      email: 'services@corporatesnack.com', phone: '+91 98765 43623', website: 'www.corporatesnack.com', featured: false
    },
    {
      id: 515, name: 'Office Party Catering', rating: 4.6, reviewCount: 234, location: 'Delhi, NCR', price: 1400000,
      email: 'catering@officeparty.com', phone: '+91 98765 43624', website: 'www.officeparty.com', featured: true
    },
    {
      id: 516, name: 'Professional Catering Co.', rating: 4.8, reviewCount: 298, location: 'Varanasi, Uttar Pradesh', price: 1250000,
      email: 'co@professionalcatering.com', phone: '+91 98765 43625', website: 'www.professionalcatering.com', featured: false
    },
    {
      id: 517, name: 'Boardroom Dining', rating: 4.4, reviewCount: 167, location: 'Shimla, Himachal', price: 1100000,
      email: 'dining@boardroom.com', phone: '+91 98765 43626', website: 'www.boardroomdining.com', featured: false
    },
    {
      id: 518, name: 'Corporate Lunch Express', rating: 4.7, reviewCount: 245, location: 'Mumbai, Maharashtra', price: 95000,
      email: 'express@corporatelunch.com', phone: '+91 98765 43627', website: 'www.corporatelunch.com', featured: true
    },
    {
      id: 519, name: 'Business Buffet Pro', rating: 4.5, reviewCount: 178, location: 'Chennai, Tamil Nadu', price: 105000,
      email: 'pro@businessbuffet.com', phone: '+91 98765 43628', website: 'www.businessbuffetpro.com', featured: false
    },
    {
      id: 520, name: 'Executive Catering Services', rating: 4.8, reviewCount: 312, location: 'Bangalore, Karnataka', price: 135000,
      email: 'services@executivecatering.com', phone: '+91 98765 43629', website: 'www.executivecatering.com', featured: true
    },
    {
      id: 521, name: 'Corporate Meal Plans', rating: 4.6, reviewCount: 234, location: 'Hyderabad, Telangana', price: 115000,
      email: 'plans@corporatemeal.com', phone: '+91 98765 43630', website: 'www.corporatemeal.com', featured: false
    },
    {
      id: 522, name: 'Office Dining Solutions', rating: 4.7, reviewCount: 289, location: 'Kolkata, West Bengal', price: 125000,
      email: 'solutions@officedining.com', phone: '+91 98765 43631', website: 'www.officedining.com', featured: true
    },
    {
      id: 523, name: 'Business Lunch Specialists', rating: 4.5, reviewCount: 156, location: 'Pune, Maharashtra', price: 980000,
      email: 'specialists@businesslunch.com', phone: '+91 98765 43632', website: 'www.businesslunch.com', featured: false
    },
    {
      id: 524, name: 'Corporate Event Dining', rating: 4.6, reviewCount: 223, location: 'Jaipur, Rajasthan', price: 145000,
      email: 'dining@corporateevent.com', phone: '+91 98765 43633', website: 'www.corporateeventdining.com', featured: true
    },
    {
      id: 525, name: 'Executive Buffet Services', rating: 4.8, reviewCount: 278, location: 'Delhi, NCR', price: 165000,
      email: 'services@executivebuffet.com', phone: '+91 98765 43634', website: 'www.executivebuffet.com', featured: true
    },
    {
      id: 526, name: 'Office Catering Network', rating: 4.7, reviewCount: 245, location: 'Mysore, Karnataka', price: 1100000,
      email: 'network@officecatering.com', phone: '+91 98765 43635', website: 'www.officecateringnetwork.com', featured: true
    },
    {
      id: 527, name: 'Corporate Food Services', rating: 4.4, reviewCount: 189, location: 'Coimbatore, Tamil Nadu', price: 92000,
      email: 'services@corporatefood.com', phone: '+91 98765 43636', website: 'www.corporatefood.com', featured: false
    },
    {
      id: 528, name: 'Business Dining Pro', rating: 4.7, reviewCount: 234, location: 'Ahmedabad, Gujarat', price: 118000,
      email: 'pro@businessdining.com', phone: '+91 98765 43637', website: 'www.businessdiningpro.com', featured: true
    },
    {
      id: 529, name: 'Executive Lunch Services', rating: 4.9, reviewCount: 312, location: 'Goa', price: 155000,
      email: 'services@executivelunch.com', phone: '+91 98765 43638', website: 'www.executivelunch.com', featured: true
    },
    {
      id: 530, name: 'Corporate Meal Delivery', rating: 4.4, reviewCount: 167, location: 'Chandigarh', price: 850000,
      email: 'delivery@corporatemeal.com', phone: '+91 98765 43639', website: 'www.corporatemealdelivery.com', featured: false
    },
    {
      id: 531, name: 'Office Event Catering', rating: 4.7, reviewCount: 245, location: 'Lucknow, Uttar Pradesh', price: 1280000,
      email: 'catering@officeevent.com', phone: '+91 98765 43640', website: 'www.officeevent.com', featured: true
    },
    {
      id: 532, name: 'Business Catering Solutions', rating: 4.8, reviewCount: 289, location: 'Amritsar, Punjab', price: 1350000,
      email: 'solutions@businesscatering.com', phone: '+91 98765 43641', website: 'www.businesscatering.com', featured: true
    },
    {
      id: 533, name: 'Corporate Dining Express', rating: 4.4, reviewCount: 178, location: 'Bhopal, Madhya Pradesh', price: 950000,
      email: 'express@corporatedining.com', phone: '+91 98765 43642', website: 'www.corporatedining.com', featured: false
    },
    {
      id: 534, name: 'Executive Meal Plans', rating: 4.7, reviewCount: 223, location: 'Indore, Madhya Pradesh', price: 115000,
      email: 'plans@executivemeal.com', phone: '+91 98765 43643', website: 'www.executivemealplans.com', featured: true
    },
    {
      id: 535, name: 'Corporate Buffet Masters', rating: 4.9, reviewCount: 267, location: 'Jodhpur, Rajasthan', price: 1750000,
      email: 'masters@corporatebuffet.com', phone: '+91 98765 43644', website: 'www.corporatebuffet.com', featured: true
    },
    {
      id: 536, name: 'Office Lunch Delivery', rating: 4.5, reviewCount: 189, location: 'Kochi, Kerala', price: 78000,
      email: 'delivery@officelunch.com', phone: '+91 98765 43645', website: 'www.officelunchdelivery.com', featured: false
    },
    {
      id: 537, name: 'Business Meeting Catering', rating: 4.7, reviewCount: 234, location: 'Nagpur, Maharashtra', price: 105000,
      email: 'catering@businessmeeting.com', phone: '+91 98765 43646', website: 'www.businessmeetingcatering.com', featured: true
    },
    {
      id: 538, name: 'Corporate Snack Solutions', rating: 4.8, reviewCount: 278, location: 'Surat, Gujarat', price: 88000,
      email: 'solutions@corporatesnack.com', phone: '+91 98765 43647', website: 'www.corporatesnacksolutions.com', featured: true
    },
    {
      id: 539, name: 'Executive Office Catering', rating: 4.4, reviewCount: 156, location: 'Visakhapatnam, Andhra', price: 980000,
      email: 'catering@executiveoffice.com', phone: '+91 98765 43648', website: 'www.executiveoffice.com', featured: false
    },
    {
      id: 540, name: 'Corporate Lunch Network', rating: 4.7, reviewCount: 245, location: 'Patna, Bihar', price: 102000,
      email: 'network@corporatelunch.com', phone: '+91 98765 43649', website: 'www.corporatelunchnetwork.com', featured: true
    },
    {
      id: 541, name: 'Business Dining Network', rating: 4.9, reviewCount: 312, location: 'Guwahati, Assam', price: 142000,
      email: 'network@businessdining.com', phone: '+91 98765 43650', website: 'www.businessdiningnetwork.com', featured: true
    },
    {
      id: 542, name: 'Office Meal Solutions', rating: 4.4, reviewCount: 178, location: 'Bhubaneswar, Odisha', price: 890000,
      email: 'solutions@officemeal.com', phone: '+91 98765 43651', website: 'www.officemeal.com', featured: false
    },
    {
      id: 543, name: 'Corporate Event Food', rating: 4.7, reviewCount: 223, location: 'Dehradun, Uttarakhand', price: 135000,
      email: 'food@corporateevent.com', phone: '+91 98765 43652', website: 'www.corporateeventfood.com', featured: true
    },
    {
      id: 544, name: 'Executive Catering Pro', rating: 4.9, reviewCount: 289, location: 'Udaipur, Rajasthan', price: 1950000,
      email: 'pro@executivecatering.com', phone: '+91 98765 43653', website: 'www.executivecateringpro.com', featured: true
    },
    {
      id: 545, name: 'Business Lunch Express', rating: 4.5, reviewCount: 167, location: 'Mumbai, Maharashtra', price: 950000,
      email: 'express@businesslunch.com', phone: '+91 98765 43654', website: 'www.businesslunchexpress.com', featured: false
    },
    {
      id: 546, name: 'Corporate Dining Pro', rating: 4.8, reviewCount: 234, location: 'Delhi, NCR', price: 155000,
      email: 'pro@corporatedining.com', phone: '+91 98765 43655', website: 'www.corporatediningpro.com', featured: true
    },
    {
      id: 547, name: 'Office Event Dining', rating: 4.9, reviewCount: 278, location: 'Bangalore, Karnataka', price: 1450000,
      email: 'dining@officeevent.com', phone: '+91 98765 43656', website: 'www.officeeventdining.com', featured: true
    },
    {
      id: 548, name: 'Business Catering Pro', rating: 4.5, reviewCount: 189, location: 'Chennai, Tamil Nadu', price: 112000,
      email: 'pro@businesscatering.com', phone: '+91 98765 43657', website: 'www.businesscateringpro.com', featured: false
    },
    {
      id: 549, name: 'Corporate Meal Services', rating: 4.7, reviewCount: 245, location: 'Kolkata, West Bengal', price: 128000,
      email: 'services@corporatemeal.com', phone: '+91 98765 43658', website: 'www.corporatemealservices.com', featured: true
    },
    {
      id: 550, name: 'Executive Office Dining', rating: 4.9, reviewCount: 312, location: 'Hyderabad, Telangana', price: 1650000,
      email: 'dining@executiveoffice.com', phone: '+91 98765 43659', website: 'www.executiveofficedining.com', featured: true
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
            <Tab label="Service Providers" icon={<Business />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Available Corporate Caterers
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
                        label="Corporate Catering" 
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

export default CorporateCateringService;