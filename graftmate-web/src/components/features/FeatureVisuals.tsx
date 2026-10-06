import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { StatusPill } from "@/components/ui/StatusPill";

function ScreenshotCard({
  src,
  alt,
  statusBar = "#f5f3ed",
}: {
  src: string;
  alt: string;
  statusBar?: string;
}) {
  return (
    <Card className="overflow-hidden p-3 sm:p-4">
      <PhoneFrame src={src} alt={alt} statusBar={statusBar} className="mx-auto max-w-[280px]" />
    </Card>
  );
}

export function QuoteBuilderVisual() {
  return (
    <ScreenshotCard
      src="/app/quote-builder.webp"
      alt="GraftMate quote builder with site notes turned into itemised line items"
    />
  );
}

/** @deprecated Use QuoteBuilderVisual */
export const VoiceQuoteVisual = QuoteBuilderVisual;

export function InboxVisual() {
  return (
    <ScreenshotCard
      src="/app/clients.webp"
      alt="GraftMate clients list with latest messages from each client"
    />
  );
}

export function EmailVisual() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-[390/520] w-full">
        <Image
          src="/app/clients.webp"
          alt="GraftMate client inbox with messages linked to contacts"
          fill
          sizes="400px"
          className="object-cover object-top"
        />
      </div>
    </Card>
  );
}

export function ClientVisual() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/12 font-display text-sm font-bold text-accent">
          DM
        </span>
        <div>
          <p className="font-display font-semibold text-foreground">Dave Mitchell</p>
          <p className="text-xs text-muted">Leeds · 3 jobs · Last contact 2d ago</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        <li className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface-raised px-3 py-2">
          <span className="text-muted">Quote #1042</span>
          <StatusPill variant="sent">Sent</StatusPill>
        </li>
        <li className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface-raised px-3 py-2">
          <span className="text-muted">Follow-up</span>
          <StatusPill variant="scheduled">Due Friday</StatusPill>
        </li>
      </ul>
    </Card>
  );
}

export function InvoiceVisual() {
  return (
    <ScreenshotCard
      src="/app/quotes.webp"
      alt="GraftMate quotes list showing accepted quotes ready to invoice"
    />
  );
}

export function UkVisual() {
  return (
    <Card className="grid grid-cols-2 gap-3 p-5 text-sm">
      {[
        { label: "Currency", value: "£ GBP" },
        { label: "VAT rates", value: "20% · 5% · 0%" },
        { label: "Dates", value: "DD/MM/YYYY" },
        { label: "Phone", value: "07xxx UK format" },
      ].map((item) => (
        <div key={item.label} className="rounded-lg border border-border-subtle bg-surface-raised p-3">
          <p className="text-xs text-muted-dim">{item.label}</p>
          <p className="mt-1 font-mono text-sm font-medium text-primary">{item.value}</p>
        </div>
      ))}
    </Card>
  );
}
