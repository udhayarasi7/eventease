import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import {
  EmojiEvents,
  Groups,
  VerifiedUser,
  TrendingUp,
  Favorite,
  AutoAwesome,
} from '@mui/icons-material';

const About = () => {
  const values = [
    {
      icon: <VerifiedUser sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Trusted Platform',
      description: 'We verify every service provider to ensure quality and reliability for your special occasions.',
    },
    {
      icon: <Groups sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Community Driven',
      description: 'Built by the community, for the community. We connect people with trusted local vendors.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Excellence First',
      description: 'We only work with the best service providers who are committed to delivering exceptional experiences.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Innovation',
      description: 'Constantly evolving with new features to make event planning easier, faster, and more enjoyable.',
    },
    {
      icon: <Favorite sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure every event is memorable.',
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 48, color: '#667eea' }} />,
      title: 'Creative Solutions',
      description: 'From intimate gatherings to grand celebrations, we help bring your vision to life.',
    },
  ];

  const stats = [
    { label: 'Service Providers', value: '5000+' },
    { label: 'Events Planned', value: '10,000+' },
    { label: 'Happy Customers', value: '25,000+' },
    { label: 'Cities Covered', value: '50+' },
  ];

  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        padding: '60px 40px',
        color: 'white',
        marginBottom: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}></div>
        <h1 style={{
          margin: '0 0 16px 0',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>
          About EventEase
        </h1>
        <p style={{
          margin: 0,
          fontSize: '20px',
          lineHeight: '1.6',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          opacity: 0.95
        }}>
          Transforming event planning into a seamless, stress-free experience. 
          We connect you with verified service providers to make your special moments truly unforgettable.
        </p>
      </div>

      {/* Mission Section */}
      <div style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '60px',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{
            margin: '0 0 16px 0',
            fontSize: '32px',
            fontWeight: '700',
            color: '#667eea'
          }}>
            Our Mission
          </h2>
          <p style={{
            margin: '0 0 20px 0',
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#666'
          }}>
            EventEase was founded with a simple yet powerful mission: to make event planning accessible, 
            transparent, and enjoyable for everyone. We believe that planning your special day should be 
            exciting, not overwhelming.
          </p>
          <p style={{
            margin: 0,
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#666'
          }}>
            Our platform bridges the gap between customers and service providers, ensuring quality, 
            reliability, and trust at every step. Whether you're planning a wedding, corporate event, 
            or intimate celebration, EventEase is your trusted partner.
          </p>
        </div>
        <div style={{
          width: '500px',
          background: '#667eea',
          borderRadius: '12px',
          padding: '40px',
          color: 'white',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '24px',
            fontWeight: '700'
          }}>
            What We Stand For
          </h3>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <div style={{ marginBottom: '12px' }}>✨ Quality over quantity - We verify every vendor</div>
            <div style={{ marginBottom: '12px' }}>🤝 Trust and transparency in every interaction</div>
            <div style={{ marginBottom: '12px' }}>💡 Innovation that simplifies your life</div>
            <div>❤️ Customer satisfaction is our top priority</div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        background: '#f5f5f5',
        borderRadius: '12px',
        padding: '40px',
        marginBottom: '60px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                background: 'white',
                padding: '30px 20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#667eea',
                marginBottom: '8px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#666'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            margin: '0 0 16px 0',
            fontSize: '32px',
            fontWeight: '700',
            color: '#333'
          }}>
            Our Core Values
          </h2>
          <p style={{
            margin: 0,
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            The principles that guide everything we do
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                {value.icon}
              </div>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '20px',
                fontWeight: '700',
                color: '#333'
              }}>
                {value.title}
              </h3>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.7'
              }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{
        background: '#f5f5f5',
        borderRadius: '12px',
        padding: '50px 40px',
        marginBottom: '60px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            margin: '0 0 16px 0',
            fontSize: '32px',
            fontWeight: '700',
            color: '#333'
          }}>
            How EventEase Works
          </h2>
          <p style={{
            margin: 0,
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Simple steps to plan your perfect event
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {[
            {
              step: '1',
              title: 'Browse Services',
              description: 'Explore our wide range of verified service providers across photography, catering, decoration, and more.',
            },
            {
              step: '2',
              title: 'Connect & Chat',
              description: 'Connect directly with vendors through our integrated chat system. Ask questions and discuss your requirements.',
            },
            {
              step: '3',
              title: 'Book with Confidence',
              description: 'Read reviews, check ratings, and book with trusted providers. All vendors are verified for quality assurance.',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '40px',
                border: '2px solid #667eea',
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#667eea',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '700',
                margin: '0 auto 24px auto'
              }}>
                {item.step}
              </div>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '20px',
                fontWeight: '700',
                textAlign: 'center',
                color: '#333'
              }}>
                {item.title}
              </h3>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#666',
                textAlign: 'center',
                lineHeight: '1.7'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: '#667eea',
        borderRadius: '12px',
        padding: '60px 40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          margin: '0 0 16px 0',
          fontSize: '36px',
          fontWeight: '700'
        }}>
          Join the EventEase Community
        </h2>
        <p style={{
          margin: 0,
          fontSize: '18px',
          opacity: 0.95,
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6'
        }}>
          Whether you're planning an event or offering services, EventEase is the platform 
          where dreams meet reality. Start your journey with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
