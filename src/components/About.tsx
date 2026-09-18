import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, LayoutGrid, Box, Palette, ShieldAlert, Compass, RefreshCw, Quote } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const getTraitIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-emerald-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="relative z-10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          ABOUT ME
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Connect CTA */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              {portfolioData.profile.aboutHeadline}
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {portfolioData.profile.aboutDescription}
            </p>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get to Know Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Traits Grid & 3D Glass Quote Bubble */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Trait Cards (6 items) */}
            <div className="md:col-span-8 grid grid-cols-2 gap-3.5">
              {portfolioData.traits.map((trait) => (
                <div
                  key={trait.id}
                  className="glass-panel glass-panel-hover rounded-2xl p-4 border border-emerald-500/20 flex items-center gap-3 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:border-emerald-400/60 group-hover:scale-105 transition-all">
                    {getTraitIcon(trait.icon)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {trait.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Glass Quote Bubble (Right Side) */}
            <div className="md:col-span-4 relative flex items-center justify-center">
              {/* Surrounding Ambient Glass Spheres */}
              <div className="absolute -top-6 -right-4 w-12 h-12 glass-sphere animate-float-medium pointer-events-none opacity-80" />
              <div className="absolute -bottom-6 -left-4 w-10 h-10 glass-sphere animate-float-slow pointer-events-none opacity-80" />

              {/* Central Glowing Glass Bubble */}
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-[#061812]/80 to-[#020907] border-2 border-emerald-500/30 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:border-emerald-400/60 hover:shadow-[0_0_45px_rgba(16,185,129,0.4)] transition-all group">
                
                {/* Refraction sheen */}
                <div className="absolute top-2 left-3 w-16 h-8 rounded-full bg-gradient-to-b from-white/20 to-transparent rotate-[-20deg] pointer-events-none" />

                <Quote className="w-8 h-8 text-emerald-400/60 mb-2 group-hover:text-emerald-300 transition-colors" />
                <p className="text-sm font-bold text-slate-100 italic leading-snug">
                  “{portfolioData.profile.aboutQuote}”
                </p>
                <div className="mt-3 w-8 h-0.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_#00ff87]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
