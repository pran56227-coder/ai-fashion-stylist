import { motion } from "framer-motion";
import { FaUsers, FaMagic, FaStar, FaBolt } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      value: "10K+",
      label: "Happy Users",
    },
    {
      icon: <FaMagic />,
      value: "50K+",
      label: "Outfits Analyzed",
    },
    {
      icon: <FaStar />,
      value: "95%",
      label: "AI Accuracy",
    },
    {
      icon: <FaBolt />,
      value: "2s",
      label: "Average Analysis",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="grid gap-6 md:grid-cols-4">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4 text-pink-400">
              {item.icon}
            </div>

            <h2 className="text-4xl font-black text-white">
              {item.value}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;