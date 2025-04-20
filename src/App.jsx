



// Make the whole Webiste Neon 
// Like black-bg and white glow text







import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration
      once: true, // animation happens only once
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
