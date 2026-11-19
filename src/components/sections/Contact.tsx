import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    if (onShowToast) {
      onShowToast(`${label} copied to clipboard!`);
    }
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      if (onShowToast) {
        onShowToast('Please fill out all required fields correctly.');
      }
      return;
    }

    setIsSubmitting(true);

    // Direct, transparent mailto dispatch with pre-filled content
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Bhuvanasri,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mail client
    window.location.href = mailtoUrl;

    if (onShowToast) {
      onShowToast(`Opening your email client to dispatch message to ${personalInfo.email}`);
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  const handleCopyFormattedMessage = () => {
    if (!validate()) {
      if (onShowToast) {
        onShowToast('Please complete the form fields to copy your formatted draft.');
      }
      return;
    }
    const formatted = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    if (onShowToast) {
      onShowToast('Draft message copied to clipboard! You can paste it into any email client.');
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
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
            <span>Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Have an exciting opportunity or interesting project in mind? I'd love to connect and collaborate!
          </motion.p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-purple-500/20 glow-card">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Feel free to reach out directly via email, phone, or professional networks.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedItem === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                      <a
                        href={`tel:${personalInfo.phoneRaw}`}
                        className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Phone"
                    aria-label="Copy phone number"
                  >
                    {copiedItem === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Social Networks */}
              <div className="mt-6 pt-5 border-t border-purple-500/15">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-purple-950/40 hover:bg-[#0a66c2]/20 border border-purple-500/20 hover:border-[#0a66c2]/50 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white ml-auto" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 hover:border-purple-400/50 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white ml-auto" />
                  </a>
                </div>
              </div>

            </div>

            {/* Availability Callout */}
            <div className="glass-panel rounded-2xl p-5 border border-purple-500/20 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <p className="text-xs text-slate-300">
                <strong className="text-white block font-semibold">Immediate Availability</strong>
                Open for full-time AI Engineer, ML Engineer, and Full Stack Developer roles.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-400'
                      } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-400'
                      } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI / Full Stack Engineer Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.subject ? 'border-red-500/70 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-400'
                    } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Bhuvanasri, I came across your portfolio and would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-400'
                    } text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/50 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 border border-purple-400/40 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                  </button>

                  {/* Copy Draft Option */}
                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-mono text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 transition-colors"
                    title="Copy formatted message draft to clipboard"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Formatted Draft</span>
                  </button>

                </div>

                {/* Notice text ensuring transparent honesty */}
                <div className="pt-3">
                  <p className="text-[11px] text-slate-400 leading-normal">
                    <span className="text-purple-400 font-medium">Integration notice:</span> Submitting immediately launches your default email client with your draft pre-populated to dispatch directly to <span className="font-mono text-purple-300">{personalInfo.email}</span>. You can also copy the draft with one click.
                  </p>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
