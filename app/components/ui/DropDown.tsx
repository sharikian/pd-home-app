'use client';
import React, { useState } from 'react';
import { ArrowDown } from '@/public/icons';
import Image from 'next/image';

interface DropdownProps {
  options: string[];
  placeholder?: string;
  className?: string;
  variant?: 'default' | 'input-like';
  title?: string; // New prop to match Input
  maxWidth?: string; // New prop to match Input
  Size?: 'sm' | 'md' | 'lg'; // New prop to match Input
}

export const DropDown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'گزینه مورد نظر را انتخاب کنید',
  className = '',
  variant = 'default',
  title,
  maxWidth = 'w-full max-w-[429px]',
  Size = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const variantStyles = {
    primary: {
      border: '#1A604E',
      placeholder: '#1A604EBA',
    },
  };

  const sizeStyles = {
    sm: {
      container: 'gap-1',
      inputHeight: 'h-[36px] sm:h-[40px]',
      padding: 'p-1.5 sm:p-2 py-0',
      fontSize: 'text-xs sm:text-sm',
      titleSize: 'text-sm sm:text-base',
    },
    md: {
      container: 'gap-1',
      inputHeight: 'h-[40px] sm:h-[50px]',
      padding: 'p-2 sm:p-2.5 py-0',
      fontSize: 'text-sm sm:text-lg',
      titleSize: 'text-base sm:text-lg',
    },
    lg: {
      container: 'gap-2',
      inputHeight: 'h-[48px] sm:h-[60px]',
      padding: 'p-2.5 sm:p-3 py-0',
      fontSize: 'text-base sm:text-xl',
      titleSize: 'text-lg sm:text-xl',
    },
  };

  const currentSize = sizeStyles[Size];

  if (variant === 'input-like') {
    return (
      <div className={`flex flex-col ${currentSize.container} relative ${maxWidth} mx-auto ${className}`}>
        {title && (
          <div className="w-full flex items-center justify-end p-1.5 sm:p-2.5">
            <div className={`font-bold text-[${variantStyles.primary.border}] dark:text-emerald-600 ${currentSize.titleSize}`}>
              {title}
            </div>
          </div>
        )}
        <div className={`w-full rounded-[15px] bg-[#eaeef165] dark:bg-transparent ${currentSize.padding} relative`}>
          <div
            className={`
              flex items-center justify-between px-[5px] py-0
              w-full ${currentSize.inputHeight} rounded-[5px] border-[1.5px] border-solid
              bg-white ${currentSize.fontSize}
              border-[${variantStyles.primary.border}]
              border-[2px]
              outline-none
              text-[${variantStyles.primary.border}]
              placeholder:text-[${variantStyles.primary.placeholder}]
              text-right
              cursor-pointer
            `}
            onClick={toggleDropdown}
          >
            <Image
              className="relative w-[34px] transform transition-transform dark:invert"
              alt="Icon park arrow down"
              src={ArrowDown}
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
            />
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-normal text-[${variantStyles.primary.border}] dark:text-emerald-100 text-right tracking-[0] leading-[normal]">
                {selectedOption || placeholder}
              </p>
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-[1.5px] border-solid border-[#1a604e] rounded-[5px] mt-1 z-10">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="px-[5px] py-2 cursor-pointer hover:bg-[#d5e0e6] text-primary dark:hover:bg-slate-600 transition-colors text-right text-[${variantStyles.primary.border}] ${currentSize.fontSize}"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant (unchanged)
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`flex flex-col items-start gap-2.5 p-2.5 relative bg-[#eaeef1] dark:bg-slate-700 rounded-[15px] overflow-hidden shadow-shadows border-r-2 dark:border-r-0 border-[#b9d0aa] dark:border-emerald-400 ${
          isOpen ? 'rounded-b-none' : ''
        }`}
      >
        <div
          className={`flex items-center justify-between px-[5px] py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden cursor-pointer`}
          onClick={toggleDropdown}
        >
          <Image
            className="relative w-[34px] transform transition-transform dark:invert"
            alt="Icon park arrow down"
            src={ArrowDown}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          />
          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-normal text-[#1A604E] dark:text-emerald-100 text-lg text-right tracking-[0] leading-[normal] [direction:rtl]">
              {selectedOption || placeholder}
            </p>
          </div>
        </div>
        {isOpen && (
          <div className="w-full">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex flex-col items-end gap-2.5 px-[5px] py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden border-[1.5px] border-solid border-[#1a604e] dark:border-emerald-400 mt-2 cursor-pointer hover:bg-[#d5e0e6] dark:hover:bg-slate-600 transition-colors"
                onClick={() => handleOptionClick(option)}
              >
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-[#1A604E] dark:text-emerald-100 text-lg tracking-[0] leading-[normal] [direction:rtl]">
                    {option}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};