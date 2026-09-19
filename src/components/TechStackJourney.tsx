import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { TechItem } from '../data/portfolioData';
import { Shield, BarChart3, Cpu, ArrowRight, Sparkles } from 'lucide-react';

export const TechStackJourney: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);
  const [techCategory, setTechCategory] = useState<string>('all');

  const categories = ['all', 'mobile', 'frontend', 'backend', 'database', 'devops'];

  const filteredTech = techCategory === 'all'
    ? portfolioData.techStack
    : portfolioData.techStack.filter(t => t.category === techCategory);

  const getJourneyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tech Stack / Tools I Work With */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              TECH STACK
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tools I <span className="text-emerald-400">Work With</span>
              </h2>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setTechCategory(cat)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-semibold capitalize transition-all cursor-pointer ${
                      techCategory === cat
                        ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.25)]'
                        : 'bg-emerald-950/30 text-slate-400 border border-emerald-500/10 hover:text-white hover:bg-emerald-900/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Tech Stack Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                  className="glass-panel glass-panel-hover rounded-xl p-2.5 flex items-center gap-2.5 border border-emerald-500/20 hover:border-emerald-400/50 group cursor-default transition-all duration-200"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 shadow-inner group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: tech.bg, color: tech.color }}
                  >
                    {tech.code}
                  </div>
                  <div className="text-left truncate">
                    <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors block truncate">
                      {tech.name}
                    </span>
                    <span className="text-[9px] text-slate-400 capitalize block truncate">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Tech Tooltip / Info bar */}
            <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/15 min-h-[52px] flex items-center">
              {activeTech ? (
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <p className="text-xs text-slate-200">
                    <strong className="text-emerald-300">{activeTech.name}:</strong> {activeTech.description}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400/60 shrink-0" />
                  <span>Hover or tap any badge to view domain capabilities.</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Learning Journey (Always Learning, Always Growing) */}
          <div id="journey" className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              LEARNING JOURNEY
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
              Always Learning, <span className="text-emerald-400">Always Growing</span>
            </h2>

            {/* 3 Learning Track Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolioData.learningTracks.map((track) => (
                <div
                  key={track.id}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-emerald-500/20 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Track Header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {getJourneyIcon(track.icon)}
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {track.title}
                      </h3>
                    </div>

                    {/* Syllabus Module Items */}
                    <ul className="space-y-2 mb-6 text-left">
                      {track.modules.map((mod, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="leading-tight">{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Indicator */}
                  <div className="pt-3 border-t border-emerald-500/15">
                    <div className="flex items-center justify-between text-[10px] text-emerald-400 font-semibold mb-1.5">
                      <span>{track.status}</span>
                      <span>{track.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden border border-emerald-500/20">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_#00ff87]"
                        style={{ width: `${track.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
