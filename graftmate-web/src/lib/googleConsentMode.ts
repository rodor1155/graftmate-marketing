import { GA4_MEASUREMENT_ID } from "@/lib/analyticsConsent";

/** Inline script: Consent Mode v2 defaults before any Google tags load. */
export const GOOGLE_CONSENT_DEFAULTS_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
`;

/** Updates Consent Mode after the visitor accepts analytics. */
export const GOOGLE_CONSENT_GRANTED_UPDATE = `
gtag('consent', 'update', {
  analytics_storage: 'granted',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied'
});
`;

export const GOOGLE_ANALYTICS_CONFIG_SCRIPT = `
${GOOGLE_CONSENT_GRANTED_UPDATE}
gtag('js', new Date());
gtag('config', '${GA4_MEASUREMENT_ID}');
`;
