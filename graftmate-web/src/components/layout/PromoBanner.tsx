"use client";

import { useEffect, useState } from "react";
import { isChristmasPromoActive, PROMO_STRIP_TEXT } from "@/lib/promo";
import { SIGNUP_URL } from "@/lib/urls";

const DISMISSAL_KEY = "graftmate-christmas-promo-banner-dismissed";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isChristmasPromoActive()) {
      return;
    }
    const shouldShow = localStorage.getItem(DISMISSAL_KEY) !== "true";
    const frame = window.requestAnimationFrame(() => setIsVisible(shouldShow));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function dismissBanner(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem(DISMISSAL_KEY, "true");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <a
      href={SIGNUP_URL}
      className="relative flex w-full shrink-0 items-center justify-center bg-primary px-4 py-2.5 pr-10 text-[#f5f3ed] transition-colors hover:bg-primary/95 sm:py-3 sm:pr-12"
      role="region"
      aria-label={`${PROMO_STRIP_TEXT}. Sign up.`}
    >
      <p className="text-center text-sm font-medium leading-snug sm:text-base">
        {PROMO_STRIP_TEXT}
      </p>
      <button
        type="button"
        onClick={dismissBanner}
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#f5f3ed] transition-colors hover:bg-[rgba(245,243,237,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f3ed]"
        aria-label="Dismiss Christmas offer announcement"
      >
        <span aria-hidden>×</span>
      </button>
    </a>
  );
}
