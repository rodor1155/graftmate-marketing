import { describe, expect, it } from "vitest";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  GA4_MEASUREMENT_ID,
  isValidAnalyticsConsentValue,
  parseStoredAnalyticsConsent,
  shouldLoadAnalytics,
  shouldShowConsentBanner,
} from "./analyticsConsent";
import {
  GOOGLE_ANALYTICS_CONFIG_SCRIPT,
  GOOGLE_CONSENT_DEFAULTS_SCRIPT,
} from "./googleConsentMode";

describe("analyticsConsent", () => {
  it("uses a stable storage key", () => {
    expect(ANALYTICS_CONSENT_STORAGE_KEY).toBe("graftmate_analytics_consent");
  });

  it("parses granted and denied values only", () => {
    expect(parseStoredAnalyticsConsent("granted")).toBe("granted");
    expect(parseStoredAnalyticsConsent("denied")).toBe("denied");
    expect(parseStoredAnalyticsConsent("")).toBeNull();
    expect(parseStoredAnalyticsConsent(undefined)).toBeNull();
    expect(parseStoredAnalyticsConsent("yes")).toBeNull();
  });

  it("validates consent choice literals", () => {
    expect(isValidAnalyticsConsentValue("granted")).toBe(true);
    expect(isValidAnalyticsConsentValue("denied")).toBe(true);
    expect(isValidAnalyticsConsentValue(null)).toBe(false);
  });

  it("loads analytics only when consent is granted", () => {
    expect(shouldLoadAnalytics("granted")).toBe(true);
    expect(shouldLoadAnalytics("denied")).toBe(false);
    expect(shouldLoadAnalytics(null)).toBe(false);
  });

  it("shows the banner when there is no stored choice", () => {
    expect(shouldShowConsentBanner(null)).toBe(true);
    expect(shouldShowConsentBanner("granted")).toBe(false);
    expect(shouldShowConsentBanner("denied")).toBe(false);
    expect(shouldShowConsentBanner("loading")).toBe(false);
  });
});

describe("googleConsentMode scripts", () => {
  it("defaults Google Consent Mode v2 to denied for analytics", () => {
    expect(GOOGLE_CONSENT_DEFAULTS_SCRIPT).toContain(
      "analytics_storage: 'denied'",
    );
    expect(GOOGLE_CONSENT_DEFAULTS_SCRIPT).toContain("ad_storage: 'denied'");
    expect(GOOGLE_CONSENT_DEFAULTS_SCRIPT).toContain("ad_user_data: 'denied'");
    expect(GOOGLE_CONSENT_DEFAULTS_SCRIPT).toContain(
      "ad_personalization: 'denied'",
    );
  });

  it("configures GA4 only after consent is granted in the load script", () => {
    expect(GOOGLE_ANALYTICS_CONFIG_SCRIPT).toContain("analytics_storage: 'granted'");
    expect(GOOGLE_ANALYTICS_CONFIG_SCRIPT).toContain(`'config', '${GA4_MEASUREMENT_ID}'`);
  });
});
