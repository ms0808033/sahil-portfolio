import React from 'react';
import { Database } from 'lucide-react';

// IMPORTANT: This import is required for Vite to load the image correctly
import myPhoto from '../assets/my-photo.jpeg'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 z-10 overflow-hidden">
      
      {/* Global Background Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-md mb-6 animate-[fade-in_1s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 uppercase">
              Tech & Data Professional
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 text-slate-900 dark:text-white leading-tight">
            Transforming Data into <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-cyan-400">
              Seamless Interfaces
            </span>
          </h1>
          
          <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Mohd. Sahil</span>. As a dual-threat <span className="font-medium text-slate-800 dark:text-slate-200">Frontend Developer & MIS Executive</span>, I bridge the gap between complex backend data and user-friendly design. I build scalable web applications, automate reporting workflows, and create dashboards that empower smart business decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 text-center">
              View My Work
            </a>
            <a href="#contact" className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 text-center shadow-sm">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: 3D Holographic Image Section */}
        <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-purple-500/30 blur-[60px] rounded-full animate-pulse"></div>
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-[bounce_6s_ease-in-out_infinite]">
            <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-cyan-500/30 dark:border-cyan-400/20 animate-[spin_20s_linear_infinite]"></div>
            
            <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-br from-slate-200/50 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-lg border-2 border-white/50 dark:border-white/10 shadow-2xl overflow-hidden z-10">
              <img 
                src={myPhoto} 
                alt="Mohd. Sahil" 
                className="w-full h-full object-cover rounded-full opacity-90 dark:opacity-80 mix-blend-luminosity dark:mix-blend-overlay filter contrast-125 brightness-110 grayscale-[20%] border-4 border-white/80 dark:border-slate-900/80"
              />
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-[scan_4s_ease-in-out_infinite] pointer-events-none z-20"
                style={{ backgroundSize: '100% 200%' }}
              ></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-20"></div>
            </div>

            {/* Explicitly stating Frontend & MIS on the badge */}
            <div className="absolute -bottom-6 -left-6 sm:-left-10 px-5 py-3 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl flex items-center gap-3 animate-[pulse_4s_ease-in-out_infinite] z-30">
              <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                <Database size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Frontend & MIS</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Dual Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan { 
          0% { background-position: 0% -100%; } 
          100% { background-position: 0% 300%; } 
        }
      `}} />
    </section>
  );
};

export default Hero;