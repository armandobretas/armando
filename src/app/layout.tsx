import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { cvData } from '@/data/cv';
import { JsonLd } from '@/components/JsonLd';

const siteUrl = cvData.siteUrl;
const title = 'Armando Bretas - Senior Front-end Developer | React, Flutter, React Native';
const description =
  'Desenvolvedor Front-end Sênior com 8+ anos de experiência em React, Flutter e React Native. Especialista em Micro Frontends, apps para Azul, Grupo NC e mais. Disponível para projetos remotos.';
const keywords = [
  'Armando Bretas',
  'desenvolvedor front-end',
  'React',
  'Flutter',
  'React Native',
  'Next.js',
  'TypeScript',
  'Micro Frontends',
  'desenvolvedor mobile',
  'Umuarama',
  'Paraná',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Armando Bretas',
  },
  description,
  keywords,
  authors: [{ name: 'Armando Bretas', url: siteUrl }],
  creator: 'Armando Bretas',
  publisher: 'Armando Bretas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Armando Bretas - CV',
    title,
    description,
    images: [
      {
        url: `${siteUrl}${cvData.photo}`,
        width: 400,
        height: 400,
        alt: 'Armando Bretas - Senior Front-end Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}${cvData.photo}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
  category: 'technology',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
