import { Button } from "@/components/ui/Button";

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
              Graftmate handles quotes, expenses, and invoicing so plumbers,
              electricians, and builders spend less time on admin and more time
              on the tools.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/pricing" size="lg">
                Start 14-day free trial
                <ArrowIcon />
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
              <TrustBadge>Voice-first quoting</TrustBadge>
              <TrustBadge>AI receipt scanning</TrustBadge>
              <TrustBadge>UK VAT ready</TrustBadge>
            </ul>
          </div>

          <VoiceDemo />
        </div>
      </div>
    </section>
  );
}

function VoiceDemo() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/15 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-border-subtle bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-muted-dim">graftmate.app</span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/25">
              <MicIcon />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-primary/15 px-4 py-3 text-sm leading-relaxed text-foreground">
              &ldquo;Quote Dave £350 for a new consumer unit, materials
              included&rdquo;
            </div>
          </div>

          <div className="flex justify-center">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-secondary">
              Processing voice quote…
            </span>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-dim">
                  Quote #1042
                </p>
                <p className="mt-1 font-display font-semibold text-foreground">
                  Consumer unit replacement
                </p>
                <p className="text-sm text-muted">Dave Mitchell · Leeds</p>
              </div>
              <p className="font-display text-2xl font-bold text-secondary">
                £350.00
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border-subtle pt-3 text-xs text-muted">
              <span>VAT 20% included</span>
              <span className="text-emerald-400">Ready to send</span>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Convert to invoice
            <ArrowIcon />
          </button>
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

function MicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5a7c3e" strokeWidth="2" aria-hidden>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
    </svg>
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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
