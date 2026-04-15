import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">WESLEY AI <span className="text-blue-400">Inc</span></span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
          <a href="#contact-form" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">AI Demo</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Work</a>
          <a href="#articles" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Articles</a>
          <a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
          <a
            href="mailto:wesley@wesleyai.com.tw"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 flex flex-col space-y-4">
          <a href="#services" onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">Services</a>
          <a href="#contact-form" onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">CRA Enquiry</a>
          <a href="#projects" onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">Work</a>
          <a href="#articles" onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">Articles</a>
          <a href="#team" onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2">About</a>
          <a href="mailto:wesley@wesleyai.com.tw" onClick={closeMenu} className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold text-center hover:bg-gray-200 transition-all">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
