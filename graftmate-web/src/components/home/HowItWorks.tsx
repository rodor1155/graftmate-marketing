const steps = [
  {
    step: "01",
    title: "Sign up in two minutes",
    description:
      "Pick your trade, add your details, and you're in. No spreadsheets to import, no training videos required.",
  },
  {
    step: "02",
    title: "Quote from the van by voice",
    description:
      "Say the job out loud. GraftMate AI builds a professional quote with VAT — ready to email before you've left site.",
  },
  {
    step: "03",
    title: "Stay on top of every client",
    description:
      "Unified inbox brings email and WhatsApp into one place. AI-powered quote generation from text or voice notes — then invoice and get paid.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border-subtle bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-secondary">
          How it works
        </p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Up and running before your brew goes cold
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-display text-5xl font-bold text-primary/25">
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
