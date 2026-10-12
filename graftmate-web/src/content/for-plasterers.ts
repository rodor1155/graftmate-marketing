import type { TradePageData } from "@/lib/tradePages";
import { CONTENT_PRICING_COPY } from "@/lib/promo";

export const forPlasterersPage: TradePageData = {
  slug: "plasterers",
  route: "/for-plasterers",
  linkLabel: "Plasterers",
  tradeSingular: "plasterer",
  tradePlural: "plasterers",
  title: "Plastering Quote App UK | GraftMate",
  description:
    "Measure up, describe the job and send a plastering quote before you leave site. Free plastering quote template, invoices and client records.",
  eyebrow: "For UK plasterers",
  heroTitle: "Send plastering quotes before the mix sets",
  subheading:
    "Skims, boarding, repairs — describe the rooms and finishes, then review a professional quote on your phone.",
  heroCopy:
    "Plastering customers often want a price while you are still looking at the walls. GraftMate helps you turn measurements and notes into a clear quote with VAT, then keeps follow-ups, messages, and invoices in one place.",
  painIntro:
    "Competitive quotes need speed and clarity. GraftMate reduces the admin between measuring up and getting a yes.",
  painPoints: [
    {
      title: "Evening quoting after long days",
      description:
        "Draft line items from site notes and send the quote before you move to the next room.",
    },
    {
      title: "Small jobs, same paperwork",
      description:
        "Patch repairs and full skims use the same fast workflow — no separate tools for small work.",
    },
    {
      title: "Payment chasing",
      description:
        "See what is quoted, accepted, and invoiced without digging through notebooks.",
    },
  ],
  featureIntro:
    "Quote plastering work, manage clients, and invoice from one app — built for trades who would rather be on the trowel than in Word.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe boarding, skimming, repairs, or external render in plain English. GraftMate drafts line items you can check on site.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Access details and photos of blown plaster stay with the client record.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "Quote history and notes when landlords send you to the next flat in the block.",
    },
    {
      icon: "invoice",
      title: "VAT-ready invoicing",
      description:
        "Turn accepted quotes into invoices without retyping every room.",
    },
  ],
  exampleQuote: {
    title: "Living room skim",
    client: "Mo Khan",
    location: "Leicester",
    status: "Sent",
    subtotal: "£458.33",
    vat: "£91.67",
    vatLabel: "VAT (20%)",
    total: "£550.00",
    lines: [
      {
        item: "Labour",
        description:
          "Prep walls, PVA, two-coat skim to living room (approx. 18m²), make good.",
        qty: "1",
        unitPrice: "£320.00",
        total: "£320.00",
      },
      {
        item: "Materials",
        description: "Board, multi-finish, beads, PVA, waste disposal.",
        qty: "1",
        unitPrice: "£138.33",
        total: "£138.33",
      },
    ],
  },
  templateSection: {
    title: "Free plastering quote template",
    body: "Download a UK plastering quote layout with room descriptions, labour, materials, and VAT. Files are placeholders until published — or quote in GraftMate before you leave site.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-plastering-quote-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-plastering-quote-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy: `${CONTENT_PRICING_COPY} One plan — quotes, clients, jobs, and invoices.`,
  faqs: [
    {
      question: "Can I quote by room or m²?",
      answer:
        "Describe the job in your own words — GraftMate drafts line items you can adjust for areas, prep, and materials.",
    },
    {
      question: "Does it work for small patch repairs?",
      answer:
        "Yes. Quick jobs use the same quote-to-invoice flow as full skims.",
    },
    {
      question: "Can I add VAT?",
      answer:
        "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
    },
    {
      question: "Is it useful if I mostly work for builders?",
      answer:
        "Yes. Keep separate client records for builders and homeowners with notes for each job.",
    },
  ],
  heroScreenshot: {
    src: "/app/quote-builder.webp",
    alt: "GraftMate quote builder for plastering work",
    statusBar: "#f5f3ed",
  },
};
