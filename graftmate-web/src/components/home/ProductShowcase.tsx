import { PhoneFrame } from "@/components/ui/PhoneFrame";

type Screen = {
  src: string;
  alt: string;
  caption: string;
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

export function ProductShowcase() {
  return (
    <section className="section-dark border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
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
                i > 2 ? "sm:hidden lg:block" : ""
              }`}
            >
              <PhoneFrame
                src={screen.src}
                alt={screen.alt}
                statusBar={screen.statusBar}
              />
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
