"use client";

import Link from "next/link";
import { CookiePreferencesLink } from "@/components/consent/AnalyticsConsent";

export function FooterLegalLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-dim">
      <Link href="/privacy" className="hover:text-muted">
        Privacy
      </Link>
      <Link href="/terms" className="hover:text-muted">
        Terms
      </Link>
      <CookiePreferencesLink className="hover:text-muted" />
    </div>
  );
}
