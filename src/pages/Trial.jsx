import React, { useState, useEffect } from "react";

import "../styles/trial.css";

import bg1 from "../assets/trial-bg/bg-1.jpg";
import bg2 from "../assets/trial-bg/bg-2.jpg";
import bg3 from "../assets/trial-bg/bg-3.jpg";
import bg4 from "../assets/trial-bg/bg-4.jpg";
import bg5 from "../assets/trial-bg/bg-5.jpg";

const images = [bg1, bg2, bg3, bg4, bg5];

const Trial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
     

      {/* FULL SCREEN SLIDESHOW */}
      <div className="trial-slideshow">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`slide ${current === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="trial-dark-overlay"></div>

      {/* HEADER */}
      <div className="trial-header">
        <h1>Register for a Free Trial Class</h1>
        <p>Fill in your details and our team will contact you shortly.</p>
      </div>

      {/* FORM */}
      <div className="trial-form-wrapper">
        <form className="trial-form">

          <label>Preferred Location</label>
          <select required>
            <option value="">Select Location</option>
            <option>Madipakkam</option>
            <option>Aminjikarai</option>
            <option>Kolathur</option>
            <option>Adyar</option>
            <option>Villivakkam</option>
            <option>Anna Nagar</option>
            <option>Injambakkam</option>
          </select>

          <label>Student Name</label>
          <input type="text" placeholder="Enter student's name" required />

          <label>Date of Birth</label>
          <input type="date" required />

          <label>Residential Address</label>
          <textarea placeholder="Enter full residential address"></textarea>

          <label>Email ID</label>
          <input type="email" placeholder="Email id" required />

          <label>Contact Number</label>
          <input type="number" placeholder="Enter contact number" required />

          <label>Any Medical Conditions?</label>
          <textarea placeholder="Specify if applicable"></textarea>

          <label>Consent: The Academy storing my data for training purposes only.</label>
          <div className="consent-box">
            <label><input type="radio" name="consent" required /> I consent</label>
            <label><input type="radio" name="consent" /> I do not consent</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Trial;
