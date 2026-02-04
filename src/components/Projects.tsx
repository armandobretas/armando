'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { Smartphone, Monitor, Users } from 'lucide-react';

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 bg-slate-900/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-100 text-display">
            Projetos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-center text-slate-200 mb-12 text-body">
            Projetos de impacto em produção
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.projects.map((project, i) => (
              <motion.div
                key={`${project.name}-${project.client}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover rounded-xl p-6 cursor-pointer hover:shadow-2xl group transition-all duration-300 hover:scale-[1.02] hover-lift"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    {project.platform?.includes('Android') ||
                    project.platform?.includes('iOS') ? (
                      <Smartphone className="w-5 h-5 text-cyan-500/70 shrink-0" />
                    ) : (
                      <Monitor className="w-5 h-5 text-cyan-500/70 shrink-0" />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs bg-cyan-600/30 text-cyan-300 rounded border border-cyan-500/30">
                      {project.client}
                    </span>
                    {project.platform && (
                      <span className="px-2 py-0.5 text-xs text-slate-300">
                        {project.platform}
                      </span>
                    )}
                    {'role' in project && project.role && (
                      <span className="px-2 py-0.5 text-xs bg-amber-600/20 text-amber-300 rounded border border-amber-500/30 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.role}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
