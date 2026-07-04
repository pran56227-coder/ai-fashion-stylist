function UploadSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <p className="uppercase tracking-[5px] text-pink-400">
              Get Started
            </p>

            <h2 className="mt-5 text-5xl font-black text-white">
              Upload Your Outfit
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Let our AI analyze your clothing and provide outfit
              recommendations, color matching, and styling advice.
            </p>

          </div>

          <div>

            <div className="border-2 border-dashed border-purple-500 rounded-3xl p-16 text-center hover:border-cyan-400 transition">

              <div className="text-7xl">
                ☁️
              </div>

              <h3 className="text-2xl text-white mt-6">
                Drag & Drop Image
              </h3>

              <p className="text-gray-400 mt-3">
                JPG • PNG • JPEG
              </p>

              <button className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-white font-semibold hover:scale-105 transition">

                Browse Files

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default UploadSection;