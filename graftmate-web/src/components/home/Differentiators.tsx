const usps = [
  {
    title: "AI quote generation",
    description:
      "Describe the job, get a professional quote in seconds — from text or voice notes.",
  },
  {
    title: "Unified inbox",
    description:
      "Emails and WhatsApp in one place, automatically linked to clients.",
  },
  {
    title: "Inbound email parsing",
    description:
      "Clients email your GraftMate address — messages appear automatically.",
  },
  {
    title: "Client management",
    description: "Full history, follow-ups, and contact tracking in one view.",
  },
  {
    title: "Jobs & invoicing",
    description: "From quote to paid in minutes — no re-typing line items.",
  },
  {
    title: "Built for UK trades",
    description: "£GBP, UK VAT, and British English throughout.",
  },
];

export function Differentiators() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Why GraftMate
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for how UK trades actually work
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="rounded-xl border border-border bg-surface p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-secondary" aria-hidden>
                  ✓
                </span>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {usp.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {usp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
