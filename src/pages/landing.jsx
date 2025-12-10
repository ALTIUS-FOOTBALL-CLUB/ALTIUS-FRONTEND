import React from "react";
import "../styles/landing.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Background video
import bgVideo from "../assets/bg-video.mp4";

const Landing = () => {
  return (
    <>
      <Navbar />

      <section className="landing">

        {/* Blurred Background Layer */}
        <video
          className="landing-video-blur"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Main Center Video */}
        <video
          className="landing-video"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* HERO CONTENT */}
        <div className="hero">
          <p className="pretitle">WELCOME TO ALTIUS SPORTS ACADEMY</p>

          <h1 className="hero-title">
            Discover Advance <span className="accent">Triumph</span>
          </h1>

          <p className="hero-sub">
            Experience world-class training in sports, where passion meets
            performance and champions are made.
          </p>

          {/* Top Buttons Row */}
          <div className="hero-buttons">
            <a href="/programs" className="btn btn-orange">
              EXPLORE PROGRAMS
            </a>

            <a href="/contact" className="btn btn-outline">
              BOOK A TRIAL SESSION
            </a>
          </div>

          {/* Inquiry Button */}
          <div className="inquiry-wrapper">
            <a href="tel:+918939175590" className="inquiry-btn">
              <span className="phone-icon">📞</span> Inquiry Now
            </a>
          </div>
        </div>

        {/* Floating Free Trial Button */}
        <a href="/trial" className="free-trial-btn">Free Trial Class</a>
          Free <br /> Trial <br /> Class
        
      </section>

      <Footer />
    </>
  );
};

export default Landing;
