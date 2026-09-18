import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { TechStackJourney } from './components/TechStackJourney';
import { PhilosophyBanner } from './components/PhilosophyBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050808] text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 3D Glass Bubbles, Glows & Canvas Engine */}
      <BackgroundEffects />

      {/* Glass Floating Navbar */}
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <StatsCounter />
        <Projects />
        <About onOpenContact={() => setIsContactModalOpen(true)} />
        <TechStackJourney />
        <PhilosophyBanner />
        <ContactSection
          isModalOpen={isContactModalOpen}
          onOpenModal={() => setIsContactModalOpen(true)}
          onCloseModal={() => setIsContactModalOpen(false)}
        />
      </main>

      {/* Clean Cyber Footer */}
      <Footer />
    </div>
  );
};

export default App;
