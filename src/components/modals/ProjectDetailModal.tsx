import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Layers, CheckCircle2, Cpu } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { GithubIcon } from '../ui/Icons';
import { ProjectIllustration } from '../ui/ProjectIllustrations';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl glass-panel-elevated rounded-2xl border border-purple-500/30 bg-[#0e0f1b]/95 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-950/80 text-purple-300 border border-purple-500/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {project.duration}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {project.title}
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-purple-300 mb-6">
            Category: {project.category}
          </p>

          {/* Visual Illustration */}
          <div className="mb-6 rounded-xl overflow-hidden border border-purple-500/20">
            <ProjectIllustration type={project.illustrationType} />
          </div>

          {/* Core Description */}
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.architecture && (
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Architecture &amp; Data Flow</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Key Engineering Highlights</span>
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="mb-8 pt-4 border-t border-purple-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-950/50 text-purple-300 border border-purple-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-purple-600/30"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>View on GitHub ({project.title.split(' ')[0]})</span>
              </a>
            ) : (
              <span className="text-xs text-slate-400 font-mono">
                Code available upon direct request / Academic archive
              </span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
