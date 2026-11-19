import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import { ProjectIllustration } from '../ui/ProjectIllustrations';
import { GithubIcon } from '../ui/Icons';
import { 
  ArrowUpRight, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'full-stack', label: 'Full Stack & Security' }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai-ml') return p.category.includes('AI') || p.category.includes('Bioinformatics') || p.category.includes('Deep Learning');
    if (activeTab === 'full-stack') return p.category.includes('Full Stack') || p.category.includes('Cybersecurity');
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-3"
          >
            <span>Engineered Solutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Production-grade systems, machine learning architectures, and research prototypes built with modern toolchains.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-purple-500/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedCardId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel rounded-2xl p-6 sm:p-7 border border-purple-500/20 hover:border-purple-500/40 glow-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-950/70 text-purple-300 border border-purple-500/30">
                          {project.badge}
                        </span>
                        <span className="text-xs text-purple-400/70 font-mono hidden sm:inline">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Visual Illustration Header */}
                    <div className="mb-5 overflow-hidden rounded-xl border border-purple-500/15">
                      <ProjectIllustration type={project.illustrationType} />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technology Stack Tags */}
                    <div className="mb-5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/50 text-purple-200 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.08]">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Section Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 mt-4 border-t border-purple-500/15 space-y-3 overflow-hidden text-xs text-slate-300"
                        >
                          {project.architecture && (
                            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                              <span className="text-[11px] font-semibold text-purple-300 flex items-center gap-1.5 mb-1">
                                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                                Architecture Overview
                              </span>
                              <p className="leading-relaxed text-slate-300 text-[11px]">
                                {project.architecture}
                              </p>
                            </div>
                          )}

                          {project.highlights && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-[11px] font-semibold text-purple-300 flex items-center gap-1.5 mb-2">
                                <Layers className="w-3.5 h-3.5 text-purple-400" />
                                Key Technical Implementations
                              </span>
                              {project.highlights.map((item, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 mt-5 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* View Details Modal Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/30 text-xs font-semibold transition-all shadow-sm"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Expand / Collapse In-Card Button */}
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium transition-colors"
                        aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
                      >
                        <span>{isExpanded ? 'Less' : 'More'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-purple-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-purple-400" />
                        )}
                      </button>
                    </div>

                    {/* GitHub Link (placeholder linked to actual profile) */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-purple-300 transition-colors p-2"
                      title="View code repository"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
