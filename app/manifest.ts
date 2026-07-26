import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
    short_name: 'Doshinkai Dojo',
    description: 'Traditional Shotokan Karate in Cincinnati, OH. We build character, discipline, and strength through strict adherence to Japanese martial arts roots.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/doshinkai_logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
