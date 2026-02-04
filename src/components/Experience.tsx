'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100 text-display">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 w-0.5 timeline-line transform md:-translate-x-1/2 h-full rounded-full" />
            <div className="space-y-12">
              {cvData.experience.map((job, i) => (
                <motion.div
                  key={job.company + job.period}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative pl-8 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:pr-[calc(50%+2rem)]'
                      : 'md:pl-[calc(50%+2rem)]'
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-cyan-400 rounded-full transform md:-translate-x-1/2 ring-4 ring-cyan-500/30 ring-offset-2 ring-offset-slate-950">
                    <div className="absolute inset-0 bg-cyan-300 rounded-full animate-ping opacity-40" />
                  </div>
                  <div className="glass glass-hover rounded-xl p-6 md:p-8 card-hover hover-lift">
                    <div className="mb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold flex-1 text-slate-100">
                          {job.company}
                        </h3>
                        {job.badge && (
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-sm rounded-full font-semibold">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.role}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-100 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-slate-100">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        Principais realizações:
                      </h4>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-slate-100 pl-4 relative"
                          >
                            <span className="absolute left-0 text-cyan-400">
                              •
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-slate-100">
                        Tecnologias:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-slate-700/80 text-slate-100 rounded border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
