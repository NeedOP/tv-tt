import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Tvätt</h1>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Hem</Link></li>
          <li><Link to="/om" onClick={() => setOpen(false)}>Om</Link></li>
          <li><Link to="/pris" onClick={() => setOpen(false)}>Pris</Link></li>
          <li><Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
