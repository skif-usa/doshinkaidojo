import type { Metadata } from 'next';
import PrivateClassForm from './PrivateClassForm';

export const metadata: Metadata = {
  title: 'Private Instruction',
  description: 'Book exclusive 1-on-1 Shotokan Karate training with Sensei Rubén Fung at Doshinkai Dojo. Tailored curriculum for tournament prep, exam prep, or accelerated progress.',
};

export default function PrivateClass() {
  return <PrivateClassForm />;
}
