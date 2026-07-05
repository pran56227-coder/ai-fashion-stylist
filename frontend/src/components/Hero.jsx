import React from "react";

function Hero({ onScrollTo }) {
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-28 pb-16 text-center">
      {/* Dynamic Visual Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-8">
        🚀 V2 Multimodal Deep Learning Vision Engine Online
      </span>

      <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
        Your Wardrobe, Refined By <br />
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Expert Aesthetic AI.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
        Drop an outfit file below to break down design language, match complementary color variables, and generate curated silhouette styling maps instantly.
      </p>

      {/* BOTH HERO BUTTONS FIXED AND SECURELY LINKED */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onScrollTo("upload-section")}
          className="w-full sm:w-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-purple-500/25 hover:opacity-95 active:scale-95 transition-all"
        >
          Upload Your Outfit 📸
        </button>

        <button
          onClick={() => onScrollTo("upload-section")}
          className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
        >
          Try Live Demo 🔮
        </button>
      </div>

      {/* Expanded Quick Features Banner */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/[0.06] pt-12 max-w-5xl mx-auto text-left">
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🎨</span>
          <h4 className="text-white font-bold text-sm mt-2">Hex Contrast Decoding</h4>
          <p className="text-gray-500 text-xs mt-1">Extracts exact garment swatches for matching.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">📐</span>
          <h4 className="text-white font-bold text-sm mt-2">Proportion Mapping</h4>
          <p className="text-gray-500 text-xs mt-1">Balances top/bottom cuts to maintain structural silhouettes.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🧥</span>
          <h4 className="text-white font-bold text-sm mt-2">Capsule Layering</h4>
          <p className="text-gray-500 text-xs mt-1">Recommends smart jackets, outerwear, and footwear.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🎭</span>
          <h4 className="text-white font-bold text-sm mt-2">Occasion Profiling</h4>
          <p className="text-gray-500 text-xs mt-1">Cross-checks fits against casual, streetwear, or formal filters.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
