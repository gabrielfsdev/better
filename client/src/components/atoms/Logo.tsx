export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0">
        <polygon points="2,8 14,14 14,26 2,20" fill="#1DB985" />
        <polygon points="14,14 26,8 26,20 14,26" fill="#12805E" />
        <polygon points="14,2 26,8 14,14 2,8" fill="#2EE6A6" />
      </svg>
      <div className="text-[22px] tracking-[-0.02em] font-bold leading-7 text-mist font-sans">
        Better
      </div>
    </div>
  );
}
