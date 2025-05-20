import './Home.css';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "/clothe1.jpg",
      alt: "Professionell tvätt 1",
      text: "Högkvalitativ tvättjänst"
    },
    {
      src: "/clothe2.jpg",
      alt: "Professionell tvätt 2",
      text: "Snabb och pålitlig service"
    },
    {
      src: "/clothe3.jpg",
      alt: "Professionell tvätt 3",
      text: "Miljövänliga tvättmedel"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`hero-image-container ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="hero-text">
              <h1 className="hero-title">{image.text}</h1>
            </div>
          </div>
        ))}
        <button className="hero-nav-button prev" onClick={goToPrev}>&#10094;</button>
        <button className="hero-nav-button next" onClick={goToNext}>&#10095;</button>
      </div>

      <p className="home-text">
        Vi erbjuder högkvalitativ tvättjänst för alla dina kläder.
      </p>
    </div>
  );
};

export default Home;