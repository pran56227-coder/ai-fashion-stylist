import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadSection from "./components/UploadSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  // Global bulletproof scroll function passed or referenced across files
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Scroll target ID: #${id} not found in DOM.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A11] text-white overflow-x-hidden selection:bg-pink-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Sticky Navigation bar */}
      <Navbar onScrollTo={scrollToSection} />

      <main>
        {/* Intro Hero Section */}
        <Hero onScrollTo={scrollToSection} />
        
        {/* Workspace Upload Section */}
        <div id="upload-section" className="scroll-mt-24">
          <UploadSection />
        </div>

        {/* Feature Matrix Breakdown */}
        <div id="features-section" className="scroll-mt-24">
          <Features />
        </div>

        {/* Columnar Pricing Framework */}
        <div id="pricing-section" className="scroll-mt-24">
          <Pricing onScrollTo={scrollToSection} />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
