import React from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript, 
  SiGoogle 
} from 'react-icons/si';

const TechStack = () => {
  // Added 'name' to each technology for the hover tooltip
  const technologies = [
    { name: "React.js", icon: <SiReact size={60} />, color: "group-hover:text-[#61DAFB]" },
    { name: "Node.js", icon: <SiNodedotjs size={60} />, color: "group-hover:text-[#339933]" },
    { name: "PostgreSQL", icon: <SiPostgresql size={60} />, color: "group-hover:text-[#4169E1]" },
    { name: "Express.js", icon: <SiExpress size={60} />, color: "group-hover:text-slate-900 dark:group-hover:text-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} />, color: "group-hover:text-[#06B6D4]" },
    { name: "JavaScript", icon: <SiJavascript size={60} />, color: "group-hover:text-[#F7DF1E]" },
    { name: "Apps Script", icon: <SiGoogle size={60} />, color: "group-hover:text-[#4285F4]" }
  ];

  return (
    <section className="py-20 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          Powered By Modern Technologies
        </h3>
      </div>
      
      {/* CSS Marquee Container */}
      <div className="flex w-full overflow-hidden">
        <div 
          className="flex items-center animate-[spin_30s_linear_infinite] [animation-play-state:running] hover:[animation-play-state:paused] py-10" 
          style={{ animationName: 'marquee' }}
        >
          {/* Duplicating the array to create a seamless infinite scroll loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col items-center justify-center flex-none mx-12 text-slate-400 dark:text-slate-600 transition-colors duration-300 cursor-pointer ${tech.color}`}
            >
              {/* Icon with glow and lift effect */}
              <div className="drop-shadow-none group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300 group-hover:-translate-y-2">
                {tech.icon}
              </div>
              
              {/* Floating Name Tooltip */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold whitespace-nowrap bg-slate-800 text-white dark:bg-white/10 dark:text-slate-200 border border-slate-700 dark:border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg pointer-events-none translate-y-2 group-hover:translate-y-0">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Keyframes for the marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 
          0% { transform: translateX(0%); } 
          100% { transform: translateX(-33.33%); } 
        }
      `}} />
    </section>
  );
};

export default TechStack;