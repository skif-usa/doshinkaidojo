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
  /** Machine dates for Event structured data. Panama is UTC-5 year round. */
  startIso: string;
  endIso: string;
  /** Ticket tiers, for schema offers. */
  offers: { name: string; price: string }[];
  currency: string;
  image: string;
  registerLink: string;
  location: { name: string; address: string[]; city: string; country: string };
  contact: { name: string; phone: string; email: string };
  content: { es: EventLangContent; en: EventLangContent };
};

/** Shared so the page markup and the JSON-LD never drift apart. */
export const upcomingEvents: UpcomingEvent[] = [];

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
    performer: {
      '@type': 'Person',
      name: 'Rubén Fung',
    },
    offers: event.offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: event.currency,
      url: event.registerLink,
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01T00:00:00-05:00',
    })),
  };
}
