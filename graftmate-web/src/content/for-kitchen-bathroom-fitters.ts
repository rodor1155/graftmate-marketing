import type { TradePageData } from "@/lib/tradePages";

export const forKitchenBathroomFittersPage: TradePageData = {
  slug: "kitchenBathroomFitters",
  route: "/for-kitchen-bathroom-fitters",
  linkLabel: "Kitchen & bathroom fitters",
  tradeSingular: "kitchen & bathroom fitter",
  tradePlural: "kitchen & bathroom fitters",
  title: "Kitchen & Bathroom Fitter Quote App | GraftMate",
  description:
    "Quote bathroom and kitchen installs line by line, with materials, labour and VAT, and chase sign-off by WhatsApp and email in one inbox.",
  eyebrow: "For UK kitchen & bathroom fitters",
  heroTitle: "Quote kitchen and bathroom installs line by line",
  subheading:
    "Units, tiling, plumbing allowances — describe the fit-out and send a clear quote with VAT before the customer shops elsewhere.",
  heroCopy:
    "Fit-out quotes need detail: supply vs fit, waste, electrics, and tiling. GraftMate helps you build line-item quotes on site, keep WhatsApp and email with the client, and invoice when the job is signed off.",
  painIntro:
    "Customers compare multiple fitters. A fast, professional quote helps you win the install without a late-night Word session.",
  painPoints: [
    {
      title: "Detailed quotes taking too long",
      description:
        "Draft labour, materials, and sundries from your notes and send before the customer gets two more estimates.",
    },
    {
      title: "Supplier changes mid-job",
      description:
        "Keep tile choices and unit swaps in the message thread linked to the job.",
    },
    {
      title: "Deposit and final balance tracking",
      description:
        "Accepted quote to invoice with visible payment status — less chasing on WhatsApp.",
    },
  ],
  featureIntro:
    "GraftMate supports fit-out admin: detailed quotes, unified inbox, client records, and one-tap invoicing.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe rip-out, units, worktops, tiling, and plumbing in plain English. GraftMate drafts line items you can adjust for supply-and-fit or labour-only.",
    },
    {
      icon: "inbox",
      title: "WhatsApp and email together",
      description:
        "Chase sign-off and snag lists in one inbox tied to the customer — no switching apps.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "Store measurements, quote history, and follow-ups when the customer adds a shower upgrade.",
    },
    {
      icon: "invoice",
      title: "VAT-ready invoicing",
      description:
        "Invoice from the accepted quote with the same line items and VAT breakdown.",
    },
  ],
  exampleQuote: {
    title: "Bathroom refit — supply & fit",
    client: "Priya Shah",
    location: "Reading",
    status: "Sent",
    subtotal: "£4,166.67",
    vat: "£833.33",
    vatLabel: "VAT (20%)",
    total: "£5,000.00",
    lines: [
      {
        item: "Labour",
        description:
          "Rip out, first and second fix, tile walls and floor, install suite, silicone, test.",
        qty: "1",
        unitPrice: "£2,400.00",
        total: "£2,400.00",
      },
      {
        item: "Materials",
        description: "Suite, tiles, adhesive, grout, waste, fixings, sundries.",
        qty: "1",
        unitPrice: "£1,766.67",
        total: "£1,766.67",
      },
    ],
  },
  templateSection: {
    title: "Free bathroom fitting quotation template",
    body: "A line-item quotation layout for kitchen and bathroom installs — labour, materials, and VAT. Placeholder downloads until files ship; send the same quote from GraftMate in about two minutes.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-bathroom-quote-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-bathroom-quote-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy:
    "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan — quotes, clients, jobs, and invoices.",
  faqs: [
    {
      question: "Can I split supply and fit on the quote?",
      answer:
        "Yes. Use separate line items for units, tiles, labour, and allowances so the customer sees exactly what is included.",
    },
    {
      question: "Does GraftMate replace design CAD tools?",
      answer:
        "No. GraftMate handles quoting, messages, clients, and invoicing — use your usual design and supplier tools for layouts.",
    },
    {
      question: "Can I chase sign-off over WhatsApp?",
      answer:
        "Yes. WhatsApp and email sit in one inbox linked to the client and job.",
    },
    {
      question: "Is VAT supported on fit-out quotes?",
      answer:
        "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
    },
  ],
  heroScreenshot: {
    src: "/app/clients.webp",
    alt: "GraftMate client record for a bathroom refit",
    statusBar: "#f5f3ed",
  },
};
