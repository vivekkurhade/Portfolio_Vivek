import React from 'react';

const webProjects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my skills and projects.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "An online store with shopping cart and payment integration.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with authentication.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const videoProjects = [
  {
    title: "Showreel Edit",
    description: "Short cinematic edits for creators and brands.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "YouTube Thumbnails",
    description: "Creative thumbnails designed to boost views.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#2b2556] via-[#302b63] to-[#24243e] text-white">
      <h2
        className="text-4xl font-bold text-center mb-16"
        style={{
          textShadow: '0 0 1px rgba(255,255,255,0.7), 0 0 6px rgba(255,255,255,0.5)',
          fontFamily: '"Special Gothic Expanded One", sans-serif',
        }}
        data-aos="fade-up"
      >
        My Projects
      </h2>

      {/* Web Development Projects */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h3 className="text-3xl font-bold mb-8" data-aos="fade-right">Web Development</h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-500 ease-in-out hover:border hover:border-cyan-400 shadow-lg hover:brightness-110"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition duration-500 ease-in-out transform group-hover:scale-105" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Editing Projects */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8" data-aos="fade-right">Video Editing</h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {videoProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-500 ease-in-out hover:border hover:border-pink-400 shadow-lg hover:brightness-110"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition duration-500 ease-in-out transform group-hover:scale-105" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
