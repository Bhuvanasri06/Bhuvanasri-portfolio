import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/portfolioData';
import { 
  Award, 
  Calendar, 
  FileText, 
  Cpu, 
  CircuitBoard, 
  Bot, 
  LineChart, 
  Sparkles, 
  Code2,
  ShieldCheck
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Cpu,
  CircuitBoard,
  Bot,
  LineChart,
  Sparkles,
  Code2
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 scroll-mt-20">
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
            <span>Verified Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certifications &amp; Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Professional credentials issued by industry leaders, research institutes, and university programs.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const Icon = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 glow-card flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/25">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-300/90 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Footer Date */}
                <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="font-mono text-[11px] text-purple-400/90 flex items-center gap-1">
                    <span>Verified</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
