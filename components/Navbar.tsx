import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">WESLEY AI <span className="text-blue-400">Inc</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
          <a href="#playground" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">AI Demo</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Work</a>
          <a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
          <a
            href="mailto:wesley@wesleyai.com.tw"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
