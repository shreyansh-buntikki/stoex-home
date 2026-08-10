import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "http", hostname: "**.amazonaws.com" },
      { protocol: "http", hostname: "stoex.in" },
      { protocol: "https", hostname: "stoex.in" },
      { protocol: "http", hostname: "**.stoex.in" },
      { protocol: "https", hostname: "**.stoex.in" },
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "**.wordpress.com" },
      { protocol: "https", hostname: "**.wpcomstaging.com" },
      { protocol: "https", hostname: "**.wp.com" },
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "i1.wp.com" },
      { protocol: "https", hostname: "i2.wp.com" },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://*.amazonaws.com http://*.amazonaws.com https://*.cartocdn.com https://*.basemaps.cartocdn.com http://stoex.in https://stoex.in https://secure.gravatar.com https://*.wordpress.com https://*.wpcomstaging.com https://*.wp.com https://www.google-analytics.com https://www.googletagmanager.com",
      "connect-src 'self' https://raw.githubusercontent.com https://apirate.digigold.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
      "worker-src blob:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
