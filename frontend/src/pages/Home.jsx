import React from "react";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import Features from "../components/Features";
import Stats from "../components/Stats";
import StyleCoach from "../components/StyleCoach"; // Rename file to StyleCoach.jsx

function Home({ onScrollTo }) {
  return (
    <div className="relative w-full">
      <Hero onScrollTo={onScrollTo} />
      <Stats />
      <div id="upload-section" className="scroll-mt-24"><UploadSection /></div>
      <div id="features-section" className="scroll-mt-24"><Features /></div>
      
      <section id="about-section" className="max-w-5xl mx-auto px-8 py-28 text-white scroll-mt-24 border-t border-white/[0.04]">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[6px] text-xs font-black text-cyan-400">Our Dedication</p>
            <h2 className="text-3xl sm:text-4xl font-black mt-3 tracking-tight leading-tight">Precision Fashion Coaching</h2>
          </div>
          <div className="md:col-span-3 space-y-4 text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
            <p>We leverage advanced multimodal vision pipelines to provide objective, actionable style data. Our mission is to take the guesswork out of fashion by dissecting your look and offering expert, AI-driven guidance.</p>
          </div>
        </div>
      </section>

      <div id="pricing-section" className="scroll-mt-24">
        <StyleCoach onScrollTo={onScrollTo} />
      </div>
    </div>
  );
}

export default Home;
