import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Landing from "./pages/landing";
import About from "./pages/about";
import Coaches from "./pages/Coaches";
import Gallery from "./pages/Gallery";
import Venues from "./pages/venues";
import Sports from "./pages/Sports";
import Trial from "./pages/Trial";
import OAuthSuccess from "./pages/OAuthSuccess";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Sports />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
