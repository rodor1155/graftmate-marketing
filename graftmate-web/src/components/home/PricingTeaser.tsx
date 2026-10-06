import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";

const included = [
  "AI quote generation",
  "Unified inbox (email + WhatsApp)",
  "Inbound email parsing",
  "Client management",
  "Quote-to-invoice in one tap",
  "Unlimited customers & jobs",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 10.5 8 14.5 16 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingTeaser() {
  return (
    <section className="section-dark py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl overflow-hidden">
          <div className="border-b border-border-subtle px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Simple pricing
            </p>
            <p className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              <span className="font-mono tabular-nums">£29</span>
              <span className="font-mono text-3xl text-muted">.99</span>
              <span className="text-xl font-medium text-muted">/month</span>
            </p>
            <p className="mt-3 text-sm text-muted">
              First month free, then £29.99/month.
            </p>
            <p className="mt-2 text-muted">
              One plan. Every feature. No tiers, no upsells, no per-seat fees.
            </p>
          </div>

          <div className="grid gap-8 px-6 py-8 sm:grid-cols-2 sm:px-10">
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <IconChip variant="green" size="sm">
                    <CheckIcon />
                  </IconChip>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm leading-relaxed text-muted">
                Competitors charge £30–40/month and still lock features behind
                higher tiers. GraftMate gives you everything for one honest price.
              </p>
              <Button href="/pricing" size="lg" className="w-full sm:w-auto">
                See full pricing
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
