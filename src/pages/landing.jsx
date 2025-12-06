import React from "react";
import "../styles/landing.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// ⬇️ Import your background video instead of image
import bgVideo from "../assets/bg-video.mp4";

const Landing = () => {
  return (
    <>
      <Navbar />

      <section className="landing">

        {/* ▶ VIDEO BACKGROUND */}
        <video
          className="landing-video"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero">
          <p className="pretitle">WELCOME TO ALTIUS SPORTS ACADEMY</p>

          <h1 className="hero-title">
            RAISE YOUR <span className="accent">GAME</span>
          </h1>

          <p className="hero-sub">
            Experience world-class training in Football and Pickleball, where
            passion meets performance and champions are made.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-orange">EXPLORE PROGRAMS</a>
            <a className="btn btn-outline">BOOK A TRIAL SESSION</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
