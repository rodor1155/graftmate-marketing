import Image from "next/image";
import type { ReactNode } from "react";

export type PhoneFrameProps = {
  src?: string;
  alt: string;
  statusBar?: string;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function StatusBar({ background }: { background: string }) {
  return (
    <div
      className="relative flex h-[3.25rem] shrink-0 items-end justify-between px-[12%] pb-1.5 pt-2 text-[0.6rem] font-semibold text-neutral-900 sm:text-[0.65rem]"
      style={{ background }}
      aria-hidden="true"
    >
      <span className="pb-0.5">9:41</span>

      <div className="pointer-events-none absolute left-1/2 top-[0.35rem] flex -translate-x-1/2 flex-col items-center">
        <DynamicIsland />
      </div>

      <span className="flex items-center gap-1 pb-0.5">
        <svg viewBox="0 0 18 12" className="h-2 w-auto" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg
          viewBox="0 0 26 12"
          className="h-2 w-auto"
          fill="none"
          stroke="currentColor"
        >
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="11"
            rx="3"
            strokeOpacity="0.5"
          />
          <rect
            x="2.5"
            y="2.5"
            width="16"
            height="7"
            rx="1.5"
            fill="currentColor"
            stroke="none"
          />
          <path d="M24.5 4v4" strokeLinecap="round" strokeOpacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="flex h-[1.35rem] w-[5.5rem] items-center justify-end rounded-full bg-black pl-3 pr-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-[#2c2c2e]" />
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  statusBar = "#f5f3ed",
  className = "",
  priority = false,
  children,
}: PhoneFrameProps) {
  return (
    <div
      className={`rounded-[1.75rem] border-2 border-[rgba(26,26,26,0.12)] bg-[#f5f3ed] p-[5px] shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.08),0_2px_4px_-2px_rgb(0_0_0_/_0.05)] ${className}`.trim()}
    >
      <div className="relative flex aspect-[390/844] flex-col overflow-hidden rounded-[1.5rem] bg-[#f5f3ed]">
        <StatusBar background={statusBar} />
        <div className="relative min-h-0 flex-1">
          {children ? (
            children
          ) : src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 280px, 70vw"
              className="object-cover object-top"
              priority={priority}
            />
          ) : (
            <span className="sr-only">{alt}</span>
          )}
        </div>
      </div>
    </div>
  );
}
