import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Sparkles,
  ChevronDown,
  Code2,
  Terminal,
  ExternalLink
} from 'lucide-react';

export default function Hero({ onOpenResume, onCopyEmail }) {
  const { personal } = portfolioData;

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

            {/* Location & College Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{personal.college}</span>
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
                <span>Download Resume</span>
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
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 hover:shadow-glow-sm transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={() => onCopyEmail(personal.email)}
                aria-label="Copy Email address"
                className="p-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-glow-sm transition-all"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Visual / Code Card Preview */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10"></div>
              
              {/* Code Terminal Visual Window */}
              <div className="w-full glass-card border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl bg-white/90 dark:bg-slate-900/90">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    ajit-profile.json
                  </span>
                  <div className="w-4"></div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>{" "}
                    <span className="text-blue-600 dark:text-cyan-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">role:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">"Frontend Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">status:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">"Open for Roles"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">coreTech:</span> [
                    <span className="text-amber-600 dark:text-amber-300">"React"</span>,{" "}
                    <span className="text-amber-600 dark:text-amber-300">"Tailwind"</span>,{" "}
                    <span className="text-amber-600 dark:text-amber-300">"JavaScript"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">"Pixel-Perfect UI & Performance"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">codeQuality:</span>{" "}
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">100</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Terminal Stats Footer */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                      <div className="text-base font-bold text-brand-600 dark:text-brand-400">{personal.yearsOfExperience}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">Coding</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                      <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">{personal.projectsCompleted}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">Projects</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                      <div className="text-base font-bold text-purple-600 dark:text-purple-400">{personal.problemsSolved}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">Problems</div>
                    </div>
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
