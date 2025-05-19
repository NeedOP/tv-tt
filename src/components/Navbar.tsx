import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          {/* Proper image implementation */}
          <img 
            src="/icon.jpg" 
            alt="Tvättfirman logo" 
            className="logo-image"
          />
        </Link>
        
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Hem</Link>
          </li>
          <li>
            <Link to="/om" onClick={() => setIsOpen(false)}>Om oss</Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;