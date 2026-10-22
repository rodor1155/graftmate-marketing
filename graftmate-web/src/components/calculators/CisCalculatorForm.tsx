"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { calculateCisDeduction, type CisRate } from "@/lib/cisCalculator";

const RATE_OPTIONS: { value: CisRate; label: string }[] = [
  { value: 0.2, label: "20% – registered for CIS" },
  { value: 0.3, label: "30% – not registered" },
  { value: 0, label: "0% – gross payment status" },
];

function parseAmount(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function formatGbp(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function CisCalculatorForm() {
  const [grossAmount, setGrossAmount] = useState("2567");
  const [materialsCost, setMaterialsCost] = useState("367");
  const [vatAmount, setVatAmount] = useState("0");
  const [rate, setRate] = useState<CisRate>(0.2);

  const result = useMemo(
    () =>
      calculateCisDeduction({
        grossAmount: parseAmount(grossAmount),
        materialsCost: parseAmount(materialsCost),
        vatAmount: parseAmount(vatAmount),
        rate,
      }),
    [grossAmount, materialsCost, vatAmount, rate],
  );

  return (
    <Card className="p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Total invoice amount ex VAT (gross)"
          id="gross-amount"
          value={grossAmount}
          onChange={setGrossAmount}
        />
        <Field
          label="Materials you paid for yourself"
          id="materials-cost"
          value={materialsCost}
          onChange={setMaterialsCost}
        />
        <Field
          label="VAT on the invoice"
          id="vat-amount"
          value={vatAmount}
          onChange={setVatAmount}
        />
        <div>
          <label
            htmlFor="cis-rate"
            className="block text-sm font-medium text-foreground"
          >
            Your CIS rate
          </label>
          <select
            id="cis-rate"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value) as CisRate)}
            className="mt-2 w-full rounded-md border border-border bg-surface-raised px-3 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            {RATE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-4 border-t border-border-subtle pt-6 sm:grid-cols-3">
        <Result
          label="Amount the deduction is worked out on"
          value={formatGbp(result.deductionBasis)}
        />
        <Result
          label="CIS deduction"
          value={formatGbp(result.deduction)}
          emphasis
        />
        <Result
          label="You'll be paid (plus VAT)"
          value={formatGbp(result.netPayment)}
        />
      </div>
      <p className="mt-4 text-sm text-muted-dim">
        VAT of {formatGbp(result.vatAmount)} is shown for reference only — it
        is never deducted from and is paid to you in full.
      </p>
      <p className="mt-4 text-xs text-muted-dim">
        Nothing you type here is saved.
      </p>
    </Card>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="mt-2 flex items-center rounded-md border border-border bg-surface-raised px-3 focus-within:border-accent">
        <span className="text-sm text-muted-dim">£</span>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step="0.01"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground focus:outline-none"
        />
      </div>
    </div>
  );
}

function Result({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p
        className={
          emphasis
            ? "mt-1 font-display text-2xl font-bold tracking-tight text-accent"
            : "mt-1 font-display text-2xl font-bold tracking-tight text-foreground"
        }
      >
        {value}
      </p>
    </div>
  );
}
