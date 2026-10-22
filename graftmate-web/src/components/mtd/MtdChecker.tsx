"use client";

import { useId, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { checkMtdRequirement } from "@/lib/mtd";

export function MtdChecker() {
  const [value, setValue] = useState("");
  const inputId = useId();

  const qualifyingIncome = useMemo(() => {
    const parsed = Number(value.replace(/,/g, ""));
    return value.trim() !== "" && Number.isFinite(parsed) && parsed >= 0
      ? parsed
      : null;
  }, [value]);

  const result = qualifyingIncome === null ? null : checkMtdRequirement(qualifyingIncome);

  return (
    <Card className="p-6 sm:p-8">
      <label
        htmlFor={inputId}
        className="font-display text-base font-semibold text-foreground"
      >
        Your qualifying income
      </label>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Self-employment plus property turnover, before expenses. Don&apos;t
        include wages from a PAYE job, pensions, or dividends.
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-xl border-2 border-border bg-surface-raised px-4 py-3 focus-within:border-accent/50">
        <span className="font-mono text-lg text-muted-dim">£</span>
        <input
          id={inputId}
          type="text"
          inputMode="decimal"
          placeholder="e.g. 34000"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="w-full bg-transparent font-mono text-lg tabular-nums text-foreground outline-none placeholder:text-muted-dim"
          aria-describedby={`${inputId}-result`}
        />
      </div>

      <div id={`${inputId}-result`} className="mt-6">
        {result === null ? (
          <p className="text-sm leading-relaxed text-muted-dim">
            Enter your qualifying income to see when Making Tax Digital would
            apply to you.
          </p>
        ) : result.required ? (
          <div className="rounded-xl border-2 border-accent/30 bg-accent/10 p-4">
            <p className="font-display text-lg font-semibold text-foreground">
              You&apos;ll need to use MTD from {result.startDate}.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Your qualifying income is {result.thresholdLabel}, which is one
              of HMRC&apos;s phased thresholds for Making Tax Digital for
              Income Tax.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border-2 border-border-subtle bg-surface p-4">
            <p className="font-display text-lg font-semibold text-foreground">
              Not yet, on these figures.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Your qualifying income is £20,000 or less, so Making Tax Digital
              doesn&apos;t apply to you yet. Check again each tax year, since
              the threshold comes down over time.
            </p>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-dim">
        This is a guide, not a decision. HMRC checks your Self Assessment
        return and should write to you if you need to start, but it&apos;s
        still your job to check even if no letter comes.
      </p>
    </Card>
  );
}
