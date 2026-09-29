import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#0b0f19] border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-slate-300">
              © {new Date().getFullYear()} <span className="text-white">{personalInfo.name}</span>. Built with React & Tailwind CSS.
            </span>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
