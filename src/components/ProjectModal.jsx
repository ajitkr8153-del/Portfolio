import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const title = project.title || project.name || 'Project Details';
  const description = project.description || 'Detailed software overview.';
  const techStack = Array.isArray(project.techStack) 
    ? project.techStack 
    : Array.isArray(project.tags) 
      ? project.tags 
      : ['C++', 'Programming'];
  const githubUrl = project.githubUrl || project.github || 'https://github.com/ajitkr8153-del/Portfolio';
  const liveUrl = project.liveUrl || project.liveDemo || githubUrl;
  const category = project.category || 'Software Project';
  const previewGradient = project.previewGradient || 'from-indigo-600 via-purple-600 to-cyan-500';
  const highlights = project.highlights || [
    'Modular software design and clean structure',
    'Version controlled and documented on GitHub',
    'Focused on algorithmic efficiency and responsiveness'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="glass-card w-full max-w-2xl rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 text-white relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner */}
        <div className={`h-36 bg-gradient-to-r ${previewGradient} p-6 relative flex flex-col justify-end overflow-hidden`}>
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{category}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5">
              Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                Key Features & Highlights
              </h4>
              <ul className="space-y-2">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-400" />
              <span>Technologies Utilized</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-brand-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-5 bg-slate-950/60 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md hover:shadow-glow-sm transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Live Demo</span>
          </a>
        </div>

      </div>
    </div>
  );
}
