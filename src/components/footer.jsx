import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.jpg";

// Social Icons
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin,FaPhoneAlt  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP CONTENT */}
      <div className="footer-top">

        {/* LOGO + TITLE */}
        <div className="footer-logo">
          <img src={logo} alt="Altius Logo" />
          <h1>ALTIUS SPORTS ACADEMY</h1>
          <h2>Discover. Advance. Triumph.</h2>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/programs">Sports Programs</a>
          <a href="/coaches">Coaches</a>
          <a href="/venues">Academy Venues</a>
          <a href="/gallery">Gallery</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Chennai, Tamil Nadu</p>
          <p>👤 Shriram Srinivasan - Academy Manager</p>
          <p>📞 +91 89391 75590 / +91 82481 13156</p>
          <p>✉️ altiussportacademy@gmail.com</p>

          {/* SOCIAL ICONS */}
          <div className="footer-social">
             <a href="https://www.instagram.com/altiussportsacademy" target="_blank"><FaInstagram /></a>
                      <a href="https://www.facebook.com/share/15op1w1Jm6/" target="_blank"><FaFacebook /></a>
                      <a href="https://youtube.com/@altiussportsacademy" target="_blank"><FaYoutube /></a>
                      <a href="https://www.linkedin.com/company/altius-sports-academy/" target="_blank"><FaLinkedin /></a>
                      {/* 📞 CALL ICON ADDED HERE */}
                                <a href="tel:+918939175590" className="call-icon">
                                  <FaPhoneAlt />
                                  </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2025 Altius Sports Academy — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
