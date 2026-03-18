import type { Metadata } from 'next';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Doshinkai Dojo',
    default: 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati',
  },
  description: 'Traditional Shotokan Karate in Cincinnati, OH. We build character, discipline, and strength through strict adherence to Japanese martial arts roots.',
  openGraph: {
    title: 'Doshinkai Dojo | Cincinnati Shotokan Karate',
    description: 'Join Doshinkai Dojo for traditional Shotokan Karate classes in Cincinnati. All ages and experience levels welcome.',
    url: 'https://doshinkaidojo.com', // Replace with your actual URL
    siteName: 'Doshinkai Dojo',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}