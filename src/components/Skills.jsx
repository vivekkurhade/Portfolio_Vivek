import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <h2 
        className="text-4xl font-bold text-center mb-12" 
        data-aos="fade-up"
      >
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {/* Skill Card */}
        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <FaHtml5 className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold">HTML5</h3>
        </div>

        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaCss3Alt className="text-6xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold">CSS3</h3>
        </div>

        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <FaJsSquare className="text-6xl text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div>

        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FaReact className="text-6xl text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold">React.js</h3>
        </div>

        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <FaNodeJs className="text-6xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>

        <div 
          className="flex flex-col items-center p-6 shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <FaDatabase className="text-6xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold">MongoDB</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;
