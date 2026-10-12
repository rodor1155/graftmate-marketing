import type { TradePageData } from "@/lib/tradePages";

export const forLandscapersPage: TradePageData = {
  slug: "landscapers",
  route: "/for-landscapers",
  linkLabel: "Landscapers",
  tradeSingular: "landscaper",
  tradePlural: "landscapers",
  title: "Landscaping Quote & Invoice App UK | GraftMate",
  description:
    "Quote patios, fencing and garden maintenance from your phone. Turn accepted quotes into invoices and keep every client in one place.",
  eyebrow: "For UK landscapers",
  heroTitle: "Quote patios, fencing, and maintenance without the office day",
  subheading:
    "Describe the garden job once — materials, labour, waste — and send a professional quote from your phone.",
  heroCopy:
    "Landscaping quotes mix hard landscaping, planting, and ongoing maintenance. GraftMate helps you respond quickly with clear line items and VAT, then tracks messages, clients, and invoices when the customer adds lighting or a second bed.",
  painIntro:
    "Seasonal demand means quotes need to go out fast. GraftMate keeps your paperwork moving between site visits.",
  painPoints: [
    {
      title: "Quotes stuck in the van notebook",
      description:
        "Turn site measurements into a sent quote in minutes — not after the weekend.",
    },
    {
      title: "Maintenance rounds and one-offs mixed up",
      description:
        "Separate client records for monthly cuts and project work, with history in one app.",
    },
    {
      title: "Deposits and final invoices",
      description:
        "Track accepted quotes and invoice stages without retyping materials lists.",
    },
  ],
  featureIntro:
    "Quote landscaping jobs, manage clients, and invoice from one place — whether you are laying porcelain or scheduling hedge trims.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe patios, fencing, turf, planting, or clearance in plain English. GraftMate drafts line items you can refine before sending.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Gate codes, design photos, and change requests stay linked to the job.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "See quote history when a customer wants the back garden done next spring.",
    },
    {
      icon: "invoice",
      title: "Quote to invoice",
      description:
        "Accepted quotes become invoices with the same materials and labour lines.",
    },
  ],
  exampleQuote: {
    title: "Rear patio — porcelain",
    client: "Claire & Rob Dunn",
    location: "Chester",
    status: "Sent",
    subtotal: "£3,333.33",
    vat: "£666.67",
    vatLabel: "VAT (20%)",
    total: "£4,000.00",
    lines: [
      {
        item: "Labour",
        description:
          "Excavate, sub-base, lay porcelain patio (approx. 24m²), edging, point joints.",
        qty: "1",
        unitPrice: "£2,100.00",
        total: "£2,100.00",
      },
      {
        item: "Materials",
        description: "Porcelain slabs, sub-base, cement, sand, edging, waste skip.",
        qty: "1",
        unitPrice: "£1,233.33",
        total: "£1,233.33",
      },
    ],
  },
  templateSection: {
    title: "Free landscaping invoice template",
    body: "A UK invoice layout for garden projects and maintenance — labour, materials, and VAT. Download links are placeholders until files are added; quote the same scope in GraftMate in minutes.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-landscaping-invoice-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-landscaping-invoice-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy:
    "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan for quotes, clients, jobs, and invoices.",
  faqs: [
    {
      question: "Can I quote maintenance contracts?",
      answer:
        "Yes. Use client records and quotes for recurring work, and adjust line items per visit or season.",
    },
    {
      question: "Does it handle waste and materials separately?",
      answer:
        "Line items let you split labour, materials, plant hire, and waste clearly on the quote.",
    },
    {
      question: "Can I work from my phone on site?",
      answer:
        "Yes. GraftMate is phone-first — ideal between garden visits.",
    },
    {
      question: "Is VAT supported?",
      answer:
        "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
    },
  ],
  heroScreenshot: {
    src: "/app/home.webp",
    alt: "GraftMate home briefing for landscapers",
    statusBar: "#a9b8c0",
  },
};
