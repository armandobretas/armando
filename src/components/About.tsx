'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cvData } from '@/data/cv';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof cvData.about.stats)[0];
  index: number;
  isInView: boolean;
}) {
  const numericValue = parseInt(stat.value, 10) || 0;
  const displayValue = useCountUp(numericValue, isInView, stat.suffix);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-hover rounded-xl p-6 text-center card-hover border-gradient glow-subtle"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 text-display">
        {displayValue}
      </div>
      <p className="text-sm md:text-base text-slate-200">{stat.label}</p>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="sobre" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-100 text-display">
            Sobre <span className="gradient-text">Mim</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cvData.about.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="shrink-0 mx-auto md:mx-0"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-2 ring-cyan-500/30">
                <Image
                  src={cvData.photo}
                  alt={cvData.name}
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div className="flex-1 min-w-0">
              {cvData.about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl text-slate-100 leading-relaxed mb-6 last:mb-0 text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
