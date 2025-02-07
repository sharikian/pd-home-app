"use client"
import { CheckBox } from "./ui/CheckBox";
import { RangeDown } from "./ui/RangeDown";
import { ArrowLeft } from "@/public/icons";
import { useState } from "react";

interface FrameListProps {
  title: string;
  items: Array<{ label: string; value: string }>;
}

export const FrameList = ({ title, items }: FrameListProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const options = Array.from({ length: 11 }, (_, i) => i);

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-flex flex-col items-end gap-[19px]">
      {/* Clickable header */}
      <div 
        className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-[7px] p-2.5 cursor-pointer"
        onClick={toggleList}
      >
        <div className="relative mt-[-1.00px] w-fit  text-lg leading-[normal] font-medium tracking-[0] text-black [direction:rtl]">
          {title}
        </div>
        <img
          className="relative w-6 transition-transform duration-300"
          alt="Icon park arrow left"
          src={ArrowLeft}
          style={{ transform: isOpen ? 'rotate(270deg)' : 'rotate(180deg)' }}
        />
      </div>

      {/* Collapsible content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative grid grid-cols-3 gap-[19px]">
          {items.map((item, index) => (
            <div key={index} className="relative flex flex-col items-end gap-[11px]">
              <RangeDown className="!w-[120px]" options={options} />
              <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 p-2.5">
                <div className="relative mt-[-1.00px] w-fit  text-lg leading-[normal] font-medium tracking-[0] text-black [direction:rtl]">
                  {item.label}
                </div>
              </div>
              {index % 3 === 2 && (
                <div className="relative flex items-center justify-end gap-[13px]">
                  <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 p-2.5">
                    <div className="relative mt-[-1.00px] w-fit  text-lg leading-[normal] font-medium tracking-[0] text-black [direction:rtl]">
                      {item.value}
                    </div>
                  </div>
                  <CheckBox className={undefined} active={false} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};