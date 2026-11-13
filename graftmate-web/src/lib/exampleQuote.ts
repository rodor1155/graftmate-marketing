import type { ExampleQuote, ExampleQuoteLine } from "@/lib/tradePages";

function parseGbp(value: string): number {
  const cleaned = value.replace(/[£,\s]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function sumLines(lines: ExampleQuoteLine[]): number {
  return lines.reduce((sum, line) => sum + parseGbp(line.total), 0);
}

/** Validates UK mock quote figures: line totals, ex-VAT subtotal, VAT, and gross total. */
export function validateExampleQuote(quote: ExampleQuote): string[] {
  const errors: string[] = [];

  const lineSum = sumLines(quote.lines);
  const subtotal = parseGbp(quote.subtotal);
  const vat = parseGbp(quote.vat);
  const total = parseGbp(quote.total);

  if (Math.abs(lineSum - subtotal) > 0.02) {
    errors.push(
      `Line items (${lineSum.toFixed(2)}) do not match subtotal (${subtotal.toFixed(2)})`,
    );
  }

  const expectedVat = Math.round(subtotal * 0.2 * 100) / 100;
  if (Math.abs(vat - expectedVat) > 0.02) {
    errors.push(`VAT (${vat}) expected ~${expectedVat.toFixed(2)} at 20%`);
  }

  const expectedTotal = Math.round((subtotal + vat) * 100) / 100;
  if (Math.abs(total - expectedTotal) > 0.02) {
    errors.push(`Total (${total}) expected ${expectedTotal.toFixed(2)}`);
  }

  for (const line of quote.lines) {
    const qty = Number(line.qty);
    const unit = parseGbp(line.unitPrice);
    const lineTotal = parseGbp(line.total);
    if (Number.isFinite(qty) && qty > 0 && Number.isFinite(unit)) {
      const expected = Math.round(qty * unit * 100) / 100;
      if (Math.abs(lineTotal - expected) > 0.02) {
        errors.push(
          `Line "${line.item}": total ${lineTotal} expected ${expected.toFixed(2)}`,
        );
      }
    }
  }

  return errors;
}

export function clientInitials(client: string): string {
  const words = client
    .replace(/[()—–-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "GM";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
