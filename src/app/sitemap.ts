import { MetadataRoute } from 'next';
import { cvData } from '@/data/cv';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = cvData.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
