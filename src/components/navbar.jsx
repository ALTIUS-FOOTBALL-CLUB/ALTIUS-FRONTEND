import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaDoorOpen,
  FaSignOutAlt
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("altius_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.warn("altius_user parse error:", err);
        localStorage.removeItem("altius_user");
      }
    }
  }, []);

  // Google OAuth Login
  const handleLogin = () => {
    window.location.href = "http://localhost:8008/auth/login";
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("altius_user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-inner ${scrolled ? "scrolled-inner" : ""}`}>

        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} className="nav-logo" alt="Altius Sports Academy" />
        </Link>

        {/* NAV LINKS */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
          <Link to="/programs" className="nav-link" onClick={() => setOpen(false)}>Sports Programs</Link>
          <Link to="/coaches" className="nav-link" onClick={() => setOpen(false)}>Coaches</Link>
          <Link to="/venues" className="nav-link" onClick={() => setOpen(false)}>Academy Venues</Link>
          <Link to="/gallery" className="nav-link" onClick={() => setOpen(false)}>Gallery</Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/altiussportsacademy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/15op1w1Jm6/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com/@altiussportsacademy" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/altius-sports-academy/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

            <a href="tel:+918939175590" className="call-icon" aria-label="Call">
              <FaPhoneAlt />
            </a>
          </div>

          {/* LOGIN OR LOGOUT */}
          {!user ? (
            <button className="login-btn" onClick={handleLogin}>
              <FaDoorOpen className="door-icon" />
              Login
            </button>
          ) : (
            <button className="logout-icon-btn" onClick={handleLogout} title="Logout">
              <FaSignOutAlt />
            </button>
          )}

        </div>

        {/* HAMBURGER MENU */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
