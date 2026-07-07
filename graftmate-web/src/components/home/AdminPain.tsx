const painPoints = [
  {
    title: "Spreadsheets at 11pm",
    description: "Catching up on quotes after a long day",
  },
  {
    title: "Receipts in the glovebox",
    description: "Shoebox of chaos come tax time",
  },
  {
    title: "Chasing invoices by text",
    description: "Awkwardly asking customers for payment",
  },
  {
    title: "Job details lost in WhatsApp",
    description: "Scrolling through hundreds of messages",
  },
  {
    title: "No professional presence",
    description: "Just a Facebook page and a mobile number",
  },
  {
    title: "Sunday admin sessions",
    description: "Paperwork eating into family time",
  },
];

export function AdminPain() {
  return (
    <section className="border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            You didn&apos;t go into the trade to do paperwork
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every tradesperson we talk to says the same things. If one of these
            hits home, you&apos;re not alone.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <li key={point.title}>
              <article className="group h-full rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/30 hover:bg-surface-raised">
                <span
                  className="mb-3 block h-0.5 w-8 rounded-full bg-secondary transition-all group-hover:w-12"
                  aria-hidden
                />
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                  &ldquo;{point.title}&rdquo;
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center font-display text-xl font-semibold text-foreground sm:text-2xl">
          GraftMate AI was built so you don&apos;t have to.
        </p>
      </div>
    </section>
  );
}
