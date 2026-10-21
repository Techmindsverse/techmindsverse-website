
import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = [
  '',
  'about',
  'academy',
  'services',
  'projects',
  'community',
  'events',
  'team',
  'contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}/${path}`,
    changeFrequency: 'monthly' as const,
    priority: path ? 0.7 : 1,
  }));
}
