import React from "react";

function Features() {
  const featureSet = [
    {
      icon: "⚡",
      title: "Vision Analysis Engine",
      desc: "Scans garments instantly to recognize pattern spacing, structural cuts, material texture, and modern aesthetic genres."
    },
    {
      icon: "🔮",
      title: "Color Match Matrix",
      desc: "Applies mathematical color theory models to suggest perfectly balanced contrasting pieces and safe palettes."
    },
    {
      icon: "👑",
      title: "Elevated Layering Logic",
      desc: "Provides architectural feedback on outerwear, footwear, and micro-accessories to turn simple items into runway fits."
    }
  ];

  return (
    <section id="features-section" className="max-w-7xl mx-auto px-8 py-20 font-['Plus_Jakarta_Sans',sans-serif] text-white scroll-mt-24">
      <p className="uppercase tracking-[6px] text-xs font-black text-cyan-400 text-center">Core Framework</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-16 tracking-tight">Intelligent Wardrobe Features</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {featureSet.map((feat, idx) => (
          <div key={idx} className="p-8 rounded-[32px] border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-pink-500/30 transition-all duration-300 group">
            <div className="text-3xl bg-white/[0.04] w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold mt-6 tracking-tight">{feat.title}</h3>
            <p className="text-gray-400 mt-3 leading-relaxed text-sm font-medium">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
