import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  User, 
  GraduationCap, 
  Code2, 
  Globe, 
  Palette, 
  Brain, 
  GitBranch, 
  Zap, 
  Target, 
  Languages, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Brain: Brain,
  Palette: Palette,
  GitBranch: GitBranch,
  Zap: Zap
};

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Code & <span className="text-gradient">Designing Interfaces</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Passionate programmer focused on software development, algorithmic problem solving in C++, and responsive web engineering.
          </p>
        </div>

        {/* Top Split: Bio Story & Structured Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200 dark:border-slate-800/80">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                <span>Background & Technical Focus</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {about.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Spec Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                  📍 {personal.location}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                  🗣️ Spoken: {personal.spokenLanguages.join(', ')}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ⚡ {personal.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Key Points */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Core Expertise Areas */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Core Expertise Areas
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-9">
                {about.details.interests.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Spoken Card */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Languages className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Spoken Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pl-9">
                {personal.spokenLanguages.map((lang, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Field */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Discipline
                </h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium pl-9">
                {about.details.studying}
              </p>
            </div>

            {/* Career Ambition */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Career Goals
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-9 leading-relaxed">
                {about.details.careerGoals}
              </p>
            </div>

          </div>
        </div>

        {/* 5-Area Expertise Grid */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Key Focus Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {about.expertise.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Code2;
              return (
                <div 
                  key={idx}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-200 dark:border-slate-800/80 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
