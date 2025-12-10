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

  // Sticky scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-inner ${scrolled ? "scrolled-inner" : ""}`}>

        {/* LOGO (Clickable) */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} className="nav-logo" alt="Altius Sports Academy Logo" />
        </Link>

        {/* MAIN NAVIGATION */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/programs" className="nav-link" onClick={closeMenu}>Sports Programs</Link>
          <Link to="/coaches" className="nav-link" onClick={closeMenu}>Coaches</Link>
          <Link to="/venues" className="nav-link" onClick={closeMenu}>Academy Venues</Link>
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
        </nav>

        {/* SOCIAL ICONS + CALL BUTTON */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/altiussportsacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/15op1w1Jm6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://youtube.com/@altiussportsacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/company/altius-sports-academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* CALL ICON */}
          <a href="tel:+918939175590" className="call-icon">
            <FaPhoneAlt />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
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
