export type EventLangContent = {
  shortDesc: string;
  schedule: string[];
  pricing: string[];
  note: string;
  quote: string;
  labels: { location: string; schedule: string; cost: string; contactInfo: string; register: string };
};

export type UpcomingEvent = {
  id: string;
  title: string;
  /** Human-readable date shown on the page. */
  date: string;
  /** Machine dates for Event structured data, with the venue's UTC offset. */
  startIso: string;
  endIso: string;
  /** Ticket tiers, for schema offers. A free event uses a single offer priced '0'. */
  offers: { name: string; price: string }[];
  currency: string;
  image: string;
  /** Omit for events with no registration step. */
  registerLink?: string;
  /** Guest instructor shown in structured data, if any. */
  performer?: string;
  location: { name: string; address: string[]; city: string; country: string };
  contact?: { name: string; phone: string; email: string };
  /** English is required; add `es` to show the language toggle. */
  content: { en: EventLangContent; es?: EventLangContent };
};

/** Shared so the page markup and the JSON-LD never drift apart. */
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'open-house-2026',
    title: '3rd Martial Arts Open House',
    date: 'Sunday, October 25, 2026',
    startIso: '2026-10-25T10:00:00-04:00',
    endIso: '2026-10-25T14:00:00-04:00',
    offers: [{ name: 'Free admission', price: '0' }],
    currency: 'USD',
    image: '/3_open_house.webp',
    location: {
      name: 'Aikido of Cincinnati',
      address: ['6620 Montgomery Rd.', 'Cincinnati, OH 45213'],
      city: 'Cincinnati',
      country: 'US',
    },
    content: {
      en: {
        shortDesc:
          'A free, family-friendly day to experience the tradition, discipline, and spirit of four Japanese martial arts, plus a special origami workshop. All ages and experience levels are welcome.',
        schedule: [
          '10:00 AM — Iaido | 居合道 — The Way of Mental Presence',
          '11:00 AM — Aikido | 合気道 — The Way of Harmony',
          '12:00 PM — Shotokan Karate-Do | 松濤館空手道 — The Way of the Empty Hand',
          '1:00 PM — Kendo | 剣道 — The Way of the Sword',
          'All day — Origami Workshop by the Japan America Society of Greater Cincinnati',
        ],
        pricing: ['Free admission', 'Hamburgers and hot dogs provided'],
        note: 'Come meet the instructors and practitioners, learn about the different martial arts, and experience the values of discipline, respect, tradition, perseverance, and community. Open 10:00 AM – 2:00 PM.',
        quote: 'Four Arts. One Community. One Amazing Day.',
        labels: {
          location: 'Location & Date',
          schedule: 'Schedule',
          cost: 'Admission',
          contactInfo: '',
          register: '',
        },
      },
    },
  },
];

const BASE_URL = 'https://doshinkaidojo.com';

/** Event structured data, so Google can show these as event rich results. */
export function eventJsonLd(event: UpcomingEvent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.content.en.shortDesc,
    startDate: event.startIso,
    endDate: event.endIso,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: [`${BASE_URL}${event.image}`],
    url: `${BASE_URL}/events`,
    isAccessibleForFree: event.offers.every((offer) => offer.price === '0'),
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location.address.join(', '),
        addressLocality: event.location.city,
        addressCountry: event.location.country,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Doshinkai Dojo',
      url: BASE_URL,
    },
    ...(event.performer && { performer: { '@type': 'Person', name: event.performer } }),
    offers: event.offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: event.currency,
      url: event.registerLink ?? `${BASE_URL}/events`,
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01T00:00:00-05:00',
    })),
  };
}
