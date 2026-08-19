import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  themeColor: '#0d0d0c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-void text-chalk antialiased">
        <Navbar />
        {/* Offset past the fixed identity rail */}
        <div className="lg:pl-20 min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}