import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { MetricPill } from "@/components/ui/MetricPill";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { PricingHighlightLine } from "@/components/pricing/PricingHighlightLine";
import { tradePages } from "@/lib/tradePages";
import { SIGNUP_URL } from "@/lib/urls";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI quoting for UK sole traders and small teams
            </p>

            <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-[3.25rem]">
              Turn a rough job description into a ready-to-send quote in
              seconds
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Type it or say it. GraftMate builds the quote for you to review
              and send from your phone, and keeps clients, jobs, and invoicing
              in one place.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={SIGNUP_URL} size="lg">
                  Start free →
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  How it works
                </Button>
              </div>
              <AppStoreBadge />
            </div>

            <PricingHighlightLine className="mt-3 text-sm text-muted-dim sm:mt-4" />

            <p className="mt-3 text-sm text-muted">
              Built for{" "}
              <TradeLink href={tradePages.electricians.route}>
                electricians
              </TradeLink>
              ,{" "}
              <TradeLink href={tradePages.plumbers.route}>plumbers</TradeLink>,{" "}
              <TradeLink href={tradePages.builders.route}>builders</TradeLink>,
              and{" "}
              <TradeLink href={tradePages.heatingGas.route}>
                heating &amp; gas engineers
              </TradeLink>
              .
            </p>
          </div>

          <ProductVisual />
        </div>
      </div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full lg:max-w-none">
      {/* Desktop: large painted scene card with phone + pills */}
      <div className="relative hidden lg:block">
        <div className="relative aspect-[1280/720] overflow-hidden rounded-2xl border-2 border-border shadow-[var(--card-shadow)]">
          <Image
            src="/brand/desktop-home-hero-scene.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-center"
            aria-hidden
          />

          <div className="absolute right-4 top-4 z-20 flex flex-col items-end gap-2">
            <MetricPill icon={<QuoteIcon />}>2 quotes</MetricPill>
            <MetricPill icon={<MoneyIcon />}>£3,540.00 quoted</MetricPill>
          </div>

          <div className="absolute bottom-0 left-4 z-30 w-[42%] max-w-[240px] translate-y-[18%]">
            <PhoneFrame
              src="/app/home.webp"
              alt="GraftMate home screen showing today's briefing, jobs due, and quotes awaiting reply"
              statusBar="#a9b8c0"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile: centred phone only — no collage overlap into copy above */}
      <div className="mx-auto w-full max-w-[220px] pt-2 sm:max-w-[240px] lg:hidden">
        <PhoneFrame
          src="/app/home.webp"
          alt="GraftMate home screen showing today's briefing, jobs due, and quotes awaiting reply"
          statusBar="#a9b8c0"
          priority
        />
      </div>
    </div>
  );
}

function TradeLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-accent transition-colors hover:text-accent-bright"
    >
      {children}
    </Link>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M6 3h8l3 3v11H6V3Z" strokeLinejoin="round" />
      <path d="M14 3v3h3M8 11h6M8 14h4" strokeLinecap="round" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v8M7.5 8.5h4a1.5 1.5 0 1 1 0 3h-3" strokeLinecap="round" />
    </svg>
  );
}
