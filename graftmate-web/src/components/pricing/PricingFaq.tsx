const faqs = [
  {
    question: "What happens after the first free month?",
    answer:
      "Your subscription continues at the standard rate of £29.99/month. We'll remind you before your free month ends — no surprises.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account settings whenever you like. There are no long-term contracts or cancellation fees.",
  },
  {
    question: "What is the current launch offer?",
    answer:
      "First month free. Sign up now and get full access to GraftMate AI completely free for your first month, with no card required.",
  },
  {
    question: "Is VAT included?",
    answer:
      "Prices shown exclude VAT. If you're VAT registered, VAT will be added to your subscription invoice as applicable.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept card payments, Apple Pay, and Google Pay — quick and secure checkout when you're ready to subscribe.",
  },
];

export function PricingFaq() {
  return (
    <section className="border-t border-border-subtle pt-16">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Frequently asked questions
      </h2>
      <dl className="mt-8 space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-display text-base font-semibold text-foreground">
              {faq.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
