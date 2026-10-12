import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

/**
 * NOTE on Content-Security-Policy: intentionally not set here. The site
 * embeds an OpenStreetMap iframe, Google Fonts, and Next.js runtime inline
 * assets; a static CSP would risk breaking the site and needs runtime
 * verification (nonce-based middleware) before it can ship safely.
 * Follow-up: verify in staging, then add a nonce-based CSP.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // PNG brand assets in /public/images; keep default optimization.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
