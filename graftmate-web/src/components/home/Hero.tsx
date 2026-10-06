import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { MetricPill } from "@/components/ui/MetricPill";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { PRO_PLAN_PRICE_FULL } from "@/lib/config";
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
              AI quoting for UK sole traders
            </p>

            <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-[3.25rem]">
              Describe the job. Send a professional quote in about two minutes.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              GraftMate turns site notes or a quick typed message into a quote
              you can review and send from your phone — then keeps clients, jobs,
              and invoicing in one place.
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

            <p className="mt-3 text-sm text-muted-dim sm:mt-4">
              {PRO_PLAN_PRICE_FULL} · First month free · Cancel anytime
            </p>

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
    <div className="relative mx-auto w-full max-w-md pb-28 sm:pb-32 lg:max-w-lg lg:pb-36">
      <div className="relative overflow-hidden rounded-lg border-2 border-border shadow-[var(--card-shadow)]">
        <Image
          src="/brand/desktop-home-hero-scene.webp"
          alt=""
          width={1280}
          height={720}
          priority
          className="hidden h-auto w-full sm:block"
          aria-hidden
        />
        <Image
          src="/brand/mobile-home-hero-scene.webp"
          alt=""
          width={780}
          height={420}
          priority
          className="h-auto w-full sm:hidden"
          aria-hidden
        />

        <div className="absolute right-3 top-3 hidden flex-col gap-2 sm:flex">
          <MetricPill icon={<QuoteIcon />}>2 quotes</MetricPill>
          <MetricPill icon={<MoneyIcon />}>£3,540.00 quoted</MetricPill>
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 w-[58%] max-w-[220px] -translate-x-1/2 sm:-bottom-8 sm:w-[52%] sm:max-w-[240px]">
        <PhoneFrame
          src="/app/home.webp"
          alt="GraftMate home screen showing today's briefing, jobs due, and quotes awaiting reply"
          statusBar="#a9b8c0"
          priority
        />
      </div>

      <div className="absolute -right-1 top-[42%] sm:hidden">
        <MetricPill icon={<QuoteIcon />} className="scale-90">
          2 quotes
        </MetricPill>
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
