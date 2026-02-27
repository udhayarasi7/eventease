import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [backendProviders, setBackendProviders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const providersPerPage = 6;

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const backgroundImage = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const service = {
    id: 1,
    name: 'Wedding Photography',
    category: 'photography',
    description: 'Professional wedding photography services to capture your special day with beautiful memories.',
    rating: 4.8,
    reviewCount: 124,
    location: 'Pan India',
    price: '₹25,000',
    featured: true,
    deliveryTime: '1-2 weeks',
  };

  // Fetch vendors from backend by category
  React.useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/vendors/category/${service.category}`);
        
        // Transform backend vendor data to match frontend format
        const transformedVendors = response.data.map((vendor) => ({
          id: vendor._id,
          backendId: vendor._id,
          _id: vendor._id,
          name: vendor.name,
          rating: vendor.rating || 0,
          reviewCount: vendor.reviewsCount || 0,
          location: vendor.location?.city 
            ? `${vendor.location.city}, ${vendor.location.state || vendor.location.country || ''}`
            : vendor.shopAddress?.city
            ? `${vendor.shopAddress.city}, ${vendor.shopAddress.state || ''}`
            : 'Location not specified',
          price: vendor.price || 0,
          email: vendor.contact?.email || '',
          phone: vendor.contact?.phone || '',
          website: vendor.contact?.website || '',
          featured: vendor.featured || false,
        }));
        
        setBackendProviders(transformedVendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setBackendProviders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [service.category, API_URL]);

  const hardcodedProviders = [
    {
  id: 101,
  backendId: '691883fab0adba50547368b2',
  name: 'Dreamscape Photography',
  rating: 4.9,
  reviewCount: 234,
  location: 'Mumbai, Maharashtra',
  price: 35000,
  email: 'hello@dreamscape.com',
  phone: '+91 98765 43210',
  website: 'www.dreamscape.com',
  featured: true
},
{
  id: 102,
  backendId: '691883fab0adba50547368b3',
  name: 'Ethereal Images Studio',
  rating: 4.8,
  reviewCount: 189,
  location: 'Delhi, NCR',
  price: 45000,
  email: 'studio@ethereal.com',
  phone: '+91 98765 43211',
  website: 'www.ethereal.com',
  featured: true
},
{
  id: 103,
  backendId: '691883fab0adba50547368b4',
  name: 'Heartstrings Photography',
  rating: 4.7,
  reviewCount: 156,
  location: 'Bangalore, Karnataka',
  price: 28000,
  email: 'connect@heartstrings.com',
  phone: '+91 98765 43212',
  website: 'www.heartstrings.com',
  featured: false
},
    {
      id: 104,backendId: '691883fab0adba50547368b5', name: 'Soulful Snapshots', rating: 4.9, reviewCount: 278, location: 'Chennai, Tamil Nadu', price: 95000,
      email: 'info@soulful.com', phone: '+91 98765 43213', website: 'www.soulful.com', featured: true
    },
    {
      id: 105,backendId: '691883fab0adba50547368b6',  name: 'Luminous Moments', rating: 4.6, reviewCount: 134, location: 'Hyderabad, Telangana', price: 55000,
      email: 'moments@luminous.com', phone: '+91 98765 43214', website: 'www.luminous.com', featured: false
    },
    {
      id: 106,backendId: '691883fab0adba50547368b7', name: 'Timeless Visuals', rating: 4.8, reviewCount: 198, location: 'Kolkata, West Bengal', price: 72000,
      email: 'visuals@timeless.com', phone: '+91 98765 43215', website: 'www.timeless.com', featured: true
    },
    {
      id: 107, name: 'Blissful Frames',backendId: '691883fab0adba50547368b8', rating: 4.7, reviewCount: 167, location: 'Pune, Maharashtra', price: 48000,
      email: 'frames@blissful.com', phone: '+91 98765 43216', website: 'www.blissful.com', featured: false
    },
    {
      id: 108, name: 'Royal Lens Studio',backendId: '691883fab0adba50547368b9', rating: 4.9, reviewCount: 312, location: 'Jaipur, Rajasthan', price: 150000,
      email: 'royal@lensstudio.com', phone: '+91 98765 43217', website: 'www.royallens.com', featured: true
    },
    {
      id: 109, name: 'Enchanted Visuals',backendId: '691883fab0adba50547368ba', rating: 4.7, reviewCount: 145, location: 'Goa', price: 280000,
      email: 'goa@enchanted.com', phone: '+91 98765 43218', website: 'www.enchantedgoa.com', featured: false
    },
    {
      id: 110, name: 'Celestial Shots',backendId: '691883fab0adba50547368bb', rating: 4.8, reviewCount: 223, location: 'Ahmedabad, Gujarat', price: 68000,
      email: 'shots@celestial.com', phone: '+91 98765 43219', website: 'www.celestial.com', featured: true
    },
    {
      id: 111, name: 'Golden Hour Photography', backendId: '691883fab0adba50547368bc',rating: 4.7, reviewCount: 178, location: 'Chandigarh', price: 45000,
      email: 'golden@hour.com', phone: '+91 98765 43220', website: 'www.goldenhour.com', featured: false
    },
    {
      id: 112, name: 'Vintage Vows Studio',backendId: '691883fab0adba50547368bd', rating: 4.6, reviewCount: 156, location: 'Lucknow, Uttar Pradesh', price: 52000,
      email: 'vintage@vows.com', phone: '+91 98765 43221', website: 'www.vintagevows.com', featured: false
    },
    {
      id: 113, name: 'Majestic Moments',backendId: '691883fab0adba50547368be', rating: 4.9, reviewCount: 267, location: 'Udaipur, Rajasthan', price: 220000,
      email: 'info@majestic.com', phone: '+91 98765 43222', website: 'www.majestic.com', featured: true
    },
    {
      id: 114, name: 'Pure Emotions', rating: 4.7,backendId: '691883fab0adba50547368bf', reviewCount: 189, location: 'Kerala', price: 75000,
      email: 'emotions@pure.com', phone: '+91 98765 43223', website: 'www.pureemotions.com', featured: false
    },
    {
      id: 115, name: 'Elegant Frames',backendId: '691883fab0adba50547368c0', rating: 4.8, reviewCount: 234, location: 'Delhi, NCR', price: 95000,
      email: 'frames@elegant.com', phone: '+91 98765 43224', website: 'www.elegantframes.com', featured: true
    },
    {
      id: 116, name: 'Divine Captures',backendId: '691883fab0adba50547368c1', rating: 4.9, reviewCount: 298, location: 'Varanasi, Uttar Pradesh', price: 85000,
      email: 'captures@divine.com', phone: '+91 98765 43225', website: 'www.divinecaptures.com', featured: false
    },
    {
      id: 117, name: 'Serene Shots',backendId: '691883fab0adba50547368c2', rating: 4.7, reviewCount: 167, location: 'Shimla, Himachal', price: 65000,
      email: 'shots@serene.com', phone: '+91 98765 43226', website: 'www.sereneshots.com', featured: false
    },
    {
  id: 118,
  name: 'Grand Visuals',
  backendId: '691883fab0adba50547368c3',
  rating: 4.8,
  reviewCount: 245,
  location: 'Mumbai, Maharashtra',
  price: 180000,
  email: 'visuals@grand.com',
  phone: '+91 98765 43227',
  website: 'www.grandvisuals.com',
  featured: true
},
{
  id: 119,
  name: 'Radiant Memories',
  backendId: '691883fab0adba50547368c4',
  rating: 4.7,
  reviewCount: 178,
  location: 'Chennai, Tamil Nadu',
  price: 72000,
  email: 'memories@radiant.com',
  phone: '+91 98765 43228',
  website: 'www.radiantmemories.com',
  featured: false
},
{
  id: 120,
  name: 'Precious Moments',
  backendId: '691883fab0adba50547368c5',
  rating: 4.9,
  reviewCount: 312,
  location: 'Bangalore, Karnataka',
  price: 88000,
  email: 'moments@precious.com',
  phone: '+91 98765 43229',
  website: 'www.preciousmoments.com',
  featured: true
},
{
  id: 121,
  name: 'Blissful Unions',
  backendId: '691883fab0adba50547368c6',
  rating: 4.8,
  reviewCount: 234,
  location: 'Hyderabad, Telangana',
  price: 68000,
  email: 'unions@blissful.com',
  phone: '+91 98765 43230',
  website: 'www.blissfulunions.com',
  featured: false
},
{
  id: 122,
  name: 'Eternal Bonds',
  backendId: '691883fab0adba50547368c7',
  rating: 4.9,
  reviewCount: 289,
  location: 'Kolkata, West Bengal',
  price: 78000,
  email: 'bonds@eternal.com',
  phone: '+91 98765 43231',
  website: 'www.eternalbonds.com',
  featured: true
},
{
  id: 123,
  name: 'Magic Moments Studio',
  backendId: '691883fab0adba50547368c8',
  rating: 4.7,
  reviewCount: 156,
  location: 'Pune, Maharashtra',
  price: 52000,
  email: 'studio@magicmoments.com',
  phone: '+91 98765 43232',
  website: 'www.magicmoments.com',
  featured: false
},
{
  id: 124,
  name: 'Heavenly Frames',
  backendId: '691883fab0adba50547368c9',
  rating: 4.8,
  reviewCount: 223,
  location: 'Jaipur, Rajasthan',
  price: 95000,
  email: 'frames@heavenly.com',
  phone: '+91 98765 43233',
  website: 'www.heavenlyframes.com',
  featured: true
},
{
  id: 125,
  name: 'Divine Moments',
  backendId: '691883fab0adba50547368ca',
  rating: 4.9,
  reviewCount: 278,
  location: 'Delhi, NCR',
  price: 125000,
  email: 'moments@divine.com',
  phone: '+91 98765 43234',
  website: 'www.divinemoments.com',
  featured: true
},
{
  id: 126,
  name: 'Royal Wedding Photos',
  backendId: '691883fab0adba50547368cb',
  rating: 4.8,
  reviewCount: 245,
  location: 'Mysore, Karnataka',
  price: 110000,
  email: 'royal@weddingphotos.com',
  phone: '+91 98765 43235',
  website: 'www.royalweddingphotos.com',
  featured: true
},
{
  id: 127,
  name: 'Cherished Memories',
  backendId: '691883fab0adba50547368cc',
  rating: 4.7,
  reviewCount: 189,
  location: 'Coimbatore, Tamil Nadu',
  price: 68000,
  email: 'memories@cherished.com',
  phone: '+91 98765 43236',
  website: 'www.cherishedmemories.com',
  featured: false
},
{
  id: 128,
  name: 'Perfect Shots',
  backendId: '691883fab0adba50547368cd',
  rating: 4.8,
  reviewCount: 234,
  location: 'Ahmedabad, Gujarat',
  price: 72000,
  email: 'shots@perfect.com',
  phone: '+91 98765 43237',
  website: 'www.perfectshots.com',
  featured: true
},
{
  id: 129,
  name: 'Dream Wedding Photos',
  backendId: '691883fab0adba50547368ce',
  rating: 4.9,
  reviewCount: 312,
  location: 'Goa',
  price: 195000,
  email: 'dream@weddingphotos.com',
  phone: '+91 98765 43238',
  website: 'www.dreamweddingphotos.com',
  featured: true
},
{
  id: 130,
  name: 'Elegant Expressions',
  backendId: '691883fab0adba50547368cf',
  rating: 4.7,
  reviewCount: 167,
  location: 'Chandigarh',
  price: 58000,
  email: 'expressions@elegant.com',
  phone: '+91 98765 43239',
  website: 'www.elegantexpressions.com',
  featured: false
},
{
  id: 131,
  name: 'Timeless Treasures',
  backendId: '691883fab0adba50547368d0',
  rating: 4.8,
  reviewCount: 245,
  location: 'Lucknow, Uttar Pradesh',
  price: 82000,
  email: 'treasures@timeless.com',
  phone: '+91 98765 43240',
  website: 'www.timelesstreasures.com',
  featured: true
},
{
  id: 132,
  name: 'Sacred Moments',
  backendId: '691883fab0adba50547368d1',
  rating: 4.9,
  reviewCount: 289,
  location: 'Amritsar, Punjab',
  price: 78000,
  email: 'moments@sacred.com',
  phone: '+91 98765 43241',
  website: 'www.sacredmoments.com',
  featured: true
},
{
  id: 133,
  name: 'Blissful Beginnings',
  backendId: '691883fab0adba50547368d2',
  rating: 4.7,
  reviewCount: 178,
  location: 'Bhopal, Madhya Pradesh',
  price: 62000,
  email: 'beginnings@blissful.com',
  phone: '+91 98765 43242',
  website: 'www.blissfulbeginnings.com',
  featured: false
},
{
  id: 134,
  name: 'Golden Memories',
  backendId: '691883fab0adba50547368d3',
  rating: 4.8,
  reviewCount: 223,
  location: 'Indore, Madhya Pradesh',
  price: 71000,
  email: 'memories@golden.com',
  phone: '+91 98765 43243',
  website: 'www.goldenmemories.com',
  featured: true
},
{
  id: 135,
  name: 'Royal Heritage Photos',
  backendId: '691883fab0adba50547368d4',
  rating: 4.9,
  reviewCount: 267,
  location: 'Jodhpur, Rajasthan',
  price: 145000,
  email: 'heritage@royalphotos.com',
  phone: '+91 98765 43244',
  website: 'www.royalheritagephotos.com',
  featured: true
},
{
  id: 136,
  name: 'Divine Light Studio',
  backendId: '691883fab0adba50547368d5',
  rating: 4.7,
  reviewCount: 189,
  location: 'Kochi, Kerala',
  price: 69000,
  email: 'studio@divinelight.com',
  phone: '+91 98765 43245',
  website: 'www.divinelightstudio.com',
  featured: false
},
{
  id: 137,
  name: 'Eternal Love Photos',
  backendId: '691883fab0adba50547368d6',
  rating: 4.8,
  reviewCount: 234,
  location: 'Nagpur, Maharashtra',
  price: 75000,
  email: 'love@eternalphotos.com',
  phone: '+91 98765 43246',
  website: 'www.eternallovephotos.com',
  featured: true
},
{
  id: 138,
  name: 'Magic Touch Photography',
  backendId: '691883fab0adba50547368d7',
  rating: 4.9,
  reviewCount: 278,
  location: 'Surat, Gujarat',
  price: 82000,
  email: 'touch@magicphoto.com',
  phone: '+91 98765 43247',
  website: 'www.magictouchphotography.com',
  featured: true
},
{
  id: 139,
  name: 'Heavenly Weddings',
  backendId: '691883fab0adba50547368d8',
  rating: 4.7,
  reviewCount: 156,
  location: 'Visakhapatnam, Andhra',
  price: 68000,
  email: 'weddings@heavenly.com',
  phone: '+91 98765 43248',
  website: 'www.heavenlyweddings.com',
  featured: false
},
{
  id: 140,
  name: 'Royal Moments',
  backendId: '691883fab0adba50547368d9',
  rating: 4.8,
  reviewCount: 245,
  location: 'Patna, Bihar',
  price: 72000,
  email: 'moments@royal.com',
  phone: '+91 98765 43249',
  website: 'www.royalmoments.com',
  featured: true
},
{
  id: 141,
  name: 'Divine Wedding Studio',
  backendId: '691883fab0adba50547368da',
  rating: 4.9,
  reviewCount: 312,
  location: 'Guwahati, Assam',
  price: 88000,
  email: 'studio@divinewedding.com',
  phone: '+91 98765 43250',
  website: 'www.divineweddingstudio.com',
  featured: true
},
{
  id: 142,
  name: 'Elegant Wedding Photos',
  backendId: '691883fab0adba50547368db',
  rating: 4.7,
  reviewCount: 178,
  location: 'Bhubaneswar, Odisha',
  price: 65000,
  email: 'photos@elegantwedding.com',
  phone: '+91 98765 43251',
  website: 'www.elegantweddingphotos.com',
  featured: false
},
{
  id: 143,
  name: 'Timeless Wedding Studio',
  backendId: '691883fab0adba50547368dc',
  rating: 4.8,
  reviewCount: 223,
  location: 'Dehradun, Uttarakhand',
  price: 78000,
  email: 'studio@timelesswedding.com',
  phone: '+91 98765 43252',
  website: 'www.timelessweddingstudio.com',
  featured: true
},
{
  id: 144,
  name: 'Royal Palace Photos',
  backendId: '691883fab0adba50547368dd',
  rating: 4.9,
  reviewCount: 289,
  location: 'Udaipur, Rajasthan',
  price: 165000,
  email: 'palace@royalphotos.com',
  phone: '+91 98765 43253',
  website: 'www.royalpalacephotos.com',
  featured: true
},
{
  id: 145,
  name: 'Divine Celebration',
  backendId: '691883fab0adba50547368de',
  rating: 4.7,
  reviewCount: 167,
  location: 'Mumbai, Maharashtra',
  price: 92000,
  email: 'celebration@divine.com',
  phone: '+91 98765 43254',
  website: 'www.divinecelebration.com',
  featured: false
},
{
  id: 146,
  name: 'Eternal Bliss Photos',
  backendId: '691883fab0adba50547368df',
  rating: 4.8,
  reviewCount: 234,
  location: 'Delhi, NCR',
  price: 105000,
  email: 'bliss@eternalphotos.com',
  phone: '+91 98765 43255',
  website: 'www.eternalblissphotos.com',
  featured: true
},
{
  id: 147,
  name: 'Magic Wedding Moments',
  backendId: '691883fab0adba50547368e0',
  rating: 4.9,
  reviewCount: 278,
  location: 'Bangalore, Karnataka',
  price: 98000,
  email: 'moments@magicwedding.com',
  phone: '+91 98765 43256',
  website: 'www.magicweddingmoments.com',
  featured: true
},
{
  id: 148,
  name: 'Heavenly Bliss Studio',
  backendId: '691883fab0adba50547368e1',
  rating: 4.7,
  reviewCount: 189,
  location: 'Chennai, Tamil Nadu',
  price: 74000,
  email: 'bliss@heavenlystudio.com',
  phone: '+91 98765 43257',
  website: 'www.heavenlyblissstudio.com',
  featured: false
},
{
  id: 149,
  name: 'Royal Celebration',
  backendId: '691883fab0adba50547368e2',
  rating: 4.8,
  reviewCount: 245,
  location: 'Kolkata, West Bengal',
  price: 89000,
  email: 'celebration@royal.com',
  phone: '+91 98765 43258',
  website: 'www.royalcelebration.com',
  featured: true
},
{
  id: 150,
  name: 'Divine Union Photos',
  backendId: '691883fab0adba50547368e3',
  rating: 4.9,
  reviewCount: 312,
  location: 'Hyderabad, Telangana',
  price: 112000,
  email: 'union@divinephotos.com',
  phone: '+91 98765 43259',
  website: 'www.divineunionphotos.com',
  featured: true
}

  ];

  // Combine backend providers with hardcoded providers
  // Backend providers come first, then hardcoded
  const providers = [...backendProviders, ...hardcodedProviders];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // old: const handleBookNow = (providerId) => { ... }
// replace with:

const handleBookNow = (provider) => {
  // The backend returns _id. Sometimes your object might contain backendId or _id.
  const vendorId = provider._id || provider.backendId || provider.id;
  if (!vendorId) {
    console.error('No vendor id present on provider:', provider);
    return;
  }
  // Navigate to the vendor profile page
  navigate(`/vendor/${vendorId}`);
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
                Available Service Providers
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
                        label="photography" 
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
                        onClick={() => handleBookNow(provider)}
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

export default ServiceDetail;