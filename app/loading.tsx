export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo text */}
        <div className="flex flex-col items-center leading-tight">
          <span className="font-serif text-lg tracking-wide text-text-secondary animate-pulse">
            ROYAL DIADEM
          </span>
          <span className="font-serif text-xs tracking-[0.25em] text-text-tertiary animate-pulse">
            CONSULT
          </span>
        </div>
        {/* Loading bar */}
        <div className="w-32 h-[1px] bg-border overflow-hidden">
          <div className="h-full bg-accent animate-[slideRight_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
