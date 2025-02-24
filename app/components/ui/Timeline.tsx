import React from "react";
import Image from "next/image";

interface TimelineItem {
  title: string;
  date: string;
  iconSrc: string;
  className?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = "" }) => {
  return (
    <div className={`relative w-[336px] ${className}`} dir="rtl">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isFirst = index === 0;
        const lineHeight = isFirst ? "h-9" : "h-[34px]";

        return (
          <div
            key={index}
            className={`relative transition-colors duration-300 ${
              isLast ? "bg-[#1a604e1a] dark:bg-emerald-900/30 rounded-[15px] p-4" : "mb-4"
            }`}
          >
            {/* Icon */}
            <div className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center">
              <Image
                src={item.iconSrc}
                alt="timeline-icon"
                className="w-6 h-6 dark:invert"
              />
            </div>

            {/* Vertical line */}
            {!isLast && (
              <div
                className={`absolute right-4 top-[30px] w-[2px] bg-[#1a604e9a] dark:bg-emerald-400/50 ${lineHeight}`}
              />
            )}

            {/* Content */}
            <div className="pr-12">
              <div className="font-normal text-base text-black dark:text-slate-200">
                {item.title}
              </div>
              <div className="font-normal text-sm text-black dark:text-slate-300 mt-1">
                {item.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};