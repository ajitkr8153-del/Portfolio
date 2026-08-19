import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code2 
} from 'lucide-react';

export default function Footer({ onCopyEmail }) {
  const { personal, navLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#070a12]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {personal.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-brand-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personal.phone}`}
              aria-label="Call Phone"
              className="p-2 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              title={`Call: ${personal.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onCopyEmail(personal.email)}
              aria-label="Copy Email"
              className="p-2 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-500/40 transition-all"
              title="Copy Email"
            >
              <Mail className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-slate-700 dark:text-slate-300 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Credit */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <span>Built with</span>
            <span className="font-semibold text-brand-600 dark:text-brand-400">React</span>
            <span>&</span>
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
