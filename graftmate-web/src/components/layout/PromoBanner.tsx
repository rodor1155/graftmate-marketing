export function PromoBanner() {
  return (
    <div
      className="flex h-10 min-h-[40px] shrink-0 items-center justify-center gap-2 bg-primary px-3 text-white sm:gap-2.5 sm:px-4"
      role="region"
      aria-label="Launch offer"
    >
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
        <SparkIcon />
        Limited time
      </span>
      <p className="text-center text-[11px] leading-tight sm:text-xs sm:leading-none">
        <span className="hidden sm:inline">
          Launch offer: £9.99/month for your first 3 months, then £29.99/month.
          No commitment.
        </span>
        <span className="sm:hidden">
          £9.99/mo for 3 months, then £29.99 — no commitment
        </span>
      </p>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 0 7 4.5 12 6 7 7.5 6 12 5 7.5 0 6 5 4.5 6 0Z" />
    </svg>
  );
}
