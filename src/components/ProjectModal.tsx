import React from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden pt-8 sm:pt-6 no-scrollbar">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#020505]/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[88vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden bg-[#0a1814] border-2 border-emerald-500/50 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-emerald-950/90 z-10 animate-in zoom-in-95 duration-200 my-auto no-scrollbar">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-500" />
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full text-slate-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 shadow-lg transition-colors cursor-pointer z-30"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3.5 sm:gap-4 mb-5 sm:mb-6 pr-10 sm:pr-12 text-left">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${project.iconBg} flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-lg border border-white/20 shrink-0`}>
            {project.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Mockup Preview Area */}
        <div className="w-full rounded-2xl bg-[#06120e] border border-emerald-500/25 p-5 mb-6 shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-emerald-400/80">
                app.{project.id}.io
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Preview Engine v2.4</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/15">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                {project.mockupContent.title}
              </span>
              <p className="text-xs text-slate-400 mb-3">
                {project.mockupContent.subtitle}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {project.mockupContent.stats?.map((st, i) => (
                  <div key={i} className="bg-[#0a1f18] p-2.5 rounded-lg border border-emerald-500/20 text-center">
                    <div className="text-base font-bold text-white">{st.value}</div>
                    <div className="text-[10px] text-slate-400">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/15 flex flex-col justify-between">
              <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Active Modules
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {project.mockupContent.uiElements.map((item, i) => (
                  <div key={i} className="text-[11px] font-mono text-emerald-300/90 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 text-center truncate">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Overview & Architecture
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Core Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags and Action CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-500/20">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Source Code
            </a>
            <button
              onClick={() => alert(`Launching live demo sandbox for ${project.title}`)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};
