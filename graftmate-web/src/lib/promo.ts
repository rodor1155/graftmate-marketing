import { PRO_PLAN_PRICE_FULL } from "@/lib/config";

export const PROMO_STRIP_TEXT = "14-day free trial – no card needed";

export const PRICING_SUBLINE = `14-day free trial from sign-up – no card needed. Then ${PRO_PLAN_PRICE_FULL}. One plan, cancel anytime.`;

export function getPricingSubline(): string {
  return PRICING_SUBLINE;
}

export const PRICING_CARD_BADGE = "14-day free trial";

export function getPricingCardBadge(): string {
  return PRICING_CARD_BADGE;
}

export const PRICING_CARD_DETAIL =
  "Try GraftMate free for 14 days from sign-up — no card needed. After that, GraftMate Pro is £29.99/month. One plan, every feature included. Pay by card on the web, or subscribe via Apple in-app purchase on iPhone.";

export function getPricingCardDetail(): string {
  return PRICING_CARD_DETAIL;
}

const SITE_DESCRIPTION_LEAD =
  "Describe the job, send a professional quote in about two minutes, then invoice in one tap. AI quoting for UK trades.";

export function getSiteDescription(): string {
  return `${SITE_DESCRIPTION_LEAD} 14-day free trial – no card needed. Then ${PRO_PLAN_PRICE_FULL}. One plan, cancel anytime.`;
}

export function getPricingPageMetaDescription(): string {
  return "14-day free trial – no card needed. One plan with every feature, built for sole traders and small teams. Then £29.99/month. Cancel anytime.";
}

/** Shared pricing paragraph for trade and content pages. */
export const CONTENT_PRICING_COPY =
  "Try GraftMate free for 14 days from sign-up — no card needed. After that, GraftMate Pro is £29.99/month. One plan, cancel anytime. Pay by card on the web, or subscribe through Apple in-app purchase on iPhone.";

export const FAQ_AFTER_TRIAL_QUESTION = "What happens after 14 days?";

export const FAQ_AFTER_TRIAL_ANSWER =
  "After your 14-day trial you can subscribe to GraftMate Pro at £29.99/month or stop using the service. We don't take a card during the trial — you're only charged if you choose to subscribe.";

export const BROWSER_ON_ANY_PHONE_COPY =
  "No iPhone? GraftMate works in the browser on any phone, including Android.";
