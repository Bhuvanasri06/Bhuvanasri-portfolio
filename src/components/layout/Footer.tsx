import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, Phone, ArrowUp } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#060608] pt-16 pb-12 overflow-hidden z-10">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Identity & Subheading */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2.5 text-xl font-extrabold text-white tracking-wider group"
              aria-label="Back to Top"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center border border-purple-400/30 text-white font-mono text-sm shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                B
              </div>
              <span className="font-extrabold tracking-tight">
                {personalInfo.name}
                <span className="text-purple-400 group-hover:text-purple-300">.</span>
              </span>
            </a>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-purple-300">
              AI &amp; Machine Learning | Full Stack Developer
            </p>
            <p className="mt-1 text-xs text-slate-400 max-w-md">
              Graduated from Manakula Vinayagar Institute of Technology, Puducherry (CGPA 8.40/10).
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-purple-950/50 hover:bg-[#0a66c2]/30 border border-purple-500/20 hover:border-[#0a66c2]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
              title="LinkedIn Profile"
              aria-label="Visit LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
              title="GitHub Profile"
              aria-label="Visit GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-slate-100" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
              title="Send Email"
              aria-label="Send Email to Bhuvanasri"
            >
              <Mail className="w-4 h-4 text-purple-400" />
            </a>

            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="w-10 h-10 rounded-xl bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
              title="Call Phone"
              aria-label="Call Bhuvanasri"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Back to Top CTA */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 transition-all hover:scale-[1.03] shadow-md"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-purple-400" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Puducherry, India</span>
            <span>&bull;</span>
            <span className="text-purple-400/90 font-mono">React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
