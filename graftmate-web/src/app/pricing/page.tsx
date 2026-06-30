import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PricingFaq } from "@/components/pricing/PricingFaq";

import { SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£9.99/month for your first 3 months, then £29.99/month. One plan with every feature for UK sole traders.",
  alternates: {
    canonical: "https://graftmate.net/pricing",
  },
};

const features = [
  "AI quote generation",
  "Unified inbox (email + WhatsApp)",
  "Inbound email parsing",
  "Client management",
  "Unlimited quotes & invoices",
  "UK VAT support",
  "Email support",
  "No user limits",
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Simple pricing
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
            One plan. Everything included.
          </h1>
        </header>

        <div className="mt-10 rounded-2xl border border-primary/35 bg-gradient-to-b from-surface-raised to-surface p-8 sm:p-10">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
              Launch offer
            </span>
            <p className="mt-6 font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
              £9.99
              <span className="text-2xl font-medium text-muted sm:text-3xl">
                /month
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Launch offer: First 3 months at £9.99, then £29.99/month
            </p>
          </div>

          <Button href={SIGNUP_URL} size="lg" className="mt-8 w-full">
            Get started →
          </Button>
          <p className="mt-4 text-center text-sm text-muted-dim">
            Cancel anytime.
          </p>

          <ul className="mt-10 space-y-3 border-t border-border-subtle pt-10">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-sm font-bold text-secondary"
                  aria-hidden
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <PricingFaq />
        </div>
      </div>
    </div>
  );
}
