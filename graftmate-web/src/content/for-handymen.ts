import type { TradePageData } from "@/lib/tradePages";

export const forHandymenPage: TradePageData = {
  slug: "handymen",
  route: "/for-handymen",
  linkLabel: "Handymen",
  tradeSingular: "handyman",
  tradePlural: "handymen",
  title: "Handyman App UK: Quotes & Invoices | GraftMate",
  description:
    "Lots of small jobs, lots of admin. Quote odd jobs in two minutes, invoice on the spot and keep every customer's details in one app.",
  eyebrow: "For UK handymen",
  heroTitle: "Quote odd jobs in two minutes, invoice before you leave",
  subheading:
    "Flat-pack builds, small repairs, snag lists — describe the job and send a tidy quote from your phone.",
  heroCopy:
    "Handymen juggle many small jobs and repeat customers. GraftMate helps you quote quickly, keep every customer's details in one app, and invoice on the spot instead of stacking paper notes in the van.",
  painIntro:
    "Small jobs still need professional paperwork. GraftMate keeps quotes and invoices fast so admin does not eat your billable hours.",
  painPoints: [
    {
      title: "Too many sticky notes",
      description:
        "Client records replace scraps of paper — phone numbers, addresses, and what you quoted last time.",
    },
    {
      title: "Under-quoting on composite jobs",
      description:
        "Line-item quotes make it easier to include materials, travel, and time for multi-task visits.",
    },
    {
      title: "Invoices forgotten until month end",
      description:
        "Turn accepted work into an invoice immediately with payment status visible.",
    },
  ],
  featureIntro:
    "One app for the handyman workflow: quick quotes, client lookup, messages, and invoicing between callouts.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "List the odd jobs in plain English — GraftMate drafts a professional quote you can tweak before sending.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Email and WhatsApp linked to the customer so gate codes and photos are easy to find.",
    },
    {
      icon: "client",
      title: "Customer directory",
      description:
        "Repeat landlords and homeowners stay organised with quote and job history.",
    },
    {
      icon: "invoice",
      title: "Invoice on the spot",
      description:
        "Accepted quote to invoice in one tap — ideal when the customer pays on completion.",
    },
  ],
  exampleQuote: {
    title: "Snag list — rental flat",
    client: "Oak Lettings",
    location: "Oxford",
    status: "Sent",
    subtotal: "£162.50",
    vat: "£32.50",
    vatLabel: "VAT (20%)",
    total: "£195.00",
    lines: [
      {
        item: "Labour",
        description:
          "Re-seal bath, adjust kitchen door, replace curtain pole, fill and touch-in minor wall chips.",
        qty: "1",
        unitPrice: "£130.00",
        total: "£130.00",
      },
      {
        item: "Materials",
        description: "Sealant, screws, filler, touch-in paint, fixings.",
        qty: "1",
        unitPrice: "£32.50",
        total: "£32.50",
      },
    ],
  },
  templateSection: {
    title: "Free handyman quote template",
    body: "A simple UK quote for multi-task visits — labour, materials, and VAT. Downloads are placeholders for now; quote the same list in GraftMate before you pack the van.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-handyman-quote-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-handyman-quote-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy:
    "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan — quotes, clients, jobs, and invoices.",
  faqs: [
    {
      question: "Is GraftMate overkill for small jobs?",
      answer:
        "It is built for speed — quick quotes and invoices matter most when every job is only an hour or two.",
    },
    {
      question: "Can I reuse customers easily?",
      answer:
        "Yes. Client records store contact details and history for repeat callouts.",
    },
    {
      question: "Does it work for VAT-registered handymen?",
      answer:
        "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
    },
    {
      question: "Can I use it on iPhone?",
      answer:
        "Yes. Quote and manage clients on your phone; subscribe on the web or via Apple in-app purchase.",
    },
  ],
  heroScreenshot: {
    src: "/app/home.webp",
    alt: "GraftMate home screen for handymen",
    statusBar: "#a9b8c0",
  },
};
