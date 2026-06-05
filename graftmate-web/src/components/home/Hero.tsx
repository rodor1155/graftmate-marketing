import { Button } from "@/components/ui/Button";

const SIGNUP_URL = "https://graftmate.net/signup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              Built for UK sole traders &amp; small trades
            </p>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Quote by speaking.{" "}
              <span className="text-gradient-brand">Invoice in one tap.</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              GraftMate handles quotes, client comms, and invoicing so plumbers,
              electricians, and builders spend less time on admin and more time
              on the tools.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SIGNUP_URL} size="lg">
                Get started →
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-dim">
              £9.99/month for 3 months, then £29.99 · One plan · No tiers ·
              Cancel anytime
            </p>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              <TrustBadge>AI quote generation</TrustBadge>
              <TrustBadge>Unified inbox</TrustBadge>
              <TrustBadge>UK VAT ready</TrustBadge>
            </ul>
          </div>

          <QuoteMockup />
        </div>
      </div>
    </section>
  );
}

function QuoteMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-sm select-none lg:max-w-md"
      aria-hidden
    >
      <div className="rotate-2 transform transition-transform lg:rotate-3">
        <div className="rounded-[2rem] border-4 border-border bg-surface-raised p-2 shadow-2xl shadow-black/50">
          <div className="overflow-hidden rounded-[1.5rem] border border-border-subtle bg-background">
            <div className="flex items-center justify-between border-b border-border-subtle bg-surface px-4 py-2.5">
              <span className="font-display text-xs font-semibold text-foreground">
                GraftMate
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                Sent ✓
              </span>
            </div>

            <div className="space-y-3 p-4">
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-dim">
                  Quote #1042
                </p>
                <p className="mt-1 font-display text-base font-semibold text-foreground">
                  Consumer unit replacement
                </p>
                <p className="mt-0.5 text-xs text-muted">Dave Mitchell · Leeds</p>
                <div className="mt-3 flex items-end justify-between border-t border-border-subtle pt-3">
                  <span className="text-[10px] text-muted">VAT 20% included</span>
                  <p className="font-display text-2xl font-bold text-secondary">
                    £350.00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/25 text-xs">
                  ✓
                </span>
                <p className="text-xs text-muted">
                  Professional quote generated from voice note
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon />
      {children}
    </li>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="#5a7c3e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
