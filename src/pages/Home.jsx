import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import About from '../components/About'; // <-- Add this import
import Projects from '../components/Projects';
import Metrics from '../components/Metrics';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Hero />
      <TechStack />
      <About /> {/* <-- Place it here */}
      <Projects />
      <Metrics />
      <Contact />
    </main>
  );
};

export default Home;