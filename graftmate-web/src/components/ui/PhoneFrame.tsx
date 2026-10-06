import Image from "next/image";

export type PhoneFrameProps = {
  src: string;
  alt: string;
  statusBar?: string;
  className?: string;
  priority?: boolean;
};

export function StatusBar({ background }: { background: string }) {
  return (
    <div
      className="relative flex h-[7%] items-center justify-between px-[9%] text-[0.6rem] font-semibold text-neutral-900 sm:text-[0.65rem]"
      style={{ background }}
      aria-hidden="true"
    >
      <span>9:41</span>
      <span className="absolute left-1/2 top-1/2 h-[55%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-1">
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

export function PhoneFrame({
  src,
  alt,
  statusBar = "#f5f3ed",
  className = "",
  priority = false,
}: PhoneFrameProps) {
  return (
    <div
      className={`rounded-[1.75rem] border-2 border-[rgba(26,26,26,0.12)] bg-[#f5f3ed] p-[5px] shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.08),0_2px_4px_-2px_rgb(0_0_0_/_0.05)] ${className}`.trim()}
    >
      <div className="flex aspect-[390/844] flex-col overflow-hidden rounded-[1.5rem] bg-[#f5f3ed]">
        <StatusBar background={statusBar} />
        <div className="relative flex-1">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 280px, 70vw"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
