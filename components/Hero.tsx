import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Taiwan × EU Compliance Bridge</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Navigating EU Regulations for <span className="text-gradient">Taiwan Manufacturers.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Wesley AI Inc. helps Taiwan industrial companies comply with the EU Cyber Resilience Act, integrate AI into energy & automation systems, and expand into European markets with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 text-center">
              Explore Our Services
            </a>
            <a href="#team" className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold transition-all hover:bg-white/5 text-center">
              About Wesley
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
