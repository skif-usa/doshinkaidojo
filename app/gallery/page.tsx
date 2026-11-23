import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import Lightbox, { type Photo } from './Lightbox';

export const metadata: Metadata = pageMetadata({
  title: 'Photo Gallery',
  description: 'Photos from Doshinkai Dojo in Cincinnati: seminar group photos with visiting SKIF instructors.',
  path: '/gallery',
});

const photos: Photo[] = [
  { src: '/seminar_kanazawa_kancho.webp', alt: 'Seminar group photo with Kanazawa Kancho', caption: 'Group photo with Kanazawa Kancho', width: 1440, height: 1080 },
  { src: '/seminar_kanazawa_kancho2.webp', alt: 'Large seminar group photo with Kanazawa Kancho', caption: 'Seminar group photo with Kanazawa Kancho', width: 1434, height: 1080 },
  { src: '/seminar_kanazawa_yuki.webp', alt: 'Seminar group photo with Yuki Kanazawa', caption: 'Group photo with Yuki Kanazawa', width: 1512, height: 1080 },
  { src: '/seminar_murakami_shihan.webp', alt: 'Seminar group photo with Murakami Shihan', caption: 'Group photo with Murakami Shihan', width: 1620, height: 1080 },
];

export default function Gallery() {
  return (
    <div className="bg-white text-ink">
      <PageHeader
        label="Gallery"
        title="Photo gallery"
        intro="Seminars and visiting instructors. Click any photo to enlarge it."
        crumbs={[]}
        path="/gallery"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Lightbox photos={photos} />
        </div>
      </section>
    </div>
  );
}
