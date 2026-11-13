/** Set NEXT_PUBLIC_APP_STORE_LIVE=false to hide the App Store badge. */
export const APP_STORE_LIVE =
  process.env.NEXT_PUBLIC_APP_STORE_LIVE !== "false";

/** Set NEXT_PUBLIC_TEMPLATE_DOWNLOADS=true when Word/PDF trade templates are published. */
export const TEMPLATE_DOWNLOADS_ENABLED =
  process.env.NEXT_PUBLIC_TEMPLATE_DOWNLOADS === "true";

export const APP_STORE_URL =
  "https://apps.apple.com/app/id6811976725";

export const PRO_PLAN_PRICE = "£29.99";
export const PRO_PLAN_PRICE_FULL = "£29.99/month";
