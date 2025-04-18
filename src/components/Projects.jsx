import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "A full-stack MERN application for online shopping.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A dynamic blog platform using Node.js, Express, and MongoDB.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 
        className="text-4xl font-bold text-center mb-12" 
        data-aos="fade-up"
      >
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggering effect
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 text-center">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
