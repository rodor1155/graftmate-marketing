type JobNotesInputScreenProps = {
  roughNotes: string;
};

export function JobNotesInputScreen({ roughNotes }: JobNotesInputScreenProps) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f5f3ed] text-[#1a1a1a]">
      <header className="flex shrink-0 items-center justify-between border-b border-[rgba(26,26,26,0.08)] px-3 py-2.5">
        <span className="text-[#1a1a1a]/70" aria-hidden>
          <BackIcon />
        </span>
        <h2 className="font-display text-[0.72rem] font-semibold tracking-tight sm:text-[0.78rem]">
          New quote
        </h2>
        <span className="w-4" aria-hidden />
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
        <p className="text-[0.62rem] font-medium text-[#6b6b6b]">
          Describe the job
        </p>
        <p className="mt-1 text-[0.58rem] leading-snug text-[#6b6b6b]">
          Plain English is fine — mention labour, materials, and access notes.
        </p>

        <div className="mt-3 rounded-lg border border-[rgba(26,26,26,0.12)] bg-[#fbfaf6] p-2.5">
          <p className="whitespace-pre-wrap text-[0.62rem] leading-snug text-[#1a1a1a]">
            {roughNotes}
          </p>
          <span
            className="mt-1 inline-block h-[0.65rem] w-0.5 animate-pulse bg-[#d45d00]"
            aria-hidden
          />
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-[#d45d00] py-2.5 text-[0.62rem] font-semibold text-[#fbfaf6]"
          tabIndex={-1}
        >
          Draft quote
        </button>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12.5 5 7.5 10l5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
