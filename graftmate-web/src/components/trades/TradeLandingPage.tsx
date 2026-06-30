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

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SIGNUP_URL} size="lg">
                Start Free
              </Button>
              <Button href="#features" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
          </div>

          <HeroCard page={page} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            The admin that slows you down
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
              Quote, message, manage, and invoice from one place
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

      {/* Testimonials - add real ones when available */}

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-2xl border border-primary/35 bg-gradient-to-b from-surface-raised to-surface p-8 text-center sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Simple pricing
          </p>
          <p className="mt-5 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            £9.99
            <span className="text-xl font-medium text-muted">/month</span>
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            {page.pricingCopy}
          </p>
          <Button href={SIGNUP_URL} size="lg" className="mt-8">
            Start Free
          </Button>
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

function HeroCard({ page }: TradeLandingPageProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-2xl shadow-black/40">
      <div className="rounded-[1.5rem] border border-border-subtle bg-background p-5">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-dim">
              GraftMate workspace
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">
              {page.tradeSingular} job admin
            </p>
          </div>
          <span className="rounded-full bg-primary/25 px-3 py-1 text-xs font-semibold text-secondary">
            Live
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {page.features.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-primary/15 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Next action
          </p>
          <p className="mt-2 text-sm text-muted">
            Send quote, keep the client thread, and invoice when the work is
            accepted.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ icon }: { icon: TradePageData["features"][number]["icon"] }) {
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
