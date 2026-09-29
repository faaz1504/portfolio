import React from 'react';
import { BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-24 relative z-10 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <BookOpen className="w-4 h-4" />
            Learning Journey & Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience & Skill Progress
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            A breakdown of my completed developer milestones versus my active backend learning goals.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {learningJourney.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-cyan-400 group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300">
                <div className="w-full h-full rounded-full bg-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.statusColor}`}>
                    {item.type === 'In Progress' ? (
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                    {item.type}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Topics List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                  {item.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{topic}</span>
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
