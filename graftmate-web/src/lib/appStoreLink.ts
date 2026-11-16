import { APP_STORE_URL } from "@/lib/config";

/** Vercel Web Analytics / GA4 event name for App Store outbound clicks. */
export const APP_STORE_CLICK_EVENT = "app_store_click";

/**
 * Where on the page the visitor clicked (hero, footer, etc.).
 * `page_path` is sent separately on each event.
 */
export type AppStoreClickPlacement =
  | "hero"
  | "footer"
  | "nav"
  | "cta-banner"
  | "pricing"
  | "resource-hero"
  | "trade-pricing"
  | "commercial-cta"
  | "calculator-cta"
  | "guide-content";

export type AppStoreClickEventProps = {
  placement: AppStoreClickPlacement;
  page_path: string;
};

export function buildAppStoreClickEventProps(
  placement: AppStoreClickPlacement,
  pagePath: string,
): AppStoreClickEventProps {
  return { placement, page_path: pagePath };
}

/** True for graftmate App Store URLs (badge config URL and legacy markdown links). */
export function isAppStoreHref(href: string | undefined): boolean {
  if (!href) {
    return false;
  }
  try {
    const url = new URL(href, "https://graftmate.net");
    if (url.hostname !== "apps.apple.com") {
      return false;
    }
    const idFromConfig = new URL(APP_STORE_URL).pathname.match(/id(\d+)/)?.[1];
    const idFromHref = url.pathname.match(/id(\d+)/)?.[1];
    if (idFromHref && idFromConfig) {
      return idFromHref === idFromConfig;
    }
    return url.pathname.includes("graftmate") || Boolean(idFromHref);
  } catch {
    return false;
  }
}