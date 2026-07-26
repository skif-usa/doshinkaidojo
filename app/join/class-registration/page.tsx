import type { Metadata } from 'next';
import ClassRegistrationForm from './ClassRegistrationForm';

export const metadata: Metadata = {
  title: 'Class Registration',
  description: 'Enroll in Shotokan Karate classes at Doshinkai Dojo in Cincinnati, OH. Free trial class, youth, all-levels, and advanced training available.',
};

export default function ClassRegistration() {
  return <ClassRegistrationForm />;
}
