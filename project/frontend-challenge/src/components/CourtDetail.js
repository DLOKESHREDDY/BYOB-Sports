import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courts, reviews as reviewsByCourtId } from '../data/courts';
import CarouselImage from './CarouselImage';

const CourtDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const courtId = Number(id);

  const court = useMemo(() => courts.find(c => c.id === courtId), [courtId]);
  const reviews = reviewsByCourtId[courtId] || [];

  const computedRating = useMemo(() => {
    return court?.rating ?? 0;
  }, [court]);

  const totalReviewCount = useMemo(() => {
    return court?.reviewCount ?? 0;
  }, [court]);

  const renderStars = (value) => {
    const stars = [];
    const full = Math.floor(value);
    const hasHalf = value % 1 !== 0;
    for (let i = 0; i < full; i++) stars.push(<span key={`f-${i}`} className="star">★</span>);
    if (hasHalf) stars.push(<span key="h" className="star">★</span>);
    for (let i = 0; i < 5 - Math.ceil(value); i++) stars.push(<span key={`e-${i}`} className="star empty">★</span>);
    return stars;
  };

  // Reviews are read-only in mock mode; no submission UI

  if (!court) {
    return (
      <div className="container" style={{ padding: '16px' }}>
        <button className="button" onClick={() => navigate('/')}>← Back</button>
        <p>Could not find this court.</p>
      </div>
    );
  }

  return (
    <div className="court-detail">
      <header className="header">
        <div className="container header-simple">
          <button className="button back-button" onClick={() => navigate('/')}>← Back</button>
          <span className="brand-logo ball">🎾</span>
          <div>
            <h1 className="brand-title">{court.name}</h1>
            <p className="brand-subtitle">Connect, Play, Grow!</p>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div className="detail-carousel">
          <CarouselImage
            images={court.images}
            alt={court.name}
            className="court-image"
            style={{ borderRadius: 12, width: '100%', height: 'auto', maxHeight: 260, objectFit: 'cover' }}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <p className="court-location">📍 {court.location}</p>
          <div className="court-rating" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="stars">{renderStars(computedRating)}</div>
            <span className="rating-text">{computedRating} ({totalReviewCount} reviews)</span>
          </div>
          <div className="court-details" style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span className="court-surface">{court.surface}</span>
            <span className="court-price" style={{ fontWeight: 600, color: '#2E7D32' }}>{court.price}</span>
            <span className="court-lighting" style={{ fontWeight: 500 }}>Lighting: {court.lighting}</span>
          </div>
          <p style={{ marginTop: 12 }}>{court.description}</p>
        </div>

        <section style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>Recent reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews found.</p>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {reviews.map(r => (
                <div key={r.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>{r.author}</strong>
                    <span>{'★'.repeat(r.rating)}</span>
                  </div>
                  <small style={{ color: '#666' }}>{r.date}</small>
                  <p style={{ marginTop: 8 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CourtDetail;


