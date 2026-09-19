import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowRight, X, Send, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isModalOpen,
  onCloseModal,
  onOpenModal,
}) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nurcholism51@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name} (${formState.email})`,
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Submission network response was not ok");
      }

      setSubmitted(true);
      
      // Trigger festive emerald confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff87', '#10b981', '#34d399', '#ffffff']
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
        onCloseModal();
      }, 3000);
    } catch (error) {
      console.error("Form error, triggering fallback mailto:", error);
      // Fallback in case of adblocker or fetch block
      window.open(
        `mailto:nurcholism51@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + "\n\nFrom: " + formState.name + " (" + formState.email + ")")}`,
        "_blank"
      );
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff87', '#10b981', '#34d399', '#ffffff']
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
        onCloseModal();
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/30 text-center relative overflow-hidden shadow-2xl">
          
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating 3D Bubbles on CTA */}
          <div className="absolute -top-6 left-12 w-16 h-16 glass-sphere animate-float-medium pointer-events-none opacity-85" />
          <div className="absolute -bottom-6 right-16 w-14 h-14 glass-sphere animate-float-reverse pointer-events-none opacity-85" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Have an idea or <br />
              <span className="text-emerald-400 glow-text-emerald">want to collaborate?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
              Let's build something amazing together.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-300 shadow-[0_0_25px_rgba(5,241,144,0.4)] hover:shadow-[0_0_35px_rgba(5,241,144,0.65)] transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Social Icons Strip */}
              <div className="flex items-center gap-2.5 bg-emerald-950/50 p-1.5 rounded-full border border-emerald-500/20">
                <a
                  href={portfolioData.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-900/40 hover:bg-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href={portfolioData.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-900/40 hover:bg-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href={portfolioData.profile.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-900/40 hover:bg-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a
                  href={portfolioData.profile.socials.email}
                  className="w-9 h-9 rounded-full bg-emerald-900/40 hover:bg-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-900/40 hover:bg-emerald-500/20 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Contact Modal rendered via React Portal into document.body */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#020505]/90 backdrop-blur-xl transition-opacity animate-in fade-in"
            onClick={onCloseModal}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0a1814] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.3)] z-10 animate-in zoom-in-95 my-auto">
            
            <button
              onClick={onCloseModal}
              className="absolute top-5 right-5 p-2.5 rounded-full text-slate-400 hover:text-white bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 cursor-pointer transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-slate-300 max-w-xs">
                  Thank you for reaching out, Muhammad Nurcholis will get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Direct Message
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                  <p className="text-xs text-slate-400">
                    Send a note for collaboration, questions, or project inquiries.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Hunter"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project or greeting..."
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

