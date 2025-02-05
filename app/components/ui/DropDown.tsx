"use client"
import React, { useState } from "react";
import { ArrowDown } from "../../static/icons";

interface DropdownProps {
  options: string[];
  placeholder?: string;
}

export const DropDown: React.FC<DropdownProps> = ({
  options,
  placeholder = "گزینه مورد نظر را انتخاب کنید",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[429px]">
      <div
        className={`flex flex-col items-start gap-2.5 p-2.5 relative bg-[#eaeef1] rounded-[15px] overflow-hidden shadow-shadows ${
          isOpen ? "rounded-b-none" : ""
        }`}
      >
        {/* Main dropdown trigger */}
        <div
          className="flex items-center justify-between px-[5px] py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden border-[1.5px] border-solid border-[#1a604e] cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            className="relative w-[34px] transform transition-transform"
            alt="Icon park arrow down"
            src={ArrowDown}
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Pelak-Regular',Helvetica] font-normal text-[#1A604E] text-lg text-left tracking-[0] leading-[normal] [direction:rtl]">
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
                className="flex flex-col items-end gap-2.5 px-[5px] py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden border-[1.5px] border-solid border-[#1a604e] mt-2 cursor-pointer hover:bg-[#d5e0e6] transition-colors"
                onClick={() => handleOptionClick(option)}
              >
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Pelak-Regular',Helvetica] font-normal text-[#1A604E] text-lg tracking-[0] leading-[normal] [direction:rtl]">
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