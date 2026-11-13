import { testimonials, type Testimonial } from "@/content/testimonials";
import type { TradeSlug } from "@/lib/tradePages";

export function getTestimonialsForTrade(trade?: TradeSlug): Testimonial[] {
  if (testimonials.length === 0) {
    return [];
  }

  if (!trade) {
    return testimonials;
  }

  return testimonials.filter(
    (entry) =>
      !entry.trades ||
      entry.trades.length === 0 ||
      entry.trades.includes(trade),
  );
}
