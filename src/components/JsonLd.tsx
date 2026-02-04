import { cvData } from '@/data/cv';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: cvData.name,
    jobTitle: 'Senior Front-end Developer',
    description: cvData.about.bio[0],
    url: cvData.siteUrl,
    image: `${cvData.siteUrl}${cvData.photo}`,
    email: cvData.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Umuarama',
      addressRegion: 'Paraná',
      addressCountry: 'BR',
    },
    sameAs: [cvData.contact.linkedin, cvData.contact.instagram],
    knowsAbout: [
      'React',
      'Flutter',
      'React Native',
      'Next.js',
      'TypeScript',
      'Micro Frontends',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: cvData.education.institution,
    },
    worksFor: [
      { '@type': 'Organization', name: 'BeCash' },
      { '@type': 'Organization', name: 'Levva' },
      { '@type': 'Organization', name: 'Gazin' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
