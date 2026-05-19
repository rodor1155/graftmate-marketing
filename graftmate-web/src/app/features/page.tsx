import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Voice quotes, AI receipt scanning, quote-to-invoice, expenses, and Google Calendar — built for UK trades.",
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Features</h1>
      <p className="mt-4 text-muted">Full feature breakdown coming next.</p>
      <Button href="/" variant="secondary" className="mt-8">
        Back to home
      </Button>
    </div>
  );
}
