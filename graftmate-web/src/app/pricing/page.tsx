import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One plan at £29.99/month. Every feature included for UK sole traders.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="font-display text-4xl font-bold">Simple pricing</h1>
        <p className="mt-8 font-display text-6xl font-bold text-gradient-brand">
          £29.99
          <span className="text-2xl font-medium text-muted">/month</span>
        </p>
        <p className="mt-4 text-muted">
          One plan. Every feature. No tiers.
        </p>
        <Button href="/pricing" size="lg" className="mt-8">
          Start free trial
        </Button>
        <p className="mt-4 text-sm text-muted-dim">
          Full pricing page coming next.
        </p>
      </div>
    </div>
  );
}
