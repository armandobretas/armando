'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-100 text-display">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-center text-slate-200 mb-12 text-body">
            Disponível para trabalho remoto | Aberto a propostas e novos
            desafios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <a
              href={`mailto:${cvData.contact.email}`}
              className="glass glass-hover rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-xs text-slate-200">Email</p>
                  <p className="text-xs font-semibold text-slate-100 whitespace-nowrap overflow-hidden text-ellipsis">
                    {cvData.contact.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-xs text-slate-200">LinkedIn</p>
                  <p className="text-xs font-semibold text-slate-100 whitespace-nowrap overflow-hidden text-ellipsis">
                    {cvData.contact.linkedinLabel}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={cvData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-xs text-slate-200">Instagram</p>
                  <p className="text-xs font-semibold text-slate-100 whitespace-nowrap overflow-hidden text-ellipsis">
                    {cvData.contact.instagramLabel}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="glass glass-hover rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-100">
              Idiomas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
              {cvData.languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-4xl" aria-hidden>
                    {lang.flag}
                  </span>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-lg text-slate-100">
                      {lang.name}
                    </h4>
                    <p className="text-sm text-slate-200">{lang.level}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-2 h-2 rounded-full ${
                            j < lang.levelCount ? 'bg-cyan-500' : 'bg-slate-600'
                          }`}
                        />
                      ))}
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
