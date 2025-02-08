"use client"
import Image from "next/image";
export const Button = ({ text, className, icon, variant = "primary", ...rest }: Props): JSX.Element => {
  return (
    <div
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 md:px-6 md:py-3 
        text-sm md:text-base 
        rounded-lg transition-all
        ${variant === 'primary' ? 'bg-[#1A604E] text-white' : ''}
        ${variant === 'secondary' ? 'bg-[#B9D0AA] text-[#1A604E]' : ''}
        ${variant === 'warning' ? 'bg-[#D85562] text-white' : ''}
        hover:scale-105 active:scale-95
        ${className}
      `}
      {...rest}
    >
      {icon && <Image src={icon} className="w-4 h-4 md:w-5 md:h-5 mr-2" alt="icon" />}
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};