import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  // Global bulletproof scroll engine
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A11] text-white overflow-x-hidden selection:bg-pink-500 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Universal header navigation */}
      <Navbar onScrollTo={handleScrollToSection} />
      
      {/* Central landing frame assembly */}
      <Home onScrollTo={handleScrollToSection} />
    </div>
  );
}

export default App;
