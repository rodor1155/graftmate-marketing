"use client";

import { useEffect, useState } from "react";
import { SIGNUP_URL } from "@/lib/urls";

const DISMISSAL_KEY = "graftmate-free-until-september-banner-dismissed";

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
      className="relative flex w-full shrink-0 flex-col items-center justify-center gap-3 bg-accent px-4 py-3 pr-12 text-white sm:flex-row sm:gap-5 sm:py-3.5 sm:pr-14"
      role="region"
      aria-label="Free access announcement"
    >
      <p className="max-w-4xl text-center text-sm font-bold leading-snug sm:text-base">
        🎉 Free until 1st September 2026 — Sign up now and get full access to
        GraftMate AI completely free until September. No card required.
      </p>
      <a
        href={SIGNUP_URL}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/70 px-4 py-2 text-sm font-bold text-white underline decoration-white/80 underline-offset-4 transition-colors hover:bg-white hover:text-accent"
      >
        Get free access →
      </a>
      <button
        type="button"
        onClick={dismissBanner}
        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Dismiss free access announcement"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  );
}
