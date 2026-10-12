import {
  FAQ_AFTER_CHRISTMAS_ANSWER,
  FAQ_AFTER_CHRISTMAS_QUESTION,
} from "@/lib/promo";

const faqs = [
  {
    question: FAQ_AFTER_CHRISTMAS_QUESTION,
    answer: FAQ_AFTER_CHRISTMAS_ANSWER,
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account settings whenever you like. There are no long-term contracts or cancellation fees.",
  },
  {
    question: "Is GraftMate free right now?",
    answer:
      "Yes — free for everyone until 25 Dec 2026, with no card needed. From 26 Dec, GraftMate Pro is £29.99/month if you choose to subscribe.",
  },
  {
    question: "Is VAT included?",
    answer:
      "Prices shown exclude VAT. If you're VAT registered, VAT will be added to your subscription invoice as applicable.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "On the web, pay by card (including Apple Pay and Google Pay) via Stripe. On iPhone, subscribe through Apple in-app purchase when the iOS app is on the App Store.",
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
