import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import {
  ClientIcon,
  InboxIcon,
  InvoiceIcon,
  QuoteIcon,
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
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
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

          <div className="mx-auto w-full max-w-xs sm:max-w-sm">
            <PhoneFrame
              src={page.heroScreenshot.src}
              alt={page.heroScreenshot.alt}
              statusBar={page.heroScreenshot.statusBar}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built around the problems {page.tradePlural} face every week
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{page.painIntro}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.painPoints.map((painPoint) => (
            <Card key={painPoint.title} as="article" className="p-6">
              <IconChip variant="orange" size="sm">
                <AlertIcon />
              </IconChip>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {painPoint.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {painPoint.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="border-y border-border-subtle bg-surface py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              How GraftMate helps
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quote, manage clients, and invoice from one place
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{page.featureIntro}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.features.map((feature) => (
              <Card
                key={feature.title}
                as="article"
                className="p-6 transition-colors hover:border-accent/25"
              >
                <IconChip variant="orange">
                  <FeatureIcon icon={feature.icon} />
                </IconChip>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="example-quote"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
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
        <div className="mt-10 max-w-xs sm:max-w-sm">
          <PhoneFrame
            src={page.heroScreenshot.src}
            alt={page.heroScreenshot.alt}
            statusBar={page.heroScreenshot.statusBar}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Card className="p-8 text-center sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Simple pricing
          </p>
          <p className="mt-5 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            <span className="font-mono tabular-nums">£29.99</span>
            <span className="text-xl font-medium text-muted">/month</span>
          </p>
          <p className="mt-2 text-sm font-medium text-primary">First month free</p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            {page.pricingCopy}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={SIGNUP_URL} size="lg">
              Start free
            </Button>
            <AppStoreBadge />
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
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
      return <QuoteIcon className="h-5 w-5" />;
    case "inbox":
      return <InboxIcon className="h-5 w-5" />;
    case "client":
      return <ClientIcon className="h-5 w-5" />;
    case "invoice":
      return <InvoiceIcon className="h-5 w-5" />;
  }
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M10 4v6M10 14h.01" strokeLinecap="round" />
    </svg>
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
      <path
        d="M5 7.5 10 12.5 15 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
