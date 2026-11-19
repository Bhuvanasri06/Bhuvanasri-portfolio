import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/portfolioData';
import { 
  Calendar, 
  CheckCircle2, 
  Code2, 
  Cpu,
  Building2
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 scroll-mt-20">
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
            <span>Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Internship Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Hands-on software engineering and AI development experience across production codebases.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500 via-violet-500 to-transparent hidden sm:block opacity-40 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#070709] border-2 border-purple-500 items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-20">
                    {idx === 0 ? <Code2 className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                  </div>

                  {/* Card (Half width on sm+) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-purple-500/25 glow-card relative overflow-hidden">
                      
                      {/* Ambient Accent Glow */}
                      <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

                      {/* Header Badge & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-purple-950/70 text-purple-300 border border-purple-500/30">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-purple-300 mb-4">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2.5 mb-5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-4 border-t border-purple-500/15">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                          Technologies Utilized
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
