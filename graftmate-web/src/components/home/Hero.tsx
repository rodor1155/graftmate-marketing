import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { MetricPill } from "@/components/ui/MetricPill";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { tradePages } from "@/lib/tradePages";
import { SIGNUP_URL } from "@/lib/urls";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid items-center gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-none">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI quoting for UK sole traders and small teams
            </p>

            <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-[3.25rem]">
              Turn a rough job description into a ready-to-send quote in
              seconds
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Type it, say it, or forward a WhatsApp. GraftMate builds the quote
              for you to review and send from your phone, and keeps clients,
              jobs, and invoicing in one place.
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

          <ProductVisual className="order-1 lg:order-none" />
        </div>
      </div>
    </section>
  );
}

const HERO_PHONE = {
  src: "/app/home.webp",
  alt: "GraftMate app home screen with jobs, quotes, and metrics over the van and house scene",
  statusBar: "#a9b8c0",
} as const;

function ProductVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full lg:max-w-none ${className}`.trim()}>
      {/* Desktop: painted scene with device frame */}
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
              src={HERO_PHONE.src}
              alt={HERO_PHONE.alt}
              statusBar={HERO_PHONE.statusBar}
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile: scene + phone in frame (contained — copy sits below) */}
      <div className="relative lg:hidden">
        <div className="relative aspect-[16/10] max-h-[min(52vw,220px)] overflow-hidden rounded-xl border-2 border-border shadow-[var(--card-shadow)] sm:max-h-none sm:aspect-[1280/720] sm:rounded-2xl">
          <Image
            src="/brand/mobile-home-hero-scene.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />

          <div className="absolute right-2 top-2 z-20 flex flex-col items-end gap-1 sm:right-3 sm:top-3 sm:gap-1.5">
            <MetricPill icon={<QuoteIcon />} className="scale-[0.85] sm:scale-[0.92]">
              2 quotes
            </MetricPill>
            <MetricPill icon={<MoneyIcon />} className="scale-[0.85] sm:scale-[0.92]">
              £3,540 quoted
            </MetricPill>
          </div>
        </div>

        <div className="absolute -bottom-1 left-1/2 z-30 w-[46%] max-w-[200px] -translate-x-1/2 sm:-bottom-2 sm:max-w-[220px]">
          <PhoneFrame
            src={HERO_PHONE.src}
            alt={HERO_PHONE.alt}
            statusBar={HERO_PHONE.statusBar}
            priority
          />
        </div>

        <div className="pointer-events-none absolute -bottom-0.5 right-0 z-10 w-[34%] max-w-[120px] sm:hidden">
          <Image
            src="/brand/mobile-home-hero-van.webp"
            alt=""
            width={304}
            height={140}
            className="h-auto w-full"
            aria-hidden
          />
        </div>
      </div>

      <div className="h-20 sm:h-24 lg:hidden" aria-hidden />
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
