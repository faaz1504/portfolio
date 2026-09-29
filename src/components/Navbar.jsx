import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'glass-panel py-3 shadow-xl shadow-cyan-950/20 border-b border-slate-800/80'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left Column: Logo */}
          <div className="flex items-center justify-start min-w-0">
            <a href="#home" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1">
                  {personalInfo.name}
                  <span className="text-cyan-400">.</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                  MERN Developer
                </span>
              </div>
            </a>
          </div>

          {/* Center Column: Perfectly Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-2">
            <nav className="flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 hover:text-cyan-400 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Mobile Menu Toggle / Alignment Balance */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown - Clean centered dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 max-w-7xl mx-auto px-4 pt-2 pb-4">
          <div className="glass-panel rounded-2xl border border-slate-800 p-4 space-y-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 hover:text-cyan-400 transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
