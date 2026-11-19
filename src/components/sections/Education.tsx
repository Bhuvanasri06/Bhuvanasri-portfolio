import React from 'react';
import { motion } from 'framer-motion';
import { educationData, academicAchievements } from '../../data/portfolioData';
import { 
  GraduationCap, 
  CheckCircle2,
  Presentation
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 scroll-mt-20">
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
            <span>Academic Qualifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education &amp; Academic Honors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Rigorous engineering education in Artificial Intelligence, Machine Learning, and Mathematics.
          </motion.p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-purple-500/20 glow-card relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/[0.06]">
                  <span className="text-xs text-slate-400 font-mono">Performance</span>
                  <span className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
                    {edu.score}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs text-slate-300">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Academic Conference Papers Sub-Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Presentation className="w-5 h-5 text-purple-400" />
              <span>Research Publications &amp; Conference Presentations</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Peer-reviewed academic research papers authored and delivered at international engineering conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicAchievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30">
                      {item.date}
                    </span>
                    <span className="text-xs font-mono text-purple-400">Published</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-purple-300 mb-3">
                    {item.event}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
