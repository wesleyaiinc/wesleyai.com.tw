import React from 'react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    name: 'Wesley Lin (林靖為)',
    role: 'Founder & Principal Consultant',
    bio: 'Business development professional with deep roots in Taiwan\'s electronics and automation industry. Former roles at Lionic (embedded cybersecurity/DPI) and Delta Electronics (power electronics, energy management, factory automation). Focused on bridging Taiwan manufacturers with EU compliance requirements — especially the Cyber Resilience Act.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">About Wesley AI Inc.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">An independent consulting practice based in Taoyuan, Taiwan — helping manufacturers navigate the intersection of industrial technology and EU regulation.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {members.map((m, idx) => (
            <div key={idx} className="glass p-8 rounded-[2.5rem] text-center hover:bg-white/5 transition-all duration-500 w-full max-w-lg group border border-white/5 hover:border-blue-500/20">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={m.avatar} 
                  alt={m.name} 
                  className="relative w-32 h-32 rounded-3xl mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{m.name}</h3>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-6">{m.role}</p>
              <p className="text-gray-400 text-base leading-relaxed font-light">{m.bio}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <a href="https://www.linkedin.com/in/wesleylin-tw" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-all">
                  <span className="text-[10px] font-bold">LI</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
