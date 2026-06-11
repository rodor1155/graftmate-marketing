import { SIGNUP_URL } from "@/lib/urls";

export function PromoBanner() {
  return (
    <div
      className="flex w-full shrink-0 flex-col items-center justify-center gap-3 bg-accent px-4 py-3 text-white sm:flex-row sm:gap-5 sm:py-3.5"
      role="region"
      aria-label="Launch offer"
    >
      <p className="text-center text-sm font-bold leading-snug sm:text-base">
        🚀 Launch Offer — £9.99/month for 3 months, then £29.99. Only 9 founder
        spots remaining.
      </p>
      <a
        href={SIGNUP_URL}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
      >
        Claim your spot →
      </a>
    </div>
  );
}
