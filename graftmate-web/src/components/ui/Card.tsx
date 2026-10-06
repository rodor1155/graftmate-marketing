import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CardElement = "div" | "article" | "section";

type CardProps<T extends CardElement = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Card<T extends CardElement = "div">({
  children,
  className = "",
  as,
  ...props
}: CardProps<T>) {
  const Tag = (as ?? "div") as CardElement;

  return (
    <Tag className={`graftmate-card ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
