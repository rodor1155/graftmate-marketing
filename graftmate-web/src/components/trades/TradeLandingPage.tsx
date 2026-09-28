import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import {
  ClientIcon,
  InboxIcon,
  InvoiceIcon,
  VoiceIcon,
} from "@/components/features/FeatureIcons";
import { SIGNUP_URL } from "@/lib/urls";
import type { TradePageData } from "@/lib/tradePages";

type TradeLandingPageProps = {
  page: TradePageData;
};

export function TradeLandingPage({ page }: TradeLandingPageProps) {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-primary/15 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-8 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
              {page.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {page.subheading}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {page.heroCopy}
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={SIGNUP_URL} size="lg">
                  Start free
                </Button>
                <Button href="#example-quote" variant="secondary" size="lg">
                  See example quote
                </Button>
              </div>
              <AppStoreBadge />
            </div>
          </div>

          <ExampleQuoteCard quote={page.exampleQuote} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built around the problems {page.tradePlural} face every week
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{page.painIntro}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.painPoints.map((painPoint) => (
            <article
              key={painPoint.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-lg font-bold text-accent-bright"
                aria-hidden
              >
                !
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {painPoint.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {painPoint.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="border-y border-border-subtle bg-surface-raised py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              How GraftMate helps
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quote, manage clients, and invoice from one place
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {page.featureIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-secondary">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="example-quote"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Example quote
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What a {page.tradeSingular} quote looks like in GraftMate
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Describe the job in plain English. GraftMate drafts line items, VAT,
            and totals — you review everything before it goes to the customer.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <ExampleQuoteCard quote={page.exampleQuote} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-2xl border border-primary/35 bg-gradient-to-b from-surface-raised to-surface p-8 text-center sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Simple pricing
          </p>
          <p className="mt-5 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            £29.99
            <span className="text-xl font-medium text-muted">/month</span>
          </p>
          <p className="mt-2 text-sm font-medium text-secondary">
            First month free
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            {page.pricingCopy}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={SIGNUP_URL} size="lg">
              Start free
            </Button>
            <AppStoreBadge />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions from UK {page.tradePlural}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {page.faqs.map((faq) => (
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
    </div>
  );
}

function ExampleQuoteCard({ quote }: { quote: TradePageData["exampleQuote"] }) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-surface p-4 shadow-2xl shadow-black/40 sm:p-5">
      <div className="rounded-[1.25rem] border border-border-subtle bg-background p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 border-b border-border-subtle pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-dim">
              Quote preview
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">
              {quote.title}
            </p>
            <p className="mt-0.5 text-xs text-muted">
              {quote.client} · {quote.location}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-accent/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-bright">
            {quote.status}
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {quote.lines.map((line) => (
            <div
              key={line.item}
              className="rounded-lg border border-border-subtle bg-surface px-3 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold text-foreground">
                  {line.item}
                </p>
                <p className="shrink-0 text-xs font-semibold text-foreground">
                  {line.total}
                </p>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">
                {line.description}
              </p>
              <p className="mt-1 text-[10px] text-muted-dim">
                {line.qty} × {line.unitPrice}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-1 border-t border-border-subtle pt-4 text-xs">
          <div className="flex justify-between text-muted">
            <span>Subtotal</span>
            <span>{quote.subtotal}</span>
          </div>
          <div className="flex justify-between text-muted">
            <span>{quote.vatLabel}</span>
            <span>{quote.vat}</span>
          </div>
          <div className="flex justify-between pt-2 font-display text-base font-bold text-secondary">
            <span>Total</span>
            <span>{quote.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({
  icon,
}: {
  icon: TradePageData["features"][number]["icon"];
}) {
  switch (icon) {
    case "quote":
      return <VoiceIcon />;
    case "inbox":
      return <InboxIcon />;
    case "client":
      return <ClientIcon />;
    case "invoice":
      return <InvoiceIcon />;
  }
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
      <path
        d="M5 7.5 10 12.5 15 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
