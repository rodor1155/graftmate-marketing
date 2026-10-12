"use client";

import { useEffect, useState } from "react";
import { getPricingSubline } from "@/lib/promo";

type PricingHighlightLineProps = {
  className?: string;
};

export function PricingHighlightLine({ className }: PricingHighlightLineProps) {
  const [text, setText] = useState(getPricingSubline());

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setText(getPricingSubline());
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return <p className={className}>{text}</p>;
}
