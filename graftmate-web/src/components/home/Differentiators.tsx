const comparisons = [
  {
    us: "Quote by speaking",
    them: "Type on a tiny keyboard after a 10-hour day",
  },
  {
    us: "£29.99 — one plan, everything included",
    them: "Three tiers, features locked behind upgrades",
  },
  {
    us: "AI receipt scanning built in",
    them: "Manual data entry or a separate app",
  },
  {
    us: "Built for UK sole traders only",
    them: "Enterprise software shrunk down",
  },
];

export function Differentiators() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Why Graftmate
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Not another generic business app
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {comparisons.map((row) => (
            <div
              key={row.us}
              className="grid gap-4 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:gap-8 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 text-secondary" aria-hidden>
                  ✓
                </span>
                <p className="font-medium text-foreground">{row.us}</p>
              </div>
              <div className="flex items-start gap-3 sm:border-l sm:border-border-subtle sm:pl-8">
                <span className="mt-1 text-muted-dim" aria-hidden>
                  ✕
                </span>
                <p className="text-sm text-muted-dim">{row.them}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
