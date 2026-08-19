import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,

  // Trailing-slash URLs already 308 to the canonical form; keep that explicit
  // so the behaviour survives a host change.
  trailingSlash: false,

  images: {
    // Serve modern formats to browsers that accept them.
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Stops other sites embedding the dojo site in a frame.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Don't let browsers second-guess declared content types.
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Send the origin, not the full path, to third parties.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // The site needs none of these device APIs.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
