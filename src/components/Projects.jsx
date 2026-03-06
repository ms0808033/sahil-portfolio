import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Business Automation System (Current)',
      description: 'Developing a comprehensive, full-stack business automation platform utilizing the complete PERN stack to manage core business processes.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      gradient: 'from-purple-500/20 to-blue-500/20'
    },
    {
      title: 'Training Module',
      description: 'Architected and deployed a robust training web application leveraging the PERN stack for efficient user education and knowledge transfer.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Management Dashboards',
      description: 'Designed and implemented specialized Attendance Marking and Task Completion Dashboards, providing both end-users and Managing Directors with critical operational metrics for oversight.',
      tech: ['React', 'Tailwind CSS', 'Dashboard UI'],
      gradient: 'from-blue-500/20 to-emerald-500/20'
    },
    {
      title: 'Internal MIS Systems',
      description: 'Created and optimized a Checklist MIS and a Flow Management System to standardize and significantly improve organizational process efficiency.',
      tech: ['Google Apps Script', 'Data Management', 'React'],
      gradient: 'from-emerald-500/20 to-cyan-500/20'
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-slate-50">
        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Works</span>
      </h2>
      
      {/* Adjusted grid to perfectly fit 4 items (2x2 layout on desktop) */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 hover:from-cyan-400/50 hover:to-blue-600/50 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl`}></div>
            <div className="relative h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <a href="#" className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-300 transition-colors text-slate-500 dark:text-slate-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-blue-600 dark:text-cyan-200">
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