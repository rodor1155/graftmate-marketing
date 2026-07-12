const faqs = [
  {
    question: "How does the voice quoting work?",
    answer:
      "Open GraftMate AI on your phone and describe the job out loud — customer, work, and price. The app turns your words into a professional quote with UK VAT, ready to send in seconds. It works hands-free from the van, so you're not typing on a small screen after a long day.",
  },
  {
    question: "What happens after the first free month?",
    answer:
      "Your subscription continues at £29.99/month. We'll remind you before it starts so there are no surprises. Every feature stays included — the price is the only thing that changes.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account whenever you like. There are no long-term contracts, cancellation fees, or awkward phone calls.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your business data is encrypted in transit and at rest, and stored on secure UK/EU infrastructure. We never sell your data, and you can export or delete it at any time.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If something isn't right, contact us within 14 days of a charge and we'll sort it out fairly. We'd rather fix the problem than argue about it.",
  },
  {
    question: "What if I need help?",
    answer:
      "Email support is included with your subscription — real humans who understand trades, not a chatbot reading a script. We aim to reply within one working day.",
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
            className="group rounded-xl border border-border bg-surface transition-colors open:border-primary/30 open:bg-surface-raised"
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
      className="h-5 w-5 shrink-0 text-secondary transition-transform group-open:rotate-180"
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
