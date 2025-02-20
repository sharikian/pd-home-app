"use client"
import { useState } from 'react';
import { ArrowDown } from "@/public/icons";
import Image from 'next/image';

interface FAQProps {
  title: string;
  description: string;
  variant?: 'primary' | 'warning';
  className?: string;
}

export const FAQ = ({ 
  title,
  description,
  variant = 'primary',
  className = ''
}: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const variantStyles = {
    primary: {
      border: '#1A604E',
      darkBorder: '#3b82f6',
      title: '#1A604E',
      darkTitle: '#10b981',
      iconFilter: 'brightness(0) saturate(100%) invert(13%) sepia(15%) saturate(1817%) hue-rotate(81deg) brightness(94%) contrast(86%)'
    },
    warning: {
      border: '#D85562',
      darkBorder: '#ef4444',
      title: '#D85562',
      darkTitle: '#f87171',
      iconFilter: 'brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(2013%) hue-rotate(327deg) brightness(93%) contrast(92%)'
    }
  };

  return (
    <div
      className={`max-w-[1414px] items-center w-full flex gap-2.5 shadow-[-8px_23px_81.4px_#1a604e1a,8px_-23px_81.4px_#ffffff] dark:shadow-[-8px_23px_81.4px_#1a604e1a,8px_-23px_81.4px_#1e293b] overflow-hidden rounded-[6px] bg-[#eaeef1] dark:bg-slate-700 relative transition-all duration-300 ${className}`}
      style={{
        border: `1.5px solid ${variant === 'primary' ? 
          'var(--dark-border, #3b82f6)' : 
          'var(--dark-border, #ef4444)'}`,
        height: isOpen ? 'auto' : 'fit-content'
      }}
    >
      <div className="flex flex-col w-full">
        <div 
          className="flex items-center justify-between w-full p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            className={`w-8 h-8 transition-transform duration-300 dark:invert ${
              isOpen ? 'rotate-180' : ''
            }`}
            src={ArrowDown}
            alt="Toggle icon"
          />
          <h3 
            className="flex-1 font-bold text-right transition-colors duration-300 text-[#1A604E] dark:text-emerald-400"
          >
            {title}
          </h3>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="p-4 font-medium text-black dark:text-slate-200 text-xl tracking-[0] leading-[normal] [direction:rtl]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};