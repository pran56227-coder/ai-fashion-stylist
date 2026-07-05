import React from "react";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";

function Home({ onScrollTo }) {
  return (
    <div className="relative w-full">
      {/* 1. Main Welcome Portal */}
      <Hero onScrollTo={onScrollTo} />

      {/* 2. Visual Metric Dashboard counter */}
      <Stats />
      
      {/* 3. Interactive File Workspace Panel */}
      <div id="upload-section" className="scroll-mt-24">
        <UploadSection />
      </div>

      {/* 4. Deep System Architecture Capabilities */}
      <div id="features-section" className="scroll-mt-24">
        <Features />
      </div>

      {/* 5. NEW DETAILED COMMITMENT BLOCK (ABOUT SECTION) */}
      <section id="about-section" className="max-w-5xl mx-auto px-8 py-28 text-white scroll-mt-24 border-t border-white/[0.04]">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[6px] text-xs font-black text-cyan-400">Our Dedication</p>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 tracking-tight leading-tight">
              Committed to Precision Fashion Analytics
            </h2>
          </div>
          <div className="md:col-span-3 space-y-4 text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
            <p>
              We are dedicated to taking high-end fashion coordination out of guessing territory. Our multimodal vision pipelines dissect uploaded garment layers into mathematical variables—analyzing triadic color contrast, visual weight distribution, and hemline proportionality.
            </p>
            <p>
              Whether you are curating a clean, functional capsule collection or optimizing detailed streetwear profiles, our absolute core mission is to empower your daily outfit engineering with objective, actionable style data.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Fully Populated Column Plan Tables */}
      <div id="pricing-section" className="scroll-mt-24">
        <Pricing onScrollTo={onScrollTo} />
      </div>
    </div>
  );
}

export default Home;
