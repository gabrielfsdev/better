import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'mint' | 'muted';
}

export function Badge({ children, variant = 'mint' }: BadgeProps) {
  const colorClass = variant === 'mint' ? 'text-mint' : 'text-muted';
  return (
    <div className={`text-[12px] tracking-[0.14em] font-semibold leading-4 font-sans uppercase ${colorClass}`}>
      {children}
    </div>
  );
}
