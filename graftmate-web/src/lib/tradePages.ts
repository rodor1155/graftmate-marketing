export type TradeSlug =
  | "electricians"
  | "plumbers"
  | "builders"
  | "heatingGas";

export type ExampleQuoteLine = {
  item: string;
  description: string;
  qty: string;
  unitPrice: string;
  total: string;
};

export type ExampleQuote = {
  title: string;
  client: string;
  location: string;
  status: string;
  subtotal: string;
  vat: string;
  vatLabel: string;
  total: string;
  lines: ExampleQuoteLine[];
};

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
  exampleQuote: ExampleQuote;
  pricingCopy: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  heroScreenshot: {
    src: string;
    alt: string;
    statusBar?: string;
  };
};

export const tradePages: Record<TradeSlug, TradePageData> = {
  electricians: {
    slug: "electricians",
    route: "/for-electricians",
    tradeSingular: "electrician",
    tradePlural: "electricians",
    title: "Electrician Quoting Software UK | GraftMate",
    description:
      "Quote consumer unit swaps, EICRs, and callouts from your phone in about two minutes. AI quoting, clients, jobs, and VAT-ready invoices for UK electricians.",
    eyebrow: "For UK electricians",
    heroTitle: "Quote electrical jobs from the van in about two minutes",
    subheading:
      "Describe the work once. GraftMate drafts a professional quote you can review and send before you leave site.",
    heroCopy:
      "After a week of board changes, fault finds, and EICR follow-ups, the admin still waits. GraftMate helps you turn site notes or a quick typed message into a clear quote with line items and VAT — then keeps the client, job, and invoice in one place.",
    painIntro:
      "Electrical work already carries enough detail. Your quoting tool should help you stay clear and professional without turning every estimate into a spreadsheet session.",
    painPoints: [
      {
        title: "Quotes eating your evenings",
        description:
          "Add site notes from the van — consumer unit swap, lighting circuit, EV charger install — and send a tidy quote with VAT before you get home.",
      },
      {
        title: "Details lost between WhatsApp and email",
        description:
          "Keep customer messages, site photos, and quote history tied to the right job so you are not scrolling back through threads at 10pm.",
      },
      {
        title: "Chasing unpaid invoices",
        description:
          "See what has been quoted, accepted, invoiced, and paid without digging through notebooks or hoping you remembered to update a spreadsheet.",
      },
    ],
    featureIntro:
      "GraftMate is built around the admin electricians repeat every week: quote the work, keep the conversation straight, manage the client, and get the invoice out.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe a board change, lighting upgrade, fault find, or remedial list in plain English. GraftMate shapes it into a professional quote you can check and send in minutes.",
      },
      {
        icon: "inbox",
        title: "Client messages in one place",
        description:
          "Email and WhatsApp sit together, linked to the right client and job. Access notes, photos, and last-minute changes stay with the work.",
      },
      {
        icon: "client",
        title: "Client and job records",
        description:
          "Store contact details, site addresses, quote history, and follow-ups. When a landlord calls back, you know what was agreed last time.",
      },
      {
        icon: "invoice",
        title: "VAT-ready invoicing",
        description:
          "Turn an accepted quote into an invoice without retyping line items. Send a clean PDF and keep payment status visible.",
      },
    ],
    exampleQuote: {
      title: "Consumer unit replacement",
      client: "Dave Mitchell",
      location: "Leeds",
      status: "Sent",
      subtotal: "£291.67",
      vat: "£58.33",
      vatLabel: "VAT (20%)",
      total: "£350.00",
      lines: [
        {
          item: "Labour",
          description: "Remove existing board, install 10-way RCBO consumer unit, test and certify.",
          qty: "1",
          unitPrice: "£220.00",
          total: "£220.00",
        },
        {
          item: "Materials",
          description: "Consumer unit, RCBOs, tails, labelling, and sundries.",
          qty: "1",
          unitPrice: "£71.67",
          total: "£71.67",
        },
      ],
    },
    pricingCopy:
      "GraftMate Pro is £29.99/month with your first month free. One plan — quotes, clients, jobs, and invoices included. Pay by card on the web, or subscribe through Apple on iPhone when the app is live.",
    faqs: [
      {
        question: "Can GraftMate help with Part P paperwork?",
        answer:
          "GraftMate helps organise quotes, messages, client details, job notes, and invoices around the work. It is not a certification tool — use your usual Part P notification and compliance process where required.",
      },
      {
        question: "Does it work for CIS jobs?",
        answer:
          "Yes. Keep CIS-related client and job notes with the quote and invoice record. Always follow HMRC guidance or your accountant's advice for final CIS treatment.",
      },
      {
        question: "Can I add VAT to electrician quotes and invoices?",
        answer:
          "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades, so your documents can show VAT clearly before you send them.",
      },
      {
        question: "Is it useful for small callouts as well as rewires?",
        answer:
          "Yes. A quick fault find, a socket add, or a larger project can all use the same workflow — the point is getting a professional quote out fast.",
      },
    ],
    heroScreenshot: {
      src: "/app/quote-builder.webp",
      alt: "GraftMate quote builder showing consumer unit and EV charger line items",
      statusBar: "#f5f3ed",
    },
  },
  plumbers: {
    slug: "plumbers",
    route: "/for-plumbers",
    tradeSingular: "plumber",
    tradePlural: "plumbers",
    title: "Plumber Quoting Software UK | GraftMate",
    description:
      "Quote bathroom installs, leaks, and boiler-related plumbing from your phone in about two minutes. AI quoting, clients, jobs, and invoicing for UK plumbers.",
    eyebrow: "For UK plumbers",
    heroTitle: "Send plumbing quotes before the customer calls someone else",
    subheading:
      "From leaking taps to bathroom refurbs — describe the job and get a professional quote you can review and send from your phone.",
    heroCopy:
      "A normal day can jump from a leaking tap to a bathroom quote, then into a message you need to answer before the evening. GraftMate gives you one place to capture the details, respond professionally, and keep the job moving without a pile of weekend admin.",
    painIntro:
      "Plumbing customers expect quick answers and clear prices. GraftMate helps you stay on top without carrying the whole business in your head.",
    painPoints: [
      {
        title: "Quote requests going cold",
        description:
          "Turn a site visit or phone call into a sent quote in minutes — not after you've finished three other jobs and forgotten the measurements.",
      },
      {
        title: "Messages scattered everywhere",
        description:
          "Keep WhatsApp and email together, linked to the client. When someone asks when you are arriving, you find the thread quickly.",
      },
      {
        title: "Weekend admin",
        description:
          "Generate quotes and invoices as you go, instead of sacrificing Saturday morning to catch up on every estimate and payment reminder.",
      },
    ],
    featureIntro:
      "GraftMate keeps the plumbing admin flow simple: get the request, quote the job, manage the customer, invoice the work, and move on.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe the repair, install, bathroom work, or pipework in plain English. GraftMate drafts a professional quote you can review and send from your phone.",
      },
      {
        icon: "inbox",
        title: "Client messages in one place",
        description:
          "Email and WhatsApp messages live together, linked to clients and jobs. Photos, measurements, and access details stay easy to find.",
      },
      {
        icon: "client",
        title: "Client and job records",
        description:
          "Store customer records, addresses, quote history, and follow-ups in one place. No scrolling back months to remember what was agreed.",
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description:
          "Convert accepted quotes into clean invoices without copying the same information again. Send promptly and keep payment status visible.",
      },
    ],
    exampleQuote: {
      title: "Basin and tap replacement",
      client: "Sarah Connolly",
      location: "Manchester",
      status: "Sent",
      subtotal: "£237.50",
      vat: "£47.50",
      vatLabel: "VAT (20%)",
      total: "£285.00",
      lines: [
        {
          item: "Labour",
          description: "Isolate supply, remove old basin and taps, fit new basin suite and mixer tap, test for leaks.",
          qty: "1",
          unitPrice: "£165.00",
          total: "£165.00",
        },
        {
          item: "Materials",
          description: "Basin, mixer tap, waste, flexible connectors, and sundries.",
          qty: "1",
          unitPrice: "£72.50",
          total: "£72.50",
        },
      ],
    },
    pricingCopy:
      "GraftMate Pro is £29.99/month with your first month free. One straightforward plan — no feature maze, no bolt-on tools for quotes and invoices.",
    faqs: [
      {
        question: "Can GraftMate handle CIS deductions for plumbing work?",
        answer:
          "GraftMate helps you keep job records, invoices, client details, and notes organised for CIS jobs. Apply deductions according to HMRC rules and your accountant's guidance.",
      },
      {
        question: "Is GraftMate a Gas Safe record system?",
        answer:
          "No. GraftMate is for quotes, client messages, job management, and invoicing. Use your normal Gas Safe tools and compliance process for gas safety records and certificates.",
      },
      {
        question: "Does it work for emergency callouts?",
        answer:
          "Yes. Create a client, capture the callout details, keep the message history, and send an invoice quickly after the work is complete.",
      },
      {
        question: "Can I use it on site from my phone?",
        answer:
          "Yes. The workflow is phone-first — create quotes, check customer notes, and send invoices between jobs.",
      },
    ],
    heroScreenshot: {
      src: "/app/jobs.webp",
      alt: "GraftMate jobs list showing plumbing work in progress and upcoming jobs",
      statusBar: "#f5f3ed",
    },
  },
  builders: {
    slug: "builders",
    route: "/for-builders",
    tradeSingular: "builder",
    tradePlural: "builders",
    title: "Builder Quoting Software UK | GraftMate",
    description:
      "Quote extensions, refurbs, and repair work from your phone in about two minutes. AI quoting, clients, jobs, and invoicing for UK builders and general trades.",
    eyebrow: "For UK builders",
    heroTitle: "Quote building work without rebuilding the paperwork at night",
    subheading:
      "Describe the scope in plain English. GraftMate drafts a professional quote with labour, materials, and VAT ready to send.",
    heroCopy:
      "Building work creates moving parts: customer decisions, material changes, staged payments, and quotes that need following up before they go cold. GraftMate gives you a clear place to manage the commercial side so you can spend more energy on site.",
    painIntro:
      "Whether you are pricing a small extension, managing a refurb, or juggling repair work between bigger jobs, clear admin keeps the project moving and the customer confident.",
    painPoints: [
      {
        title: "Quotes going cold",
        description:
          "Create professional quotes faster and keep follow-ups visible, so good leads do not disappear while you are busy on site.",
      },
      {
        title: "Multiple clients at once",
        description:
          "Keep every client, message, quote, site note, and invoice together. When two projects overlap, you still see what each customer needs next.",
      },
      {
        title: "Chasing staged payments",
        description:
          "Track what has been invoiced and what is still outstanding, with clear records when deposits or final balances need attention.",
      },
    ],
    featureIntro:
      "GraftMate supports the core admin around building work: fast quotes, one place for conversations, clear client records, and invoices that do not need retyping.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe the scope, labour, materials, and stages in plain English. GraftMate drafts a quote you can refine before sending to the client.",
      },
      {
        icon: "inbox",
        title: "Client messages in one place",
        description:
          "Keep email and WhatsApp together, so photos, decisions, access details, and change requests stay with the right client and job.",
      },
      {
        icon: "client",
        title: "Client and job records",
        description:
          "See customer details, project history, quotes, notes, and follow-ups in one record.",
      },
      {
        icon: "invoice",
        title: "Invoicing",
        description:
          "Turn accepted work into invoices quickly, with job notes for deposits, stages, and final balances.",
      },
    ],
    exampleQuote: {
      title: "Garden wall rebuild",
      client: "Tom & Helen Wright",
      location: "Sheffield",
      status: "Sent",
      subtotal: "£2,000.00",
      vat: "£400.00",
      vatLabel: "VAT (20%)",
      total: "£2,400.00",
      lines: [
        {
          item: "Labour",
          description: "Dismantle damaged wall, rebuild 12m boundary wall in matching brick, repoint, and clear site.",
          qty: "1",
          unitPrice: "£1,450.00",
          total: "£1,450.00",
        },
        {
          item: "Materials",
          description: "Bricks, sand, cement, DPC, and waste disposal.",
          qty: "1",
          unitPrice: "£550.00",
          total: "£550.00",
        },
      ],
    },
    pricingCopy:
      "GraftMate Pro is £29.99/month with your first month free. No bloated office software and no separate charge for the features builders need to keep work moving.",
    faqs: [
      {
        question: "Can GraftMate help with CIS jobs?",
        answer:
          "Yes. Keep CIS-related client, contractor, job, and invoice notes together. GraftMate helps with organisation — deductions and reporting should follow HMRC guidance.",
      },
      {
        question: "Can I track subcontractor details?",
        answer:
          "Store subcontractor notes, contact details, and job context alongside the client record so you can see who is doing what.",
      },
      {
        question: "Does it support staged invoicing?",
        answer:
          "GraftMate helps you create and track invoices from accepted work, with job notes for deposits, stages, and final balances.",
      },
      {
        question: "Is it only for big building firms?",
        answer:
          "No. GraftMate is built for UK sole traders and small trade businesses — if you are the person pricing the job, answering the client, and sending the invoice, it is designed for you.",
      },
    ],
    heroScreenshot: {
      src: "/app/quotes.webp",
      alt: "GraftMate quotes list showing builder quotes from draft to accepted",
      statusBar: "#f5f3ed",
    },
  },
  heatingGas: {
    slug: "heatingGas",
    route: "/for-heating-gas-engineers",
    tradeSingular: "heating & gas engineer",
    tradePlural: "heating & gas engineers",
    title: "Heating & Gas Engineer Quoting Software UK | GraftMate",
    description:
      "Quote boiler installs, services, and heating repairs from your phone in about two minutes. AI quoting, clients, jobs, and invoicing for UK heating engineers.",
    eyebrow: "For UK heating & gas engineers",
    heroTitle: "Quote heating jobs clearly — without the paperwork backlog",
    subheading:
      "From annual services to boiler swaps and radiator installs — describe the job and send a professional quote from your phone.",
    heroCopy:
      "Heating engineers juggle service reminders, breakdown callouts, landlord enquiries, and install quotes — often while customers expect a fast reply. GraftMate helps you turn job details into a clear quote with VAT, then keeps the client record, messages, and invoice together. It is not a Gas Safe certificate system; it handles the quoting and admin around the work you already do properly.",
    painIntro:
      "Customers want a clear price and a professional paper trail. GraftMate helps you respond quickly without sitting down to rebuild the same quote from scratch every evening.",
    painPoints: [
      {
        title: "Service and install quotes piling up",
        description:
          "Turn a site visit or phone call into a sent quote in minutes — boiler service, power flush, radiator swap, or full install.",
      },
      {
        title: "Landlord and agent follow-ups",
        description:
          "Keep tenant details, access notes, and quote history with the client so repeat work and annual reminders are easier to manage.",
      },
      {
        title: "Invoices delayed after the job",
        description:
          "Convert accepted quotes to invoices on the day — no retyping labour, parts, and VAT when you are already onto the next callout.",
      },
    ],
    featureIntro:
      "GraftMate supports the commercial admin heating engineers repeat: quote the work, keep customer messages straight, manage clients and jobs, and invoice promptly.",
    features: [
      {
        icon: "quote",
        title: "AI quote generation",
        description:
          "Describe a boiler service, repair, power flush, or install in plain English. GraftMate drafts a professional quote you can review and send before you leave.",
      },
      {
        icon: "inbox",
        title: "Client messages in one place",
        description:
          "Email and WhatsApp linked to the right client. Tenant access details, boiler model photos, and agent updates stay with the job.",
      },
      {
        icon: "client",
        title: "Client and job records",
        description:
          "Store landlord, tenant, and site details with quote and job history — useful when the same property comes back next year.",
      },
      {
        icon: "invoice",
        title: "VAT-ready invoicing",
        description:
          "Turn accepted quotes into invoices without retyping line items. Keep payment status visible for services, repairs, and installs.",
      },
    ],
    exampleQuote: {
      title: "Annual boiler service",
      client: "Greenfield Lettings",
      location: "Bristol",
      status: "Sent",
      subtotal: "£79.17",
      vat: "£15.83",
      vatLabel: "VAT (20%)",
      total: "£95.00",
      lines: [
        {
          item: "Labour",
          description: "Annual boiler service — visual inspection, flue check, combustion analysis, safety devices tested.",
          qty: "1",
          unitPrice: "£65.00",
          total: "£65.00",
        },
        {
          item: "Materials",
          description: "Service consumables and replacement seals as required.",
          qty: "1",
          unitPrice: "£14.17",
          total: "£14.17",
        },
      ],
    },
    pricingCopy:
      "GraftMate Pro is £29.99/month with your first month free. One plan for quotes, clients, jobs, and invoices — subscribe on the web by card or via Apple in-app purchase on iPhone.",
    faqs: [
      {
        question: "Is GraftMate a Gas Safe record or certificate system?",
        answer:
          "No. GraftMate is for quotes, client messages, job management, and invoicing. Continue using your normal Gas Safe tools and processes for gas safety records and certificates.",
      },
      {
        question: "Can I quote boiler installs and repairs?",
        answer:
          "Yes. Describe the scope — labour, boiler, flue, controls, sundries — and GraftMate drafts a line-item quote you can adjust before sending.",
      },
      {
        question: "Does it work for landlord and letting-agent clients?",
        answer:
          "Yes. Keep landlord or agent details, tenant access notes, and property history together so repeat services and follow-up quotes are easier.",
      },
      {
        question: "Can I add VAT to heating quotes and invoices?",
        answer:
          "Yes. GraftMate supports VAT-ready quoting and invoicing for UK trades.",
      },
    ],
    heroScreenshot: {
      src: "/app/home.webp",
      alt: "GraftMate home screen with today's briefing for heating engineers",
      statusBar: "#a9b8c0",
    },
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
  {
    href: tradePages.heatingGas.route,
    label: "Heating & gas",
  },
];
