import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadSection from "./components/UploadSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0A11] overflow-x-hidden selection:bg-pink-500 selection:text-white relative">
      
      {/* Visual Canvas Particle Layer */}
      {window.location.pathname === "/" && <StarBackground />}

      {/* Synchronized Header Navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main>
        <Hero />
        
        {/* Main Target ID added for smooth scroll link matching */}
        <div id="upload-section">
          <UploadSection />
        </div>

        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
