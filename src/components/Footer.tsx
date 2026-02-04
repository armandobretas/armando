'use client';

import { Heart, Code, Quote } from 'lucide-react';
import { cvData } from '@/data/cv';

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-slate-900/80 border-t border-slate-700/50 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <blockquote className="relative">
            <Quote className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 text-cyan-500/30" />
            <p className="text-lg md:text-xl text-slate-200 italic px-8 py-4 text-body">
              &ldquo;{cvData.quote}&rdquo;
            </p>
          </blockquote>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <p className="text-slate-200 flex items-center justify-center gap-2 flex-wrap">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>e</span>
            <Code className="w-4 h-4 text-cyan-400" />
            <span>por {cvData.name}</span>
          </p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {cvData.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
