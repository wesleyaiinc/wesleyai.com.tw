import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIPlayground from './components/AIPlayground';
import CaseStudies from './components/CaseStudies';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Team from './components/Team';

const App: React.FC = () => {
  return (
    <div className="min-h-screen hero-bg selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIPlayground />
        <CaseStudies />
        <Articles />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
