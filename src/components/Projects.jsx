import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Info, 
  Sparkles 
} from 'lucide-react';

export default function Projects() {
  const { projects = [] } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/10 dark:bg-brand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A showcase of software and web development projects with clean code and problem solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const title = project.title || project.name || `Project ${idx + 1}`;
            const description = project.description || 'Project details and software implementation.';
            const techStack = Array.isArray(project.techStack) 
              ? project.techStack 
              : Array.isArray(project.tags) 
                ? project.tags 
                : typeof project.techStack === 'string' 
                  ? project.techStack.split(',').map(s => s.trim())
                  : ['C++', 'Programming'];
            const githubUrl = project.githubUrl || project.github || 'https://github.com/ajitkr8153-del/Portfolio';
            const liveUrl = project.liveUrl || project.liveDemo || githubUrl;
            const category = project.category || 'Software';
            const subtitle = project.subtitle || (techStack[0] ? `${techStack[0]} Project` : 'Software Project');
            const previewGradient = project.previewGradient || 'from-indigo-600 via-purple-600 to-cyan-500';

            const normalizedProject = {
              ...project,
              title,
              description,
              techStack,
              githubUrl,
              liveUrl,
              category,
              subtitle,
              previewGradient
            };

            return (
              <div
                key={project.id || idx}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 group flex flex-col justify-between"
              >
                <div>
                  {/* Visual Banner */}
                  <div className={`h-44 bg-gradient-to-tr ${previewGradient} p-5 relative flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>{category}</span>
                      </span>

                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                        Active
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md line-clamp-1">
                        {title}
                      </h3>
                      <p className="text-xs text-white/80 font-medium line-clamp-1">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3.5">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(normalizedProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${title} on GitHub`}
                      className="p-2 rounded-xl glass-card border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                      title="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-sm hover:shadow-glow-sm transition-all"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
