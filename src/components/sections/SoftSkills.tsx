import React from 'react';
import { motion } from 'framer-motion';
import { softSkillsData, languagesData } from '../../data/portfolioData';
import { 
  Users, 
  Brain, 
  Lightbulb, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  Globe2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Brain,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Clock
};

export const SoftSkills: React.FC = () => {
  return (
    <section className="relative py-20 scroll-mt-20">
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
            <span>Interpersonal &amp; Linguistic</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Soft Skills &amp; Languages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Collaborative attributes, cognitive agility, and multilingual communication capabilities.
          </motion.p>
        </div>

        {/* Soft Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {softSkillsData.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Lightbulb;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{skill.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{skill.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Container */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <Globe2 className="w-5 h-5 text-purple-400" />
              <span>Language Proficiency</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languagesData.map((lang, idx) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-white">{lang.language}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30">
                      {lang.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{lang.level}</p>
                </div>

                <div className="w-9 h-9 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  {lang.language === 'English' ? 'EN' : 'TA'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
