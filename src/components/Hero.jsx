import React from 'react';

function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
      <h1 
        className="text-5xl font-bold mb-4" 
        data-aos="fade-down"
      >
        Hi, I'm Vivek 👋
      </h1>
      
      <p 
        className="text-xl mb-8 text-gray-600" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        A passionate Developer aiming to build impactful solutions 🚀
      </p>
      
      <a 
        href="#contact" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Hire Me
      </a>
    </section>
  );
}

export default Hero;
