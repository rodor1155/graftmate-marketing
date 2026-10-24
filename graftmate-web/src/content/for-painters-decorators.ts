import type { TradePageData } from "@/lib/tradePages";
import { CONTENT_PRICING_COPY } from "@/lib/promo";

export const forPaintersDecoratorsPage: TradePageData = {
  slug: "paintersDecorators",
  route: "/for-painters-decorators",
  linkLabel: "Painters & decorators",
  tradeSingular: "painter & decorator",
  tradePlural: "painters & decorators",
  title: "Painter & Decorator Quote App UK | GraftMate",
  description:
    "Price rooms, exteriors and full redecorations on site and send a tidy quote with VAT. Free painting and decorating quote template included.",
  eyebrow: "For UK painters & decorators",
  heroTitle: "Send decorating quotes while you are still in the customer's hallway",
  subheading:
    "Rooms, woodwork, exteriors — describe the prep and finishes once, then review a professional quote on your phone.",
  heroCopy:
    "Decorating jobs live on detail: prep, coats, colours, and access. GraftMate helps you turn a walk-around into a clear quote with labour, materials, and VAT — then keeps messages, client details, and invoices together when the customer asks to add a ceiling.",
  painIntro:
    "Homeowners compare quotes quickly. GraftMate helps you respond with a tidy, professional document without losing your evening to formatting.",
  painPoints: [
    {
      title: "Measuring up, quoting late",
      description:
        "Draft line items from your site notes and send the quote before another decorator replies.",
    },
    {
      title: "Add-ons buried in WhatsApp",
      description:
        "Extra rooms and colour changes stay with the client record instead of scattered chats.",
    },
    {
      title: "Invoices after the dust sheets are gone",
      description:
        "Invoice on acceptance with the same line items — no retyping every room from memory.",
    },
  ],
  featureIntro:
    "Quote decorating work, manage clients, and invoice from one app — built for painters who would rather be on the brush than in Excel.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe rooms, prep, emulsion, gloss, and exterior work in plain English. GraftMate drafts a quote you can tweak before sending.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Email in one inbox linked to the job, so colour codes and access notes stay findable.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "See quote history and follow-ups when a customer wants the landing done next year.",
    },
    {
      icon: "invoice",
      title: "VAT-ready invoicing",
      description:
        "Turn accepted quotes into invoices with VAT shown clearly for domestic and commercial clients.",
    },
  ],
  exampleQuote: {
    title: "Three-bed redecoration",
    client: "Anna Hughes",
    location: "Brighton",
    status: "Sent",
    subtotal: "£1,916.67",
    vat: "£383.33",
    vatLabel: "VAT (20%)",
    total: "£2,300.00",
    lines: [
      {
        item: "Labour",
        description:
          "Prep and paint walls and ceilings (3 beds, hall, stairs), woodwork to satin, minor filling.",
        qty: "1",
        unitPrice: "£1,450.00",
        total: "£1,450.00",
      },
      {
        item: "Materials",
        description: "Emulsion, undercoat, gloss, fillers, sandpaper, dust sheets.",
        qty: "1",
        unitPrice: "£466.67",
        total: "£466.67",
      },
    ],
  },
  templateSection: {
    title: "Free painting and decorating quote template",
    body: "A UK-friendly quote layout for rooms, prep, and materials. Download Word or PDF when the files are ready — or quote the same job in GraftMate before you leave site.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-painting-quote-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-painting-quote-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy: `${CONTENT_PRICING_COPY} One straightforward plan for quotes, clients, and invoices.`,
  faqs: [
    {
      question: "Can I quote exteriors and commercial work?",
      answer:
        "Yes. Describe the scope in plain English — GraftMate drafts line items you can adjust for access, prep, and materials.",
    },
    {
      question: "Does it support VAT on decorating quotes?",
      answer:
        "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
    },
    {
      question: "Can I reuse a quote for similar jobs?",
      answer:
        "Client and quote history makes it easier to copy context and adjust figures for repeat customers.",
    },
    {
      question: "Will it replace my colour charts?",
      answer:
        "No — keep your usual supplier tools. GraftMate handles quotes, messages, clients, and invoices around the work.",
    },
  ],
  heroScreenshot: {
    src: "/app/quotes.webp",
    alt: "GraftMate quotes list for decorating jobs",
    statusBar: "#f5f3ed",
  },
};
