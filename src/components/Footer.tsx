import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  // Google Maps link for when clicked
  const googleMapsUrl = "https://www.google.com/maps?q=Virkesvägen+16B,+152+42+Södertälje";
  
  // Static map image URL - using OpenStreetMap as reliable fallback
  const staticMapUrl = `https://static-maps.yandex.ru/1.x/?ll=17.6252,59.1955&z=15&size=300,150&l=map&pt=17.6252,59.1955,pm2rdl`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <a href="tel:+4681234567" className="contact-link">
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.4-.1-.8 0-1.1.2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1-.3-1.1-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
            </svg>
          </a>
          <a href="mailto:info@tvattfirman.se" className="contact-link">
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://instagram.com/tvattfirman" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path d="M12 2c2.7 0 3 .1 4 .3 1 .2 1.6.5 2.2.9.6.4 1.1 1 1.5 1.6.4.6.7 1.2.9 2.2.2 1 .3 1.3.3 4s-.1 3-.3 4c-.2 1-.5 1.6-.9 2.2-.4.6-1 1.1-1.6 1.5-.6.4-1.2.7-2.2.9-1 .2-1.3.3-4 .3s-3-.1-4-.3c-1-.2-1.6-.5-2.2-.9-.6-.4-1.1-1-1.5-1.6-.4-.6-.7-1.2-.9-2.2-.2-1-.3-1.3-.3-4s.1-3 .3-4c.2-1 .5-1.6 .9-2.2.4-.6 1-1.1 1.6-1.5.6-.4 1.2-.7 2.2-.9 1-.2 1.3-.3 4-.3zm0 2c-2.7 0-2.9.1-4 .3-.9.2-1.5.4-2 .7-.5.3-1 .8-1.3 1.3-.3.5-.5 1.1-.7 2-.2 1.1-.3 1.3-.3 4s.1 2.9.3 4c.2.9.4 1.5.7 2 .3.5.8 1 1.3 1.3.5.3 1.1.5 2 .7 1.1.2 1.3.3 4 .3s2.9-.1 4-.3c.9-.2 1.5-.4 2-.7.5-.3 1-.8 1.3-1.3.3-.5.5-1.1.7-2 .2-1.1.3-1.3.3-4s-.1-2.9-.3-4c-.2-.9-.4-1.5-.7-2-.3-.5-.8-1-1.3-1.3-.5-.3-1.1-.5-2-.7-1.1-.2-1.3-.3-4-.3zm-6 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
            </svg>
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} Bubblan. Alla rättigheter förbehållna.</p>
        
        <div 
          className="map-preview" 
          onClick={handleMapClick}
          role="button"
          tabIndex={0}
          aria-label="Öppna plats i Google Maps"
          onKeyDown={(e) => e.key === 'Enter' && handleMapClick()}
        >
          <img 
            src={staticMapUrl} 
            alt="Vår plats på kartan" 
            className="map-image"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://tile.openstreetmap.org/15/17.6252/59.1955.png";
            }}
          />
          <div className="map-overlay">
            <span>Klicka för att öppna i Google Maps</span>
          </div>
        </div>
        
        <p className="footer-hours">Öppettider: Mån-Fre 08:00-18:00, Lör 10:00-15:00</p>
      </div>
    </footer>
  );
};

export default Footer;