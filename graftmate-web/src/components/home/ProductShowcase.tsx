import Image from "next/image";

type Screen = {
  src: string;
  alt: string;
  caption: string;
  /** Colour behind the faux iOS status bar, matched to the top of the screenshot */
  statusBar: string;
};

const screens: Screen[] = [
  {
    src: "/app/home.webp",
    alt: "GraftMate home screen with today's briefing: two jobs scheduled today and two quotes awaiting a reply",
    caption: "Today's jobs and chasers at a glance",
    statusBar: "#a9b8c0",
  },
  {
    src: "/app/quote-builder.webp",
    alt: "GraftMate quote builder: site notes for a cloakroom refit turned into itemised line items totalling £1,310",
    caption: "Describe the job, get the line items",
    statusBar: "#f5f3ed",
  },
  {
    src: "/app/quotes.webp",
    alt: "GraftMate quotes list showing accepted, draft and sent quotes with GBP totals",
    caption: "Every quote, from draft to accepted",
    statusBar: "#f5f3ed",
  },
  {
    src: "/app/jobs.webp",
    alt: "GraftMate jobs list with a patio in progress and upcoming boiler swap and bathroom refit",
    caption: "Accepted quotes become booked jobs",
    statusBar: "#f5f3ed",
  },
  {
    src: "/app/clients.webp",
    alt: "GraftMate clients list with the latest message from each client",
    caption: "Clients and messages in one place",
    statusBar: "#f5f3ed",
  },
];

function StatusBar({ background }: { background: string }) {
  return (
    <div
      className="relative flex h-[7%] items-center justify-between px-[9%] text-[0.6rem] font-semibold text-neutral-900 sm:text-[0.65rem]"
      style={{ background }}
      aria-hidden="true"
    >
      <span>9:41</span>
      <span className="absolute left-1/2 top-1/2 h-[55%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-2 w-auto" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-2 w-auto" fill="none" stroke="currentColor">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" strokeOpacity="0.5" />
          <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" fill="currentColor" stroke="none" />
          <path d="M24.5 4v4" strokeLinecap="round" strokeOpacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

function PhoneFrame({ screen }: { screen: Screen }) {
  return (
    <div className="rounded-[2.25rem] bg-gradient-to-b from-neutral-700 to-neutral-900 p-[3px] shadow-2xl shadow-black/50">
      <div className="rounded-[2.1rem] bg-black p-[6px]">
        <div className="flex aspect-[390/907] flex-col overflow-hidden rounded-[1.75rem] bg-[#f5f3ed]">
          <StatusBar background={screen.statusBar} />
          <div className="relative flex-1">
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(min-width: 1024px) 210px, (min-width: 640px) 30vw, 70vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
          {screens.map((screen, i) => (
            <figure
              key={screen.src}
              className={`w-[70%] shrink-0 snap-center sm:w-auto ${
                i === 1 ? "lg:-translate-y-4" : ""
              } ${i > 2 ? "sm:hidden lg:block" : ""}`}
            >
              <PhoneFrame screen={screen} />
              <figcaption className="mt-4 text-center text-sm font-medium text-muted">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-dim">
          Real screens from the GraftMate iPhone app. Sample client data shown.
        </p>
      </div>
    </section>
  );
}
