import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Projects from '../components/Projects';
import Metrics from '../components/Metrics';
import Contact from '../components/Contact';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Metrics />
      <Contact />
    </main>
  );
};

export default Home;