import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Välkommen till vår tvättjänst</h1>
    <div className="home-image-container">
      <img
        src="/clothe.jpg"
        alt="Professionell tvätt"
        className="home-image"
        loading="lazy"
      />
    </div>
    <p className="home-text">
      Vi erbjuder högkvalitativ tvättjänst för alla dina kläder.
    </p>
  </div>
);

export default Home;