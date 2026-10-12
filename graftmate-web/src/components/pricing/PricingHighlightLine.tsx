import { getPricingSubline } from "@/lib/promo";

type PricingHighlightLineProps = {
  className?: string;
};

export function PricingHighlightLine({ className }: PricingHighlightLineProps) {
  return <p className={className}>{getPricingSubline()}</p>;
}
