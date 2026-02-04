'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cvData } from '@/data/cv';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#competencias', label: 'Competências' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#educacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="hidden md:flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold gradient-text"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-cyan-500/50">
                <Image
                  src={cvData.photo}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span>{cvData.initials}</span>
            </Link>
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 hover:text-cyan-400 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold gradient-text"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-cyan-500/50">
                <Image
                  src={cvData.photo}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span>{cvData.initials}</span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-lg glass"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 bottom-0 w-64 glass z-50 md:hidden shadow-2xl transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              type="button"
              className="p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
