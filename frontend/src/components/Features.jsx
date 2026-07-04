import FeatureCard from "./FeatureCard";

import {
  FaBrain,
  FaPalette,
  FaTshirt,
  FaCloudSun,
} from "react-icons/fa";

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="text-center">

        <p className="uppercase tracking-[6px] text-pink-400">

          Why Choose Us

        </p>

        <h2 className="mt-4 text-5xl font-black text-white">

          AI Meets Fashion

        </h2>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <FeatureCard
          icon={<FaBrain />}
          title="AI Analysis"
          description="Advanced AI understands your outfit, colors, patterns and style preferences."
        />

        <FeatureCard
          icon={<FaPalette />}
          title="Color Matching"
          description="Receive beautiful color combinations that perfectly complement your clothing."
        />

        <FeatureCard
          icon={<FaTshirt />}
          title="Outfit Suggestions"
          description="Discover stylish outfit ideas for work, college, travel and special occasions."
        />

        <FeatureCard
          icon={<FaCloudSun />}
          title="Weather Smart"
          description="Recommendations change automatically based on weather and season."
        />

      </div>

    </section>
  );
}

export default Features;