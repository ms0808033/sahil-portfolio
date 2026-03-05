import React from 'react';
import { Zap, Target } from 'lucide-react';

const Metrics = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-6">
            <Zap className="text-purple-600 dark:text-purple-400" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Performance Highlights</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Optimized frontend rendering across complex dashboards and streamlined Google Apps Script integrations for seamless, high-speed backend automation.
          </p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center mb-6">
            <Target className="text-cyan-600 dark:text-cyan-400" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Current Targets</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Expanding expertise in advanced PostgreSQL query optimization and building modular, highly scalable UI component libraries for enterprise applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;