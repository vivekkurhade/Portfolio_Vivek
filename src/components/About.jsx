import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-black bg-opacity-95 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-16 overflow-x-hidden">

        {/* Image */}
        <div
          className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-[0_0_20px_#ffffff33] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Text */}
        <div
          className="w-full md:w-1/2 md:pl-12 text-center md:text-left"
          data-aos="fade-left"
        >
          <h2
            className="text-3xl sm:text-5xl font-bold mb-6 text-white"
            style={{
              textShadow: '0 0 3px rgba(255,255,255,0.7), 0 0 6px rgba(255,255,255,0.5)',
              fontFamily: '"Special Gothic Expanded One", sans-serif'
            }}
          >
            About Me
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
            Hi! I'm{' '}
            <span className="font-semibold text-white" style={{ textShadow: '0 0 2px rgba(255,255,255,0.6)' }}>
              Vivek
            </span>
            , a passionate developer obsessed with building impactful solutions.
            I believe in blending vision with technology to create experiences that last forever.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 shadow-[0_0_10px_#ffffff66]"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
