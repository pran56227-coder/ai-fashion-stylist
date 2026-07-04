import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-20 pb-24">

      <div className="grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-white/10 backdrop-blur-xl px-5 py-2 text-pink-300">

            <HiSparkles />

            AI Powered Fashion Assistant

          </div>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight text-white">

            Discover Your

            <br />

            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

              Perfect Style

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">

            Upload your outfit and receive AI-powered fashion advice,

            color matching, styling recommendations, and outfit inspiration

            in seconds.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105">

              <span className="flex items-center gap-2">

                <FaCloudUploadAlt />

                Upload Outfit

              </span>

            </button>

            <button className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-300 transition hover:bg-cyan-400 hover:text-black">

              Try Demo

            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-gray-400">

            <span>🧠 AI Analysis</span>

            <span>🔒 Secure & Private</span>

            <span>⚡ Instant Results</span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="relative h-[560px] w-[430px] rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-3xl">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink-500/20 to-cyan-500/20"></div>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700"
              alt="Fashion"
              className="absolute bottom-0 rounded-[40px] object-cover h-full w-full"
            />

          </div>

          <div className="absolute top-8 -left-10 rounded-3xl border border-white/10 bg-[#101827]/80 backdrop-blur-xl p-5">

            ⭐ Style Score

            <h2 className="text-3xl font-bold text-white">

              9.4/10

            </h2>

          </div>

          <div className="absolute top-16 -right-8 rounded-3xl border border-white/10 bg-[#101827]/80 backdrop-blur-xl p-5">

            🎨 Match

            <h2 className="text-3xl font-bold text-white">

              92%

            </h2>

          </div>

          <div className="absolute bottom-10 -right-8 rounded-3xl border border-white/10 bg-[#101827]/80 backdrop-blur-xl p-5">

            🌸 Best Season

            <h2 className="text-2xl font-bold text-white">

              Spring

            </h2>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;