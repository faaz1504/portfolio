import React from 'react';
import { ArrowUpRight, Mail, Terminal, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden bg-[#0b0f19] scroll-mt-24">
      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-float"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-inner shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              {personalInfo.status}
            </div>

            {/* Main Title */}
            <div>
              <span className="text-base sm:text-lg font-medium text-slate-400 block mb-2">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] break-words">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent break-words">
                {personalInfo.role}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Buttons - Clean flex wrap gap-4 items-center */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 glass-card rounded-full hover:text-white hover:border-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Contact Me
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-start gap-6">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                <MapPin className="w-4 h-4 text-purple-400" />
                {personalInfo.location}
              </div>
            </div>

          </div>

          {/* Right Column: Modern Developer Code Graphic */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> developer.config.js
                </span>
              </div>

              {/* Developer Code Snippet Illustration */}
              <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-2 py-2">
                <p className="text-slate-500">// MERN Stack Developer Profile</p>
                <p>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">"{personalInfo.role}"</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-emerald-400">"{personalInfo.location}"</span>,
                </p>
                <p className="pl-4">
                  skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"JavaScript"</span>, <span className="text-amber-300">"CSS"</span>],
                </p>
                <p className="pl-4">
                  backendLearning: [<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"Express"</span>, <span className="text-cyan-300">"MongoDB"</span>],
                </p>
                <p className="pl-4">
                  status: <span className="text-cyan-400">"Ready to contribute"</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Glowing Badge overlay */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> High Performance Code
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  BUILD SUCCESSFUL
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
