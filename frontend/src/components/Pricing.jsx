import React from "react";

function Pricing() {
  const tiers = [
    {
      name: "Enthusiast Tier",
      price: "$0",
      features: ["5 Real-time Uploads Daily", "Standard Palette Extraction", "Basic Layering Suggestions"],
      cta: "Get Started Free"
    },
    {
      name: "Haute Couture Pro",
      price: "$14",
      features: ["Unlimited Image Uploads", "Priority Server Queue Processing", "Advanced Multimodal Styling", "Full Capsule Wardrobe Recommendations"],
      cta: "Unlock Pro Stylist",
      popular: true
    }
  ];

  return (
    <section id="pricing-section" className="max-w-6xl mx-auto px-8 py-24 font-['Plus_Jakarta_Sans',sans-serif] text-white scroll-mt-24">
      <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">Membership Plans</p>
      <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-20 tracking-tight">Transparent Pricing Columns</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`p-12 rounded-[40px] border flex flex-col justify-between transition-all duration-300 relative ${
              tier.popular 
                ? "border-pink-500/60 bg-gradient-to-b from-purple-950/10 to-transparent shadow-xl" 
                : "border-white/[0.06] bg-white/[0.02]"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 right-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Highly Recommended
              </span>
            )}
            <div>
              <h3 className="text-2xl font-black tracking-tight">{tier.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight">{tier.price}</span>
                <span className="text-gray-400 text-sm font-semibold">/ monthly</span>
              </div>
              <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-gray-300 text-sm font-medium flex items-center gap-3">
                    <span className="text-emerald-400 text-base">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={() => document.getElementById("upload-section").scrollIntoView({ behavior: "smooth" })}
              className={`mt-12 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all ${
                tier.popular 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-95 shadow-lg shadow-purple-500/10" 
                  : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
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
