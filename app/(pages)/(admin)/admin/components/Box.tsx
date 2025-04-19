import React from 'react';

type Variant = 'primary' | 'secondary' | 'white';

interface BoxProps {
  variant: Variant;
  children: React.ReactNode;
}

const Box = ({ variant, children }: BoxProps) => {
  const bgClass = {
    primary: 'bg-teal-800',
    secondary: 'bg-slate-200',
    white: 'bg-stone-300',
  }[variant];

  const textClass = {
    primary: 'text-stone-300',
    secondary: 'text-teal-800',
    white: 'text-black',
  }[variant];

  return (
    <div
      className={`flex-1 min-w-[280px] max-w-[480px] p-4 sm:p-5 ${bgClass} rounded-3xl shadow-md flex flex-col items-center gap-4 ${textClass}`}
    >
      {children}
    </div>
  );
};

export default Box;