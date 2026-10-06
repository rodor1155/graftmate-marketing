import type { ReactNode } from "react";

type IconChipVariant = "orange" | "grey" | "green";

const variantStyles: Record<IconChipVariant, string> = {
  orange: "bg-accent/12 text-accent",
  grey: "bg-[rgba(26,26,26,0.06)] text-muted",
  green: "bg-primary/12 text-primary",
};

type IconChipProps = {
  children: ReactNode;
  variant?: IconChipVariant;
  size?: "sm" | "md";
  className?: string;
};

export function IconChip({
  children,
  variant = "orange",
  size = "md",
  className = "",
}: IconChipProps) {
  const sizeClass = size === "sm" ? "h-10 w-10" : "h-11 w-11";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${sizeClass} ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
