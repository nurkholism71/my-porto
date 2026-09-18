import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#081210]/85 backdrop-blur-xl border border-emerald-500/25 shadow-lg shadow-emerald-950/40'
            : 'bg-[#081210]/50 backdrop-blur-md border border-emerald-500/15'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {portfolioData.profile.shortName}
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#00ff87] animate-pulse" />
          </div>
          <div className="hidden md:flex flex-col text-left border-l border-emerald-500/20 pl-3">
            <span className="text-xs font-bold text-slate-200 tracking-wide">
              {portfolioData.profile.name}
            </span>
            <span className="text-[10px] text-emerald-400/80 font-medium tracking-wider">
              {portfolioData.profile.tagline}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-emerald-950/30 px-3 py-1.5 rounded-full border border-emerald-500/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-emerald-300 font-bold bg-emerald-500/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-emerald-500/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#00ff87]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-500/20 border border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Let's Build Together
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-slate-300 hover:text-emerald-400 bg-emerald-950/30 border border-emerald-500/20"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-sm rounded-2xl bg-[#081210]/95 backdrop-blur-2xl border border-emerald-500/30 p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-emerald-500/50 text-xs">●</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-emerald-500/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Let's Build Together
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
