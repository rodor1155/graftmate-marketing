import type { ReactNode } from "react";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import type { ResourceHeroVisual } from "@/lib/resourcePageVisuals";
import { SIGNUP_URL } from "@/lib/urls";

type ResourcePageLayoutProps = {
  eyebrow?: string;
  title: string;
  intro: ReactNode;
  heroVisual?: ResourceHeroVisual;
  heroAside?: ReactNode;
  /** Free tool / calculator pages: tool first, no sales hero */
  variant?: "default" | "tool";
  tool?: ReactNode;
  primaryAction?: { label: string; href: string };
  children: ReactNode;
};

export function ResourcePageLayout({
  eyebrow,
  title,
  intro,
  heroVisual,
  heroAside,
  variant = "default",
  tool,
  primaryAction,
  children,
}: ResourcePageLayoutProps) {
  const isTool = variant === "tool";

  if (isTool) {
    const action = primaryAction ?? { label: "Calculate", href: "#calculator" };

    return (
      <div className="relative overflow-hidden">
        <section className="relative border-b border-border-subtle">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-display text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] ${eyebrow ? "mt-4" : ""}`}
            >
              {title}
            </h1>
            <div className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </div>
            {heroAside ? <div className="mt-5">{heroAside}</div> : null}
            <div className="mt-6">
              <Button href={action.href} size="lg">
                {action.label}
              </Button>
            </div>
            {tool ? <div className="mt-8">{tool}</div> : null}
          </div>
        </section>
        {children}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-14">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-display text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl ${eyebrow ? "mt-4" : ""}`}
            >
              {title}
            </h1>
            <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </div>
            {heroAside ? <div className="mt-6">{heroAside}</div> : null}
            <div className="mt-8 flex flex-col gap-4">
              <Button href={SIGNUP_URL} size="lg">
                Start free →
              </Button>
              <AppStoreBadge />
            </div>
          </div>

          {heroVisual ? (
            <div className="mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm lg:justify-self-end">
              <PhoneFrame
                src={heroVisual.src}
                alt={heroVisual.alt}
                statusBar={heroVisual.statusBar}
              />
            </div>
          ) : null}
        </div>
      </section>

      {children}
    </div>
  );
}

type ResourcePageSectionProps = {
  children: ReactNode;
  variant?: "default" | "surface" | "narrow";
  className?: string;
  id?: string;
};

export function ResourcePageSection({
  children,
  variant = "default",
  className = "",
  id,
}: ResourcePageSectionProps) {
  if (variant === "surface") {
    return (
      <section
        id={id}
        className={`border-y border-border-subtle bg-surface py-10 sm:py-12 ${className}`.trim()}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    );
  }

  const widthClass =
    variant === "narrow"
      ? "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      : "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8";

  return (
    <section id={id} className={`${widthClass} ${className}`.trim()}>
      {variant === "default" ? (
        <div className="mx-auto max-w-3xl">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
