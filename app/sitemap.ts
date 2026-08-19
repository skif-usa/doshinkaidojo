import type { MetadataRoute } from 'next';

const baseUrl = 'https://doshinkaidojo.com';

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  /** Date the page content last changed. Bump by hand when you edit a page —
   *  stamping every route with the build time makes Google ignore lastmod. */
  lastModified: string;
};

const routes: Route[] = [
  { path: '', priority: 1, changeFrequency: 'weekly', lastModified: '2026-08-19' },
  { path: '/schedule', priority: 0.9, changeFrequency: 'weekly', lastModified: '2026-08-19' },
  { path: '/join/class-registration', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/join/private-class', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/about/shotokan', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/about/history', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/about/instructor', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/events', priority: 0.8, changeFrequency: 'weekly', lastModified: '2026-08-19' },
  { path: '/events/archive', priority: 0.5, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/resources/registry', priority: 0.5, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/resources/affiliated', priority: 0.5, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/shop/accessories', priority: 0.5, changeFrequency: 'monthly', lastModified: '2026-08-19' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly', lastModified: '2026-08-19' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
