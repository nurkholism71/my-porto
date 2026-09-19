import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, User, Lightbulb, Package, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact: _onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{portfolioData.profile.badge}</span>
            </div>

            {/* Main Gradient Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Turning Ideas <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent glow-text-emerald">
                Into Real Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              {portfolioData.profile.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(5,241,144,0.45)] hover:shadow-[0_0_35px_rgba(5,241,144,0.7)] transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#0a1814]/70 hover:bg-[#102a22]/80 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <User className="w-4 h-4 text-emerald-400" />
                <span>About Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Glowing Portal & 3D Glass Atmosphere */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Ambient Background Glow behind Portal */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/20 blur-[80px] pointer-events-none" />

            {/* Orbital Decorative Outer Rings */}
            <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-dashed border-emerald-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[360px] sm:w-[450px] h-[360px] sm:h-[450px] rounded-full border border-emerald-500/10 pointer-events-none" />

            {/* Central Portal Glass Sphere Container */}
            <div className="relative w-[290px] sm:w-[360px] h-[290px] sm:h-[360px] rounded-full border-2 border-emerald-400/40 p-2 shadow-[0_0_50px_rgba(16,185,129,0.3)] bg-gradient-to-b from-emerald-500/10 to-transparent backdrop-blur-md overflow-hidden flex items-center justify-center group">
              
              {/* Internal glowing circle with real user portrait */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#062017] via-[#04130e] to-[#020907] relative overflow-hidden flex items-center justify-center">
                
                {/* Cyber Matrix Wireframe in portal background */}
                <div className="absolute inset-0 opacity-25 cyber-grid z-0" />
                
                {/* User Portrait Photo */}
                <img
                  src="/profile.jpg"
                  alt="Muhammad Nurcholis"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105 z-1"
                />

                {/* Inner glass refraction highlight */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/40 pointer-events-none z-4 shadow-[inset_0_0_20px_rgba(16,185,129,0.3)]" />
              </div>
            </div>

            {/* Top Right Quote Pill Badge */}
            <div className="absolute -top-4 sm:top-2 -right-2 sm:right-0 max-w-[210px] glass-panel rounded-2xl p-3 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.15)] animate-float-slow z-20">
              <p className="text-[11px] text-slate-200 italic font-medium leading-snug">
                “{portfolioData.profile.quote}”
              </p>
              <div className="mt-1.5 w-6 h-0.5 bg-emerald-400/60 rounded-full" />
            </div>

            {/* Floating 3D Emerald Glass Bubbles around Portal */}
            <div className="absolute -top-8 left-4 w-14 h-14 glass-sphere animate-float-medium z-20 pointer-events-none opacity-90" />
            <div className="absolute top-1/2 -left-10 w-20 h-20 glass-sphere animate-float-reverse z-20 pointer-events-none opacity-95" />
            <div className="absolute -bottom-6 -left-4 w-12 h-12 glass-sphere animate-float-slow z-20 pointer-events-none opacity-85" />
            <div className="absolute bottom-16 -right-6 w-16 h-16 glass-sphere animate-float-medium z-20 pointer-events-none opacity-90" />

            {/* Bottom Floating Trait Badge Cards */}
            <div className="absolute -bottom-10 sm:-bottom-8 right-0 sm:right-4 flex items-center gap-2 sm:gap-3 z-30">
              <div className="glass-panel px-3 py-2 rounded-xl border border-emerald-500/25 flex items-center gap-2 shadow-lg backdrop-blur-md hover:border-emerald-400/50 transition-all hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Lightbulb className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 leading-none">Ideas</div>
                  <div className="text-[11px] font-bold text-white leading-tight">Today</div>
                </div>
              </div>

              <div className="glass-panel px-3 py-2 rounded-xl border border-emerald-500/25 flex items-center gap-2 shadow-lg backdrop-blur-md hover:border-emerald-400/50 transition-all hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Package className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 leading-none">Better Products</div>
                  <div className="text-[11px] font-bold text-white leading-tight">Tomorrow</div>
                </div>
              </div>

              <div className="hidden sm:flex glass-panel px-3 py-2 rounded-xl border border-emerald-500/25 items-center gap-2 shadow-lg backdrop-blur-md hover:border-emerald-400/50 transition-all hover:scale-105">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 leading-none">Greater Impact</div>
                  <div className="text-[11px] font-bold text-white leading-tight">Always</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
