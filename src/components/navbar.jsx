import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

import { 
  FaInstagram, 
  FaFacebook, 
  FaYoutube, 
  FaLinkedin,
  FaPhoneAlt       
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-inner ${scrolled ? "scrolled-inner" : ""}`}>

        {/* LOGO */}
        <img src={logo} className="nav-logo" alt="Altius Logo" />

        {/* NAV LINKS */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/programs" className="nav-link">Sports Programs</Link>
          <Link to="/coaches" className="nav-link">Coaches</Link>
          <Link to="/venues" className="nav-link">Academy Venues</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </nav>

        {/* SOCIAL + CALL ICONS */}
        <div className="social-icons">
          <a href="https://www.instagram.com/altiussportsacademy" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/share/15op1w1Jm6/" target="_blank">
            <FaFacebook />
          </a>

          <a href="https://youtube.com/@altiussportsacademy" target="_blank">
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/company/altius-sports-academy/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          {/* 📞 CALL ICON ADDED HERE */}
          <a href="tel:+918939175590" className="call-icon">
            <FaPhoneAlt />
          </a>

        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
