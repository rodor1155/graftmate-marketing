import Image from "next/image";
import { APP_STORE_LIVE, APP_STORE_URL } from "@/lib/config";

type AppStoreBadgeProps = {
  className?: string;
};

export function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  if (!APP_STORE_LIVE) {
    return null;
  }

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-90 ${className}`}
      aria-label="Download GraftMate on the App Store"
    >
      <Image
        src="/download-on-the-app-store.svg"
        alt="Download on the App Store"
        width={120}
        height={40}
        className="h-10 w-auto"
      />
    </a>
  );
}
