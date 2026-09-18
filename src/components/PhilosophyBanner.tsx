import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Box, Users, Globe, Heart } from 'lucide-react';

export const PhilosophyBanner: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-emerald-400" />;
      default:
        return <Box className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-emerald-500/30 relative overflow-hidden shadow-2xl">
          
          {/* Cyber mountain backdrop silhouette & radial glows */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 300 L150 180 L350 250 L550 130 L750 210 L950 110 L1200 240 L1200 300 Z"
                fill="url(#mountainGrad)"
              />
              <path
                d="M0 300 L220 140 L450 230 L700 90 L920 190 L1200 120 L1200 300 Z"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="mountainGrad" x1="600" y1="90" x2="600" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#059669" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#022c22" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Statement */}
            <div className="lg:col-span-6 text-left">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Technology is a tool. <br />
                <span className="text-emerald-400 glow-text-emerald">A better world is the goal.</span>
              </p>
            </div>

            {/* Right 4 Pillars */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {portfolioData.philosophyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/15 hover:border-emerald-400/40 hover:bg-emerald-950/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors leading-tight">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
