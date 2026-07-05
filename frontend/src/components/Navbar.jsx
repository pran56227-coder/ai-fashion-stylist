import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  // A robust window coordinator that locates any element in the active DOM tree
  const executeScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`DOM Element with ID "${targetId}" could not be located.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A11] text-white overflow-x-hidden selection:bg-pink-500 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navbar gets the scroll function directly */}
      <Navbar onScrollTo={executeScroll} />
      
      {/* Home page orchestrates the central viewport blocks */}
      <Home onScrollTo={executeScroll} />
      
      <Footer />
    </div>
  );
}

export default App;
