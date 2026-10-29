import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  compress: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // Fonts and static art never change name — cache hard.
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy paths people guess at / old links
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/seo", destination: "/services/seo-services", permanent: true },
      { source: "/web-design", destination: "/services/website-design", permanent: true },
      { source: "/web-development", destination: "/services/web-development", permanent: true },
      { source: "/digital-marketing", destination: "/services/digital-marketing", permanent: true },
      { source: "/ecommerce", destination: "/services/ecommerce", permanent: true },
      { source: "/aeo", destination: "/services/ai-search-optimization", permanent: true },
      { source: "/geo", destination: "/services/ai-search-optimization", permanent: true },
      { source: "/ai-search", destination: "/services/ai-search-optimization", permanent: true },
      { source: "/bikapur", destination: "/locations/bikapur", permanent: true },
      { source: "/ayodhya", destination: "/locations/ayodhya", permanent: true },
      { source: "/faizabad", destination: "/locations/faizabad", permanent: true },
      { source: "/lucknow", destination: "/locations/lucknow", permanent: true },
      { source: "/dubai", destination: "/locations/dubai", permanent: true },
      { source: "/london", destination: "/locations/london", permanent: true },
      { source: "/new-york", destination: "/locations/new-york", permanent: true },
      { source: "/get-quote", destination: "/contact", permanent: true },
      { source: "/quote", destination: "/contact", permanent: true },
      { source: "/free-audit", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
