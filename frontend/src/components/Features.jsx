import React from "react";

function Features() {
  const deepFeatures = [
    { icon: "⚡", title: "Vision Analysis Engine", desc: "Scans garments instantly to identify pattern textures, stitching details, and overarching sub-cultural fashion aesthetics." },
    { icon: "🔮", title: "Color Match Matrix", desc: "Applies triadic and complementary mathematical color theory arrays to prevent tone clashing." },
    { icon: "👑", title: "Layering Topology", desc: "Calculates weight and volume distribution to give pinpoint recommendations on outerwear draping." },
    { icon: "👟", title: "Footwear Curations", desc: "Suggests shoe formats (from high-top boots to classic minimal sneakers) based on hem lengths." },
    { icon: "🕶️", title: "Micro-Accessory Pairing", desc: "Intelligently flags styling gaps where silver/gold hardware, sunglasses, or bags fit best." },
    { icon: "📈", title: "Seasonal Trend Mapping", desc: "Checks outfit structures against updated digital mood boards and curated runway metadata models." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <p className="uppercase tracking-[6px] text-xs font-black text-pink-400 text-center">Comprehensive Capabilities</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-16 tracking-tight">Advanced System Architecture</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deepFeatures.map((feat, idx) => (
          <div key={idx} className="p-8 rounded-[32px] border border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="text-2xl bg-white/[0.03] w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
              {feat.icon}
            </div>
            <h3 className="text-lg font-bold mt-5 tracking-tight">{feat.title}</h3>
            <p className="text-gray-400 mt-2.5 leading-relaxed text-xs sm:text-sm font-medium">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
