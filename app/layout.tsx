import type { Metadata } from 'next';
import { Sora, Outfit, Yuji_Boku } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-sora',
  display: 'swap',
});

// Ink-brush calligraphy for the large kanji. Only the Latin slice is preloaded; the Japanese
// glyph slices are still self-hosted and load on demand where kanji appear.
const brush = Yuji_Boku({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brush-face',
  display: 'swap',
  preload: false,
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://doshinkaidojo.com'),
  title: {
    template: '%s | Doshinkai Dojo',
    default: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  },
  description: 'Traditional Shotokan Karate in Cincinnati, OH. We build character, discipline, and strength through strict adherence to Japanese martial arts roots.',
  keywords: [
    'Shotokan Karate Cincinnati',
    'karate classes Cincinnati OH',
    'SKIF-USA',
    'traditional Japanese martial arts',
    'Doshinkai Dojo',
  ],
  // Search Console / Bing Webmaster ownership tags. Set the env vars to the token each tool gives you;
  // nothing is rendered while they are empty.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Doshinkai Dojo | Cincinnati Shotokan Karate',
    description: 'Join Doshinkai Dojo for traditional Shotokan Karate classes in Cincinnati. All ages and experience levels welcome.',
    siteName: 'Doshinkai Dojo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doshinkai Dojo | Cincinnati Shotokan Karate',
    description: 'Join Doshinkai Dojo for traditional Shotokan Karate classes in Cincinnati. All ages and experience levels welcome.',
    images: ['/opengraph-image'],
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable} ${brush.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes into <body> before React loads */}
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-ink antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}