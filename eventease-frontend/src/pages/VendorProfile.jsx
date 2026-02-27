// src/pages/VendorProfile.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function VendorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [showRatingPrompt, setShowRatingPrompt] = useState(false);
  const [hasUsedService, setHasUsedService] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [ratingSubmitting, setRatingSubmitting] = useState(false);
  const [ratingSuccess, setRatingSuccess] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [hasRatedVendor, setHasRatedVendor] = useState(false);
  const [reviewImages, setReviewImages] = useState([]);
  const [imageError, setImageError] = useState('');
  const [imageInputKey, setImageInputKey] = useState(() => Date.now());
  const canShowRatingPrompt = currentUser?.userType !== 'provider';

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:5000/api/vendors/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setVendor(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load vendor');
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    setHasUsedService(null);
    setUserRating(0);
    setRatingError('');
    setRatingSuccess('');
    setReviewImages([]);
    setImageError('');
    setImageInputKey(Date.now());
  }, [id]);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Failed to parse stored user', err);
    }
  }, []);

  const currentUserId = currentUser?._id;
  const RATED_VENDORS_KEY = 'ratedVendors';

  const readRatedVendorsStore = () => {
    const defaultStore = { guests: {}, byUser: {} };
    try {
      const raw = localStorage.getItem(RATED_VENDORS_KEY);
      if (!raw) return defaultStore;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return defaultStore;
      return {
        guests: parsed.guests || (!parsed.byUser ? parsed : {}) || {},
        byUser: parsed.byUser || {}
      };
    } catch (err) {
      console.error('Failed to parse rated vendors cache', err);
      return defaultStore;
    }
  };

  const writeRatedVendorsStore = (store) => {
    try {
      localStorage.setItem(RATED_VENDORS_KEY, JSON.stringify(store));
    } catch (err) {
      console.error('Failed to persist rated vendors cache', err);
    }
  };

  useEffect(() => {
    if (!vendor) return;
    const vendorId = vendor._id || id;
    const store = readRatedVendorsStore();
    let rated = false;
    if (currentUserId) {
      rated = !!store.byUser?.[currentUserId]?.[vendorId];
    } else {
      rated = !!store.guests?.[vendorId];
    }
    setHasRatedVendor(rated);
    setShowRatingPrompt(!rated && canShowRatingPrompt);
  }, [vendor, currentUserId, canShowRatingPrompt, id]);

  const galleryImages = useMemo(() => {
    if (!vendor) return [];
    const baseImages = Array.isArray(vendor.gallery) ? vendor.gallery : [];
    const ratingImages = Array.isArray(vendor.ratings)
      ? vendor.ratings.flatMap((rating) => (Array.isArray(rating.images) ? rating.images : []))
      : [];

    const seen = new Set();
    const combined = [];

    [...baseImages, ...ratingImages].forEach((img) => {
      if (typeof img !== 'string' || !img.trim()) return;
      if (seen.has(img)) return;
      seen.add(img);
      combined.push(img);
    });

    return combined;
  }, [vendor]);

  const MAX_REVIEW_IMAGES = 5;
  const MAX_IMAGE_BYTES = 2 * 1024 * 1024; // 2MB per image

  const handleReviewImagesChange = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    if (reviewImages.length + files.length > MAX_REVIEW_IMAGES) {
      setImageError(`You can upload up to ${MAX_REVIEW_IMAGES} images.`);
      return;
    }

    try {
      const processedFiles = await Promise.all(
        files.map(
          (file) =>
            new Promise((resolve, reject) => {
              if (file.size > MAX_IMAGE_BYTES) {
                reject(new Error(`${file.name} exceeds the 2MB limit.`));
                return;
              }
              const reader = new FileReader();
              reader.onload = () =>
                resolve({
                  name: file.name,
                  dataUrl: reader.result
                });
              reader.onerror = () => reject(new Error(`Failed to read ${file.name}.`));
              reader.readAsDataURL(file);
            })
        )
      );

      setReviewImages((prev) => [...prev, ...processedFiles]);
      setImageError('');
    } catch (err) {
      console.error(err);
      setImageError(err.message || 'Unable to load image.');
    }
  };

  const removeReviewImage = (index) => {
    setReviewImages((prev) => prev.filter((_, i) => i !== index));
    setImageError('');
  };

  const handleSubmitRating = async () => {
    if (!userRating) {
      setRatingError('Select a rating between 1 and 5 stars.');
      return;
    }
    setRatingError('');
    setRatingSuccess('');
    setRatingSubmitting(true);
    try {
      const response = await fetch(`http://localhost:5000/api/vendors/${id}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: userRating,
          ...(currentUser?._id ? { userId: currentUser._id } : {}),
          ...(reviewImages.length ? { reviewImages: reviewImages.map(img => img.dataUrl) } : {})
        })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to submit rating');
      }
      const data = await response.json();
      setVendor(data.vendor);
      setRatingSuccess('Thanks for rating this vendor!');
      setHasRatedVendor(true);
      setShowRatingPrompt(false);
      setHasUsedService(null);
      setReviewImages([]);
      setImageInputKey(Date.now());
      try {
        const vendorKey = data.vendor?._id || id;
        const store = readRatedVendorsStore();
        if (currentUserId) {
          store.byUser[currentUserId] = store.byUser[currentUserId] || {};
          store.byUser[currentUserId][vendorKey] = {
            rating: userRating,
            timestamp: Date.now()
          };
        } else {
          store.guests[vendorKey] = {
            rating: userRating,
            timestamp: Date.now()
          };
        }
        writeRatedVendorsStore(store);
      } catch (storageErr) {
        console.warn('Unable to cache rated vendor locally', storageErr);
      }
    } catch (err) {
      console.error(err);
      setRatingError(err.message || 'Unable to submit rating right now.');
    } finally {
      setRatingSubmitting(false);
    }
  };

  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      fontSize: '18px',
      color: '#666'
    }}>
      Loading vendor details...
    </div>
  );

  if (error) return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
      color: '#d32f2f',
      fontSize: '16px'
    }}>
      {error}
    </div>
  );

  if (!vendor) return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
      color: '#666',
      fontSize: '16px'
    }}>
      Vendor not found
    </div>
  );

  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '10px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#666',
          marginBottom: '24px',
          transition: 'all 0.2s ease',
          fontWeight: '500'
        }}
        onMouseOver={(e) => {
          e.target.style.background = '#f5f5f5';
          e.target.style.borderColor = '#ccc';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.borderColor = '#e0e0e0';
        }}
      >
        ← Back to Services
      </button>

      <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        {/* Main Content */}
        <div style={{ flex: 1 }}>
          {/* Header Section */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '32px',
            color: 'white',
            marginBottom: '24px',
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
              margin: '0 0 8px 0',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '1.2'
            }}>
              {vendor.name}
            </h1>
            
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '16px'
            }}>
              {vendor.category}
            </div>

          {canShowRatingPrompt && showRatingPrompt && !hasRatedVendor && (
            <div style={{
              background: 'white',
              color: '#333',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.4)',
              backdropFilter: 'blur(6px)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#2d2d2d' }}>
                    Have you used {vendor.name}?
                  </h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                    {hasUsedService === true
                      ? 'Rate your experience to help our community make better choices.'
                      : 'Let us know so we can prompt you to rate this vendor.'}
                  </p>
                </div>
                <button
                  onClick={() => setShowRatingPrompt(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    lineHeight: 1,
                    cursor: 'pointer',
                    color: '#999'
                  }}
                  aria-label="Dismiss rating prompt"
                >
                  ×
                </button>
              </div>

              {hasUsedService === null && (
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '16px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => setHasUsedService(true)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #dddddd',
                      borderRadius: '8px',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Yes, I have
                  </button>
                  <button
                    onClick={() => {
                      setHasUsedService(false);
                      setShowRatingPrompt(false);
                    }}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      color: '#555'
                    }}
                  >
                    Not yet
                  </button>
                </div>
              )}

              {hasUsedService === true && (
                <div style={{ marginTop: '18px' }}>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '16px',
                    flexWrap: 'wrap'
                  }}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setUserRating(star)}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '22px',
                          background: star <= userRating ? '#ffd700' : '#f1f1f1',
                          color: star <= userRating ? '#5c4300' : '#777',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        {star <= userRating ? '★' : '☆'}
                      </button>
                    ))}
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
                      Upload review photos (optional)
                    </label>
                    <input
                      key={imageInputKey}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleReviewImagesChange}
                      style={{ marginBottom: '8px' }}
                    />
                    <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#777' }}>
                      Up to {MAX_REVIEW_IMAGES} images, 2MB each.
                    </p>
                    {imageError && (
                      <p style={{ color: '#d32f2f', fontSize: '13px', marginBottom: '8px' }}>
                        {imageError}
                      </p>
                    )}
                    {reviewImages.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {reviewImages.map((img, index) => (
                          <div key={index} style={{ position: 'relative' }}>
                            <img
                              src={img.dataUrl}
                              alt={`Review ${index + 1}`}
                              style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0'
                              }}
                            />
                            <button
                              onClick={() => removeReviewImage(index)}
                              style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: '#d32f2f',
                                border: 'none',
                                color: 'white',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                lineHeight: 1
                              }}
                              aria-label="Remove image"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmitRating}
                    disabled={ratingSubmitting}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 24px',
                      fontWeight: '600',
                      cursor: ratingSubmitting ? 'not-allowed' : 'pointer',
                      opacity: ratingSubmitting ? 0.7 : 1
                    }}
                  >
                    {ratingSubmitting ? 'Submitting...' : 'Submit Rating'}
                  </button>

                  {ratingError && (
                    <p style={{ color: '#d32f2f', marginTop: '12px', fontSize: '14px' }}>
                      {ratingError}
                    </p>
                  )}
                </div>
              )}

              {ratingSuccess && (
                <p style={{ color: '#2e7d32', marginTop: '12px', fontWeight: 600 }}>
                  {ratingSuccess}
                </p>
              )}
            </div>
          )}

          {ratingSuccess && (!showRatingPrompt || hasRatedVendor) && (
            <div style={{
              background: 'rgba(46,125,50,0.1)',
              border: '1px solid rgba(46,125,50,0.2)',
              color: '#1b5e20',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '16px',
              fontWeight: 600
            }}>
              {ratingSuccess}
            </div>
          )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                fontSize: '28px',
                fontWeight: '700'
              }}>
                {vendor.currency || '₹'} {vendor.price?.toLocaleString?.() ?? vendor.price}
              </div>
              
              {vendor.rating && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '6px 12px',
                  borderRadius: '20px'
                }}>
                  <span style={{ fontSize: '16px' }}>⭐</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>
                    {vendor.rating} ({vendor.reviewsCount || 0} reviews)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {/* Location */}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📍 Location
                </h3>
                <p style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '15px',
                  lineHeight: '1.5'
                }}>
                  {vendor.location?.city ? `${vendor.location.city}, ${vendor.location.state}` : vendor.location?.country || 'Not specified'}
                </p>
              </div>

              {/* Contact */}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  📞 Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {vendor.contact?.email && (
                    <a href={`mailto:${vendor.contact.email}`} style={{
                      color: '#667eea',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}>
                      ✉️ {vendor.contact.email}
                    </a>
                  )}
                  {vendor.contact?.phone && (
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      📱 {vendor.contact.phone}
                    </div>
                  )}
                  {vendor.contact?.website && (
                    <a 
                      href={`https://${vendor.contact.website.replace(/^https?:\/\//, '')}`} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      🌐 {vendor.contact.website}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '20px',
              fontWeight: '600',
              color: '#333'
            }}>
              About
            </h3>
            <p style={{
              margin: 0,
              color: '#666',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              {vendor.description || 'No description provided for this vendor.'}
            </p>
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => {
              // Navigate to chat with vendor info
              navigate(`/chat/${id}`, {
                state: {
                  vendor: {
                    _id: vendor._id || id,
                    backendId: vendor._id || id,
                    id: id,
                    name: vendor.name,
                    location: vendor.location?.city ? `${vendor.location.city}, ${vendor.location.state}` : vendor.location?.country || vendor.location || '',
                    price: vendor.price,
                    email: vendor.contact?.email || vendor.email,
                    phone: vendor.contact?.phone || vendor.phone,
                    website: vendor.contact?.website || vendor.website,
                    rating: vendor.rating,
                    reviewCount: vendor.reviewsCount || vendor.reviewCount,
                  }
                }
              });
            }}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              width: '100%',
              maxWidth: '300px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            }}
          >
            Book Now
          </button>
        </div>

        {/* Sidebar */}
        <aside style={{
          width: '350px',
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: '24px'
        }}>
          {/* Gallery Section */}
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            paddingBottom: '12px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            📷 Gallery
          </h3>
          
          {galleryImages.length ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  flex: 1, 
                  minWidth: 0,
                  position: 'relative'
                }}>
                  <img
                    src={galleryImages[0]}
                    alt="Gallery primary"
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '260px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </div>
                {galleryImages.length > 1 && (
                  <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridAutoRows: '120px',
                    gap: '12px',
                    minWidth: '220px',
                    flexGrow: 1
                  }}>
                    {galleryImages.slice(1, 6).map((img, idx) => (
                      <div key={`${img}-${idx}`} style={{ position: 'relative' }}>
                        <img
                          src={img}
                          alt={`Gallery ${idx + 2}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            transition: 'transform 0.2s ease'
                          }}
                        />
                        {idx === 4 && galleryImages.length > 6 && (
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.5)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '16px'
                          }}>
                            +{galleryImages.length - 6} Photos
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              color: '#999',
              padding: '40px 20px',
              fontSize: '14px',
              background: '#fafafa',
              borderRadius: '8px'
            }}>
              No images available
            </div>
          )}

          {/* Additional Info */}
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '2px solid #f0f0f0' }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333'
            }}>
              Service Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Category:</span>
                <span style={{ fontWeight: '500', fontSize: '14px' }}>{vendor.category}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Rating:</span>
                <span style={{ fontWeight: '500', fontSize: '14px' }}>
                  {vendor.rating ? `${vendor.rating} ⭐` : 'Not rated'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Reviews:</span>
                <span style={{ fontWeight: '500', fontSize: '14px' }}>{vendor.reviewsCount || 0}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}