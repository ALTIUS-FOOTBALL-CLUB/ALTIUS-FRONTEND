// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Coaches from "./pages/Coaches";
import Login from "./pages/Login"; // <-- ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/coaches/:slug" element={<Coaches />} />
        <Route path="/login" element={<Login />} />   {/* <-- ADD THIS */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
