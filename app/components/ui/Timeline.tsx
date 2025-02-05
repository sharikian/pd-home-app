import React from "react";

interface TimelineItem {
  title: string;
  date: string;
  iconSrc: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative w-[336px]" dir="rtl">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isFirst = index === 0;
        const lineHeight = isFirst ? "h-9" : "h-[34px]";

        return (
          <div
            key={index}
            className={`relative ${isLast ? "bg-[#1a604e1a] rounded-[15px] p-4" : "mb-4"}`}
          >
            {/* Icon */}
            <div className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center">
              <img
                src={item.iconSrc}
                alt="timeline-icon"
                className="w-6 h-6"
              />
            </div>

            {/* Vertical line */}
            {!isLast && (
              <div
                className={`absolute right-4 top-[30px] w-[2px] bg-[#1a604e9a] ${lineHeight}`}
              />
            )}

            {/* Content */}
            <div className="pr-12">
              <div className="[font-family:'Pelak-Regular',Helvetica] font-normal text-base text-black">
                {item.title}
              </div>
              <div className="[font-family:'Pelak-light',Helvetica] font-normal text-sm text-black mt-1">
                {item.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
