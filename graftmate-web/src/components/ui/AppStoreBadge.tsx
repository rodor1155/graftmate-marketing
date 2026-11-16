"use client";

import Image from "next/image";
import { APP_STORE_LIVE, APP_STORE_URL } from "@/lib/config";
import type { AppStoreClickPlacement } from "@/lib/appStoreLink";
import { trackAppStoreClick } from "@/lib/trackAppStoreClick";
import { BROWSER_ON_ANY_PHONE_COPY } from "@/lib/promo";

type AppStoreBadgeProps = {
  placement: AppStoreClickPlacement;
  className?: string;
  showBrowserNote?: boolean;
};

export function AppStoreBadge({
  placement,
  className = "",
  showBrowserNote = true,
}: AppStoreBadgeProps) {
  if (!APP_STORE_LIVE) {
    return null;
  }

  return (
    <div className={className}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
        aria-label="Download GraftMate on the App Store"
        onClick={() => trackAppStoreClick(placement)}
      >
        <Image
          src="/download-on-the-app-store.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </a>
      {showBrowserNote ? (
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-dim">
          {BROWSER_ON_ANY_PHONE_COPY}
        </p>
      ) : null}
    </div>
  );
}