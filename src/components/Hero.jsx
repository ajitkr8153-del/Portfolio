import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone,
  Github, 
  Linkedin, 
  MapPin, 
  Sparkles,
  ChevronDown,
  Code2,
  Terminal,
  Cpu,
  Languages,
  ExternalLink
} from 'lucide-react';

export default function Hero({ onOpenResume, onCopyEmail }) {
  const { personal, about } = portfolioData;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-brand-600 dark:text-brand-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Hi, I'm</span>
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="text-gradient block">{personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {personal.role}
              </h2>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Spoken Languages & Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <Languages className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Languages: <strong>{personal.spokenLanguages.join(', ')}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`tel:${personal.phone}`} className="hover:text-emerald-500 font-medium">
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <a href={`mailto:${personal.email}`} className="hover:text-rose-500 font-medium">
                  {personal.email}
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md hover:shadow-glow-md transition-all active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-card border border-slate-300 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-all active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-glow-sm transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-500/50 hover:shadow-glow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personal.phone}`}
                aria-label="Call Phone"
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-glow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: User Profile Visual Card & Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              
              {/* Decorative Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 -z-10"></div>
              
              {/* Card Container */}
              <div className="w-full glass-card border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl bg-white/90 dark:bg-slate-900/90 p-6 flex flex-col items-center text-center space-y-5">
                
                {/* User Image with Gradient Ring */}
                <div className="relative">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-2xl p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xl">
                    <img 
                      src={personal.avatar} 
                      alt={personal.name} 
                      className="w-full h-full object-cover rounded-[14px] bg-slate-800"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold border-2 border-brand-500 flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>C++ & Web</span>
                  </div>
                </div>

                {/* Profile Identity */}
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                    {personal.role}
                  </p>
                </div>

                {/* Core Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                    C++
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
                    JavaScript
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40">
                    HTML & CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                    DSA
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                    Git & GitHub
                  </span>
                </div>

                {/* Mini Stats Bar */}
                <div className="w-full pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <div className="text-base font-bold text-brand-600 dark:text-brand-400">400+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">DSA Solved</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">15+</div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">Projects</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                    <div className="text-base font-bold text-purple-600 dark:text-purple-400">100%</div>
                    <div className="text-[10px] text-slate-500 uppercase font-medium">Responsive</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-12 pb-2 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-500 transition-colors animate-bounce cursor-pointer"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
