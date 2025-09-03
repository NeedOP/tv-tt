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

  const industries = [
    { name: "Kök & Restaurang", icon: "🍽️" },
    { name: "Hotell", icon: "🏨" },
    { name: "Arbetskläder", icon: "👔" },
    { name: "Offentlig Sektor", icon: "🏛️" },
    { name: "lokaler", icon: "🎭" },
    { name: "Industri", icon: "🏭" }
  ];

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(sliderInterval);
    };
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
        <section className="services-section">
  <h2 className="section-title">Våra Tjänster</h2>

  <div className="service-card">
    <div className="service-image">
      <img src="\clotthe4.jpg" alt="Arbetskläder" />
    </div>
    <div className="service-text">
      <h3>Professionell tvättservice för perfekt resultat</h3>
      <p>
        Vårt mål är att ge dina textilier och kläder den bästa möjliga tvätten – oavsett om det gäller arbetskläder, hotelltextilier eller privata plagg. Med moderna metoder och miljövänliga tvättmedel säkerställer vi fläckfria, fräscha och långvariga resultat utan att kompromissa med kvaliteten.
      </p>
    </div>
  </div>

  <div className="service-card reverse">
    <div className="service-image">
      <img src="/clothe5.jpg" alt="Hygienprodukter" />
    </div>
    <div className="service-text">
      <h3>Bekväm hämtning & leverans – vi tar tvätten till dig</h3>
      <p>
       Slipp besväret med att köra till tvätteriet! Vi erbjuder en smidig hämt- och leveranstjänst där vi plockar upp och lämnar tillbaka dina kläder på en plats som passar dig. Perfekt för företag, privatpersoner eller verksamheter som vill spara tid.
      </p>
    </div>
  </div>
</section>
      </p>

      {/* Industries Section */}
      <section className="industries-section">
        <h2 className="section-title">Branscher vi betjänar</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
