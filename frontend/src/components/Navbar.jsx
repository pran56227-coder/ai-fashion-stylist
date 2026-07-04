function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-black text-white">
          👗 StyleAI
        </h1>

        <div className="hidden md:flex gap-10">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </a>

          {/* Connected to your Features section */}
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </a>

          {/* Connected to your Stats/Pricing section */}
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-white transition"
          >
            About
          </a>
        </div>

        {/* Converted button to a link that jumps directly down to the functional demo box */}
        <a 
          href="#demo"
          className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105 inline-block text-center"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
