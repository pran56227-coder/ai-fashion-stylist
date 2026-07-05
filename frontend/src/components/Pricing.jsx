import React from "react";

function Pricing({ onScrollTo }) {
  const operationalModes = [
    {
      badge: "INPUT COGNITION",
      name: "Personal Wardrobe Scanner",
      description: "Analyze, grade, and balance the clothes you already own.",
      capabilities: [
        "Instant Image Composition Breakdown",
        "Hex Swatch Palette & Contrast Extraction",
        "Silhouette & Draping Metric Evaluation",
        "Personal Wardrobe Score Generation"
      ],
      cta: "Analyze My Clothes 📸",
      highlighted: false
    },
    {
      badge: "AUTONOMOUS DISCOVERY",
      name: "AI Smart-Sourcing Engine",
      description: "Don't have the piece? Our AI finds matching item images for you.",
      capabilities: [
        "Aesthetic Vector Database Queries",
        "Autonomous Web-Catalog Match Hunting",
        "Generative Outfit Variant Previews",
        "Visual Trend Grid Asset Assembly"
      ],
      cta: "Discover Outfits For Me 🔮",
      highlighted: true
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-24 text-white border-t border-white/[0.04]">
      <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">System Engine Controls</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-4 tracking-tight">Choose Your Styling Mode</h2>
      <p className="text-center text-gray-400 text-sm max-w-md mx-auto mb-20 font-medium">
        Toggle between parsing your uploaded files or unleashing our web-crawler engine to fetch exact aesthetic matches.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {operationalModes.map((mode, idx) => (
          <div 
            key={idx} 
            className={`p-10 rounded-[36px] border flex flex-col justify-between transition-all duration-300 relative ${
              mode.highlighted 
                ? "border-cyan-500/50 bg-gradient-to-b from-cyan-950/10 to-transparent shadow-2xl shadow-cyan-500/5" 
                : "border-white/[0.06] bg-white/[0.01]"
            }`}
          >
            {/* Mode Action Badge Tag */}
            <span className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm ${
              mode.highlighted ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/20" : "bg-[#14121F] text-gray-400 border-white/10"
            }`}>
              {mode.badge}
            </span>

            <div>
              <h3 className="text-2xl font-black tracking-tight mt-2">{mode.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                {mode.description}
              </p>
              
              {/* Detailed Operational Specs */}
              <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                {mode.capabilities.map((capability, cIdx) => (
                  <li key={cIdx} className="text-gray-300 text-xs sm:text-sm font-medium flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Links up directly into your interactive upload and form center workspace */}
            <button 
              onClick={() => onScrollTo("upload-section")}
              className={`mt-10 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all active:scale-[0.98] ${
                mode.highlighted ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 shadow-md" : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
              }`}
            >
              {mode.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
