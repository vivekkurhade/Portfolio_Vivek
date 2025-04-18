import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* Image */}
        <div 
          className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center" 
          data-aos="fade-right"
        >
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Profile" 
              className="rounded-full w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Text */}
        <div 
          className="w-full md:w-1/2 md:pl-12 text-center md:text-left" 
          data-aos="fade-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Hi! I'm <span className="font-semibold text-blue-500">Vivek</span>, a passionate developer driven by the hunger for excellence.
            I believe in creating elegant, impactful solutions with modern technologies, turning bold visions into powerful realities.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
