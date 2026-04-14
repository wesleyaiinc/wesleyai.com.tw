import React from 'react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    client: 'Global Tier-1 Energy Infrastructure Manufacturer',
    title: 'CRA Gap Analysis for EV Charger Product Line',
    impact: 'Identified compliance gaps across firmware, vulnerability management, and technical documentation — mapped to a prioritized 18-month remediation roadmap.',
    image: 'https://picsum.photos/seed/ev1/800/600'
  },
  {
    id: '2',
    client: 'Taiwan Industrial Exporters',
    title: 'EU Cyber Resilience Act Market Entry Strategy',
    impact: 'Developed a CRA compliance framework enabling Taiwan OEMs to maintain EU market access ahead of the 2027 enforcement deadline.',
    image: 'https://picsum.photos/seed/factory2/800/600'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4 italic text-blue-500 tracking-tighter uppercase underline decoration-blue-500/30 underline-offset-8">Proven Work</h2>
            <p className="text-gray-400 max-w-xl">Strategic engagements delivering measurable compliance and market value.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((cs) => (
            <div key={cs.id} className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden rounded-3xl mb-6">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">{cs.client}</span>
                   <h3 className="text-2xl font-bold mt-1">{cs.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-lg group-hover:text-white transition-colors">{cs.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
