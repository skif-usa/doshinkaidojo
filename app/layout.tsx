import type { Metadata } from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
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
  themeColor: '#fffaf2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}