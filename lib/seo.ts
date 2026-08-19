import type { Metadata } from 'next';

const siteName = 'Doshinkai Dojo';

type PageMeta = {
  title: string;
  description: string;
  /** Route path, e.g. '/about/instructor'. Resolved against metadataBase. */
  path: string;
  /** Set on the homepage so the title skips the '%s | Doshinkai Dojo' template. */
  absoluteTitle?: boolean;
};

// Next.js replaces nested metadata objects instead of deep-merging them, so each
// page has to declare its own canonical and openGraph block. Building them here
// keeps every route pointing at itself rather than inheriting the homepage URL.
export function pageMetadata({ title, description, path, absoluteTitle = false }: PageMeta): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}
