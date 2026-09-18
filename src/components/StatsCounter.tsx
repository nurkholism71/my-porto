import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Box, BookOpen, Code2, Infinity as InfinityIcon } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-6 h-6 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Infinity':
        return <InfinityIcon className="w-6 h-6 text-emerald-400" />;
      default:
        return <Box className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-emerald-500/20"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:border-emerald-400/60 group-hover:scale-110 transition-all duration-300">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {stat.value}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-emerald-200 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {stat.sublabel}
                </p>
              </div>

              {/* Bottom decorative glowing highlight bar */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
