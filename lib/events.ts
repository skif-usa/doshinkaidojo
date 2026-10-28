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
    id: 'skif-gasshuku-2027',
    title: 'Annual SKIF Gasshuku Houston',
    date: 'March 6–7, 2027',
    startIso: '2027-03-06',
    endIso: '2027-03-07',
    offers: [],
    currency: 'USD',
    image: '/Houston_Gasshuku_2027.webp',
    registerLink: 'https://forms.gle/uAkYtjLMUjMnr6Xt8',
    performer: 'Manabu Murakami',
    location: {
      name: 'Trotter Family YMCA',
      address: ['Houston, Texas'],
      city: 'Houston',
      country: 'US',
    },
    contact: { name: 'Rubén Fung', phone: '832-513-0058', email: 'shotokankaratedocenter@gmail.com' },
    content: {
      en: {
        shortDesc:
          'A weekend of traditional Karate-Do training, learning, and friendship with guest instructor Shuseki Shihan Manabu Murakami (8th Dan), Chief Instructor of SKIF. Open to adults, teens, and youth from all traditional karate styles and affiliations.',
        schedule: [
          'Saturday, March 6, 2027 — Training',
          'Sunday, March 7, 2027 — Training',
          'Guest Instructor: Shuseki Shihan Manabu Murakami (8th Dan), Chief Instructor of SKIF',
          'Hosted by Shotokan Karate-Do Center, endorsed by SKIF USA',
        ],
        pricing: ['Open to all traditional karate styles', 'Adults, teens, and youth'],
        note: 'Train with a world-renowned instructor, improve your skills, and connect with fellow karateka. Register today to secure your place, and invite your students to be part of this special event.',
        quote: 'Come train with us in Houston and celebrate the true spirit of Karate-Do! OSS!',
        labels: {
          location: 'Location & Date',
          schedule: 'Schedule',
          cost: 'Who Can Attend',
          contactInfo: 'Contact: Rubén Fung',
          register: 'Register Now',
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
    isAccessibleForFree: event.offers.length > 0 && event.offers.every((offer) => offer.price === '0'),
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
