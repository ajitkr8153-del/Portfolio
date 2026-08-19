import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            My formal academic training providing strong theoretical grounding in computing systems and software design.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -z-0"></div>

          {education.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-8 group">
              
              {/* Timeline Marker Icon */}
              <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-brand-500 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all shrink-0 z-10">
                <GraduationCap className="w-4 h-4 sm:w-7 sm:h-7" />
              </div>

              {/* Education Card Content */}
              <div className="flex-1 glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-brand-600 dark:text-brand-400">
                      {item.institution}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {item.score}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Academic Highlights */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Key Highlights & Roles</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
