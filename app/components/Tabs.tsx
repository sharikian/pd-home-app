"use client"
import PropTypes from "prop-types";
import { Line1, Subtract } from "@/public/icons";
import { useRef, useState, useEffect } from "react";
import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  varient: string;
  className?: string;
  items?: Array<{ value: string; activate: boolean; link: string; }>;
}

const initialTabItems = [
  { value: "پیگیری", activate: false, link: '' },
  { value: "فعالیت های پرونده", activate: false, link: '' },
  { value: "ارجاعات", activate: false, link: '' },
  { value: "تست ها", activate: false, link: '' },
  { value: "آزمایش ها", activate: false, link: '' },
  { value: "شرح حال اولیه", activate: false },
  { value: "مشخصات عمومی", activate: true, link: '' },
];

export const Tabs = ({ varient, className, items = initialTabItems }: Props): JSX.Element => {
  const [tabItems, setTabItems] = useState(items);
  const climbRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClimbPosition = () => {
      const tabElements = document.querySelectorAll('.tab-item');
      const widths = Array.from(tabElements).map(el => el.getBoundingClientRect().width);
      const activeIndex = tabItems.findIndex(item => item.activate);

      if (climbRef.current && activeIndex !== -1) {
        let leftPosition = 0;
        for (let i = 0; i < activeIndex; i++) {
          leftPosition += widths[i];
        }
        const climbWidth = climbRef.current.clientWidth;
        const newLeft = leftPosition + widths[activeIndex] / 2 - climbWidth / 2;
        climbRef.current.style.left = `${newLeft}px`;
        climbRef.current.style.transition = 'left 0.3s ease';
      }
    };

    updateClimbPosition();
    window.addEventListener('resize', updateClimbPosition);

    return () => {
      window.removeEventListener('resize', updateClimbPosition);
    };
  }, [tabItems]);

  const handleTabClick = (index: number) => {
    const updatedTabItems = tabItems.map((item, i) => ({
      ...item,
      activate: i === index,
    }));
    setTabItems(updatedTabItems);
  };

  return (
    <div
      ref={tabContainerRef}
      className={`flex h-[70px] md:h-[95px] items-center relative w-max rounded-[35px] overflow-x-auto shadow-shadows ${
        "bg-[#1a604e]"
      } ${className}`}
    >
      <div className="flex flex-nowrap h-full w-full justify-between">
        {tabItems.map(({ value, activate, link }, index) => (
          <Link key={index} href={link ? link : '/'}>
          <div
            
            className={`tab-item flex-1 flex items-center justify-center gap-2.5 px-[10px] md:px-[20px] py-2.5 relative cursor-pointer ${
              activate && varient == "pre"
                ? "bg-[#1a604e] rounded-[35px] shadow-[inset_2px_4px_4px_#00000040] transition-all duration-300 ease-out"
                : "transition-all duration-300 ease-out"
            }`}
            onClick={() => {
              handleTabClick(index)
              
            }}
          >
            <div
              className={`relative w-fit font-normal text-white tracking-[0] leading-[normal] text-right whitespace-nowrap ${
                activate
                  ? "[text-shadow:0px_0px_25px_#b9d0aa]"
                  : ""
              }`}
              style={{
                fontSize: "clamp(12px, 2vw, 18px)",
                WebkitTextStrokeWidth: activate ? "1px" : "0",
                WebkitTextStrokeColor: activate ? "#B9D0AA" : "transparent",
              }}
            >
              {value}
            </div>
          </div></Link>
        ))}
      </div>
      {varient == "ligth" && <Climb ref={climbRef} />}
    </div>
  );
};

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

const Climb = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="absolute w-[180px] md:w-[228px] h-[65px] md:h-[85px]">
      <div className="relative h-[68px] md:h-[88px] -top-0.5">
        <Image
          className="absolute w-[80px] md:w-[109px] h-[4px] md:h-[5px] top-0 left-[40px] md:left-[59px] object-cover"
          alt="Line"
          src={Line1}
        />
        <Image
          className="absolute w-[180px] md:w-[228px] h-[65px] md:h-[85px] top-0.5 left-0"
          alt="Subtract"
          src={Subtract}
        />
      </div>
    </div>
  );
});

Climb.displayName = "Climb";