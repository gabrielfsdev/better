import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="flex-1 border-none bg-transparent outline-none text-[16px] leading-5 text-mist font-sans pl-5 placeholder:text-muted"
      {...props}
    />
  );
}
