export const allServices = [
  // Photography Services
  {
    id: 1,
    name: 'Wedding Photography',
    category: 'photography',
    description: 'Professional wedding photography services to capture your special day with beautiful memories.',
    rating: 4.8,
    reviewCount: 124,
    location: 'Pan India',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: '1-2 weeks',
    details: {
      fullDescription: 'Capture your special day with our professional wedding photography services. We specialize in candid, traditional, and contemporary styles to create timeless memories that you will cherish forever. Our team of experienced photographers uses state-of-the-art equipment to ensure every moment is captured perfectly.',
      inclusions: [
        'Pre-wedding consultation and planning',
        'Full day coverage (8-12 hours)',
        '2 professional photographers',
        '500+ high-resolution edited photos',
        'Online gallery for easy sharing',
        'USB drive with all photos',
        'Print release for personal use'
      ],
      duration: '8-12 hours coverage',
      teamSize: '2-3 Professional Photographers',
      popularPackages: [
        { 
          name: 'Basic Package', 
          price: '₹25,000', 
          features: ['6 hours coverage', '1 photographer', '200 edited photos', 'Online gallery']
        },
        { 
          name: 'Premium Package', 
          price: '₹45,000', 
          features: ['10 hours coverage', '2 photographers', '500 edited photos', 'Pre-wedding shoot', 'USB drive']
        },
        { 
          name: 'Luxury Package', 
          price: '₹75,000', 
          features: ['12 hours coverage', '3 photographers', '800+ edited photos', 'Pre-wedding shoot', 'Drone coverage', 'Photo album']
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Pre-Wedding Shoot',
    category: 'photography',
    description: 'Romantic pre-wedding photoshoots at exotic locations with professional styling.',
    rating: 4.7,
    reviewCount: 89,
    location: 'Pan India',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: false,
    deliveryTime: '1 week',
    details: {
      fullDescription: 'Create beautiful memories before your big day with our romantic pre-wedding photoshoots. We offer stunning locations, professional styling, and creative direction to capture your love story in the most beautiful way.',
      inclusions: [
        'Location scouting and selection',
        'Professional makeup and styling',
        '4-hour photoshoot session',
        '100+ edited high-resolution photos',
        'Multiple outfit changes',
        'Online gallery access',
        'All raw photos provided'
      ],
      duration: '4-6 hours',
      teamSize: '1 Photographer + 1 Assistant',
      popularPackages: [
        { 
          name: 'Standard Shoot', 
          price: '₹18,000', 
          features: ['1 location', '2 outfit changes', '100 edited photos', '4 hours coverage']
        },
        { 
          name: 'Premium Shoot', 
          price: '₹35,000', 
          features: ['2 locations', '3 outfit changes', '200 edited photos', '6 hours coverage', 'Makeup artist']
        },
        { 
          name: 'Luxury Experience', 
          price: '₹55,000', 
          features: ['3 locations', '4 outfit changes', '300+ edited photos', '8 hours coverage', 'Professional styling team']
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Event Videography',
    category: 'photography',
    description: 'Cinematic video coverage of your events with professional editing and drone shots.',
    rating: 4.6,
    reviewCount: 67,
    location: 'Pan India',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: '2-3 weeks',
    details: {
      fullDescription: 'Capture your special moments in motion with our professional event videography services. We create cinematic films that tell your story beautifully, using multiple cameras, professional audio equipment, and drone shots for breathtaking aerial views.',
      inclusions: [
        'Multiple camera coverage',
        'Professional 4K video quality',
        'Drone aerial shots',
        'Wireless lapel microphones',
        'Cinematic color grading',
        'Professional video editing',
        '5-10 minute highlight film',
        'Full event footage'
      ],
      duration: 'Full event coverage',
      teamSize: '2 Videographers + 1 Editor',
      popularPackages: [
        { 
          name: 'Basic Video', 
          price: '₹35,000', 
          features: ['2 cameras', '5 min highlight film', 'Full event footage', 'Basic editing']
        },
        { 
          name: 'Premium Video', 
          price: '₹65,000', 
          features: ['3 cameras', '10 min highlight film', 'Drone shots', 'Cinematic editing']
        },
        { 
          name: 'Cinematic Experience', 
          price: '₹95,000', 
          features: ['4 cameras', '15 min feature film', 'Multiple drone shots', 'Hollywood-style editing']
        }
      ]
    }
  },

  // Catering Services
  {
    id: 4,
    name: 'Wedding Catering',
    category: 'catering',
    description: 'Exquisite wedding catering with diverse menu options and professional service.',
    rating: 4.5,
    reviewCount: 156,
    location: 'Pan India',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: 'Custom',
    details: {
      fullDescription: 'Delight your guests with our exquisite wedding catering services. We offer diverse menu options ranging from traditional Indian cuisine to international delicacies, all prepared with the freshest ingredients and served by our professional staff.',
      inclusions: [
        'Customized menu planning',
        'Fresh ingredient sourcing',
        'Professional chef team',
        'Serving staff and coordinators',
        'Beautiful food presentation',
        'Hygiene and quality assurance',
        'Setup and cleanup services'
      ],
      duration: 'As per event schedule',
      teamSize: 'Chef Team + Serving Staff',
      popularPackages: [
        { 
          name: 'Standard Menu', 
          price: '₹450 per plate', 
          features: ['4 main courses', '2 appetizers', '3 desserts', 'Basic beverages']
        },
        { 
          name: 'Premium Menu', 
          price: '₹750 per plate', 
          features: ['6 main courses', '4 appetizers', '5 desserts', 'Premium beverages', 'Live counters']
        },
        { 
          name: 'Royal Feast', 
          price: '₹1,200 per plate', 
          features: ['8 main courses', '6 appetizers', '7 desserts', 'International cuisine', 'Multiple live stations']
        }
      ]
    }
  },
  {
    id: 5,
    name: 'Corporate Catering',
    category: 'catering',
    description: 'Premium catering services for corporate events, meetings, and conferences.',
    rating: 4.4,
    reviewCount: 92,
    location: 'Metro Cities',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: false,
    deliveryTime: '1-3 days',
    details: {
      fullDescription: 'Impress your corporate guests with our professional catering services designed specifically for business events. We understand the unique requirements of corporate gatherings and deliver impeccable service with sophisticated menu options.',
      inclusions: [
        'Business-appropriate menu planning',
        'Professional presentation',
        'Efficient serving staff',
        'Quick setup and cleanup',
        'Dietary requirement accommodation',
        'Brand-consistent service'
      ],
      duration: 'As per event requirements',
      teamSize: 'Based on guest count',
      popularPackages: [
        { 
          name: 'Meeting Package', 
          price: '₹20,000', 
          features: ['Snacks and beverages', 'Up to 50 people', '3-hour service', 'Professional setup']
        },
        { 
          name: 'Conference Package', 
          price: '₹45,000', 
          features: ['Full lunch/dinner', 'Up to 100 people', '6-hour service', 'Multiple cuisine options']
        },
        { 
          name: 'Gala Dinner', 
          price: '₹80,000', 
          features: ['Premium multi-course meal', 'Up to 200 people', 'Full service', 'Live cooking stations']
        }
      ]
    }
  },

  // Add more services following the same structure...
  // I'll show a few more examples and you can continue the pattern

  // Decoration Services
  {
    id: 7,
    name: 'Wedding Decorations',
    category: 'decoration',
    description: 'Complete wedding decoration services with theme-based setups.',
    rating: 4.9,
    reviewCount: 203,
    location: 'Pan India',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: 'Setup on event day',
    details: {
      fullDescription: 'Transform your venue into a magical space with our comprehensive wedding decoration services. We specialize in creating breathtaking setups that reflect your personality and wedding theme, from elegant floral arrangements to stunning backdrops and lighting.',
      inclusions: [
        'Theme consultation and planning',
        'Venue measurement and layout',
        'Floral arrangements and centerpieces',
        'Lighting design and setup',
        'Backdrop and stage decoration',
        'Entrance and pathway decor',
        'Setup and dismantling'
      ],
      duration: 'Full event decoration',
      teamSize: 'Design Team + Setup Crew',
      popularPackages: [
        { 
          name: 'Elegant Basics', 
          price: '₹75,000', 
          features: ['Stage decoration', 'Basic lighting', 'Entrance decor', 'Centerpieces']
        },
        { 
          name: 'Premium Decor', 
          price: '₹1,50,000', 
          features: ['Themed decoration', 'Advanced lighting', 'Floral arrangements', 'Custom backdrops']
        },
        { 
          name: 'Royal Setup', 
          price: '₹3,00,000', 
          features: ['Luxury theme', 'Professional lighting', 'Premium flowers', 'Complete venue transformation']
        }
      ]
    }
  },

  // Entertainment Services
  {
    id: 10,
    name: 'DJ Services',
    category: 'entertainment',
    description: 'Professional DJ services with latest music and equipment.',
    rating: 4.7,
    reviewCount: 178,
    location: 'Pan India',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: 'On event day',
    details: {
      fullDescription: 'Keep your guests entertained and the dance floor packed with our professional DJ services. Our experienced DJs play the latest hits along with classic favorites, creating the perfect atmosphere for your celebration with state-of-the-art sound equipment.',
      inclusions: [
        'Professional DJ with MC skills',
        'High-quality sound system',
        'Basic lighting effects',
        'Music planning consultation',
        'Backup equipment',
        'Setup and sound check'
      ],
      duration: '4-6 hours performance',
      teamSize: '1 DJ + 1 Assistant',
      popularPackages: [
        { 
          name: 'Basic DJ', 
          price: '₹20,000', 
          features: ['4 hours performance', 'Basic sound system', 'Music planning', '1 DJ']
        },
        { 
          name: 'Premium DJ', 
          price: '₹35,000', 
          features: ['6 hours performance', 'Premium sound system', 'Lighting effects', 'MC services']
        },
        { 
          name: 'VIP Experience', 
          price: '₹60,000', 
          features: ['8 hours performance', 'Professional lighting', 'Special effects', '2 DJs']
        }
      ]
    }
  },

  // Planning Services
  {
    id: 13,
    name: 'Wedding Planning',
    category: 'planning',
    description: 'Complete wedding planning services from concept to execution.',
    rating: 4.9,
    reviewCount: 267,
    location: 'Pan India',
    price: 100000,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    featured: true,
    deliveryTime: 'Custom',
    details: {
      fullDescription: 'Experience a stress-free wedding planning journey with our comprehensive wedding planning services. From initial concept to final execution, our expert planners handle every detail ensuring your dream wedding becomes reality while staying within your budget.',
      inclusions: [
        'Complete wedding planning',
        'Vendor management and coordination',
        'Budget planning and management',
        'Timeline creation and management',
        'Guest list management',
        'Day-of coordination',
        'Troubleshooting and problem-solving'
      ],
      duration: 'Full wedding planning cycle',
      teamSize: 'Dedicated Wedding Planner + Team',
      popularPackages: [
        { 
          name: 'Partial Planning', 
          price: '₹1,00,000', 
          features: ['Vendor coordination', 'Day-of coordination', 'Timeline management', 'Budget guidance']
        },
        { 
          name: 'Full Planning', 
          price: '₹2,50,000', 
          features: ['Complete planning', 'Vendor management', 'Design coordination', 'Full-time coordination']
        },
        { 
          name: 'Luxury Planning', 
          price: '₹5,00,000', 
          features: ['Premium service', 'Destination weddings', 'Multiple planners', 'Luxury vendor access']
        }
      ]
    }
  }
  // Continue adding all 24 services with the same detailed structure...
];

export const serviceProviders = {
  1: [
    {
      id: 101,
      name: 'Moments Photography',
      rating: 4.7,
      reviewCount: 89,
      location: 'Mumbai, India',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10+ years',
      portfolio: '50+ weddings',
      specialties: ['Candid', 'Traditional', 'Contemporary'],
      description: 'Wedding photographer with 10+ years of experience capturing beautiful Indian weddings.'
    },
    // Add more providers for service 1...
  ],
  2: [
    {
      id: 201,
      name: 'Romantic Shoots Studio',
      rating: 4.6,
      reviewCount: 67,
      location: 'Delhi, India',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '8+ years',
      portfolio: '100+ pre-wedding shoots',
      specialties: ['Outdoor', 'Studio', 'Destination'],
      description: 'Specialized in romantic pre-wedding photoshoots at exotic locations.'
    }
  ],
  // Add providers for all services...
  4: [
    {
      id: 401,
      name: 'Royal Caterers',
      rating: 4.5,
      reviewCount: 134,
      location: 'Bangalore, India',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '15+ years',
      portfolio: '200+ weddings',
      specialties: ['Indian', 'Continental', 'Fusion'],
      description: 'Premium wedding catering services with diverse menu options.'
    }
  ],
  7: [
    {
      id: 701,
      name: 'Dream Decorators',
      rating: 4.9,
      reviewCount: 156,
      location: 'Jaipur, India',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12+ years',
      portfolio: '150+ weddings',
      specialties: ['Traditional', 'Modern', 'Theme-based'],
      description: 'Creating magical wedding decorations that bring your dreams to life.'
    }
  ],
  10: [
    {
      id: 1001,
      name: 'Bollywood Beats DJ',
      rating: 4.7,
      reviewCount: 189,
      location: 'Mumbai, India',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '8+ years',
      portfolio: '300+ events',
      specialties: ['Bollywood', 'International', 'Retro'],
      description: 'Professional DJ services specializing in Bollywood and international music.'
    }
  ],
  13: [
    {
      id: 1301,
      name: 'Perfect Wedding Planners',
      rating: 4.9,
      reviewCount: 234,
      location: 'Delhi, India',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '10+ years',
      portfolio: '180+ weddings',
      specialties: ['Luxury', 'Destination', 'Traditional'],
      description: 'Comprehensive wedding planning services for stress-free celebrations.'
    }
  ]
  // Continue for all services...
};