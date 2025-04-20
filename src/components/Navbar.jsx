import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.style.overflowX = 'hidden';
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  const menuItems = ['home', 'skills', 'projects', 'about', 'contact'];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Unique Minimal Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] animate-pulse"></span>
          <span className="text-white font-semibold text-lg tracking-wide hidden sm:block group-hover:tracking-widest transition-all duration-300">
            portfolio
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white z-[100]"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-base">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="capitalize transition-all duration-200 hover:text-indigo-400 hover:tracking-widest"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center space-y-10 text-2xl font-semibold text-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setIsOpen(false)}
            className="capitalize hover:text-indigo-300 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
