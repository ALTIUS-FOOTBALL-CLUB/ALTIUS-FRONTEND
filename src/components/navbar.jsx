import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../context/authcontext";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaDoorOpen,
  FaSignOutAlt
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleLogin = () => {
    closeMenu();
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="nav-inner">

        {/* LOGO (close menu on click) */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            className="nav-logo"
            alt="Altius Sports Academy"
          />
        </Link>

        {/* NAV LINKS */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/programs" onClick={closeMenu}>Sports Programs</Link>
          <Link to="/coaches" onClick={closeMenu}>Coaches</Link>
          <Link to="/venues" onClick={closeMenu}>Academy Venues</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* SOCIAL ICONS (desktop only via CSS) */}
          <div className="social-icons">
            <a href="https://www.instagram.com/altiussportsacademy" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/15op1w1Jm6/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://youtube.com/@altiussportsacademy" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/altius-sports-academy/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* LOGIN / LOGOUT */}
          {!user ? (
            <button className="login-btn" onClick={handleLogin}>
              <FaDoorOpen /> Login
            </button>
          ) : (
            <button className="logout-icon-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          )}

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "is-active" : ""}`}
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
