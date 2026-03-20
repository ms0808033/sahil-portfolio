import React, { useRef } from 'react';
import { Database } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import myPhoto from '../assets/my-photo.jpeg';

const Hero = () => {
  const container = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Text Stagger Animation
    tl.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, stagger: 0.15 }
    );

    // Image 3D Reveal
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, rotationY: 45, x: 50 },
      { scale: 1, opacity: 1, rotationY: 0, x: 0, duration: 1.5, ease: 'back.out(1.2)' },
      "-=1" // Start slightly before text finishes
    );

    // Floating animation for the badge
    gsap.to('.hero-badge', {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center pt-32 pb-20 px-4 z-10">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div ref={textRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 uppercase">
              Tech & Data Professional
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-5 text-slate-900 dark:text-white leading-[1.1]">
            Transforming Data into <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Seamless Interfaces
            </span>
          </h1>
          
          <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Mohd. Sahil</span>. As a dual-threat <span className="font-medium text-slate-800 dark:text-slate-200">Frontend Developer & MIS Executive</span>, I bridge the gap between complex backend data and user-friendly design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] transition-all duration-300 text-center">
              View My Work
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 text-center shadow-sm">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Column: 3D Image Section */}
        <div ref={imageRef} className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-purple-500/30 blur-[80px] rounded-full"></div>
          
          <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px]">
            {/* Spinning decorative border */}
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-400/30 animate-[spin_30s_linear_infinite]"></div>
            
            <div className="absolute inset-0 rounded-[2.5rem] rotate-3 bg-gradient-to-br from-white/40 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden z-10 group transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
              <img 
                src={myPhoto} 
                alt="Mohd. Sahil" 
                className="w-full h-full object-cover opacity-90 dark:opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent z-20"></div>
            </div>

            {/* Floating Badge */}
            <div className="hero-badge absolute -bottom-8 -left-8 px-6 py-4 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex items-center gap-4 z-30">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl text-white shadow-lg">
                <Database size={24} />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white leading-none mb-1">Dual Expertise</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">Frontend & MIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;