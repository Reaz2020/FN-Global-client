export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your Gateway to Global Education
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            We help students explore international study opportunities and guide them from application to arrival.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Decorative Element */}
        <div className="hidden md:block">
          <div className="w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
}