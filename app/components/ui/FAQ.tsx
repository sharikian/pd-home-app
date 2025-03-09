"use client"
import { useState } from 'react';
import { ArrowDown } from "@/public/icons";
import Image from 'next/image';

interface FAQProps {
  title: string;
  description: string;
  className?: string;
}

export const FAQ = ({ 
  title,
  description,
  className = ''
}: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full mx-auto flex items-start gap-2.5 shadow-shadows p-2.5 overflow-hidden rounded-[15px] bg-[#eaeef1] relative transition-all duration-300 ${
        isOpen ? 'min-h-[81px]' : ''
      } ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`border-[1.5px] border-solid border-[#1a604e] w-full flex gap-2.5 flex-1 overflow-hidden rounded-[5px] relative ${
        isOpen ? 'flex-col items-end pt-3.5 pb-[11px] px-4 md:px-[19px]' : 'items-center px-4 md:px-[19px] py-[7px] justify-end'
      }`}>
        <div className="flex items-center justify-between w-full flex-[0_0_auto]">
          <Image
            className="relative w-6 md:w-[34px] transition-transform duration-300"
            src={ArrowDown}
            alt="Toggle icon"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          />
          <h3 className="relative flex-1 text-right [font-family:'Pelak-Bold'] font-bold text-[#1a604e] dark:text-emerald-600  px-2 whitespace-nowrap">
            {title}
          </h3>
        </div>

        {isOpen && (
          <p className="relative w-full [font-family:'Pelak-Medium'] font-medium text-black dark:text-slate-300 text-lg md:text-xl leading-normal [direction:rtl] mt-2 break-words">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};