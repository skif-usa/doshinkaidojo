import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PrivateClassForm from './PrivateClassForm';

export const metadata: Metadata = pageMetadata({
  title: 'Private Instruction',
  description: 'Book exclusive 1-on-1 Shotokan Karate training with Sensei Rubén Fung at Doshinkai Dojo. Tailored curriculum for tournament prep, exam prep, or accelerated progress.',
  path: '/join/private-class',
});

export default function PrivateClass() {
  return <PrivateClassForm />;
}
