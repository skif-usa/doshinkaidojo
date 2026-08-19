import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import EventsList from './EventsList';

export const metadata: Metadata = pageMetadata({
  title: 'Upcoming Events',
  description: 'Join Doshinkai Dojo for exclusive Shotokan Karate seminars, training camps, and gasshukus featuring world-renowned instructors.',
  path: '/events',
});

export default function EventsPage() {
  return <EventsList />;
}
