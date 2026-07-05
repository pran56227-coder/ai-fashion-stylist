import React from "react";

function Navbar({ onScrollTo }) {
  return (
    <header className="w-full bg-[#0B0A11]/70 backdrop-blur-xl border-b border-white/[0.06] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Anchor */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tight flex items-center gap-1.5 cursor-pointer select-none"
        >
          <span>AI</span>
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">STYLIST</span>
        </div>

        {/* Global Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition"
          >
            Home
          </button>
          
          <button 
            onClick={() => onScrollTo("features-section")}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition"
          >
            Features
          </button>

          <button 
            onClick={() => onScrollTo("about-section")}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition"
          >
            About
          </button>

          <button 
            onClick={() => onScrollTo("pricing-section")}
            className="text-gray-400 hover:text-white font-semibold text-sm tracking-wide transition"
          >
            AI Modes
          </button>
        </nav>

        {/* Header Direct Action Trigger */}
        <div>
          <button 
            onClick={() => onScrollTo("upload-section")}
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-xs uppercase tracking-widest text-white font-extrabold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-500/20"
          >
            Upload Outfit ✨
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
