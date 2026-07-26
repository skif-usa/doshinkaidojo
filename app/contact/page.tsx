import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Doshinkai Dojo in Cincinnati, OH. Reach out about class schedules, private training, or joining the dojo.',
};

export default function Contact() {
  return <ContactForm />;
}
