import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ClassRegistrationForm from './ClassRegistrationForm';

export const metadata: Metadata = pageMetadata({
  title: 'Class Registration',
  description: 'Enroll in Shotokan Karate classes at Doshinkai Dojo in Cincinnati, OH. Free trial class, youth, all-levels, and advanced training available.',
  path: '/join/class-registration',
});

export default function ClassRegistration() {
  return <ClassRegistrationForm />;
}
