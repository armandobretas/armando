'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { Zap, Users, Award, Code2 } from 'lucide-react';

const differentialIcons = [Zap, Users, Award, Code2];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
            <span className="gradient-text">Diferenciais</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.differentials.map((diff, i) => {
              const Icon = differentialIcons[i] || Zap;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 md:p-8 card-hover group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary-600 rounded-lg group-hover:shadow-lg group-hover:shadow-primary-600/50 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {diff.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {diff.items.map((item) => (
                      <li
                        key={item}
                        className="text-slate-100 pl-4 relative text-sm md:text-base"
                      >
                        <span className="absolute left-0 text-cyan-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
