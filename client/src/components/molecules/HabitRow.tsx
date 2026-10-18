interface HabitRowProps {
  title: string;
  completedDays: boolean[];
  currentCount: number;
  totalCount: number;
}

export function HabitRow({ title, completedDays, currentCount, totalCount }: HabitRowProps) {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="text-[15px] w-[88px] shrink-0 font-medium leading-[18px] text-mist font-sans">
        {title}
      </div>
      <div className="flex flex-1 gap-2.5">
        {completedDays.map((done, i) => (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
            {done ? (
              <circle cx="12" cy="12" r="12" fill="var(--color-mint)" />
            ) : (
              <circle cx="12" cy="12" r="11" fill="none" stroke="var(--color-steel)" strokeWidth="2" />
            )}
          </svg>
        ))}
      </div>
      <div className="text-[15px] w-[40px] text-right shrink-0 font-semibold leading-[18px] text-mint font-sans">
        {currentCount} / {totalCount}
      </div>
    </div>
  );
}
