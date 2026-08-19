import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import EventsList from './EventsList';
import { upcomingEvents, eventJsonLd } from '@/lib/events';

export const metadata: Metadata = pageMetadata({
  title: 'Upcoming Events',
  description: 'Join Doshinkai Dojo for exclusive Shotokan Karate seminars, training camps, and gasshukus featuring world-renowned instructors.',
  path: '/events',
});

export default function EventsPage() {
  return (
    <>
      {/* Event structured data, so seminars can appear as event rich results */}
      {upcomingEvents.map((event) => (
        <script
          key={event.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event)) }}
        />
      ))}
      <EventsList />
    </>
  );
}
