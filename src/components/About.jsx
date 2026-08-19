import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  User, 
  GraduationCap, 
  Code2, 
  Globe, 
  Brain, 
  GitBranch, 
  Target, 
  BookOpen, 
  Sparkles,
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Globe: Globe,
  GitBranch: GitBranch,
  Code2: Code2
};

export default function About() {
  const { about = {}, personal = {} } = portfolioData;

  // Safely normalize story into an array
  const storyParagraphs = Array.isArray(about.story)
    ? about.story
    : typeof about.story === 'string'
      ? [about.story]
      : ['I am a B.Tech Computer Science Engineering student passionate about software development and technology.'];

  const details = about.details || {};
  const studying = details.studying || 'B.Tech in Computer Science & Engineering';
  const college = details.college || personal.college || 'SVIET, Chandigarh';
  const careerGoals = details.careerGoals || 'To become a skilled software engineer and build impactful technology solutions.';

  // Safely normalize interests into array
  const interestsList = Array.isArray(details.interests)
    ? details.interests
    : typeof details.interests === 'string'
      ? details.interests.split(',').map(s => s.trim())
      : ['Software Development', 'Web Development', 'Problem Solving'];

  // Safely normalize learning into array
  const learningList = Array.isArray(details.learning)
    ? details.learning
    : typeof details.learning === 'string'
      ? details.learning.split(',').map(s => s.trim())
      : ['Data Structures & Algorithms', 'Web Development', 'Git & GitHub'];

  const highlights = Array.isArray(about.highlights) && about.highlights.length > 0
    ? about.highlights
    : [
        {
          title: "Programming & Problem Solving",
          description: "Focusing on C++, C, Python, and Data Structures & Algorithms.",
          icon: "Brain"
        },
        {
          title: "Web Development",
          description: "Building responsive web interfaces with HTML, CSS, and JavaScript.",
          icon: "Globe"
        },
        {
          title: "Version Control & Tooling",
          description: "Proficient in Git, GitHub workflows, and VS Code development environment.",
          icon: "GitBranch"
        }
      ];

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
            Passion for <span className="text-gradient">Technology & Engineering</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A student developer dedicated to software development, programming, and continuous learning.
          </p>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-slate-800/80">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                <span>Who I Am</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {storyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Spec Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                  📍 {personal.location || 'India'}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                  🎓 {personal.college || 'SVIET, Chandigarh'}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ⚡ {personal.availability || 'Open for Opportunities'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Key Points */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Studying */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Degree & College
                </h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium pl-9">
                {studying} • <span className="text-brand-600 dark:text-brand-400 font-semibold">{college}</span>
              </p>
            </div>

            {/* Technical Interests */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Technical Interests
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-9">
                {interestsList.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Currently Learning
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-9">
                {learningList.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Career Goals
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-9 leading-relaxed">
                {careerGoals}
              </p>
            </div>

          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <div 
                key={idx}
                className="glass-card glass-card-hover rounded-xl p-5 border border-slate-200 dark:border-slate-800/80 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
