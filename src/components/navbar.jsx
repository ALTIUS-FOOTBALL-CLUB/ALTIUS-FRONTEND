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

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} className="nav-logo" alt="Altius Sports Academy" />
        </Link>

        {/* NAV LINKS */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Sports Programs</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/venues">Academy Venues</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="right-section">

          <div className="social-icons">
            <a href="https://www.instagram.com/altiussportsacademy"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/15op1w1Jm6/"><FaFacebook /></a>
            <a href="https://youtube.com/@altiussportsacademy"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/altius-sports-academy/"><FaLinkedin /></a>
          </div>

          {!user ? (
            <button className="login-btn" onClick={handleLogin}>
              <FaDoorOpen /> Login
            </button>
          ) : (
            <button className="logout-icon-btn" onClick={handleLogout}>
              <FaSignOutAlt />
            </button>
          )}

          <button
            className={`hamburger ${open ? "is-active" : ""}`}
            onClick={() => setOpen(!open)}
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
