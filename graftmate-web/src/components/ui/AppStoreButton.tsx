"use client";

import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/config";
import type { AppStoreClickPlacement } from "@/lib/appStoreLink";
import { trackAppStoreClick } from "@/lib/trackAppStoreClick";
import { Button } from "@/components/ui/Button";

type AppStoreButtonProps = {
  placement: AppStoreClickPlacement;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
};

export function AppStoreButton({
  placement,
  href = APP_STORE_URL,
  size = "md",
  variant = "primary",
  className,
  children,
}: AppStoreButtonProps) {
  return (
    <Button
      href={href}
      size={size}
      variant={variant}
      className={className}
      onClick={() => {
        trackAppStoreClick(placement);
      }}
    >
      {children}
    </Button>
  );
}