import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Tvättfirman. Alla rättigheter förbehållna.</p>
      <p className="footer-hours">Öppettider: Mån-Fre 08:00-18:00, Lör 10:00-15:00</p>
    </div>
  </footer>
);

export default Footer;