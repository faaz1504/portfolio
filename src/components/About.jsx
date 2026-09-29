import React from 'react';
import { User, MapPin, Download, Award, Code2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const handleDownloadResume = () => {
    alert(`Downloading ${personalInfo.name}'s Resume...`);
  };

  return (
    <section id="about" className="py-24 scroll-mt-24 relative z-10 bg-slate-950/70 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <User className="w-4 h-4" />
            Get To Know Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            Passionate MERN developer building modern web applications with a focus on UI design and scalable state management.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Card Left: Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">MERN Stack Learner</h3>
                  <p className="text-xs text-slate-400">Frontend Master & Backend Aspirant</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Based in <strong className="text-white">Kerala, India</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Award className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Focused on <strong className="text-white">Clean & Performant Code</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Currently learning <strong className="text-white">Node.js, Express & MongoDB</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/20 text-center">
              <span className="text-xs font-semibold text-cyan-300 block mb-1">
                CURRENT GOAL
              </span>
              <p className="text-sm font-medium text-slate-200">
                Seeking MERN Stack Internships & Entry-Level Developer Roles to contribute and grow.
              </p>
            </div>
          </div>

          {/* Detailed Paragraphs Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white">{personalInfo.name}</strong>, a MERN Stack Developer learner based in <strong className="text-cyan-400">Kerala, India</strong>. My passion lies in building intuitive, responsive web applications that solve real-world problems.
              </p>
              <p>
                I have developed solid practical experience with frontend technologies including <span className="text-cyan-300 font-semibold">React, JavaScript, and CSS</span>.
              </p>
              <p>
                Currently, I am actively expanding my capabilities into full-stack development by learning <span className="text-cyan-400 font-semibold">Node.js, Express.js, MongoDB, and REST API design</span>. I am excited to join an innovative team where I can apply my frontend skills and grow into a full-fledged MERN Engineer.
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
