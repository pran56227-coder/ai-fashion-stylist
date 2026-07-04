import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImageUploader from "../components/ImageUploader";
import Features from "../components/Features";
import UploadSection from "../components/UploadSection";
import Stats from "../components/Stats";
import StarBackground from "../components/StarBackground";
import Footer from "../components/Footer"; // Added Footer if you have it

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Animated Star Background */}
      <StarBackground />

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-40 h-[600px] w-[600px] rounded-full bg-pink-500/30 blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[180px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 h-2 w-2 rounded-full bg-pink-400 animate-bounce"></div>
        <div className="absolute top-60 right-32 h-3 w-3 rounded-full bg-cyan-400 animate-ping"></div>
        <div className="absolute bottom-24 left-1/3 h-2 w-2 rounded-full bg-white animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 h-3 w-3 rounded-full bg-purple-400 animate-bounce"></div>
      </div>

      <Navbar />

      <Hero />

      {/* Static Visual Section */}
      <UploadSection />

      {/* Working Functional Backend Component placed beautifully below it */}
      <div id="demo" className="relative z-10 max-w-xl mx-auto my-12 p-8 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 text-center backdrop-blur-md">
        <h3 className="text-xl font-semibold mb-2 text-white">Try the Live Demo</h3>
        <p className="text-sm text-zinc-400 mb-6">Upload your outfit image below to get instant AI styling feedback.</p>
        <ImageUploader />
      </div>

      {/* Anchored Sections for Navbar Scrolling */}
      <div id="features" className="relative z-10">
        <Features />
      </div>

      <div id="pricing" className="relative z-10">
        <Stats />
      </div>

      <Footer />

    </div>
  );
}

export default Home;
