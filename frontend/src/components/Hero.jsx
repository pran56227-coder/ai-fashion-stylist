import React from "react";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-32 pb-20 text-center font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Premium Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-xs font-bold uppercase tracking-widest text-pink-400 animate-pulse">
        ✨ Powered by Advanced Multimodal Vision AI
      </span>

      {/* Main Headline */}
      <h1 className="mt-8 text-5xl sm:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
        Your Personal AI Stylist, <br />
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Available 24/7.
        </span>
      </h1>

      {/* Description Copy */}
      <p className="mt-6 text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
        Upload any garment to decode its color harmonies, evaluate structural fit proportions, and generate instant, customized layering recommendations.
      </p>

      {/* FIXED BUTTON ACTIONS */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => scrollToSection("upload-section")}
          className="w-full sm:w-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-purple-500/20 hover:opacity-95 active:scale-95 transition-all"
        >
          Upload Your Outfit 🚀
        </button>

        <button
          onClick={() => scrollToSection("features-section")}
          className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          Explore Core Features 🔮
        </button>
      </div>

      {/* Quick Visual Features Inclusions */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.06] pt-12 max-w-4xl mx-auto">
        <div>
          <h4 className="text-white font-extrabold text-lg">Hex Color Decoding</h4>
          <p className="text-gray-500 text-xs mt-1">Extracts exact garment shades</p>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-lg">Proportion Matching</h4>
          <p className="text-gray-500 text-xs mt-1">Balances your silhouette</p>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-lg">Capsule Layering</h4>
          <p className="text-gray-500 text-xs mt-1">Smart jacket & shoe matches</p>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-lg">Occasion Checking</h4>
          <p className="text-gray-500 text-xs mt-1">Formal, streetwear, or casual</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
