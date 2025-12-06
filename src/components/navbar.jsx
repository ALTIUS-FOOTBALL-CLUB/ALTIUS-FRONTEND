import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <img src={logo} className="nav-logo" alt="Altius Logo" />

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/programs" className="nav-link">Sports Programs</Link>
          <Link to="/coaches" className="nav-link">Coaches</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <button className={`hamburger ${open ? "is-active" : ""}`} onClick={() => setOpen(!open)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
