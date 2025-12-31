import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../context/authcontext";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const boldText = {
    fontWeight: "700",
    letterSpacing: "0px"
  };

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resize detection
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} className="nav-logo" alt="Altius Sports Academy" />
        </Link>

        {/* DESKTOP NAV LINKS */}
        {!isMobile && (
          <nav className="main-nav">
            <Link to="/" style={boldText}>Home</Link>
            <Link to="/about" style={boldText}>About</Link>
            <Link to="/programs" style={boldText}>Sports Programs</Link>
            <Link to="/coaches" style={boldText}>Coaches</Link>
            <Link to="/venues" style={boldText}>Academy Venues</Link>
            <Link to="/gallery" style={boldText}>Gallery</Link>
          </nav>
        )}

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* DESKTOP ICONS ONLY */}
          {!isMobile && (
            <div className="social-icons">
              <a href="https://www.instagram.com/altiussportsacademy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/share/15op1w1Jm6/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://youtube.com/@altiussportsacademy" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/altius-sports-academy/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="tel:+918939175590"><FaPhoneAlt /></a>
            </div>
          )}

          {/* LOGIN / LOGOUT (ALWAYS OUTSIDE) */}
          {!user ? (
            <button className="login-btn" style={boldText} onClick={handleLogin}>
              <FaDoorOpen /> Login
            </button>
          ) : (
            <button className="logout-icon-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          )}

          {/* HAMBURGER (MOBILE ONLY) */}
          {isMobile && (
            <button
              className={`hamburger ${open ? "is-active" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          )}

        </div>
      </div>

      {/* MOBILE HAMBURGER MENU */}
      {isMobile && open && (
        <div
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "22px",
            padding: "24px 0"
          }}
        >
          {/* NAV LINKS */}
          <Link to="/" style={boldText} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" style={boldText} onClick={() => setOpen(false)}>About</Link>
          <Link to="/programs" style={boldText} onClick={() => setOpen(false)}>Sports Programs</Link>
          <Link to="/coaches" style={boldText} onClick={() => setOpen(false)}>Coaches</Link>
          <Link to="/venues" style={boldText} onClick={() => setOpen(false)}>Academy Venues</Link>
          <Link to="/gallery" style={boldText} onClick={() => setOpen(false)}>Gallery</Link>

          {/* SOCIAL ICONS (MOBILE → INSIDE HAMBURGER ONLY) */}
          <div style={{ display: "flex", gap: "18px", marginTop: "10px" }}>
            <a href="https://www.instagram.com/altiussportsacademy"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/15op1w1Jm6/"><FaFacebook /></a>
            <a href="https://youtube.com/@altiussportsacademy"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/altius-sports-academy/"><FaLinkedin /></a>
            <a href="tel:+918939175590"><FaPhoneAlt /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;