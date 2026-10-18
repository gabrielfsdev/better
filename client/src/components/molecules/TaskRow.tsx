interface TaskRowProps {
  title: string;
  day: string;
  completed: boolean;
  onToggle?: () => void;
}

export function TaskRow({ title, day, completed, onToggle }: TaskRowProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={onToggle}>
      {completed ? (
        <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
          <rect width="18" height="18" rx="5" fill="var(--color-mint)" />
          <path d="M5 9.2 L7.8 12 L13 6.2" fill="none" stroke="var(--color-void)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
          <rect x="1" y="1" width="16" height="16" rx="4.5" fill="none" stroke="var(--color-mint)" strokeWidth="2" />
        </svg>
      )}
      <div className={`text-[15px] flex-1 leading-[18px] font-sans ${completed ? 'text-muted line-through' : 'text-mist'}`}>
        {title}
      </div>
      <div className="text-[13px] leading-4 text-muted font-sans">
        {day}
      </div>
    </div>
  );
}
