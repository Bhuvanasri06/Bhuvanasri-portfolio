import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { personalInfo, experienceData, projectsData, educationData, certificationsData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
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

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Bhuvanasri_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onShowToast) {
      onShowToast('Downloading official Bhuvanasri_resume.pdf');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-panel-elevated rounded-2xl border border-purple-500/30 bg-[#0c0d18]/95 p-6 sm:p-8 shadow-2xl z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] sticky top-0 bg-[#0c0d18]/95 backdrop-blur-sm z-20">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Official Resume &bull; {personalInfo.name}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* Download PDF Button */}
              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
                aria-label="Download PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Body */}
          <div className="bg-[#08080f] rounded-xl p-6 sm:p-8 border border-white/[0.06] text-slate-300 space-y-8">
            
            {/* Resume Header */}
            <div className="border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-purple-300 mt-1">
                  {personalInfo.subheading}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  MVIT Puducherry &bull; CGPA: 8.40/10
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-400 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 font-bold">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.description} Artificial Intelligence and Machine Learning graduate with proven experience in end-to-end model development, asynchronous REST API architecture (FastAPI), modern frontend development (React.js), and database design (MongoDB, MySQL).
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 font-bold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Internship Experience</span>
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="font-bold text-white text-sm">
                        {exp.role} &bull; <span className="text-purple-300 font-normal">{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Key Projects</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="font-bold text-white text-xs mb-1">
                      {proj.title}
                    </div>
                    <p className="text-[11px] text-slate-400 mb-2">
                      {proj.duration}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 mb-2">
                      {proj.description}
                    </p>
                    <div className="text-[10px] font-mono text-purple-300">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2.5 font-bold flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </h3>
                <div className="space-y-2 text-xs">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="font-semibold text-white">{edu.degree}</div>
                      <div className="text-slate-400 text-[11px]">{edu.institution}</div>
                      <div className="text-purple-300 font-mono text-[11px] mt-1">{edu.score} &bull; {edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2.5 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Certifications</span>
                </h3>
                <div className="space-y-1.5 text-xs">
                  {certificationsData.slice(0, 5).map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                      <span className="text-slate-200 text-[11px] font-medium">{cert.title}</span>
                      <span className="text-purple-300 text-[10px] font-mono">{cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <p className="text-xs text-slate-400">
              Direct PDF download available &bull; File: <span className="text-purple-300 font-mono">Bhuvanasri_resume.pdf</span>
            </p>

            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
