import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">WESLEY AI <span className="text-blue-400">Inc</span></span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Helping Taiwan manufacturers navigate EU compliance — CRA, AI Act, and beyond. Based in Taoyuan, Taiwan. Operating globally.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/wesley-lin-18237843" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                <span className="text-xs">LI</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">AI for Energy & Automation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">CRA Compliance</a></li>
              <li><a href="https://schaltbau.com/en/products/contactors/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Schaltbau Contactors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href="mailto:wesley@wesleyai.com.tw" className="hover:text-blue-400 transition-colors">
                  wesley@wesleyai.com.tw
                </a>
              </li>
              <li className="text-gray-600 text-sm">Taoyuan, Taiwan</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2025 Wesley AI Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Registered in Taiwan (R.O.C.)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
