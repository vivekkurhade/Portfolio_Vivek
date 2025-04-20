import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,
  FaVideo, FaFilm, FaPaintBrush, FaCode
} from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { Icon: FaHtml5, label: "HTML5", color: "text-orange-400" },
        { Icon: FaCss3Alt, label: "CSS3", color: "text-cyan-400" },
        { Icon: FaJsSquare, label: "JavaScript", color: "text-yellow-300" },
        { Icon: FaReact, label: "React.js", color: "text-blue-400" },
        { Icon: FaNodeJs, label: "Node.js", color: "text-green-400" },
        { Icon: FaDatabase, label: "MongoDB", color: "text-indigo-300" },
      ],
    },
    {
      title: "Video Editing",
      skills: [
        { Icon: FaVideo, label: "DaVinci Resolve", color: "text-purple-400" },
        { Icon: FaFilm, label: "Final Cut Pro", color: "text-red-400" },
        { Icon: FaPaintBrush, label: "Color Grading", color: "text-pink-400" },
        { Icon: FaFilm, label: "Storyboarding", color: "text-yellow-400" },
      ],
    },
    {
      title: "Problem Solving",
      skills: [
        { Icon: FaCode, label: "DSA (600+ Problems Solved)", color: "text-green-300" },
        { Icon: FaCode, label: "Competitive Programming", color: "text-blue-300" },
      ],
    }
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section 
      id="skills" 
      className="relative py-20 bg-gradient-to-b from-[#0f0c29] via-[#1d1a3f] to-[#2b2556] text-white overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 60, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: 2 },
              move: { enable: true, speed: 0.5 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content on Top of Particles */}
      <div className="relative z-10">
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

        <div className="max-w-7xl mx-auto flex flex-col gap-16 px-4">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-semibold mb-8 text-center underline underline-offset-8 decoration-cyan-400" data-aos="fade-up">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.skills.map(({ Icon, label, color }, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center bg-white/5 backdrop-blur-md p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay={100 * (index + 1)}
                  >
                    <Icon className={`text-5xl mb-4 ${color}`} />
                    <h4 className="text-lg font-medium text-center">{label}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
