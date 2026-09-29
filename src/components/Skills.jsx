import React from 'react';
import { Cpu, Layout, Server, Database, Sliders, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-indigo-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-pink-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 scroll-mt-24 relative z-10 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-4 h-4" />
            Skills & Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 break-words">
            Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            Categorized skills across frontend engineering, state management, developer tools, and my ongoing backend learning journey.
          </p>
        </div>

        {/* Skills Grid - Uniform height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between group"
            >
              <div>
                {/* Category Top Bar */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${category.badgeColor}`}>
                    {category.badge}
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200 truncate">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
