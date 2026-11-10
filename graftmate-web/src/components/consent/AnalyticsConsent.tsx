"use client";

import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  GA4_MEASUREMENT_ID,
  parseStoredAnalyticsConsent,
  shouldLoadAnalytics,
  shouldShowConsentBanner,
  type AnalyticsConsentChoice,
  type StoredAnalyticsConsent,
} from "@/lib/analyticsConsent";
import { GOOGLE_ANALYTICS_CONFIG_SCRIPT } from "@/lib/googleConsentMode";

const CONSENT_CHANGED_EVENT = "graftmate-analytics-consent-changed";

type AnalyticsConsentContextValue = {
  consent: StoredAnalyticsConsent;
  openCookiePreferences: () => void;
};

const AnalyticsConsentContext =
  createContext<AnalyticsConsentContextValue | null>(null);

export function useAnalyticsConsent(): AnalyticsConsentContextValue {
  const value = useContext(AnalyticsConsentContext);
  if (!value) {
    throw new Error(
      "useAnalyticsConsent must be used within AnalyticsConsentProvider",
    );
  }
  return value;
}

function readConsentFromStorage(): StoredAnalyticsConsent {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    return parseStoredAnalyticsConsent(
      window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY),
    );
  } catch {
    return null;
  }
}

function subscribeToConsentChanges(onStoreChange: () => void): () => void {
  const onChange = () => onStoreChange();
  window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function notifyConsentChanged(): void {
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

function persistConsent(choice: AnalyticsConsentChoice): void {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice);
    notifyConsentChanged();
  } catch {
    // Storage unavailable; choice still applies for this page view.
    notifyConsentChanged();
  }
}

function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function useStoredConsent(): StoredAnalyticsConsent {
  return useSyncExternalStore(
    subscribeToConsentChanges,
    readConsentFromStorage,
    () => null,
  );
}

function applyGoogleConsentGrant(): void {
  if (typeof window === "undefined") {
    return;
  }
  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (!gtag) {
    return;
  }
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
  });
}

function CookieBanner({
  onAccept,
  onReject,
  titleId,
}: {
  onAccept: () => void;
  onReject: () => void;
  titleId: string;
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-surface-raised p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] sm:p-6"
      role="region"
      aria-labelledby={titleId}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl text-sm leading-relaxed text-muted">
          <p id={titleId} className="font-display text-base font-semibold text-foreground">
            Analytics cookies
          </p>
          <p className="mt-2">
            We use optional analytics on graftmate.net to understand how
            visitors find and use our marketing pages. Accept to allow Google
            Analytics 4 and Vercel Web Analytics. Reject to continue without
            these tools. See our{" "}
            <Link
              href="/privacy#cookies"
              className="text-secondary underline underline-offset-2"
            >
              Privacy Policy (cookies)
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={onAccept}
            className="w-full sm:w-auto"
            autoFocus
          >
            Accept analytics
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={onReject}
            className="w-full sm:w-auto"
          >
            Reject analytics
          </Button>
        </div>
      </div>
    </div>
  );
}

function GatedAnalyticsScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {GOOGLE_ANALYTICS_CONFIG_SCRIPT}
      </Script>
      <Analytics />
    </>
  );
}

export function AnalyticsConsentProvider({ children }: { children: ReactNode }) {
  const titleId = useId();
  const isClient = useIsClient();
  const consent = useStoredConsent();
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const settleChoice = useCallback((choice: AnalyticsConsentChoice) => {
    const previous = readConsentFromStorage();
    if (choice === "granted") {
      applyGoogleConsentGrant();
    }
    persistConsent(choice);
    setPreferencesOpen(false);
    if (previous !== null && previous !== choice) {
      window.location.reload();
    }
  }, []);

  const openCookiePreferences = useCallback(() => {
    setPreferencesOpen(true);
  }, []);

  const showBanner =
    isClient &&
    (preferencesOpen || shouldShowConsentBanner(consent));

  return (
    <AnalyticsConsentContext.Provider value={{ consent, openCookiePreferences }}>
      {children}
      {showBanner ? (
        <CookieBanner
          titleId={titleId}
          onAccept={() => settleChoice("granted")}
          onReject={() => settleChoice("denied")}
        />
      ) : null}
      {isClient && shouldLoadAnalytics(consent) ? (
        <GatedAnalyticsScripts />
      ) : null}
    </AnalyticsConsentContext.Provider>
  );
}

export function CookiePreferencesLink({
  className,
}: {
  className?: string;
}) {
  const { openCookiePreferences } = useAnalyticsConsent();
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={className}
    >
      Cookie settings
    </button>
  );
}
