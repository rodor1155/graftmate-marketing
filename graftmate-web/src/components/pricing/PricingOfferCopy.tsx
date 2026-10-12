import { getPricingCardBadge, getPricingCardDetail } from "@/lib/promo";

export function PricingOfferCopy() {
  return (
    <>
      <span className="inline-flex rounded-full border-2 border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {getPricingCardBadge()}
      </span>
      <p className="mt-6 font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
        <span className="font-mono tabular-nums">£29.99</span>
        <span className="text-2xl font-medium text-muted sm:text-3xl">
          /month
        </span>
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        {getPricingCardDetail()}
      </p>
    </>
  );
}
