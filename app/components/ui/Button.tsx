"use client"
import Image from "next/image";
import { JSX, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  icon?: string;
  variant?: "primary" | "warning" | "secondary";
}

export const Button = ({ text, className, icon, variant = "primary", ...rest }: Props): JSX.Element => {
  return (
    <div
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 md:px-6 md:py-3 
        text-sm md:text-base 
        rounded-lg transition-all
        ${variant === 'primary' ? 
          'bg-[#1A604E] dark:bg-emerald-600 text-white hover:bg-[#14483a] dark:hover:bg-emerald-500' : ''}
        ${variant === 'secondary' ? 
          'bg-[#B9D0AA] dark:bg-emerald-800 text-[#1A604E] dark:text-emerald-100 hover:bg-[#a3ba95] dark:hover:bg-emerald-700' : ''}
        ${variant === 'warning' ? 
          'bg-[#D85562] dark:bg-rose-600 text-white hover:bg-[#c44c57] dark:hover:bg-rose-500' : ''}
        hover:scale-105 active:scale-95
        ${className}
      `}
      {...rest}
    >
      {icon && <Image src={icon} className="w-4 h-4 md:w-5 md:h-5 mr-2 dark:invert" alt="icon" />}
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};