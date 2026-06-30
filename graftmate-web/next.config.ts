import type { NextConfig } from "next";

const supabaseHost = "*.supabase.co";
const stripeHosts = "*.stripe.com js.stripe.com";
const googleHosts =
  "*.google-analytics.com *.googletagmanager.com *.analytics.google.com";
const anthropicHost = "api.anthropic.com";
const resendHost = "api.resend.com";

const ContentSecurityPolicy = [
  // Only allow resources from same origin and explicitly whitelisted sources
  `default-src 'self'`,
  // Scripts: self + GA/GTM (loaded via next/script) + Stripe.js
  `script-src 'self' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com js.stripe.com`,
  // Styles: self + inline styles used by Next.js and Tailwind
  `style-src 'self' 'unsafe-inline'`,
  // Images: self + data URIs + Supabase storage + Stripe + GA
  `img-src 'self' data: blob: ${supabaseHost} *.stripe.com *.google-analytics.com *.googletagmanager.com`,
  // Fonts: self only (Google Fonts loaded via next/font are bundled self-hosted)
  `font-src 'self'`,
  // Connections: self + Supabase (auth + DB) + Resend + Stripe + GA + Anthropic
  `connect-src 'self' ${supabaseHost} ${resendHost} ${stripeHosts} ${googleHosts} ${anthropicHost} wss://${supabaseHost}`,
  // iframes: Stripe uses iframes for payment fields
  `frame-src 'self' js.stripe.com *.stripe.com`,
  // Worker scripts
  `worker-src 'self' blob:`,
  // Object/embed: disallow
  `object-src 'none'`,
  // Base URI restriction
  `base-uri 'self'`,
  // Form action restriction
  `form-action 'self'`,
]
  .join("; ")
  .trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Robots-Tag",
    value: "index, follow",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.graftmate.net" }],
        destination: "https://graftmate.net/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
