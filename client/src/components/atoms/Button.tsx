import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'mint' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'mint', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'flex items-center justify-center px-7 py-4 rounded-full text-[16px] font-semibold leading-5 cursor-pointer font-sans transition-all duration-200 border-none';
  
  const variantClasses = {
    mint: 'bg-mint text-void hover:opacity-90',
    outline: 'bg-transparent text-mist border border-steel hover:bg-steel/20',
    ghost: 'bg-transparent text-muted hover:text-mist',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
