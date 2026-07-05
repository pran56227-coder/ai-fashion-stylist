import React from "react";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import Features from "../components/Features";
import Stats from "../components/Stats";

function Home({ onScrollTo }) {
  const premiumPricingTiers = [
    {
      label: "STANDARD ACCESS",
      name: "Enthusiast Tier",
      price: "$0",
      features: [
        "5 Multimodal Wardrobe Scans Daily",
        "Hex Palette & Contrast Extraction",
        "Basic Top/Bottom Silhouette Balancing",
        "Community Style Board Access"
      ],
      cta: "Launch Workspace Free"
    },
    {
      label: "PREMIUM SELECTION",
      name: "Haute Pro Membership",
      price: "$14",
      features: [
        "Unlimited Instant Image Payload Processing",
        "Priority GPU Vision Server Allocation",
        "Deep Layering Topology (Jackets, Outerwear, Footwear)",
        "Micro-Accessory Hardware Spotting (Gold/Silver matching)",
        "Seasonal Runway Mood Board Trend Alignment Analytics"
      ],
      cta: "Unlock Full AI Access",
      popular: true
    }
  ];

  return (
    <div className="relative z-10">
      {/* Hero Banner Section */}
      <Hero onScrollTo={onScrollTo} />

      {/* Existing Stats Display Component seen in 38bcaece-6be5-4283-a5ca-b192c144605c */}
      <Stats />
      
      {/* TARGET 1: The Workspace Dropzone */}
      <div id="upload-section" className="scroll-mt-24">
        <UploadSection />
      </div>

      {/* TARGET 2: Features Layout Panel */}
      <div id="features-section" className="scroll-mt-24">
        <Features />
      </div>

      {/* NEW TARGET 3: Dedicated Commitment & About Section */}
      <section id="about-section" className="max-w-5xl mx-auto px-8 py-24 text-white scroll-mt-24 border-t border-white/[0.04]">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[6px] text-xs font-black text-cyan-400">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 tracking-tight leading-tight">
              Committed to Architectural Style
            </h2>
          </div>
          <div className="md:col-span-3 space-y-4 text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
            <p>
              We believe great styling shouldn’t be exclusive. Our engine is built to decode high-end fashion principles—like triadic color balancing, garment draping rules, and silhouette proportionality—making elite outfit coordinating instant and accessible.
            </p>
            <p>
              Whether you’re optimizing a casual daily uniform, testing raw streetwear layers, or configuring clean formal attire, our vision pipelines are engineered to provide objective, mathematical feedback on your fits.
            </p>
          </div>
        </div>
      </section>

      {/* TARGET 4: Labeled Column Pricing Layout with Explicit Features */}
      <section id="pricing-section" className="max-w-6xl mx-auto px-8 py-24 text-white scroll-mt-24 border-t border-white/[0.04]">
        <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">Membership Tiers</p>
        <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-20 tracking-tight">Transparent Pricing Columns</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {premiumPricingTiers.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[36px] border flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular 
                  ? "border-pink-500/50 bg-gradient-to-b from-pink-950/10 to-transparent shadow-2xl shadow-pink-500/5" 
                  : "border-white/[0.06] bg-white/[0.01]"
              }`}
            >
              {/* Card Label Tag */}
              <span className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm ${
                plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/20" : "bg-[#14121F] text-gray-400 border-white/10"
              }`}>
                {plan.label}
              </span>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight mt-2">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 text-xs font-semibold">/ month</span>
                </div>
                
                {/* Fully Displayed Plan Benefits */}
                <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-gray-300 text-xs sm:text-sm font-medium flex items-start gap-3">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTAs Redirect to Active Dropzone Target */}
              <button 
                onClick={() => onScrollTo("upload-section")}
                className={`mt-10 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all active:scale-[0.98] ${
                  plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 shadow-md" : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
