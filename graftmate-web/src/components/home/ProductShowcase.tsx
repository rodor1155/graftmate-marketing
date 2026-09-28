import Image from "next/image";

const screens = [
  {
    src: "/social/quote.jpg",
    alt: "GraftMate quote screen showing a professional itemised quote ready to send",
    caption: "Professional quotes in minutes",
  },
  {
    src: "/social/inbox.jpg",
    alt: "GraftMate unified inbox with client messages linked to jobs",
    caption: "Clients and messages in one place",
  },
  {
    src: "/social/invoice.jpg",
    alt: "GraftMate invoice screen converted from an accepted quote",
    caption: "Quote to invoice in one tap",
  },
];

export function ProductShowcase() {
  return (
    <section className="border-y border-border-subtle bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            The app
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quote, send, and invoice from your phone
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Describe the job in plain English. Review the quote GraftMate drafts,
            tweak anything you need, then send it before you leave site. When the
            work is accepted, turn it into an invoice without retyping line items.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {screens.map((screen) => (
            <figure key={screen.src} className="group">
              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg shadow-black/30">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={390}
                  height={844}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-muted">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Placeholder: Ross to supply iOS App Store screenshots when available */}
        <div className="mt-10 rounded-xl border border-dashed border-border bg-surface-raised/50 px-6 py-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-dim">
            Coming soon
          </p>
          <p className="mt-2 text-sm text-muted">
            iPhone App Store screenshots — placeholder slot for launch assets
          </p>
        </div>
      </div>
    </section>
  );
}
