import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { PricingFaq } from "@/components/pricing/PricingFaq";

import { SIGNUP_URL } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "£29.99/month with your first month free. One plan with every feature for UK sole traders.",
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 10.5 8 14.5 16 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Simple pricing
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
            One plan. Everything included.
          </h1>
        </header>

        <Card className="mt-10 p-8 sm:p-10">
          <div className="text-center">
            <span className="inline-flex rounded-full border-2 border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              First month free
            </span>
            <p className="mt-6 font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
              <span className="font-mono tabular-nums">£29.99</span>
              <span className="text-2xl font-medium text-muted sm:text-3xl">
                /month
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              GraftMate Pro — first month free, then £29.99/month. One plan,
              every feature included. Pay by card on the web, or subscribe via
              Apple in-app purchase on iPhone (30-day free trial).
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
                <IconChip variant="green" size="sm">
                  <CheckIcon />
                </IconChip>
                {feature}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-16">
          <PricingFaq />
        </div>
      </div>
    </div>
  );
}
