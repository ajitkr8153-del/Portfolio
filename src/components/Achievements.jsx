import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Trophy, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export default function Achievements() {
  const { achievements = [] } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Honors & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Key academic achievements, certifications, and technical accomplishments.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const isObject = typeof item === 'object' && item !== null;
            const title = isObject ? (item.title || item.name) : item;
            const organization = isObject ? (item.organization || 'Academic & Tech') : 'Certification';
            const date = isObject ? (item.date || 'Active') : 'Active';
            const description = isObject ? (item.description || 'Verified achievement and milestone.') : 'Verified milestone.';
            const badge = isObject ? (item.badge || 'Milestone') : 'Verified';

            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-brand-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{organization}</span>
                    <span>•</span>
                    <span>{date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
