import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { courts } from '../data/courts';

const CourtList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredCourts = useMemo(() => {
    return courts.filter(court =>
      court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      court.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      court.surface.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const handleCourtClick = (courtId) => {
    navigate(`/court/${courtId}`);
  };

  return (
    <div className="court-list">
      <header className="header">
        <div className="container">
          <h1>🎾 Tennis Court Reviews</h1>
        </div>
      </header>

      <div className="search-container">
        <div className="container">
          <input
            type="text"
            placeholder="Search courts by name, location, or surface..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="container">
        <div className="court-grid">
          {filteredCourts.length === 0 ? (
            <div className="empty-state">
              <h3>No courts found</h3>
              <p>Try adjusting your search terms</p>
            </div>
          ) : (
            filteredCourts.map(court => (
              <div
                key={court.id}
                className="court-card"
                onClick={() => handleCourtClick(court.id)}
              >
                <img
                  src={court.image}
                  alt={court.name}
                  className="court-image"
                  loading="lazy"
                />
                <div className="court-info">
                  <h3 className="court-name">{court.name}</h3>
                  <p className="court-location">📍 {court.location}</p>
                  <div className="court-rating">
                    <div className="stars">
                      {renderStars(court.rating)}
                    </div>
                    <span className="rating-text">
                      {court.rating} ({court.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="court-details">
                    <span className="court-surface">{court.surface}</span>
                    <span className="court-price" style={{ marginLeft: '8px', fontWeight: '600', color: '#2E7D32' }}>
                      {court.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CourtList;