interface GoalPillProps {
  title: string;
  active: boolean;
  onClick: () => void;
  iconType: 'circle' | 'rect' | 'triangle';
  color: string;
}

export function GoalPill({ title, active, onClick, iconType, color }: GoalPillProps) {
  const renderIcon = () => {
    if (iconType === 'circle') {
      return (
        <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
          <circle cx="5" cy="5" r="5" fill={active ? 'var(--color-void)' : color} />
        </svg>
      );
    }
    if (iconType === 'rect') {
      return (
        <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
          <rect width="10" height="10" fill={color} />
        </svg>
      );
    }
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
        <path d="M0 10 L0 0 A10 10 0 0 1 10 10 Z" fill={color} />
      </svg>
    );
  };

  const activeClasses = active
    ? 'bg-mint border-mint text-void font-semibold'
    : 'bg-void border-steel text-mist font-medium hover:border-muted';

  return (
    <div
      onClick={onClick}
      className={`flex items-center px-4 py-2.5 rounded-full gap-2 cursor-pointer border transition-all duration-200 ${activeClasses}`}
    >
      {renderIcon()}
      <span className="text-[14px] leading-[18px] font-sans">
        {title}
      </span>
    </div>
  );
}
