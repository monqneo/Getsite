import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-deep)] text-white font-sans selection:bg-[var(--neon-purple)] selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
