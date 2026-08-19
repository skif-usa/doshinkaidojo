import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ContactForm from './ContactForm';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Doshinkai Dojo in Cincinnati, OH. Reach out about class schedules, private training, or joining the dojo.',
  path: '/contact',
});

export default function Contact() {
  return <ContactForm />;
}
