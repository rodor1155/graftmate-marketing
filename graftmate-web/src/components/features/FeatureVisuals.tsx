export function VoiceQuoteVisual() {
  return (
    <div className="rounded-xl border border-border bg-background p-5 shadow-lg shadow-black/20">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/25 text-secondary">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary" />
          </span>
        </span>
        <div className="rounded-2xl rounded-tl-sm bg-primary/15 px-4 py-3 text-sm text-foreground">
          &ldquo;Quote Mrs Patel £420 for bathroom rewire, labour and materials&rdquo;
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-border-subtle bg-surface p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-dim">
          Quote ready
        </p>
        <p className="mt-1 font-display font-semibold text-foreground">
          Bathroom rewire — full quote
        </p>
        <p className="mt-2 font-display text-xl font-bold text-secondary">£420.00</p>
        <p className="mt-1 text-xs text-muted">VAT 20% · PDF ready to send</p>
      </div>
    </div>
  );
}

export function ReceiptVisual() {
  return (
    <div className="space-y-3 rounded-xl border border-border bg-background p-5">
      <div className="flex items-center justify-between rounded-lg border border-dashed border-border px-4 py-6 text-center text-xs text-muted-dim">
        Receipt photo
      </div>
      <div className="rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm">
        <div className="flex justify-between text-foreground">
          <span className="font-medium">Screwfix</span>
          <span className="font-semibold">£47.82</span>
        </div>
        <p className="mt-2 text-xs text-muted">12 May 2026 · Materials · VAT 20%</p>
        <p className="mt-2 text-xs text-secondary">Auto-categorised as expense</p>
      </div>
    </div>
  );
}

export function InvoiceVisual() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5">
      <div className="rounded-lg border border-border bg-surface p-3">
        <p className="text-xs text-muted-dim">Quote #1088</p>
        <p className="font-medium text-foreground">Boiler service</p>
        <p className="text-sm text-secondary">Accepted</p>
      </div>
      <p className="text-center text-2xl text-muted-dim" aria-hidden>
        ↓
      </p>
      <div className="rounded-lg border border-primary/35 bg-primary/10 p-3">
        <p className="text-xs text-muted-dim">Invoice #1088</p>
        <p className="font-medium text-foreground">Boiler service</p>
        <p className="text-sm font-semibold text-foreground">£185.00 due</p>
      </div>
    </div>
  );
}

export function ExpenseVisual() {
  const rows = [
    { label: "Materials", amount: "£1,240", vat: "£248" },
    { label: "Fuel", amount: "£186", vat: "£37" },
    { label: "Tools", amount: "£95", vat: "£19" },
  ];
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-secondary">
        This month
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-sm"
          >
            <span className="text-muted">{row.label}</span>
            <span className="text-foreground">
              {row.amount}{" "}
              <span className="text-xs text-muted-dim">VAT {row.vat}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CalendarVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className="font-display text-sm font-semibold text-foreground">This week</p>
      <ul className="mt-4 space-y-2">
        {days.map((day, i) => (
          <li
            key={day}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
              i === 1 ? "border border-primary/30 bg-primary/10" : "bg-surface"
            }`}
          >
            <span className="w-8 text-xs text-muted-dim">{day}</span>
            <span className={i === 1 ? "font-medium text-foreground" : "text-muted"}>
              {i === 0 && "9:00 — Boiler install, Sheffield"}
              {i === 1 && "14:00 — Site visit, Leeds"}
              {i === 2 && "Follow-up call"}
              {i === 3 && "Consumer unit quote"}
              {i === 4 && "Free"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InboxVisual() {
  const messages = [
    { channel: "WhatsApp", from: "Dave Mitchell", preview: "Can you do Friday?" },
    { channel: "Email", from: "Mrs Patel", preview: "Re: bathroom rewire quote" },
    { channel: "WhatsApp", from: "Tom Richards", preview: "Thanks, go ahead" },
  ];
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-secondary">
        Unified inbox
      </p>
      <ul className="mt-3 space-y-2">
        {messages.map((msg) => (
          <li
            key={msg.from}
            className="flex items-start gap-3 rounded-lg bg-surface px-3 py-2.5 text-sm"
          >
            <span className="mt-0.5 shrink-0 rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-medium text-secondary">
              {msg.channel}
            </span>
            <div>
              <p className="font-medium text-foreground">{msg.from}</p>
              <p className="text-xs text-muted">{msg.preview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EmailVisual() {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="rounded-lg border border-border-subtle bg-surface p-3 text-sm">
        <p className="text-xs text-muted-dim">To: you@graftmate.net</p>
        <p className="mt-2 font-medium text-foreground">
          From: sarah.jones@email.com
        </p>
        <p className="mt-1 text-muted">Kitchen extension — can you quote?</p>
      </div>
      <p className="my-3 text-center text-lg text-muted-dim" aria-hidden>
        ↓
      </p>
      <div className="rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm">
        <p className="text-xs text-secondary">Auto-linked to client</p>
        <p className="mt-1 font-medium text-foreground">Sarah Jones</p>
        <p className="text-xs text-muted">New message in unified inbox</p>
      </div>
    </div>
  );
}

export function ClientVisual() {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/25 font-display text-sm font-bold text-secondary">
          DM
        </span>
        <div>
          <p className="font-display font-semibold text-foreground">
            Dave Mitchell
          </p>
          <p className="text-xs text-muted">Leeds · 3 jobs · Last contact 2d ago</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        <li className="flex justify-between rounded-lg bg-surface px-3 py-2">
          <span className="text-muted">Quote #1042</span>
          <span className="text-emerald-400">Sent ✓</span>
        </li>
        <li className="flex justify-between rounded-lg bg-surface px-3 py-2">
          <span className="text-muted">Follow-up</span>
          <span className="text-muted-dim">Due Friday</span>
        </li>
      </ul>
    </div>
  );
}

export function UkVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-background p-5 text-sm">
      {[
        { label: "Currency", value: "£ GBP" },
        { label: "VAT rates", value: "20% · 5% · 0%" },
        { label: "Dates", value: "DD/MM/YYYY" },
        { label: "Phone", value: "07xxx UK format" },
      ].map((item) => (
        <div key={item.label} className="rounded-lg bg-surface p-3">
          <p className="text-xs text-muted-dim">{item.label}</p>
          <p className="mt-1 font-medium text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
