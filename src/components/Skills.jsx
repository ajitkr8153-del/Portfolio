import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Wrench, 
  Code, 
  FileCode, 
  Terminal, 
  Cpu, 
  Layout, 
  Sparkles, 
  Globe, 
  GitBranch, 
  Github, 
  Monitor, 
  Zap, 
  CheckCircle,
  Star
} from 'lucide-react';

const skillIconMap = {
  'c++': Cpu,
  'c': Code,
  'python': Terminal,
  'html': Layout,
  'css': Sparkles,
  'javascript': FileCode,
  'git': GitBranch,
  'github': Github,
  'vs code': Monitor
};

export default function Skills() {
  const { skills = {} } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  // Normalize skills list
  let categories = skills.categories || [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "tools", label: "Tools" }
  ];

  let skillsList = [];
  if (Array.isArray(skills.list)) {
    skillsList = skills.list;
  } else {
    // If formatted as { languages: [...], frontend: [...], tools: [...] }
    if (Array.isArray(skills.languages)) {
      skills.languages.forEach(item => {
        skillsList.push({
          name: typeof item === 'string' ? item : item.name,
          category: 'languages',
          level: 'Proficient',
          highlight: true
        });
      });
    }
    if (Array.isArray(skills.frontend)) {
      skills.frontend.forEach(item => {
        skillsList.push({
          name: typeof item === 'string' ? item : item.name,
          category: 'frontend',
          level: 'Proficient',
          highlight: true
        });
      });
    }
    if (Array.isArray(skills.tools)) {
      skills.tools.forEach(item => {
        skillsList.push({
          name: typeof item === 'string' ? item : item.name,
          category: 'tools',
          level: 'Proficient',
          highlight: true
        });
      });
    }
  }

  if (skillsList.length === 0) return null;

  const filteredSkills = activeCategory === 'all' 
    ? skillsList 
    : skillsList.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A curated set of programming languages, frontend tools, and developer workflows I use to build projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                  : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const skillKey = (skill.name || '').toLowerCase();
            const IconComponent = skillIconMap[skillKey] || Code;

            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {skill.highlight && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>Active</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="capitalize">{skill.category}</span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {skill.level || 'Proficient'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlights */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Engineering & Problem Solving Focus
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Writing clean, modular code with strong computational thinking in C++, JavaScript, and Version Control.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              <CheckCircle className="w-3.5 h-3.5 text-brand-500" /> Problem Solving
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Git & GitHub
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <CheckCircle className="w-3.5 h-3.5 text-purple-500" /> Web Development
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
