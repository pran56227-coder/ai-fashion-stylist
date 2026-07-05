import React from "react";

function Hero({ onScrollTo }) {
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-28 pb-16 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold uppercase tracking-widest text-purple-400 mb-8">
        ✨ AI Style Coach Now Active
      </span>

      <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
        Your Wardrobe, Refined By <br />
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Expert AI Coaching.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
        Drop any clothing item image file below to receive instant professional styling tips, color harmony advice, and wardrobe layering guidance.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={() => onScrollTo("upload-section")} className="w-full sm:w-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-purple-500/25 hover:opacity-95 active:scale-95 transition-all">
          Get Style Advice 📸
        </button>
      </div>

      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/[0.06] pt-12 max-w-5xl mx-auto text-left">
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🎨</span>
          <h4 className="text-white font-bold text-sm mt-2">Color Harmony</h4>
          <p className="text-gray-500 text-xs mt-1">AI-powered suggestions for perfect color balancing.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">📐</span>
          <h4 className="text-white font-bold text-sm mt-2">Proportion Check</h4>
          <p className="text-gray-500 text-xs mt-1">Evaluates silhouette and hemline proportionality.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🧥</span>
          <h4 className="text-white font-bold text-sm mt-2">Layering Tips</h4>
          <p className="text-gray-500 text-xs mt-1">Actionable advice on coordinating your outerwear.</p>
        </div>
        <div className="p-4 bg-white/[0.01] rounded-2xl border border-white/[0.03]">
          <span className="text-xl">🎭</span>
          <h4 className="text-white font-bold text-sm mt-2">Occasion Profiling</h4>
          <p className="text-gray-500 text-xs mt-1">Tailored styling for formal, casual, or streetwear.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
