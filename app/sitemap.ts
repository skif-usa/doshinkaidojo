import type { MetadataRoute } from 'next';

const baseUrl = 'https://doshinkaidojo.com';

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/schedule', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/join/class-registration', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/join/private-class', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/shotokan', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/history', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/instructor', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/events', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/events/archive', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/registry', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/resources/affiliated', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/shop/accessories', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
