import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Vivek</div>

        {/* Hamburger */}
        <button
          className="md:hidden z-[100]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-xl font-medium transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
