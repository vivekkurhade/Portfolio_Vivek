import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
        
        {/* Image */}
        <div 
          className="md:w-1/2 mb-12 md:mb-0 flex justify-center" 
          data-aos="fade-right"
        >
          <div className="relative group">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Profile" 
              className="rounded-full w-72 h-72 object-cover shadow-lg group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>
        
        {/* Text */}
        <div 
          className="md:w-1/2 md:pl-12 text-center md:text-left" 
          data-aos="fade-left"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Hi! I'm <span className="font-semibold text-blue-500">Vivek</span>, a passionate developer driven by the hunger for excellence.
            I believe in creating elegant, impactful solutions with modern technologies, turning bold visions into powerful realities.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
