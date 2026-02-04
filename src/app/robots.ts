import { MetadataRoute } from 'next';
import { cvData } from '@/data/cv';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = cvData.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
