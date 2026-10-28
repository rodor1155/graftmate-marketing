"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import {
  BOE_BASE_RATE,
  calculateLatePaymentClaim,
  getDaysLate,
} from "@/lib/latePaymentInterest";

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function formatCurrency(amount: number): string {
  return currencyFormatter.format(amount);
}

export function LatePaymentCalculator() {
  const [debtAmount, setDebtAmount] = useState("1000");
  const [dueDate, setDueDate] = useState("");
  const [paymentDate, setPaymentDate] = useState(todayIsoDate());
  const [baseRatePercent, setBaseRatePercent] = useState(
    String(BOE_BASE_RATE.ratePercent),
  );

  const result = useMemo(() => {
    const debt = Number(debtAmount);
    const base = Number(baseRatePercent);

    if (
      !dueDate ||
      !paymentDate ||
      !Number.isFinite(debt) ||
      debt <= 0 ||
      !Number.isFinite(base)
    ) {
      return null;
    }

    const daysLate = getDaysLate(new Date(dueDate), new Date(paymentDate));
    return calculateLatePaymentClaim({ debtAmount: debt, baseRatePercent: base, daysLate });
  }, [debtAmount, dueDate, paymentDate, baseRatePercent]);

  return (
    <Card id="calculator" as="section" className="p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Invoice amount</span>
          <div className="mt-1.5 flex items-center rounded-lg border border-border bg-surface-raised px-3">
            <span className="text-muted-dim">£</span>
            <input
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              value={debtAmount}
              onChange={(event) => setDebtAmount(event.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-foreground outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">
            Bank of England base rate
          </span>
          <div className="mt-1.5 flex items-center rounded-lg border border-border bg-surface-raised px-3">
            <input
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              value={baseRatePercent}
              onChange={(event) => setBaseRatePercent(event.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-foreground outline-none"
            />
            <span className="text-muted-dim">%</span>
          </div>
          <p className="mt-1.5 text-xs text-muted-dim">
            As of {BOE_BASE_RATE.asOf} —{" "}
            <a
              href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline underline-offset-2 hover:text-accent"
            >
              check the current rate
            </a>
            . Editable.
          </p>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Date payment was due</span>
          <input
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface-raised px-3 py-2.5 text-foreground outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Date paid (or today)</span>
          <input
            type="date"
            value={paymentDate}
            onChange={(event) => setPaymentDate(event.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface-raised px-3 py-2.5 text-foreground outline-none"
          />
        </label>
      </div>

      <div className="mt-8 border-t border-border-subtle pt-6">
        {result ? (
          <dl className="grid gap-4 sm:grid-cols-2">
            <ResultRow label="Days late" value={`${result.daysLate}`} />
            <ResultRow
              label="Statutory interest rate (8% + base rate)"
              value={`${result.statutoryInterestRatePercent.toFixed(2)}%`}
            />
            <ResultRow label="Interest per day" value={formatCurrency(result.dailyInterest)} />
            <ResultRow label="Interest so far" value={formatCurrency(result.totalInterest)} />
            <ResultRow
              label="Fixed recovery charge"
              value={formatCurrency(result.fixedRecoverySum)}
            />
            <ResultRow
              label="Total you can claim on top of the invoice"
              value={formatCurrency(result.totalClaimable)}
              emphasis
            />
          </dl>
        ) : (
          <p className="text-sm text-muted-dim">
            Fill in the invoice amount and both dates to work it out.
          </p>
        )}

        <p className="mt-6 text-xs italic text-muted-dim">
          This applies to business-to-business invoices only, and only where your
          contract doesn&apos;t set its own interest rate. It isn&apos;t legal advice.
        </p>
      </div>
    </Card>
  );
}

function ResultRow({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className={emphasis ? "sm:col-span-2" : undefined}>
      <dt className="text-sm text-muted-dim">{label}</dt>
      <dd
        className={
          emphasis
            ? "font-mono-price mt-1 text-2xl font-semibold"
            : "mt-1 text-lg font-semibold text-foreground"
        }
      >
        {value}
      </dd>
    </div>
  );
}
