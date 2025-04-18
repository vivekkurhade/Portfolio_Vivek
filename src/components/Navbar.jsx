import React from 'react';

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-md fixed top-0 bg-white z-50">
      <div className="text-2xl font-bold">Vivek</div>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
