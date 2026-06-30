export type TradeSlug = "electricians" | "plumbers" | "builders";

export type TradePageData = {
  slug: TradeSlug;
  route: string;
  tradeSingular: string;
  tradePlural: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  subheading: string;
  heroCopy: string;
  painIntro: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  featureIntro: string;
  features: {
    icon: "quote" | "inbox" | "client" | "invoice";
    title: string;
    description: string;
  }[];
  pricingCopy: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const tradePages: Record<TradeSlug, TradePageData> = {
  electricians: {
    slug: "electricians",
    route: "/for-electricians",
    tradeSingular: "electrician",
    tradePlural: "electricians",
    title: "Electrician Software UK | GraftMate",
    description:
      "Electrician software for UK sparkies to quote faster, manage clients, track jobs, send VAT-ready invoices, and cut admin from one phone-friendly app now.",
    eyebrow: "Electrician software UK",
    heroTitle: "Electricians: Stop Losing Sundays to Paperwork",
    subheading:
      "GraftMate helps UK electricians quote faster, chase less, and get paid sooner.",
    heroCopy:
      "After a week of consumer unit swaps, EICR follow-ups, EV charger enquiries, and callouts squeezed between bigger jobs, the admin still waits. GraftMate keeps the paperwork moving while you are on site, in the van, or back home with five minutes spare. It is not trying to replace your judgement; it just keeps the admin tidy enough that the work you have already priced does not turn into another unpaid evening.",
    painIntro:
      "Electrical work already carries enough detail. Your software should help you stay clear, quick, and professional without turning every quote into a spreadsheet session. That matters when a customer expects a clear paper trail, a landlord wants a fast update, or you need to show exactly what was included in the price.",
    painPoints: [
      {
        title: "Quotes taking too long",
        description:
          "Type the job once, or dictate it from the van. GraftMate turns the details into a tidy quote with line items, VAT, and client information ready to send.",
      },
      {
        title: "Chasing unpaid invoices",
        description:
          "See what has been quoted, accepted, invoiced, and paid without digging through email threads or hoping you remembered to update a notebook.",
      },
      {
        title: "Losing track of jobs",
        description:
          "Keep each customer, site address, message, quote, and invoice together so small works and follow-ups do not disappear between WhatsApp and email.",
      },
    ],
    featureIntro:
      "GraftMate is built around the everyday admin jobs electricians actually repeat: quote the work, keep the conversation straight, manage the client, and get the invoice out. Use it for callouts, remedials, installation work, and repeat clients - the same workflow stays simple whether the job is small or a multi-day project.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe a board change, lighting upgrade, fault find, or remedial work in plain English. GraftMate shapes it into a professional quote you can check, adjust, and send in minutes.",
      },
      {
        icon: "inbox",
        title: "Unified inbox",
        description:
          "Email and WhatsApp sit in one place, tied to the right client and job. When a customer sends photos, access notes, or a last-minute change, the thread stays with the work.",
      },
      {
        icon: "client",
        title: "Client management",
        description:
          "Store contact details, site addresses, job history, follow-ups, and notes. When a landlord or homeowner calls back, you know what was agreed last time.",
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description:
          "Turn an accepted quote into an invoice without retyping the same work. VAT-ready PDFs help you look organised and make payment chasing simpler.",
      },
    ],
    pricingCopy:
      "One simple plan at £9.99/month. No hidden fees, no complicated tiers, and no paying extra just because you want quotes, messages, clients, and invoices in one place. Start free and see whether it earns back the monthly cost before the next weekend paperwork session.",
    faqs: [
      {
        question: "Can GraftMate help with Part P paperwork?",
        answer:
          "GraftMate helps organise quotes, messages, client details, job notes, and invoices around the work. It is not a certification tool, so you should still use your usual Part P notification and compliance process where required.",
      },
      {
        question: "Does it work for CIS jobs?",
        answer:
          "Yes. You can keep CIS-related client and job notes with the quote and invoice record so deductions and contractor details are easier to track. Always follow HMRC guidance or your accountant's advice for final CIS treatment.",
      },
      {
        question: "Can I add VAT to electrician quotes and invoices?",
        answer:
          "Yes. GraftMate is built for UK trades and supports VAT-ready quoting and invoicing, so your documents can show the right VAT clearly before you send them.",
      },
      {
        question: "Is it useful for small jobs as well as rewires?",
        answer:
          "Yes. It is designed for everyday trade admin: a quick callout, a remedial list, an EV charger quote, or a larger project can all live in the same simple workflow. You can keep the small jobs profitable by getting the quote out quickly, then still use the same client record when that customer comes back with more work.",
      },
    ],
  },
  plumbers: {
    slug: "plumbers",
    route: "/for-plumbers",
    tradeSingular: "plumber",
    tradePlural: "plumbers",
    title: "Plumber Software UK | GraftMate",
    description:
      "Plumber software for UK tradespeople to create quotes, manage WhatsApp and email, track clients, and send invoices faster from one phone-friendly app.",
    eyebrow: "Plumber software UK",
    heroTitle: "Plumbers: Run Your Plumbing Business From Your Phone",
    subheading:
      "AI-generated quotes, client management and invoicing - built for UK plumbers.",
    heroCopy:
      "A normal day can jump from a leaking tap to a bathroom quote, then into a boiler-related customer message you need to answer before the evening. GraftMate gives you a simple way to capture the details, respond professionally, and keep the job moving without sitting down to a pile of admin. It works best when you use it as the place every customer request lands, so you are not relying on memory after six stops and a merchants run.",
    painIntro:
      "Plumbing customers expect quick answers, clear prices, and updates when things change. GraftMate helps you stay on top without carrying the whole business in your head. From a ten-minute repair to a bathroom refurb quote, the goal is the same: capture the detail once, keep the customer informed, and avoid typing it all again later.",
    painPoints: [
      {
        title: "Jobs falling through the cracks",
        description:
          "Quote requests, site notes, and customer details stay connected to the right job, so the small repair you priced last week does not vanish under newer messages.",
      },
      {
        title: "Customers asking for updates",
        description:
          "Keep WhatsApp and email together, then find the conversation quickly when someone asks when you are arriving or whether parts have been ordered.",
      },
      {
        title: "Weekend admin",
        description:
          "Generate quotes and invoices as you go, instead of sacrificing Saturday morning to catch up on every message, estimate, and payment reminder.",
      },
    ],
    featureIntro:
      "GraftMate keeps the plumbing admin flow simple: get the request, quote the job, manage the customer, invoice the work, and move on. You can still edit everything before it goes out, but the boring first draft and the chasing trail are handled in one place.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe the repair, install, bathroom work, or pipework in plain English. GraftMate drafts a professional quote you can review, adjust, and send from your phone.",
      },
      {
        icon: "inbox",
        title: "Unified inbox",
        description:
          "Email and WhatsApp messages live together, linked to clients and jobs. Photos, measurements, access details, and updates stay easy to find.",
      },
      {
        icon: "client",
        title: "Client management",
        description:
          "Store customer records, addresses, quote history, job notes, and follow-ups in one place. No more scrolling back months to remember what was agreed.",
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description:
          "Convert accepted quotes into clean invoices without copying the same information again. Send the invoice promptly and keep payment status visible.",
      },
    ],
    pricingCopy:
      "GraftMate is £9.99/month for one straightforward plan. No hidden fees, no feature maze, and no need to bolt together separate tools for quotes, messages, and invoices. If it saves one evening of catch-up admin, it has already done the job.",
    faqs: [
      {
        question: "Can GraftMate handle CIS deductions for plumbing work?",
        answer:
          "GraftMate helps you keep job records, invoices, client details, and notes organised for CIS jobs. You should still apply deductions according to HMRC rules and your accountant's guidance.",
      },
      {
        question: "Is GraftMate a Gas Safe record system?",
        answer:
          "No. GraftMate is for quotes, client messages, job management, and invoicing. Use your normal Gas Safe tools and compliance process for gas safety records and certificates.",
      },
      {
        question: "Does it work for emergency callouts?",
        answer:
          "Yes. You can create a client, capture the callout details, keep the message history, and send an invoice quickly after the work is complete.",
      },
      {
        question: "Can I use it on site from my phone?",
        answer:
          "Yes. The workflow is built to be phone-friendly, so you can create quotes, check customer notes, and send invoices while you are between jobs. If a customer sends a photo, confirms access, or asks for a revised price, you can keep that update with the job instead of trying to remember it later.",
      },
    ],
  },
  builders: {
    slug: "builders",
    route: "/for-builders",
    tradeSingular: "builder",
    tradePlural: "builders",
    title: "Builder Software UK | GraftMate",
    description:
      "Builder software for UK trades to manage quotes, clients, messages, subcontractor notes, staged invoices, and payment chasing without spreadsheet admin.",
    eyebrow: "Builder software UK",
    heroTitle: "Builders: Less Admin. More Building.",
    subheading:
      "GraftMate handles the paperwork so you can focus on the work.",
    heroCopy:
      "Building work creates moving parts: customer decisions, material changes, subcontractor notes, staged payments, and quotes that need following up before they go cold. GraftMate gives you a clear place to manage the admin so you can spend more energy running the job and less time rebuilding paperwork at night. It helps you keep the commercial side visible without turning a small building business into a desk job.",
    painIntro:
      "Whether you are pricing a small extension, managing a refurb, or juggling repair work between bigger jobs, clear admin keeps the project moving and the customer confident. The sooner a quote is sent, a decision is recorded, or an invoice is issued, the less chance there is for confusion to turn into delay.",
    painPoints: [
      {
        title: "Quotes going cold",
        description:
          "Create professional quotes faster and keep follow-ups visible, so good leads do not disappear while you are busy on site.",
      },
      {
        title: "Managing multiple clients at once",
        description:
          "Keep every client, message, quote, site note, and invoice together. When two projects overlap, you can still see what each customer needs next.",
      },
      {
        title: "Chasing payments",
        description:
          "Track what has been invoiced and what is still outstanding, with clear records when deposits, staged invoices, or final balances need attention.",
      },
    ],
    featureIntro:
      "GraftMate supports the core admin around building work: fast quotes, one place for conversations, clear client records, and invoices that do not need retyping. It is deliberately simple, so you can keep a grip on clients, stages, and payments without training the whole team on heavyweight project software.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe the scope, labour, materials, and stages in plain English. GraftMate drafts a quote you can refine before sending to the client.",
      },
      {
        icon: "inbox",
        title: "Unified inbox",
        description:
          "Keep email and WhatsApp together, so photos, decisions, access details, and change requests are attached to the right client and job.",
      },
      {
        icon: "client",
        title: "Client management",
        description:
          "See customer details, project history, quotes, notes, and follow-ups in one record. It is easier to stay professional when the information is not scattered.",
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description:
          "Turn accepted work into invoices quickly, including staged or final-payment records in your job notes so the money side stays visible.",
      },
    ],
    pricingCopy:
      "Simple pricing at £9.99/month. No hidden fees, no bloated office software, and no separate charge for the features builders need to keep work moving. Start free, put a real quote through it, and see whether it makes the next payment chase easier.",
    faqs: [
      {
        question: "Can GraftMate help with CIS jobs?",
        answer:
          "Yes. You can keep CIS-related client, contractor, job, and invoice notes together. GraftMate helps with organisation, while deductions and reporting should follow HMRC guidance.",
      },
      {
        question: "Can I track subcontractor details?",
        answer:
          "You can store subcontractor notes, contact details, messages, and job context alongside the client record. That makes it easier to see who is doing what and what has been agreed.",
      },
      {
        question: "Does it support staged invoicing?",
        answer:
          "GraftMate helps you create and track invoices from accepted work, with job notes for deposits, stages, and final balances so payment progress is easier to follow. You can keep the agreed stages visible beside the client record, which makes it easier to explain what has been billed and what is still outstanding.",
      },
      {
        question: "Is it only for big building firms?",
        answer:
          "No. GraftMate is built for UK sole traders and small trade businesses that need clear admin without a heavy project-management system. If you are the person pricing the job, answering the client, organising materials, and sending the invoice, the app is designed to keep that workload manageable.",
      },
    ],
  },
};

export const tradePageLinks = [
  {
    href: tradePages.electricians.route,
    label: "Electricians",
  },
  {
    href: tradePages.plumbers.route,
    label: "Plumbers",
  },
  {
    href: tradePages.builders.route,
    label: "Builders",
  },
];
