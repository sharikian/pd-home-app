"use client"
import React, { useState } from "react";
import { ArrowDown } from "@/public/icons";
import Image from "next/image";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  className?: string;
}

export const DropDown: React.FC<DropdownProps> = ({
  options,
  placeholder = "گزینه مورد نظر را انتخاب کنید",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`flex flex-col items-start gap-2.5 p-2.5 relative bg-[#eaeef1] dark:bg-slate-700 rounded-[15px] overflow-hidden shadow-shadows border-r-2 border-[#b9d0aa] dark:border-emerald-400 ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        {/* Main dropdown trigger */}
        <div
          className="flex items-center justify-between px-[5px] py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden border-[1.5px] border-solid border-[#1a604e] dark:border-emerald-400 cursor-pointer"
          onClick={toggleDropdown}
        >
          <Image
            className="relative w-[34px] transform transition-transform dark:invert"
            alt="Icon park arrow down"
            src={ArrowDown}
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-normal text-[#1A604E] dark:text-emerald-100 text-lg text-left tracking-[0] leading-[normal] [direction:rtl]">
              {selectedOption || placeholder}
            </p>
          </div>
        </div>

        {/* Dropdown options */}
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