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
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'shugyo-2026',
    title: 'Shug Yo 2026',
    date: 'August 7 & 8, 2026',
    startIso: '2026-08-07T18:00:00-05:00',
    endIso: '2026-08-08T16:00:00-05:00',
    offers: [
      { name: '1 Day', price: '25' },
      { name: '2 Days', price: '40' },
    ],
    currency: 'USD',
    image: '/shug_yo_2026.webp',
    registerLink: 'https://wa.me/5076842044',
    location: {
      name: 'Gimnasio del Colegio de La Salle',
      address: ['Avenida San Juan Bautista de La Salle', 'El Cangrejo, Ciudad de Panamá'],
      city: 'Panama City',
      country: 'PA',
    },
    contact: { name: 'Jorge J. Beleño', phone: '+507 6842-2044', email: 'jorge.belenos@gmail.com' },
    content: {
      es: {
        shortDesc:
          'Entrenamiento intenso con propósito: dos días de entrenamiento con el instructor invitado Sensei Rubén Fung, enfocados en biomecánica, precisión y comprensión técnica para practicantes de todos los niveles.',
        schedule: ['Viernes 7 de Agosto — 6:00 p.m. a 8:00 p.m.', 'Sábado 8 de Agosto — 1:00 p.m. a 4:00 p.m.'],
        pricing: ['1 Día: US$25', '2 Días: US$40'],
        note: 'Cupos limitados para garantizar una experiencia de aprendizaje dinámica y una atención adecuada para todos los participantes.',
        quote: 'Perfecciona tu técnica, fortalece tu espíritu y comparte el camino del Karate-Do.',
        labels: {
          location: 'Ubicación y Fechas',
          schedule: 'Horario de Entrenamiento',
          cost: 'Costo de Participación',
          contactInfo: 'Información y Reservaciones',
          register: 'Reservar por WhatsApp',
        },
      },
      en: {
        shortDesc:
          'Intense training with purpose: two days of training with guest instructor Sensei Rubén Fung, focused on biomechanics, precision, and technical understanding for practitioners of all levels.',
        schedule: ['Friday, August 7 — 6:00 p.m. to 8:00 p.m.', 'Saturday, August 8 — 1:00 p.m. to 4:00 p.m.'],
        pricing: ['1 Day: US$25', '2 Days: US$40'],
        note: 'Space is limited to ensure a dynamic learning experience and proper attention for all participants.',
        quote: 'Perfect your technique, strengthen your spirit, and share the path of Karate-Do.',
        labels: {
          location: 'Location & Dates',
          schedule: 'Training Schedule',
          cost: 'Cost of Participation',
          contactInfo: 'Information & Reservations',
          register: 'Reserve via WhatsApp',
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
