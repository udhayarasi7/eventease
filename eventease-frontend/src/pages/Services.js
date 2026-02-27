import React, { useState, useMemo } from 'react';
import stageImage from '../../src/components/images/stage.jpg';
import dance from '../../src/components/images/dance.webp';
import wp from '../../src/components/images/wp.webp';
import meh from '../../src/components/images/mehndi.jpeg';
import fire from '../../src/components/images/fireworks.webp';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Rating,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Avatar,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Slider,
} from '@mui/material';
import { Search, LocationOn } from '@mui/icons-material';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('All Locations');
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Enhanced services list with more categories and services
  const allServices = [
    // Photography Services
    {
      id: 1,
      name: 'Wedding Photography',
      category: 'photography',
      rating: 4.8,
      reviewCount: 124,
      location: 'Pan India',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: '1-2 weeks',
      details: {
        description: 'Capture your special day with our professional wedding photography services. We specialize in candid, traditional, and contemporary styles to create timeless memories.',
        inclusions: ['Pre-wedding shoot', 'Full day coverage', '500+ edited photos', 'Online gallery', '2 photographers'],
        duration: '8-12 hours',
        popularPackages: ['Basic: ₹25,000', 'Premium: ₹45,000', 'Luxury: ₹75,000']
      }
    },
    {
      id: 2,
      name: 'Pre-Wedding Shoot',
      category: 'photography',
      rating: 4.7,
      reviewCount: 89,
      location: 'Pan India',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: '1 week'
    },
    {
      id: 3,
      name: 'Event Videography',
      category: 'photography',
      rating: 4.6,
      reviewCount: 67,
      location: 'Pan India',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: '2-3 weeks'
    },

    // Catering Services
    {
      id: 4,
      name: 'Wedding Catering',
      category: 'catering',
      rating: 4.5,
      reviewCount: 156,
      location: 'Pan India',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'Custom'
    },
    {
      id: 5,
      name: 'Corporate Catering',
      category: 'catering',
      rating: 4.4,
      reviewCount: 92,
      location: 'Metro Cities',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: '1-3 days'
    },
    {
      id: 6,
      name: 'South Indian Specialists',
      category: 'catering',
      rating: 4.8,
      reviewCount: 134,
      location: 'South India',
      price: 70000,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: '2-5 days'
    },

    // Decoration Services
    {
      id: 7,
      name: 'Wedding Decorations',
      category: 'decoration',
      rating: 4.9,
      reviewCount: 203,
      location: 'Pan India',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'Setup on event day'
    },
    {
      id: 8,
      name: 'Floral Arrangements',
      category: 'decoration',
      rating: 4.7,
      reviewCount: 145,
      location: 'Pan India',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'Same day'
    },
    {
      id: 9,
      name: 'Stage Decorations',
      category: 'decoration',
      rating: 4.6,
      reviewCount: 98,
      location: 'Pan India',
      price: 25000,
      image: stageImage,
      featured: true,
      deliveryTime: 'Setup on event day'
    },

    // Entertainment Services
    {
      id: 10,
      name: 'DJ Services',
      category: 'entertainment',
      rating: 4.7,
      reviewCount: 178,
      location: 'Pan India',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'On event day'
    },
    {
      id: 11,
      name: 'Live Band Music',
      category: 'entertainment',
      rating: 4.5,
      reviewCount: 112,
      location: 'Metro Cities',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'On event day'
    },
    {
      id: 12,
      name: 'Dance Troups',
      category: 'entertainment',
      rating: 4.8,
      reviewCount: 89,
      location: 'Pan India',
      price: 15000,
      image: dance,
      featured: true,
      deliveryTime: 'On event day'
    },

    // Planning Services
    {
      id: 13,
      name: 'Wedding Planning',
      category: 'planning',
      rating: 4.9,
      reviewCount: 267,
      location: 'Pan India',
      price: 100000,
      image: wp,
      featured: true,
      deliveryTime: 'Custom'
    },
    {
      id: 14,
      name: 'Corporate Event Planning',
      category: 'planning',
      rating: 4.7,
      reviewCount: 156,
      location: 'Metro Cities',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'Custom'
    },

    // Venue Services
    {
      id: 15,
      name: 'Banquet Halls',
      category: 'venue',
      rating: 4.6,
      reviewCount: 234,
      location: 'Pan India',
      price: 80000,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'As booked'
    },
    {
      id: 16,
      name: 'Beach Wedding Venues',
      category: 'venue',
      rating: 4.8,
      reviewCount: 145,
      location: 'Goa, Kerala',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'As booked'
    },

    // Makeup Services
    {
      id: 17,
      name: 'Bridal Makeup',
      category: 'makeup',
      rating: 4.8,
      reviewCount: 189,
      location: 'Pan India',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'On wedding day'
    },
    {
      id: 18,
      name: 'Groom Makeup',
      category: 'makeup',
      rating: 4.5,
      reviewCount: 78,
      location: 'Pan India',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'On wedding day'
    },

    // Transportation Services
    {
      id: 19,
      name: 'Luxury Car Rental',
      category: 'transportation',
      rating: 4.6,
      reviewCount: 134,
      location: 'Metro Cities',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'As booked'
    },
    {
      id: 20,
      name: 'Vintage Car Collection',
      category: 'transportation',
      rating: 4.7,
      reviewCount: 89,
      location: 'Metro Cities',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'As booked'
    },

    // New Additional Services
    {
      id: 21,
      name: 'Mehndi Artists',
      category: 'decoration',
      rating: 4.9,
      reviewCount: 213,
      location: 'Pan India',
      price: 7000,
      image: meh,
      featured: true,
      deliveryTime: '1-2 days before event'
    },
    {
      id: 22,
      name: 'Fireworks Display',
      category: 'entertainment',
      rating: 4.6,
      reviewCount: 67,
      location: 'Selected Cities',
      price: 45000,
      image: fire,
      featured: true,
      deliveryTime: 'On event day'
    },
    {
      id: 23,
      name: 'Destination Wedding Planning',
      category: 'planning',
      rating: 4.8,
      reviewCount: 156,
      location: 'Pan India',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1506970840172-9ccfde1b6c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: true,
      deliveryTime: 'Custom'
    },
    {
      id: 24,
      name: 'Traditional Musicians',
      category: 'entertainment',
      rating: 4.7,
      reviewCount: 98,
      location: 'Pan India',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featured: false,
      deliveryTime: 'On event day'
    }
  ];

  const categories = [
    'all',
    'photography',
    'catering',
    'decoration',
    'entertainment',
    'planning',
    'venue',
    'makeup',
    'transportation'
  ];

  const locations = [
    'All Locations',
    'Pan India',
    'Metro Cities',
    'South India',
    'North India',
    'Goa, Kerala',
    'Selected Cities'
  ];

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(service => service.category === category);
    }

    if (location !== 'All Locations') {
      filtered = filtered.filter(service => service.location === location);
    }

    if (minRating > 0) {
      filtered = filtered.filter(service => service.rating >= minRating);
    }

    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    return filtered;
  }, [searchTerm, category, location, minRating, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRatingChange = (event, newValue) => {
    setMinRating(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, location, minRating, priceRange]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Event Services
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Discover {filteredServices.length}+ professional services for your perfect event
      </Typography>

      {/* Search and Filter Section */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 4, 
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>
        <TextField
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 200, flexGrow: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Rating and Price Filters */}
      <Box sx={{ mb: 4, p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Minimum Rating: {minRating.toFixed(1)}+
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Slider
                value={minRating}
                onChange={handleRatingChange}
                min={0}
                max={5}
                step={0.5}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}+`}
                sx={{ flexGrow: 1 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 100 }}>
                <Rating value={minRating} precision={0.5} readOnly size="small" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                min={0}
                max={100000}
                step={5000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => formatPrice(value)}
                sx={{ flexGrow: 1 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Results Count */}
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Showing {currentServices.length} of {filteredServices.length} services
        {searchTerm && ` for "${searchTerm}"`}
        {category !== 'all' && ` in ${category}`}
        {minRating > 0 && ` with ${minRating}+ rating`}
      </Typography>

      {/* Services Grid */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
        gap: 3,
        justifyItems: 'center',
      }}>
        {currentServices.length > 0 ? (
          currentServices.map((service) => (
            <Card
              key={service.id}
              sx={{
                width: '100%',
                maxWidth: 380,
                height: 480,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              {service.featured && (
                <Chip
                  label="Featured"
                  color="primary"
                  size="small"
                  sx={{ 
                    position: 'absolute', 
                    top: 10, 
                    left: 10, 
                    zIndex: 1 
                  }}
                />
              )}

              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.name}
                sx={{
                  objectFit: 'cover',
                }}
              />

              <CardContent sx={{ 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                p: 3,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Avatar 
                    src={service.image} 
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      mr: 2,
                      flexShrink: 0 
                    }}
                  />
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography 
                      variant="h6" 
                      fontWeight="bold" 
                      sx={{ mb: 0.5, lineHeight: 1.2 }}
                    >
                      {service.name}
                    </Typography>
                    <Chip 
                      label={formatPrice(service.price)} 
                      size="small" 
                      color="secondary"
                    />
                  </Box>
                </Box>

                <Chip 
                  label={service.category} 
                  variant="outlined" 
                  size="small" 
                  sx={{ 
                    mb: 2,
                    alignSelf: 'flex-start'
                  }}
                />
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 2,
                    flexGrow: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {service.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <LocationOn sx={{ 
                    fontSize: 18, 
                    color: 'text.secondary', 
                    mr: 0.5,
                    flexShrink: 0
                  }} />
                  <Typography variant="body2" color="text.secondary">
                    {service.location}
                  </Typography>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 2 
                }}>
                  <Rating 
                    value={service.rating} 
                    precision={0.1} 
                    readOnly 
                    size="small" 
                  />
                  <Typography variant="body2">
                    {service.rating} ({service.reviewCount} reviews)
                  </Typography>
                </Box>

                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ mt: 'auto' }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No services found matching your criteria.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Try adjusting your search terms or filters.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Pagination */}
      {filteredServices.length > servicesPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={currentPage}
            onChange={handlePageChange}
            color="primary" 
            size="large"
            showFirstButton 
            showLastButton
          />
        </Box>
      )}
    </Container>
  );
};

export default Services;