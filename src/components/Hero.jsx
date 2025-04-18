import React from 'react';

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen px-4 text-center bg-gray-100 overflow-x-hidden"
    >
      <h1
        className="text-3xl sm:text-5xl font-bold mb-4"
        data-aos="fade-down"
      >
        Hi, I'm Vivek 👋
      </h1>

      <p
        className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-600 max-w-md sm:max-w-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        A passionate Developer aiming to build impactful solutions 🚀
      </p>

      <a
        href="#contact"
        className="bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 text-sm sm:text-base font-medium shadow-md"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Hire Me
      </a>
    </section>
  );
}

export default Hero;
