const steps = [
  {
    step: "01",
    title: "Describe the job",
    description:
      "Tell GraftMate what the customer needs — in site notes or typed text. Mention labour, materials, and anything that affects the price.",
  },
  {
    step: "02",
    title: "Review and send the quote",
    description:
      "GraftMate drafts a professional quote with line items and UK VAT. Check it, tweak anything you need, and send it from your phone.",
  },
  {
    step: "03",
    title: "Manage the job and invoice",
    description:
      "Keep the client, messages, and job in one place. When the work is accepted, turn the quote into an invoice in one tap.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border-subtle bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          From job description to sent quote in about two minutes
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-display text-5xl font-bold text-accent/20">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
