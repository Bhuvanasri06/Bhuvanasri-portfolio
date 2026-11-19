import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md flex items-center gap-3 px-4 py-3 rounded-xl bg-[#121222]/95 border border-purple-500/40 text-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="w-7 h-7 rounded-lg bg-purple-600/25 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-200 flex-1 leading-snug">
            {message}
          </p>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
