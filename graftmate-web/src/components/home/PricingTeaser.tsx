import { Button } from "@/components/ui/Button";

const included = [
  "AI quote generation",
  "Unified inbox (email + WhatsApp)",
  "Inbound email parsing",
  "Client management",
  "Quote-to-invoice in one tap",
  "Unlimited customers & jobs",
];

export function PricingTeaser() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-b from-surface-raised to-surface">
          <div className="border-b border-border-subtle px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              Simple pricing
            </p>
            <p className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              £9<span className="text-3xl text-muted">.99</span>
              <span className="text-xl font-medium text-muted">/month</span>
            </p>
            <p className="mt-3 text-sm text-muted">
              For your first 3 months, then £29.99/month.
            </p>
            <p className="mt-2 text-muted">
              One plan. Every feature. No tiers, no upsells, no per-seat fees.
            </p>
          </div>

          <div className="grid gap-8 px-6 py-8 sm:grid-cols-2 sm:px-10">
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-secondary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm leading-relaxed text-muted">
                Competitors charge £30–40/month and still lock features behind
                higher tiers. GraftMate gives you everything for one honest
                price.
              </p>
              <Button href="/pricing" size="lg" className="w-full sm:w-auto">
                See full pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
