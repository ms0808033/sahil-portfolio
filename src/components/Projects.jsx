import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Projects = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Reveal header
    gsap.fromTo('.project-header', 
      { y: 50, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, 
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } 
      }
    );

    // Stagger cards
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' }
      }
    );
  }, { scope: sectionRef });

  const projects = [
    {
      title: 'Business Automation System',
      description: 'Developing a comprehensive, full-stack business automation platform utilizing the complete PERN stack to manage core business processes.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      title: 'Training Module',
      description: 'Architected and deployed a robust training web application leveraging the PERN stack for efficient user education and knowledge transfer.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      title: 'Management Dashboards',
      description: 'Designed specialized Attendance Marking and Task Dashboards, providing both end-users and MDs with critical operational metrics.',
      tech: ['React', 'Tailwind CSS', 'Dashboard UI'],
    },
    {
      title: 'Internal MIS Systems',
      description: 'Created and optimized a Checklist MIS and a Flow Management System to standardize organizational process efficiency.',
      tech: ['Google Apps Script', 'Data Management', 'React'],
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="project-header text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Works</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          A showcase of my enterprise-level applications and automated business workflows.
        </p>
      </div>
      
      <div className="projects-grid grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            ref={el => cardsRef.current[idx] = el}
            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-slate-300 to-slate-100 dark:from-white/10 dark:to-white/5 hover:from-cyan-500 hover:to-blue-600 transition-all duration-700 shadow-lg hover:shadow-cyan-500/25"
          >
            <div className="relative h-full bg-white dark:bg-[#0B0F19] p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <a href="#" className="p-3 bg-slate-50 dark:bg-white/5 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;