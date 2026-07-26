import { ImageResponse } from 'next/og';

export const alt = 'Doshinkai Dojo | Traditional Shotokan Karate in Cincinnati';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#000000',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div style={{ width: 64, height: 6, backgroundColor: '#b91c1c', marginBottom: 40 }} />
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            color: '#ffffff',
            lineHeight: 0.95,
            display: 'flex',
          }}
        >
          Doshinkai Dojo
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#b91c1c',
            marginTop: 24,
            display: 'flex',
          }}
        >
          Traditional Shotokan Karate &middot; Cincinnati, OH
        </div>
      </div>
    ),
    { ...size }
  );
}
