import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";   // ✅ Common Navbar
import Footer from "./components/footer.jsx";   // ✅ Common Footer

import Landing from "./pages/landing.jsx";
import Trial from "./pages/Trial.jsx";
import Sports from "./pages/Sports.jsx";
import Login from "./pages/login.jsx";
import Gallery from "./pages/Gallery.jsx";
import Callback from "./pages/callback.jsx";
import Coaches from "./pages/coaches.jsx";
import Venues from "./pages/venues.jsx";
import About from "./pages/about.jsx";

function App() {
  return (
    <BrowserRouter>

      {/* 🌟 GLOBAL NAVIGATION BAR (visible on all pages) */}
      <Navbar />

      {/* 🌟 PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/programs" element={<Sports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* 🌟 GLOBAL FOOTER (visible on all pages except if page hides it manually) */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
