import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-emerald-500/15 py-10 bg-[#040808]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">
                {portfolioData.profile.shortName}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff87]" />
            </div>
            <div className="flex flex-col text-left border-l border-emerald-500/20 pl-3">
              <span className="text-xs font-bold text-slate-200">
                {portfolioData.profile.name}
              </span>
              <span className="text-[10px] text-emerald-400/80 font-medium">
                {portfolioData.profile.tagline}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-400 hover:text-emerald-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
