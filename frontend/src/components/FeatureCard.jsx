import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10"></div>

      <div className="relative">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-3xl shadow-lg">

          {icon}

        </div>

        <h2 className="text-2xl font-bold text-white">

          {title}

        </h2>

        <p className="mt-4 leading-8 text-gray-300">

          {description}

        </p>

      </div>

    </motion.div>
  );
}

export default FeatureCard;;