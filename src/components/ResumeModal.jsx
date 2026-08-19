import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, onCopyEmail }) {
  if (!isOpen) return null;

  const { personal, about, skills, projects, education, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="glass-card w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-bold tracking-tight">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={`mailto:${personal.email}?subject=Opportunity%20Discussion`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm hover:brightness-110 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
              {personal.name}
            </h2>
            <p className="text-base font-semibold text-brand-600 dark:text-brand-400 mb-3">
              {personal.role}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" /> {personal.location}
              </span>
              <span>•</span>
              <button 
                onClick={() => onCopyEmail(personal.email)}
                className="flex items-center gap-1 hover:text-brand-500 text-left"
              >
                <Mail className="w-3.5 h-3.5 text-brand-500" /> {personal.email}
              </button>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-500">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-500">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personal.shortBio} {about.details.careerGoals}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{edu.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span>{edu.institution}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Languages: </span>
                <span className="text-slate-600 dark:text-slate-300">JavaScript (ES6+), TypeScript, Python, Java, C++, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Frontend Frameworks: </span>
                <span className="text-slate-600 dark:text-slate-300">React.js, Tailwind CSS, Next.js, Redux Toolkit, Context API, Vite</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Tools & Practices: </span>
                <span className="text-slate-600 dark:text-slate-300">Git, GitHub, Figma, VS Code, Postman, Responsive UI, Agile</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Selected Projects</span>
            </h3>
            <div className="space-y-4">
              {projects.slice(0, 3).map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-slate-400">{proj.techStack.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Honors & Certifications</span>
            </h3>
            <ul className="space-y-1">
              {achievements.map((ach, idx) => (
                <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span><strong>{ach.title}</strong> – {ach.organization} ({ach.date})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
