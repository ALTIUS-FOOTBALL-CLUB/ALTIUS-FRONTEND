import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Landing from "./pages/landing";
import About from "./pages/about";
import Coaches from "./pages/coaches";
import Gallery from "./pages/gallery";
import Venues from "./pages/venues";
import Sports from "./pages/Sports";
import Trial from "./pages/Trial";

// New page that handles Google OAuth redirect
import OAuthSuccess from "./pages/OAuthSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/programs" element={<Sports />} />
        <Route path="/trial" element={<Trial />} />

        {/* Google OAuth redirect handler */}
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        
      </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}
