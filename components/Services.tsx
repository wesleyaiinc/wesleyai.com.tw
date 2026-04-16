import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'AI Solutions for Energy & Automation',
    description: 'Deploying AI in energy management and factory automation for Taiwan manufacturers — reducing consumption, improving efficiency, and aligning with EU sustainability directives.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    link: '/ai-energy.html'
  },
  {
    id: '2',
    title: 'EU Cyber Resilience Act (CRA) Compliance',
    description: 'The EU CRA takes effect in 2027. Any product with digital components exported to the EU will be affected. We provide gap analysis, compliance roadmaps, and full technical documentation support.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    link: '#contact-form'
  },
  {
    id: '3',
    title: 'Schaltbau Contactor Integration',
    description: 'Representing and integrating Schaltbau high-performance contactors for industrial, rail, and EV charging applications in Taiwan — with local technical support and selection guidance.',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    link: 'https://schaltbau.com/en/products/contactors/'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Core Services</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all group hover:-translate-y-2 flex flex-col">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-1">{service.description}</p>
              {service.link && (
                <a
                  href={service.link}
                  target={service.link.startsWith('http') ? '_blank' : '_self'}
                  rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-8 inline-flex items-center text-blue-400 font-bold group-hover:translate-x-2 transition-transform"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
