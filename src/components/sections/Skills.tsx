import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import { 
  Code, 
  Layout, 
  Cpu, 
  BarChart3, 
  Boxes, 
  Database, 
  Wrench, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  languages: Code,
  frontend: Layout,
  'ai-ml': Cpu,
  analytics: BarChart3,
  frameworks: Boxes,
  databases: Database,
  tools: Wrench
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'dev', label: 'Languages & Frontend' },
    { id: 'backend-data', label: 'Frameworks & Databases' },
    { id: 'tools-analytics', label: 'Data & Tools' }
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai-ml') return cat.id === 'ai-ml';
    if (activeFilter === 'dev') return cat.id === 'languages' || cat.id === 'frontend';
    if (activeFilter === 'backend-data') return cat.id === 'frameworks' || cat.id === 'databases';
    if (activeFilter === 'tools-analytics') return cat.id === 'analytics' || cat.id === 'tools';
    return true;
  });

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
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
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technical Skills &amp; Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Categorized technical competencies across Artificial Intelligence, web development, and cloud tools.
          </motion.p>

          {/* Interactive Filter Pills */}
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
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-purple-500/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const IconComponent = categoryIcons[category.id] || Sparkles;

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title Bar */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {category.category}
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          {category.skills.length} core competencies
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Items */}
                    <div className="space-y-3.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/15 hover:border-purple-500/35 transition-colors group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/25">
                              {skill.badge}
                            </span>
                          </div>

                          <div className="text-[11px] text-slate-400">
                            {skill.level}
                          </div>

                          {/* Animated progress indicator (qualitative glow bar) */}
                          <div className="mt-2.5 h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Verified Expertise</span>
                    </span>
                    <span className="font-mono text-purple-300">{category.id}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
