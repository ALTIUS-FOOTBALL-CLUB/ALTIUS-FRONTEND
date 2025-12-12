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
  const [formVisible, setFormVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(false);
  const [loginWarning, setLoginWarning] = useState(false);

  const [form, setForm] = useState({
    location: "",
    student_name: "",
    student_dob: "",
    student_address: "",
    email: "",
    contact_number: "",
    medical_condition: "",
    consent: false,
  });

  // Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // LOGIN VERIFICATION
    const loggedUser = JSON.parse(localStorage.getItem("altius_user"));

    if (!loggedUser) {
      setLoginWarning(true);
      setTimeout(() => setLoginWarning(false), 2000);
      return;
    }

    // Format DOB
    const dateObj = new Date(form.student_dob);
    const formattedDob = `${String(dateObj.getDate()).padStart(2, "0")}/${String(
      dateObj.getMonth() + 1
    ).padStart(2, "0")}/${dateObj.getFullYear()}`;

    const payload = { ...form, student_dob: formattedDob };

    try {
      const res = await fetch("http://localhost:8008/trial/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Hide form → show success popup
        setFormVisible(false);
        setSuccessVisible(true);

        // Reset fields
        setForm({
          location: "",
          student_name: "",
          student_dob: "",
          student_address: "",
          email: "",
          contact_number: "",
          medical_condition: "",
          consent: false,
        });

        // Show form again after 2 sec
        setTimeout(() => {
          setSuccessVisible(false);
          setFormVisible(true);
        }, 2000);
      }
    } catch {
      alert("Server error. Try again.");
    }
  };

  return (
    <>
      {/* CENTER SUCCESS POPUP */}
      {successVisible && (
        <div className="trial-success-center-popup">
          🎉 Form submitted successfully!
        </div>
      )}

      {/* LOGIN REQUIRED POPUP */}
      {loginWarning && (
        <div className="trial-login-warning">
          ⚠️ Please login to submit the form!
        </div>
      )}

      {/* BACKGROUND SLIDESHOW */}
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
      {formVisible && (
        <div className="trial-form-wrapper fade-in">
          <form className="trial-form" onSubmit={handleSubmit}>

            <label>Preferred Location</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            >
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
            <input
              type="text"
              name="student_name"
              value={form.student_name}
              onChange={handleChange}
              required
            />

            <label>Date of Birth</label>
            <input
              type="date"
              name="student_dob"
              value={form.student_dob}
              onChange={handleChange}
              required
            />

            <label>Residential Address</label>
            <textarea
              name="student_address"
              value={form.student_address}
              onChange={handleChange}
              required
            />

            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Contact Number</label>
            <input
              type="number"
              name="contact_number"
              value={form.contact_number}
              onChange={handleChange}
              required
            />

            <label>Any Medical Conditions?</label>
            <textarea
              name="medical_condition"
              value={form.medical_condition}
              onChange={handleChange}
            />

            <label>Consent</label>
            <div className="consent-box">
              <label>
                <input
                  type="radio"
                  name="consentRadio"
                  value="true"
                  checked={form.consent === true}
                  onChange={handleChange}
                  required
                />
                I Consent
              </label>

              <label>
                <input
                  type="radio"
                  name="consentRadio"
                  value="false"
                  checked={form.consent === false}
                  onChange={handleChange}
                />
                I Do Not Consent
              </label>
            </div>

            <button type="submit" className="submit-btn">Submit</button>

          </form>
        </div>
      )}
    </>
  );
};

export default Trial;
