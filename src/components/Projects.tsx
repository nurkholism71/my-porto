import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ArrowRight, ArrowLeft, Sparkles, Smartphone, Layout, Globe } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social', 'AI', 'Chat', 'Education', 'Business', 'Travel'];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.some(t => t.toLowerCase() === filter.toLowerCase()) || p.category.toLowerCase().includes(filter.toLowerCase()));

  const spotlightProject = portfolioData.projects[activeSpotlightIdx] || portfolioData.projects[0];

  const handleNextSpotlight = () => {
    setActiveSpotlightIdx((prev) => (prev + 1) % portfolioData.projects.length);
  };

  const handlePrevSpotlight = () => {
    setActiveSpotlightIdx((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length);
  };

  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Products for a <span className="text-emerald-400">Better Tomorrow</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 1. Spotlight Hero Showcase Card (Triple-screen mockup layout from reference) */}
        <div className="mb-12 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden group shadow-2xl">
          {/* Radial Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info: App details & Tags */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between h-full z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${spotlightProject.iconBg} flex items-center justify-center text-white font-black text-2xl shadow-lg border border-white/20`}>
                    {spotlightProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {spotlightProject.title}
                    </h3>
                    <p className="text-xs text-emerald-400/90 font-medium">
                      {spotlightProject.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {spotlightProject.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {spotlightProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-950/60 text-slate-200 border border-emerald-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Carousel Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-emerald-500/15">
                <button
                  onClick={() => setSelectedProject(spotlightProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Next / Prev Nav Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSpotlight}
                    className="w-9 h-9 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous Project"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSpotlight}
                    className="w-9 h-9 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next Project"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Screen: Triple Mobile / Dashboard Mockup Screen Frame */}
            <div
              onClick={() => setSelectedProject(spotlightProject)}
              className="lg:col-span-7 flex items-center justify-center relative cursor-pointer group/screen"
            >
              <div className="relative w-full max-w-lg flex items-center justify-center gap-2 sm:gap-4 py-4">
                
                {/* Left Screen Preview */}
                <div className="w-32 sm:w-40 h-56 sm:h-72 rounded-2xl bg-gradient-to-b from-[#092019] to-[#040e0b] border border-emerald-500/30 p-2.5 shadow-2xl opacity-75 transform -rotate-6 scale-90 hidden sm:flex flex-col justify-between">
                  <div className="h-2 w-12 bg-emerald-500/30 rounded-full mx-auto mb-2" />
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-emerald-950/60 border border-emerald-500/20" />
                    <div className="h-8 rounded bg-emerald-950/40" />
                  </div>
                  <div className="h-4 rounded bg-emerald-500/20 text-[8px] text-center text-emerald-300">Feed</div>
                </div>

                {/* Center Screen Primary Preview */}
                <div className="w-48 sm:w-56 h-64 sm:h-80 rounded-3xl bg-gradient-to-b from-[#0e3025] to-[#05140f] border-2 border-emerald-400/50 p-3 shadow-[0_0_40px_rgba(16,185,129,0.3)] z-10 flex flex-col justify-between group-hover/screen:border-emerald-300 transition-all duration-300 group-hover/screen:scale-[1.02]">
                  {/* Dynamic Island / Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                    <div className="w-10 h-2 bg-emerald-400/50 rounded-full mx-auto" />
                  </div>
                  
                  {/* Active Screen UI */}
                  <div className="text-left my-auto space-y-2">
                    <div className="flex items-center gap-2 bg-emerald-950/80 p-2 rounded-xl border border-emerald-500/30">
                      <div className="w-7 h-7 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-300 font-bold text-xs">
                        {spotlightProject.icon}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold text-white truncate">{spotlightProject.title}</div>
                        <div className="text-[9px] text-emerald-400/80">Active App Sandbox</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {spotlightProject.mockupContent.uiElements.map((elem, idx) => (
                        <div key={idx} className="p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-[9px] text-slate-300 text-center truncate">
                          {elem}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 text-center">
                    <span className="text-[10px] font-bold text-emerald-300 flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Live Mockup v2.4
                    </span>
                  </div>
                </div>

                {/* Right Screen Preview */}
                <div className="w-32 sm:w-40 h-56 sm:h-72 rounded-2xl bg-gradient-to-b from-[#092019] to-[#040e0b] border border-emerald-500/30 p-2.5 shadow-2xl opacity-75 transform rotate-6 scale-90 hidden sm:flex flex-col justify-between">
                  <div className="h-2 w-12 bg-emerald-500/30 rounded-full mx-auto mb-2" />
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-emerald-950/60 border border-emerald-500/20" />
                    <div className="h-8 rounded bg-emerald-950/40" />
                  </div>
                  <div className="h-4 rounded bg-emerald-500/20 text-[8px] text-center text-emerald-300">Profile</div>
                </div>

              </div>
            </div>

          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {portfolioData.projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSpotlightIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSpotlightIdx === idx
                    ? 'w-6 bg-emerald-400 shadow-[0_0_8px_#00ff87]'
                    : 'w-2 bg-emerald-950 border border-emerald-500/30 hover:bg-emerald-800'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. Category Filter & Full Grid */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <h3 className="text-xl font-bold text-white text-left">
            All Portfolio Showcase
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                    : 'bg-emerald-950/20 text-slate-400 border border-emerald-500/10 hover:text-white hover:bg-emerald-950/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer border border-emerald-500/20 hover:border-emerald-400/50 relative overflow-hidden"
            >
              {/* Glow backdrop on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all duration-500" />

              <div>
                {/* Header: Icon & App Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center text-white font-bold text-lg shadow-md border border-white/20 group-hover:scale-105 transition-transform`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-emerald-400/80 font-medium">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-slate-400 group-hover:text-emerald-300 group-hover:border-emerald-400/40 group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated Device Mockup Graphic */}
                <div className="w-full h-44 rounded-xl bg-gradient-to-b from-[#061410] to-[#030a08] border border-emerald-500/20 p-3 mb-4 relative overflow-hidden flex flex-col justify-between group-hover:border-emerald-400/40 transition-colors shadow-inner">
                  <div className="flex items-center justify-between border-b border-emerald-500/15 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/70" />
                      <div className="w-2 h-2 rounded-full bg-amber-400/70" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-wider flex items-center gap-1">
                      {project.previewType === 'mobile' ? <Smartphone className="w-2.5 h-2.5" /> : project.previewType === 'dashboard' ? <Layout className="w-2.5 h-2.5" /> : <Globe className="w-2.5 h-2.5" />}
                      {project.previewType}
                    </span>
                  </div>

                  <div className="my-auto text-left py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        {project.mockupContent.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {project.mockupContent.uiElements.slice(0, 4).map((elem, idx) => (
                        <div
                          key={idx}
                          className="bg-emerald-950/40 border border-emerald-500/15 rounded-lg p-1.5 text-[10px] text-slate-300 flex items-center justify-between group-hover:border-emerald-500/30 transition-colors truncate"
                        >
                          <span className="truncate">{elem}</span>
                          <span className="text-emerald-400 text-[9px]">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-emerald-500/10">
                    <span className="flex items-center gap-1 text-emerald-300">
                      <Sparkles className="w-2.5 h-2.5" />
                      Interactive Live View
                    </span>
                    <span className="font-mono text-slate-400">Click to explore</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 text-left">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-emerald-500/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project preview */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
