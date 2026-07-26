import type { Metadata } from 'next';
import EventsList from './EventsList';

export const metadata: Metadata = {
  title: 'Upcoming Events',
  description: 'Join Doshinkai Dojo for exclusive Shotokan Karate seminars, training camps, and gasshukus featuring world-renowned instructors.',
};

export default function EventsPage() {
  return <EventsList />;
}
