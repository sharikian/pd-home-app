"use client"
import { useRouter, usePathname } from 'next/navigation';
import { flushSync } from 'react-dom';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import React, { JSX } from 'react';

interface Props {
  varient: string;
  className?: string;
  items?: Array<{ value: string; activate: boolean; link: string }>;
}

interface ClimbProps {
  width: number;
}

const initialTabItems = [
  { value: "پیگیری", activate: true, link: '/tracking' }, // First item activated
  { value: "فعالیت های پرونده", activate: false, link: '/activities' },
  { value: "ارجاعات", activate: false, link: '/references' },
  { value: "تست ها", activate: false, link: '/tests' },
  { value: "آزمایش ها", activate: false, link: '/labs' },
  { value: "شرح حال اولیه", activate: false, link: '/history' },
  { value: "مشخصات عمومی", activate: false, link: '/general' },
];

export const Tabs = ({ varient, className, items = initialTabItems }: Props): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const [tabItems, setTabItems] = useState(items);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const climbRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // Sync active tab with URL path
  useEffect(() => {
    const updatedItems = items.map(item => ({
      ...item,
      activate: item.link === pathname,
    }));
    setTabItems(updatedItems);
    const index = tabItems.findIndex((data) => {
      return data.link === pathname
    } )
    const activeTabElement = document.querySelectorAll('.tab-item')[index];
    const textElement = activeTabElement?.querySelector('.tab-text');
    
    if (textElement) {
      const textWidth = textElement.getBoundingClientRect().width;
      setActiveTabWidth(textWidth);
      updateClimbPosition(index, textWidth + 100 -28);
    }
  }, [pathname, items]);


  // Initialize climb position on mount
  useEffect(() => {
    const activeIndex = items.findIndex(item => item.activate);
    if (activeIndex === -1) return;

    const activeTabElement = document.querySelectorAll('.tab-item')[activeIndex];
    const textElement = activeTabElement?.querySelector('.tab-text');
    
    if (textElement) {
      const textWidth = textElement.getBoundingClientRect().width;
      setActiveTabWidth(textWidth);
      updateClimbPosition(activeIndex, textWidth + 100 -28);
    }
  }, []);

  const updateClimbPosition = (activeIndex: number, climbWidth: number) => {
    const tabElements = document.querySelectorAll('.tab-item');
    if (activeIndex === -1 || !climbRef.current) return;

    const widths = Array.from(tabElements).map(el => el.getBoundingClientRect().width);
    let leftPosition = 0;
    for (let i = 0; i < activeIndex; i++) {
      leftPosition += widths[i];
    }
    
    const newLeft = leftPosition + widths[activeIndex] / 2 - climbWidth / 2;
    climbRef.current.style.left = `${newLeft}px`;
  };

  useEffect(() => {
    const handleResize = () => {
      const activeIndex = tabItems.findIndex(item => item.activate);
      if (activeIndex !== -1) {
        updateClimbPosition(activeIndex, activeTabWidth + 100 -28);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabItems, activeTabWidth]);

  const handleTabClick = (index: number, link: string) => {
    flushSync(() => {
      const updatedItems = tabItems.map((item, i) => ({
        ...item,
        activate: i === index,
      }));
      setTabItems(updatedItems);
    });

    const activeTabElement = document.querySelectorAll('.tab-item')[index];
    const textElement = activeTabElement?.querySelector('.tab-text');
    
    if (textElement) {
      const textWidth = textElement.getBoundingClientRect().width;
      setActiveTabWidth(textWidth);
      updateClimbPosition(index, textWidth + 100 -28);
    }

    router.push(link);
  };

  return (
    <div
      ref={tabContainerRef}
      className={`flex h-[70px] md:h-[95px] items-center relative w-max rounded-[35px] overflow-x-auto shadow-shadows ${
        "bg-[#1a604e]"
      } ${className}`}
    >
      <div className="flex flex-nowrap h-full w-full justify-between px-4">
        {tabItems.map(({ value, activate, link }, index) => (
          <div
            key={index}
            className={`tab-item flex-1 flex items-center justify-center gap-2.5 px-[10px] md:px-[20px] py-2.5 relative cursor-pointer ${
              activate && varient === "pre"
                ? "bg-[#1a604e] rounded-[35px] shadow-[inset_2px_4px_4px_#00000040]"
                : ""
            }`}
            onClick={() => handleTabClick(index, link)}
          >
            <div
              className={`tab-text relative w-fit font-normal text-white tracking-[0] leading-[normal] text-right whitespace-nowrap ${
                activate ? "[text-shadow:0px_0px_25px_#b9d0aa]" : ""
              }`}
              style={{
                fontSize: "clamp(12px, 2vw, 18px)",
                WebkitTextStrokeWidth: activate ? "1px" : "0",
                WebkitTextStrokeColor: activate ? "#B9D0AA" : "transparent",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
      {varient === "ligth" && <Climb ref={climbRef} width={activeTabWidth} />}
    </div>
  );
};

// Rest of the code remains exactly the same
const Climb = React.forwardRef<HTMLDivElement, ClimbProps>(({ width }, ref) => {
  const climbWidth = width + 100;
  const trapezoidPadding = 50;
  const leftStart = (trapezoidPadding / climbWidth) * 100;
  const rightEnd = ((climbWidth - trapezoidPadding) / climbWidth) * 100;

  return (
    <div 
      ref={ref}
      className="absolute h-[65px] md:h-[85px] transition-all duration-300 ease-out pointer-events-none"
      style={{ 
        width: `${climbWidth}px`,
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[4px] md:h-[5px] bg-[#B9D0AA] rounded-full"
        style={{ 
          width: `${width}px`,
        }}
      />
      <div 
        className="absolute top-[5px] left-0 w-full h-[60px] md:h-[80px]"
        style={{
          background: 'linear-gradient(180deg, rgba(185, 208, 170, 0.31) 0%, rgba(185, 208, 170, 0) 100%)',
          clipPath: `polygon(
            ${leftStart}% 0,
            0% 100%,
            100% 100%,
            ${rightEnd}% 0
          )`,
        }}
      />
    </div>
  );
});

Climb.displayName = "Climb";

Tabs.propTypes = {
  varient: PropTypes.oneOf(["pre", "default", "ligth"]),
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      activate: PropTypes.bool.isRequired,
    })
  ),
};