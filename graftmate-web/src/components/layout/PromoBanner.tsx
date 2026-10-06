"use client";

import { useEffect, useState } from "react";
import { SIGNUP_URL } from "@/lib/urls";

const DISMISSAL_KEY = "graftmate-first-month-free-banner-dismissed";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldShow = localStorage.getItem(DISMISSAL_KEY) !== "true";
    const frame = window.requestAnimationFrame(() => setIsVisible(shouldShow));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function dismissBanner() {
    localStorage.setItem(DISMISSAL_KEY, "true");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="relative flex w-full shrink-0 flex-col items-center justify-center gap-3 bg-primary px-4 py-3 pr-12 text-[#f5f3ed] sm:flex-row sm:gap-5 sm:py-3.5 sm:pr-14"
      role="region"
      aria-label="First month free announcement"
    >
      <p className="max-w-4xl text-center text-sm font-medium leading-snug sm:text-base">
        First month free — Sign up now and get full access to GraftMate
        completely free for your first month. No card required.
      </p>
      <a
        href={SIGNUP_URL}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-[rgba(245,243,237,0.5)] px-4 py-2 text-sm font-semibold text-[#f5f3ed] transition-colors hover:bg-[#f5f3ed] hover:text-primary"
      >
        Get free access →
      </a>
      <button
        type="button"
        onClick={dismissBanner}
        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#f5f3ed] transition-colors hover:bg-[rgba(245,243,237,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5f3ed]"
        aria-label="Dismiss first month free announcement"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  );
}
