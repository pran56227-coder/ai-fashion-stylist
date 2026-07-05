import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-[#0B0A11]/60 backdrop-blur-xl border-b border-white/[0.06] sticky top-0 z-50 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
          <span>AI</span>
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">STYLIST</span>
        </div>

        {/* Dynamic Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition relative group py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full" />
          </button>
          
          <button 
            onClick={() => scrollToSection("features-section")}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition relative group py-2"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full" />
          </button>

          <button 
            onClick={() => scrollToSection("pricing-section")}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition relative group py-2"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full" />
          </button>
        </nav>

        {/* Global High-Intent Upload CTA */}
        <div>
          <button 
            onClick={() => scrollToSection("upload-section")}
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-xs uppercase tracking-widest text-white font-extrabold hover:opacity-90 active:scale-95 transition-all inline-block shadow-lg shadow-purple-500/20"
          >
            Upload Your Outfit ✨
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
