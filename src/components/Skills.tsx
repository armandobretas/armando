'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { Boxes, Smartphone, GitBranch, Cloud, Link2 } from 'lucide-react';

const categoryIcons: Record<number, React.ElementType> = {
  0: Boxes,
  1: Smartphone,
  2: GitBranch,
  3: Cloud,
  4: Link2,
};

export function Skills() {
  return (
    <section
      id="competencias"
      className="py-20 px-4 bg-slate-900/50 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100 text-display">
            Competências <span className="gradient-text">Técnicas</span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-100">
              Principais Tecnologias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cvData.skills.main.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-100">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-200">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: 'easeOut',
                      }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800 rounded-full transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.skills.categories.map((category, i) => {
              const Icon = categoryIcons[i] || Boxes;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass glass-hover rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover-lift group relative"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-600/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hover para ver todos
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
