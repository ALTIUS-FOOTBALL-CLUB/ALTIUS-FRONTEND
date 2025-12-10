import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing.jsx";
import Trial from "./pages/Trial.jsx";
import Sports from "./pages/Sports";
import Login from "./pages/login.jsx";
import Gallery from "./pages/Gallery.jsx";
import Footer from "./components/footer";



function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/programs" element={<Sports />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/gallery" element={<Gallery />} />

        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
