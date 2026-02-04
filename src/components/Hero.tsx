'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80" />
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-cyan-500/30 ring-offset-4 ring-offset-slate-950 shadow-xl">
            <Image
              src={cvData.photo}
              alt={cvData.name}
              fill
              sizes="(max-width: 768px) 96px, 128px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-3 rounded-full glass glow">
            <span className="gradient-text font-bold text-lg">
              {cvData.tagline}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-display"
        >
          <span className="gradient-text">{cvData.name}</span>
          <span className="inline-block w-1 h-16 md:h-24 bg-cyan-400 ml-2 cursor-blink" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-slate-200">{cvData.title}</p>
          <p className="text-lg md:text-xl text-slate-200 mt-2">
            {cvData.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="#contato"
            className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] glow-subtle shadow-lg shadow-cyan-900/30"
          >
            Entre em Contato
          </Link>
          <Link
            href="#experiencia"
            className="px-10 py-4 border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            Ver Experiência
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#sobre" className="block animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </motion.div>
    </section>
  );
}
