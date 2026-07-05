import React from "react";

function StyleCoach({ onScrollTo }) {
  const stylingModes = [
    {
      badge: "CORE ANALYSIS",
      name: "Personal Wardrobe Scanner",
      description: "Get a professional breakdown of your outfit's composition and fit.",
      capabilities: [
        "Instant Image Composition Breakdown",
        "Color Palette & Contrast Extraction",
        "Silhouette & Draping Evaluation",
        "Professional Fashion Scoring"
      ],
      cta: "Analyze My Clothes 📸",
      highlighted: false
    },
    {
      badge: "AI STYLE COACH",
      name: "Expert Styling Assistant",
      description: "Receive actionable, real-time advice to elevate your look instantly.",
      capabilities: [
        "Occasion-Based Styling Tips",
        "Personalized Accessory Pairings",
        "Color Harmony Recommendations",
        "Actionable Layering Advice"
      ],
      cta: "Get Style Advice 🔮",
      highlighted: true
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-24 text-white border-t border-white/[0.04]">
      <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">Style Suite</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-4 tracking-tight">Choose Your Styling Path</h2>
      <p className="text-center text-gray-400 text-sm max-w-md mx-auto mb-20 font-medium">
        Scan your wardrobe for immediate feedback or request expert styling tips to perfect your look.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {stylingModes.map((mode, idx) => (
          <div 
            key={idx} 
            className={`p-10 rounded-[36px] border flex flex-col justify-between transition-all duration-300 relative ${
              mode.highlighted 
                ? "border-purple-500/50 bg-gradient-to-b from-purple-900/10 to-transparent" 
                : "border-white/[0.06] bg-white/[0.01]"
            }`}
          >
            <span className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${
              mode.highlighted ? "bg-purple-600 text-white border-purple-400/20" : "bg-[#14121F] text-gray-400 border-white/10"
            }`}>
              {mode.badge}
            </span>

            <div>
              <h3 className="text-2xl font-black tracking-tight mt-2">{mode.name}</h3>
              <p className="text-gray-400 text-sm font-medium mt-2 leading-relaxed">{mode.description}</p>
              
              <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                {mode.capabilities.map((capability, cIdx) => (
                  <li key={cIdx} className="text-gray-300 text-sm font-medium flex items-start gap-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={() => onScrollTo("upload-section")}
              className={`mt-10 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all ${
                mode.highlighted ? "bg-purple-600 text-white hover:bg-purple-500" : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
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

export default StyleCoach;
