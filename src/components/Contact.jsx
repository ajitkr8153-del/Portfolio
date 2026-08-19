import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Mail, 
  Phone,
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Contact({ onShowToast, onCopyEmail }) {
  const { personal = {} } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = personal.email || 'ajitkr8153@gmail.com';
  const phone = personal.phone || '+91 8539876974';
  const github = personal.github || 'https://github.com/ajitkr8153-del';
  const linkedin = personal.linkedin || 'https://linkedin.com/in/ajitkumar-dev';
  const availability = personal.availability || 'Open to Internships & Opportunities';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    onCopyEmail(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phone);
      onShowToast({
        type: 'success',
        message: `Copied phone number ${phone} to clipboard!`
      });
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Connect & <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Feel free to reach out directly via email or message for internships, software projects, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {availability}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Open to internships, junior developer roles, and student collaborations. Responses are usually within 24 hours.
              </p>
              
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-brand-500" />
                <span>Location: {personal.location || 'Chandigarh, India'}</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              
              {/* Phone Card (if provided) */}
              {personal.phone && (
                <div className="glass-card rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</div>
                      <a 
                        href={`tel:${phone}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all border border-slate-200 dark:border-slate-700"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}

              {/* Email Card */}
              <div className="glass-card rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</div>
                    <a 
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-all border border-slate-200 dark:border-slate-700"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">GitHub Profile</div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {github.replace('https://', '')}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
              </a>

              {/* LinkedIn Card */}
              {personal.linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">LinkedIn Network</div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        {linkedin.replace('https://', '')}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
                </a>
              )}

            </div>

          </div>

          {/* Right Column: Frontend Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80 relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Message to Ajit
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Get in touch directly through the form
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-brand-500" />
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    Thank you for reaching out, Ajit will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Hi Ajit, I'd like to talk about..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md hover:shadow-glow-md transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
