/** localStorage key for marketing-site analytics consent (UK PECR / UK GDPR). */
export const ANALYTICS_CONSENT_STORAGE_KEY = "graftmate_analytics_consent";

export const GA4_MEASUREMENT_ID = "G-Z4N9PVFF88";

export type AnalyticsConsentChoice = "granted" | "denied";

export type StoredAnalyticsConsent = AnalyticsConsentChoice | null;

export function parseStoredAnalyticsConsent(
  raw: string | null | undefined,
): StoredAnalyticsConsent {
  if (raw === "granted" || raw === "denied") {
    return raw;
  }
  return null;
}

export function isValidAnalyticsConsentValue(
  value: unknown,
): value is AnalyticsConsentChoice {
  return value === "granted" || value === "denied";
}

export function shouldLoadAnalytics(
  consent: StoredAnalyticsConsent,
): consent is "granted" {
  return consent === "granted";
}

export function shouldShowConsentBanner(
  consent: StoredAnalyticsConsent | "loading",
): boolean {
  return consent === null;
}
