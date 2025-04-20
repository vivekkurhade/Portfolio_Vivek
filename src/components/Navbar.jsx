import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuItems = ['home', 'skills', 'projects', 'about', 'contact'];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] animate-pulse" />
          <span className="hidden sm:block text-white font-semibold text-lg transition-all duration-300 group-hover:tracking-widest">
            portfolio
          </span>
        </a>

        {/* Hamburger Button (with simple rotate animation) */}
        <button
          className={`md:hidden text-white transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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

        {/* Mobile Dropdown (not full screen) */}
        <div
          className={`
            absolute left-0 right-0 top-full mt-2 mx-6 
            bg-gradient-to-br from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 
            rounded-lg shadow-lg origin-top transform 
            transition-all duration-300 ease-in-out md:hidden
            ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
          `}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="capitalize text-white hover:text-indigo-300 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
