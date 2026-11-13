import type { TradeSlug } from "@/lib/tradePages";

/**
 * Customer testimonial for trust sections on the homepage and trade landing pages.
 *
 * Example shape (do not ship real entries until verified):
 * {
 *   body: "<quote>",
 *   attribution: "<name>",
 *   detail: "<role or trade, town>",
 *   trades: ["plumbers"],
 * }
 */
export type Testimonial = {
  body: string;
  attribution: string;
  detail?: string;
  /** When omitted or empty, shown on every page that includes the section. */
  trades?: TradeSlug[];
};

export const testimonials: Testimonial[] = [];
