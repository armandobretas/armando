import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Armando Bretas - Senior Front-end Developer',
  description:
    'Desenvolvedor Front-end Sênior com 8+ anos de experiência em React, Flutter, React Native. Especialista em Micro Frontends e desenvolvimento mobile.',
  keywords:
    'React,Flutter,React Native,Front-end,TypeScript,JavaScript,Micro Frontends,Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
