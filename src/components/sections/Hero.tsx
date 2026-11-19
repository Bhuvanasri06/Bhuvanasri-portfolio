import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, PythonIcon, ReactIcon } from '../ui/Icons';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  Cpu, 
  Layers, 
  Code2, 
  Sparkles,
  Bot,
  Database
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onShowToast }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Email copied to clipboard: ${personalInfo.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-medium text-purple-300 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI/ML &amp; Full Stack Roles</span>
              <span className="text-purple-400/60">&bull;</span>
              <span className="text-purple-200">CGPA 8.40/10</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 text-base sm:text-xl font-semibold text-purple-300/90 tracking-wide"
            >
              {personalInfo.subheading}
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* Explore My Work CTA */}
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700 hover:from-purple-500 hover:to-violet-600 border border-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume CTA */}
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-purple-200 bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/30 hover:border-purple-400/60 shadow-lg backdrop-blur-md transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Media Row */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-3"
            >
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/60 hover:bg-[#0a66c2]/25 border border-purple-500/25 hover:border-[#0a66c2]/60 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0a66c2]" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/25 hover:border-purple-400/60 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 text-slate-100" />
              </a>

              {/* Email direct */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-xl bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/25 hover:border-purple-400/60 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </a>

              {/* Copy Email Fast Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/20 text-xs font-mono text-purple-300 hover:text-purple-200 transition-all ml-1"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : personalInfo.email}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Modern Developer & AI Visual (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute w-60 h-60 bg-blue-600/15 rounded-full blur-[90px] -bottom-10 -right-5 pointer-events-none" />

            {/* Main Interactive Developer Terminal & Neural Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md glass-panel-elevated rounded-2xl p-5 border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            >
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    bhuvanasri@ai-core:~$
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-purple-950/60 text-[10px] font-mono text-purple-300 border border-purple-500/20">
                  <Sparkles className="w-2.5 h-2.5 text-purple-400" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Code Snippet / Model Telemetry */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 text-purple-300 font-semibold">
                  <span className="text-emerald-400">&gt;</span>
                  <span>init_pipeline(model="ResNet50_Transfer", backend="FastAPI")</span>
                </div>

                {/* Neural Telemetry Card */}
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-purple-400" /> Neural Architecture
                    </span>
                    <span className="text-purple-300 font-bold">Deepfake Detection &bull; ResNet50</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Bot className="w-3 h-3 text-blue-400" /> NLP Engine
                    </span>
                    <span className="text-blue-300 font-bold">spaCy + Regex PII Filter</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Database className="w-3 h-3 text-emerald-400" /> Storage &amp; Cache
                    </span>
                    <span className="text-emerald-300 font-bold">MongoDB + Prisma ORM</span>
                  </div>
                </div>

                {/* Simulated Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400">Inference</div>
                    <div className="text-xs font-bold text-emerald-400">14 ms</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400">Val Accuracy</div>
                    <div className="text-xs font-bold text-purple-300">98.4%</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400">B.Tech CGPA</div>
                    <div className="text-xs font-bold text-blue-400">8.40 / 10</div>
                  </div>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Real-Time WebSocket Ready</span>
                </span>
                <span className="text-purple-400">mv_it_puducherry</span>
              </div>
            </motion.div>

            {/* Floating Tech Badges (3D-inspired floating elements) */}
            
            {/* Floating Badge 1: Python */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 flex items-center gap-2 px-3 py-2 rounded-xl glass-panel-elevated border border-purple-500/30 text-xs font-bold text-white shadow-xl pointer-events-none"
            >
              <PythonIcon className="w-4 h-4 text-amber-400" />
              <span>Python 3.x</span>
            </motion.div>

            {/* Floating Badge 2: React.js */}
            <motion.div
              animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 6.2, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-elevated border border-blue-500/30 text-xs font-bold text-white shadow-xl pointer-events-none"
            >
              <ReactIcon className="w-4 h-4 text-cyan-400" />
              <span>React.js</span>
            </motion.div>

            {/* Floating Badge 3: FastAPI */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 5.8, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -right-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl glass-panel-elevated border border-emerald-500/30 text-xs font-bold text-white shadow-xl pointer-events-none"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>FastAPI</span>
            </motion.div>

            {/* Floating Badge 4: Deep Learning */}
            <motion.div
              animate={{ y: [6, -6, 6], rotate: [-1, 2, -1] }}
              transition={{ repeat: Infinity, duration: 6.8, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-8 -right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-elevated border border-purple-500/30 text-xs font-bold text-white shadow-xl pointer-events-none"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Deep Learning</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
