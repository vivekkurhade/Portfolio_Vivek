import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-[#0f0c29] via-[#1d1a3f] to-[#2b2556]

 text-white"
    >
      <h2 
        className="text-4xl font-bold text-center mb-12 text-white" 
        data-aos="fade-up"
        style={{
          textShadow: '0 0 1px rgba(255,255,255,0.7), 0 0 6px rgba(255,255,255,0.5)',
          fontFamily: '"Special Gothic Expanded One", sans-serif',
        }}
      >
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        
        {/* Reusable Skill Card Component */}
        {[
          { Icon: FaHtml5, label: "HTML5", color: "text-orange-400" },
          { Icon: FaCss3Alt, label: "CSS3", color: "text-cyan-400" },
          { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-300" },
          { Icon: FaReact, label: "React.js", color: "text-blue-400" },
          { Icon: FaNodeJs, label: "Node.js", color: "text-green-400" },
          { Icon: FaDatabase, label: "MongoDB", color: "text-indigo-300" },
        ].map(({ Icon, label, color }, index) => (
          <div 
            key={index}
            className="flex flex-col items-center bg-white/5 backdrop-blur-md p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={100 * (index + 1)}
          >
            <Icon className={`text-5xl mb-4 ${color}`} />
            <h3 className="text-lg font-medium">{label}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
