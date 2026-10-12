import type { TradePageData } from "@/lib/tradePages";

export const forRoofersPage: TradePageData = {
  slug: "roofers",
  route: "/for-roofers",
  linkLabel: "Roofers",
  tradeSingular: "roofer",
  tradePlural: "roofers",
  title: "Roofing Quote & Invoice App UK | GraftMate",
  description:
    "Quote roof repairs and re-roofs from your phone in about two minutes. Free roofing invoice template, AI quoting, clients and VAT-ready invoices.",
  eyebrow: "For UK roofers",
  heroTitle: "Quote roof repairs and re-roofs before the scaffold comes down",
  subheading:
    "From slipped tiles to full re-roofs — describe the job once and send a professional quote with labour, materials, and VAT.",
  heroCopy:
    "Roofing quotes need clear scope, access notes, and weather contingencies — often while you are on the ladder or juggling three callbacks. GraftMate turns site notes into a tidy quote you can review and send from your phone, then keeps the client, messages, and invoice in one place.",
  painIntro:
    "Customers want a fast, confident price. GraftMate helps you look professional without rebuilding the same quote in Word every evening.",
  painPoints: [
    {
      title: "Quotes waiting until Sunday",
      description:
        "Capture measurements and scope on site, draft line items with AI, and send the quote before you move to the next job.",
    },
    {
      title: "Scope changes lost in texts",
      description:
        "Keep WhatsApp and email with the client record so chimney stack extras and scaffold access notes do not disappear.",
    },
    {
      title: "Invoices after the van is loaded",
      description:
        "Turn accepted quotes into VAT-ready invoices in one tap instead of retyping labour and materials at home.",
    },
  ],
  featureIntro:
    "GraftMate covers the admin roofers repeat: quote clearly, chase sign-off, manage the client, and invoice without a second spreadsheet.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe repairs, felting, re-tiles, flat roofs, or leadwork in plain English. GraftMate shapes it into line items you can check before sending.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Email and WhatsApp linked to the job — photos of ridge tiles, insurance docs, and access details stay easy to find.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "Store addresses, quote history, and follow-ups. When a landlord calls about the same block, you know what was priced last time.",
    },
    {
      icon: "invoice",
      title: "VAT-ready invoicing",
      description:
        "Convert accepted quotes to clean PDF invoices with payment status visible — handy for staged deposits on bigger re-roofs.",
    },
  ],
  exampleQuote: {
    title: "Re-roof — semi-detached",
    client: "James Porter",
    location: "Norwich",
    status: "Sent",
    subtotal: "£4,583.33",
    vat: "£916.67",
    vatLabel: "VAT (20%)",
    total: "£5,500.00",
    lines: [
      {
        item: "Labour",
        description:
          "Strip existing tiles, renew underfelt and battens, re-tile main roof, ridge and verge, dispose of waste.",
        qty: "1",
        unitPrice: "£3,200.00",
        total: "£3,200.00",
      },
      {
        item: "Materials",
        description: "Concrete tiles, underfelt, battens, ridge, fixings, scaffold allowance.",
        qty: "1",
        unitPrice: "£1,383.33",
        total: "£1,383.33",
      },
    ],
  },
  templateSection: {
    title: "Free roofing invoice template (UK)",
    body: "Download a simple roofing invoice layout with labour, materials, and VAT — ideal if you still send PDFs from Word. Or skip the template and quote the same job in GraftMate in about two minutes.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-roofing-invoice-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-roofing-invoice-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy:
    "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month. One plan — quotes, clients, jobs, and invoices included.",
  faqs: [
    {
      question: "Can GraftMate handle staged payments on re-roofs?",
      answer:
        "Yes. Use job notes and invoices to track deposits and final balances. Always agree payment stages with your customer in writing.",
    },
    {
      question: "Does it work for CIS roofing jobs?",
      answer:
        "GraftMate helps you keep client, job, and invoice records organised for CIS work. Follow HMRC guidance or your accountant for deductions.",
    },
    {
      question: "Can I add photos from site?",
      answer:
        "Keep message threads and notes with the client so you can refer back to photos and scope details when the customer replies.",
    },
    {
      question: "Is it only for big roofing firms?",
      answer:
        "No. GraftMate is built for UK sole traders and small teams — if you price the job and send the invoice, it is designed for you.",
    },
  ],
  heroScreenshot: {
    src: "/app/quote-builder.webp",
    alt: "GraftMate quote builder showing roofing line items",
    statusBar: "#f5f3ed",
  },
};
