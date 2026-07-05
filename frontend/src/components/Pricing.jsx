import React from "react";

function Pricing({ onScrollTo }) {
  const customTiers = [
    {
      badge: "STANDARD ACCESS",
      name: "Enthusiast Core",
      cost: "$0",
      features: [
        "5 Multimodal Wardrobe Scans Daily",
        "Hex Color Palette Extraction",
        "Basic Silhouette Metric Balancing",
        "Community Mood Board Access"
      ],
      cta: "Launch Workspace Free",
      premium: false
    },
    {
      badge: "PRO MEMBERSHIP",
      name: "Haute Pro Collective",
      cost: "$14",
      features: [
        "Unlimited Instant Image Payload Scans",
        "Priority GPU Cluster Allocation Queues",
        "Deep Layering Topologies (Jackets & Outerwear)",
        "Hardware Contrast Matching (Accessories & Metallic Accents)",
        "Runway Matrix Predictive Trend Analysis"
      ],
      cta: "Deploy Complete AI Stylist",
      premium: true
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-24 text-white border-t border-white/[0.04]">
      <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">Membership Models</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-20 tracking-tight">Transparent Plan Inclusions</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {customTiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`p-10 rounded-[36px] border flex flex-col justify-between transition-all duration-300 relative ${
              tier.premium 
                ? "border-pink-500/50 bg-gradient-to-b from-pink-950/10 to-transparent shadow-2xl shadow-pink-500/5" 
                : "border-white/[0.06] bg-white/[0.01]"
            }`}
          >
            {/* Tier Label Tag */}
            <span className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm ${
              tier.premium ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/20" : "bg-[#14121F] text-gray-400 border-white/10"
            }`}>
              {tier.badge}
            </span>

            <div>
              <h3 className="text-xl font-extrabold tracking-tight mt-2">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight">{tier.cost}</span>
                <span className="text-gray-500 text-xs font-semibold">/ month</span>
              </div>
              
              {/* Detailed Technical Feature Items */}
              <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-gray-300 text-xs sm:text-sm font-medium flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA action redirects right to the file workspace field */}
            <button 
              onClick={() => onScrollTo("upload-section")}
              className={`mt-10 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all active:scale-[0.98] ${
                tier.premium ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 shadow-md" : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
