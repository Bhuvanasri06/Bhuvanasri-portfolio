import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../../data/portfolioData';
import { 
  Brain, 
  Code2, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Award, 
  MapPin, 
  Briefcase,
  FileDown
} from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

const pillarIconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Sparkles,
  Compass
};

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-3"
          >
            <span>Background &amp; Philosophy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {aboutMeData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Bridging cutting-edge artificial intelligence research with scalable, high-performance web engineering.
          </motion.p>
        </div>

        {/* Two-Column Grid: Bio & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: Bio & Academic Info (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/20 glow-card space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Innovating at the Intersection of AI &amp; Full Stack Development
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am an Artificial Intelligence and Machine Learning graduate from{' '}
                  <span className="text-purple-300 font-semibold">
                    Manakula Vinayagar Institute of Technology, Puducherry
                  </span>
                  , with a CGPA of <span className="text-emerald-400 font-bold">8.40/10</span>. I have practical experience in developing machine learning models, building REST APIs, and creating responsive web applications.
                </p>
                <p>
                  I have worked with{' '}
                  <span className="text-white font-medium">Python, FastAPI, React, MongoDB, MySQL, and Natural Language Processing</span>. I enjoy solving real-world problems through AI-driven solutions and full-stack development.
                </p>
              </div>
            </div>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-purple-500/15 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>B.Tech AI &amp; ML (2022 – 2026)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Puducherry, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>2 Conference Research Papers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>2 Industry Internships Completed</span>
              </div>
            </div>

            {/* Resume button inside about */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>View Full Academic &amp; Technical Profile</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Key Stats Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {aboutMeData.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 glow-card flex flex-col justify-between"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
                  {stat.label}
                </span>
                <div className="my-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xs text-slate-400 ml-1 font-mono">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="w-8 h-[2px] bg-purple-500/40 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 Pillars Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Core Engineering Pillars
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              The four foundational disciplines that drive my technical vision and problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutMeData.pillars.map((pillar, idx) => {
              const IconComponent = pillarIconMap[pillar.icon] || Sparkles;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Pillar Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
