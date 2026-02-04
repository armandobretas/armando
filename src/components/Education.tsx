'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const { institution, degree, period } = cvData.education;

  return (
    <section id="educacao" className="py-20 px-4 bg-slate-900/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-100 text-display">
            <span className="gradient-text">Formação</span> Acadêmica
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass glass-hover rounded-2xl p-8 md:p-10 max-w-2xl mx-auto border-gradient hover-lift"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">
                  {institution}
                </h3>
                <p className="text-lg text-cyan-300 font-medium mb-1">
                  {degree}
                </p>
                <p className="text-slate-200">{period}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
