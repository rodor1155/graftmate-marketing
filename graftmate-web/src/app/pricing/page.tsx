import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingOfferCopy } from "@/components/pricing/PricingOfferCopy";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { getPricingPageMetaDescription } from "@/lib/promo";

import { SIGNUP_URL } from "@/lib/urls";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing",
    description: getPricingPageMetaDescription(),
    alternates: {
      canonical: "https://graftmate.net/pricing",
    },
  };
}

const features = [
  "AI quote generation",
  "Unified inbox for your email",
  "Inbound email parsing",
  "Client management",
  "Unlimited quotes & invoices",
  "UK VAT support",
  "Email support",
  "Built for sole traders and small teams",
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
            <PricingOfferCopy />
          </div>

          <Button href={SIGNUP_URL} size="lg" className="mt-8 w-full">
            Get started →
          </Button>
          <p className="mt-4 text-center text-sm text-muted-dim">
            Cancel anytime.
          </p>
          <div className="mt-6 flex flex-col items-center">
            <AppStoreBadge />
          </div>

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
