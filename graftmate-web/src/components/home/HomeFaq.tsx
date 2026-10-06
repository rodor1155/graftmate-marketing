const faqs = [
  {
    question: "How does AI quoting work?",
    answer:
      "Describe the job in plain English — in site notes or typed text. GraftMate drafts a professional quote with line items and UK VAT. You review everything before it goes to the customer.",
  },
  {
    question: "What happens after the first free month?",
    answer:
      "GraftMate Pro continues at £29.99/month. We remind you before billing starts. Every feature stays included — one plan, no tiers.",
  },
  {
    question: "Can I subscribe on iPhone?",
    answer:
      "Yes. On the web you pay by card via Stripe. On iPhone you can subscribe through Apple in-app purchase (GraftMate Pro Monthly, 30-day free trial) when the iOS app is live on the App Store.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account whenever you like. No long-term contracts or cancellation fees.",
  },
];

export function HomeFaq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="text-center font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Questions?
      </h2>
      <div className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group graftmate-card transition-colors open:border-accent/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronIcon />
            </summary>
            <p className="border-t border-border-subtle px-5 pb-4 pt-3 text-sm leading-relaxed text-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
