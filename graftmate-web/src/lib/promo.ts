import { PRO_PLAN_PRICE_FULL } from "@/lib/config";

/** Inclusive end of the free-until-Christmas offer (UTC). */
export const CHRISTMAS_PROMO_END_ISO = "2026-12-25T23:59:59Z";
const CHRISTMAS_PROMO_END_MS = Date.parse(CHRISTMAS_PROMO_END_ISO);

export function isChristmasPromoActive(now: Date = new Date()): boolean {
  return now.getTime() <= CHRISTMAS_PROMO_END_MS;
}

export const PROMO_STRIP_TEXT = "Free until Christmas – no card needed";

export const PRICING_SUBLINE_CHRISTMAS =
  "Free until Christmas – no card needed. From 26 Dec, £29.99/month. One plan, cancel anytime.";

export const PRICING_SUBLINE_STANDARD = `${PRO_PLAN_PRICE_FULL}. One plan, cancel anytime.`;

export function getPricingSubline(now: Date = new Date()): string {
  return isChristmasPromoActive(now)
    ? PRICING_SUBLINE_CHRISTMAS
    : PRICING_SUBLINE_STANDARD;
}

export const PRICING_CARD_BADGE_CHRISTMAS = "Free until Christmas";
export const PRICING_CARD_BADGE_STANDARD = "GraftMate Pro";

export function getPricingCardBadge(now: Date = new Date()): string {
  return isChristmasPromoActive(now)
    ? PRICING_CARD_BADGE_CHRISTMAS
    : PRICING_CARD_BADGE_STANDARD;
}

export const PRICING_CARD_DETAIL_CHRISTMAS =
  "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan, every feature included. Pay by card on the web, or subscribe via Apple in-app purchase on iPhone.";

export const PRICING_CARD_DETAIL_STANDARD =
  "GraftMate Pro — £29.99/month. One plan, every feature included. Pay by card on the web, or subscribe via Apple in-app purchase on iPhone.";

export function getPricingCardDetail(now: Date = new Date()): string {
  return isChristmasPromoActive(now)
    ? PRICING_CARD_DETAIL_CHRISTMAS
    : PRICING_CARD_DETAIL_STANDARD;
}

const SITE_DESCRIPTION_LEAD =
  "Describe the job, send a professional quote in about two minutes, then invoice in one tap. AI quoting for UK trades.";

export function getSiteDescription(now: Date = new Date()): string {
  if (isChristmasPromoActive(now)) {
    return `${SITE_DESCRIPTION_LEAD} Free until Christmas – no card needed. From 26 Dec, £29.99/month.`;
  }
  return `${SITE_DESCRIPTION_LEAD} ${PRO_PLAN_PRICE_FULL}. One plan, cancel anytime.`;
}

export function getPricingPageMetaDescription(now: Date = new Date()): string {
  if (isChristmasPromoActive(now)) {
    return "Free until Christmas – no card needed. One plan with every feature for UK sole traders. From 26 Dec, £29.99/month.";
  }
  return "£29.99/month. One plan with every feature for UK sole traders. Cancel anytime.";
}

/** Shared pricing paragraph for trade and content pages (dateless, always accurate). */
export const CONTENT_PRICING_COPY =
  "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan, cancel anytime. Pay by card on the web, or subscribe through Apple in-app purchase on iPhone.";

export const FAQ_AFTER_CHRISTMAS_QUESTION = "What happens after Christmas?";

export const FAQ_AFTER_CHRISTMAS_ANSWER =
  "From 26 Dec 2026, GraftMate Pro is £29.99/month. Subscribe with Apple in-app purchase on iPhone or by card on the web. You won't be charged unless you choose to subscribe — free access until 25 Dec does not require a card.";
