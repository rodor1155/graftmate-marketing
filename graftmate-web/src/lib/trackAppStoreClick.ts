"use client";

import { track } from "@vercel/analytics";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  parseStoredAnalyticsConsent,
  shouldLoadAnalytics,
} from "@/lib/analyticsConsent";
import {
  APP_STORE_CLICK_EVENT,
  buildAppStoreClickEventProps,
  type AppStoreClickPlacement,
} from "@/lib/appStoreLink";

function readGrantedAnalyticsConsent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    const stored = parseStoredAnalyticsConsent(
      window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY),
    );
    return shouldLoadAnalytics(stored);
  } catch {
    return false;
  }
}

/** Sends `app_store_click` to Vercel Analytics and GA4 when analytics consent is granted. */
export function trackAppStoreClick(placement: AppStoreClickPlacement): void {
  if (!readGrantedAnalyticsConsent()) {
    return;
  }

  const pagePath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const eventProps = buildAppStoreClickEventProps(placement, pagePath);

  track(APP_STORE_CLICK_EVENT, eventProps);

  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (gtag) {
    gtag("event", APP_STORE_CLICK_EVENT, eventProps);
  }
}