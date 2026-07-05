import React from "react";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import Features from "../components/Features";
import Stats from "../components/Stats";

function Home({ onScrollTo }) {
  const customPricingTiers = [
    {
      badge: "STANDARD ENTRY",
      tierName: "Enthusiast Core",
      cost: "$0",
      perks: [
        "5 Comprehensive Wardrobe Scans Daily",
        "Hex Palette & Contrast Extraction",
        "Basic Silhouette Metric Evaluation",
        "Community Mood Board Access Mapping"
      ],
      callToAction: "Open Dropzone Free"
    },
    {
      badge: "ULTIMATE STYLING",
      tierName: "Haute Pro Collective",
      cost: "$14",
      perks: [
        "Unlimited Instant Image Payload Processing",
        "Priority GPU Cluster Allocation Queues",
        "Architectural Layering Systems (Jackets & Outerwear)",
        "Hardware Contrast Matching (Gold/Silver Accessories)",
        "Runway Matrix Predictive Trend Analysis Engine"
      ],
      callToAction: "Deploy Complete AI Stylist",
      highlighted: true
    }
  ];

  return (
    <div className="relative w-full">
      {/* 1. Hero Workspace Banner */}
      <Hero onScrollTo={onScrollTo} />

      {/* 2. Visual Metric Analytics Display */}
      <Stats />
      
      {/* TARGET ANCHOR 1: Interactive Outfit Upload Dropzone */}
      <div id="upload-section" className="scroll-mt-24">
        <UploadSection />
      </div>

      {/* TARGET ANCHOR 2: Technical Infrastructure System Grid */}
      <div id="features-section" className="scroll-mt-24">
        <Features />
      </div>

      {/* TARGET ANCHOR 3: Architectural Brand Mission & Commitment */}
      <section id="about-section" className="max-w-5xl mx-auto px-8 py-28 text-white scroll-mt-24 border-t border-white/[0.04]">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[6px] text-xs font-black text-cyan-400">Brand Ethos</p>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 tracking-tight leading-tight">
              Engineering High-End Aesthetics
            </h2>
          </div>
          <div className="md:col-span-3 space-y-4 text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
            <p>
              Our application breaks down elite styling standards into clear, mathematical, and architectural logic. By decoding proportions, visual weight distributions, and triadic color balancing, we make personal curation instantaneous and analytical.
            </p>
            <p>
              We are passionately committed to helping you refine your daily uniform layouts, organize minimalist capsule structures, and discover styling opportunities hiding right inside your current wardrobe.
            </p>
          </div>
        </div>
      </section>

      {/* TARGET ANCHOR 4: Deep Feature Columnar Pricing Cards */}
      <section id="pricing-section" className="max-w-6xl mx-auto px-8 py-28 text-white scroll-mt-24 border-t border-white/[0.04]">
        <p className="uppercase tracking-[6px] text-xs font-black text-purple-400 text-center">Membership Tiers</p>
        <h2 className="text-center text-4xl sm:text-5xl font-black mt-3 mb-20 tracking-tight">Transparent Plan Inclusions</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {customPricingTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[36px] border flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlighted 
                  ? "border-pink-500/50 bg-gradient-to-b from-pink-950/10 to-transparent shadow-2xl shadow-pink-500/5" 
                  : "border-white/[0.06] bg-white/[0.01]"
              }`}
            >
              {/* Dynamic Status Badges */}
              <span className={`absolute -top-3.5 left-8 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border shadow-sm ${
                tier.highlighted ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/20" : "bg-[#14121F] text-gray-400 border-white/10"
              }`}>
                {tier.badge}
              </span>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight mt-2">{tier.tierName}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight">{tier.cost}</span>
                  <span className="text-gray-500 text-xs font-semibold">/ monthly access</span>
                </div>
                
                {/* Granular Plan Breakdowns */}
                <ul className="mt-8 space-y-4 border-t border-white/[0.06] pt-8">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="text-gray-300 text-xs sm:text-sm font-medium flex items-start gap-3">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Clicking Pricing CTAs snaps users right back up into the active workspace input field */}
              <button 
                onClick={() => onScrollTo("upload-section")}
                className={`mt-10 w-full rounded-xl py-4 text-center text-xs uppercase tracking-widest font-black transition-all active:scale-[0.98] ${
                  tier.highlighted ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 shadow-md" : "bg-white/[0.06] text-white hover:bg-white/[0.1]"
                }`}
              >
                {tier.callToAction}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
