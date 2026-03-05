import React from 'react';

const About = () => {
  const skills = [
    'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 
    'Data Management', 'Google Apps Script', 'Advanced Excel/Sheets', 'Tailwind CSS'
  ];

  // Added MIS Executive to your timeline
  const timeline = [
    {
      role: 'Frontend Developer',
      company: 'Freelance & Corporate Dashboards',
      period: '2024 - Present',
      color: 'bg-cyan-500 dark:bg-cyan-400',
      shadow: 'shadow-[0_0_10px_rgba(34,211,238,0.5)]'
    },
    {
      role: 'MIS Executive',
      company: 'Business Automation Systems',
      period: '2023 - 2024',
      color: 'bg-emerald-500 dark:bg-emerald-400',
      shadow: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]'
    },
    {
      role: 'Web Developer',
      company: 'Ecowings Digital Platform',
      period: '2022 - 2023',
      color: 'bg-purple-600 dark:bg-purple-500',
      shadow: 'shadow-[0_0_10px_rgba(168,85,247,0.5)]'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div className="flex flex-col justify-center sticky top-32">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400"></span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-wide">About Me</h2>
          </div>
          
          {/* Updated text to highlight MIS & Development */}
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-blue-600 dark:text-cyan-300 font-medium">Mohd.Sahil</span>, a hybrid Frontend Developer and MIS Executive. I specialize in bridging the gap between raw business data and beautiful, high-performance web applications.
            </p>
            <p>
              My expertise lies in the PERN stack (PostgreSQL, Express, React, Node.js) and deeply integrating automated workflows via Google Apps Script. From architecting complex Business Automation Systems (BAS) to creating dynamic recruitment and leave management dashboards, I ensure that data is not just managed, but visualized brilliantly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Skills Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-xl hover:shadow-xl transition-all duration-500 dark:shadow-2xl dark:shadow-black/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-300 dark:hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-xl hover:shadow-xl transition-all duration-500 dark:shadow-2xl dark:shadow-black/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
              Experience & Focus
            </h3>
            <div className="space-y-8 ml-2">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700/50 last:border-transparent last:pb-0 pb-2">
                  <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${item.color} ${item.shadow} border-2 border-white dark:border-slate-900`}></span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-xl">{item.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{item.company}</span>
                    <span className="hidden sm:block text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-slate-500 text-sm font-mono">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;