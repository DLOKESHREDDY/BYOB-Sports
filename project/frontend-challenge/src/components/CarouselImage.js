import React, { useState, useEffect } from 'react';

const CarouselImage = ({ images, alt, className, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={alt}
        className={`${className} carousel-image`}
        {...props}
      />
      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselImage;
