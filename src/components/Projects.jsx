import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-24 relative z-10 bg-slate-950/70 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4">
            <Layers className="w-4 h-4" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 break-words">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            Real-world web applications built using React, JavaScript, and modern CSS.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden group border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-cyan-300 border border-slate-700 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors break-words">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer - Clean side-by-side grid */}
              <div className="p-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-cyan-500/40 transition-all duration-200"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-90 transition-all duration-200 shadow-md shadow-cyan-500/20"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
