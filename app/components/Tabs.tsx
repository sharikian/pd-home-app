"use client";
import { useRouter, usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import React, { JSX } from "react";

interface Props {
  varient: string;
  className?: string;
  items?: Array<{ value: string; link: string }>; // Removed `activate` from items
}

interface ClimbProps {
  width: number;
}

const initialTabItems = [
  { value: "پیگیری", link: "/tracking" },
  { value: "فعالیت های پرونده", link: "/activities" },
  { value: "ارجاعات", link: "/references" },
  { value: "تست ها", link: "/tests" },
  { value: "آزمایش ها", link: "/labs" },
  { value: "شرح حال اولیه", link: "/history" },
  { value: "مشخصات عمومی", link: "/general" },
];

export const Tabs = ({
  varient,
  className,
  items = initialTabItems,
}: Props): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const [tabItems, setTabItems] = useState(() =>
    items.slice().reverse().map((item) => ({
      ...item,
      activate: item.link === pathname, // Set initial active state based on pathname
    }))
  );
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const climbRef = useRef<HTMLDivElement>(null);

  // Sync tabItems with pathname on mount and route changes
  useLayoutEffect(() => {
    const updatedItems = items.slice().reverse().map((item) => ({
      ...item,
      activate: item.link === pathname,
    }));
    setTabItems(updatedItems);
  }, [pathname, items]);

  // Update Climb position when tabItems change
  useLayoutEffect(() => {
    const activeIndex = tabItems.findIndex((item) => item.activate);
    if (activeIndex !== -1) {
      const activeTabElement = document.querySelectorAll(".tab-item")[activeIndex];
      const textElement = activeTabElement?.querySelector(".tab-text");
      if (textElement) {
        const textWidth = textElement.getBoundingClientRect().width;
        setActiveTabWidth(textWidth);
        updateClimbPosition(activeIndex, textWidth + 100 - 28);
      }
    }
  }, [tabItems]);

  const updateClimbPosition = (activeIndex: number, climbWidth: number) => {
    const tabElements = document.querySelectorAll(".tab-item");
    if (activeIndex === -1 || !climbRef.current) return;

    const widths = Array.from(tabElements).map(
      (el) => el.getBoundingClientRect().width
    );
    let leftPosition = 0;
    for (let i = 0; i < activeIndex; i++) {
      leftPosition += widths[i];
    }

    const newLeft = leftPosition + widths[activeIndex] / 2 - climbWidth / 2;
    climbRef.current.style.left = `${newLeft}px`;
  };

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = tabItems.findIndex((item) => item.activate);
      if (activeIndex !== -1) {
        updateClimbPosition(activeIndex, activeTabWidth + 100 - 28);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [tabItems, activeTabWidth]);

  const handleTabClick = (index: number, link: string) => {
    const updatedItems = tabItems.map((item, i) => ({
      ...item,
      activate: i === index,
    }));
    setTabItems(updatedItems);

    const activeTabElement = document.querySelectorAll(".tab-item")[index];
    const textElement = activeTabElement?.querySelector(".tab-text");
    if (textElement) {
      const textWidth = textElement.getBoundingClientRect().width;
      setActiveTabWidth(textWidth);
      updateClimbPosition(index, textWidth + 100 - 28);
    }

    router.push(link);
  };

  return (
    <div
      className={`flex h-[70px] md:h-[95px] items-center relative w-max rounded-[35px] overflow-x-hidden shadow-shadows bg-[#1a604e] ${className}`}
    >
      <div className="flex flex-nowrap h-full w-full justify-between px-4 no-scrollbar">
        {tabItems.map(({ value, activate, link }, index) => (
          <div
            key={index}
            className={`tab-item flex-1 flex items-center justify-center gap-2.5 px-[10px] md:px-[20px] py-2.5 relative cursor-pointer ${
              activate && varient === "pre" ? "bg-[#1a604e] rounded-[35px]" : ""
            }`}
            onClick={() => handleTabClick(index, link)}
          >
            <div
              className={`tab-text relative w-fit font-normal tracking-[0] leading-[normal] text-right whitespace-nowrap`}
              style={{
                fontFamily: "Pelak, sans-serif",
                fontSize: "21px",
                WebkitTextStrokeWidth: activate ? "1px" : "0",
                WebkitTextStrokeColor: activate ? "#B9D0AA" : "transparent",
                WebkitTextStroke: activate ? "1px rgb(226 226 226)" : "",
                filter: activate
                  ? "drop-shadow(0px 0px 10px #B9D0AA) drop-shadow(0px 0px 10px #B9D0AA)"
                  : "",
                color: activate ? "#FFF" : "#D1D5DB",
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
        className="absolute top-[-4px] left-1/2 -translate-x-1/2 h-[4px] md:h-[5px] bg-[#B9D0AA] rounded-full"
        style={{
          width: `${width}px`,
        }}
      />
      <div
        className="absolute top-[1px] left-0 w-full h-[60px] md:h-[80px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(185, 208, 170, 0.31) 0%, rgba(185, 208, 170, 0) 100%)",
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
      link: PropTypes.string.isRequired,
    })
  ),
};