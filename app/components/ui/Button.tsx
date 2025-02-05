"use client"
import { HTMLAttributes, JSX, useState } from "react";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  icon?: string;
  variant?: "primary" | "warning" | "secondary";
}

export const Button = ({
  text,
  className,
  icon,
  variant = "primary",
  ...rest
}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    primary: {
      bg: icon ? "bg-[#B9D0AA]" : "bg-[#1A604E]",
      text: "text-white",
      shadow: "shadow-[#1A604E]"
    },
    warning: {
      bg: icon ? "bg-[#F4D7DA]" : "bg-[#D85562]",
      text: "text-white",
      shadow: "shadow-[#D85562]"
    },
    secondary: {
      bg: icon ? "bg-[#F4D7DA]" : "bg-[#B9D0AA]",
      text: "text-[#1A604E]",
      shadow: "shadow-[#D85562]"
    }
  };

  const getBoxShadow = () => {
    return ''
    if (icon) {
      return isHovered 
        ? "shadow-[-6px_7px_25px_-6px_var(--shadow-color),_2px_-1px_70px_20px_#ffffff]"
        : "shadow-[-6px_7px_21px_-6px_var(--shadow-color),_2px_-1px_66.3px_18px_#ffffff]";
    }
    return isHovered
      ? "shadow-[2px_-1px_70px_20px_#FFF,_-6px_7px_25px_-6px_var(--shadow-color)]"
      : "shadow-[2px_-1px_66.3px_18px_#FFF,_-6px_7px_21px_-6px_var(--shadow-color)]";
  };

  return (
    <div
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-[7px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
        icon ? "h-[63px] px-[13px] py-[5px]" : "px-[13px] py-0"
      } ${variantClasses[variant].bg} ${
        variantClasses[variant].text
      } ${getBoxShadow} ${className}`}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--shadow-color": variantClasses[variant].shadow.replace("shadow-", "")
      } as React.CSSProperties}
    >
      {icon && (
        <div className="relative overflow-hidden">
          <Image
            className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
            src={icon}
            alt="+"
            style={{ 
              filter: {
                primary: "brightness(0) saturate(100%) invert(13%) sepia(15%) saturate(1817%) hue-rotate(81deg) brightness(94%) contrast(86%)",
                warning: "brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(2013%) hue-rotate(327deg) brightness(93%) contrast(92%)",
                secondary: "brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(2013%) hue-rotate(327deg) brightness(93%) contrast(92%)"
              }[variant]
            }}
          />
          <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-active:scale-100" />
        </div>
      )}

      <div
        className={`relative flex items-center justify-center gap-2.5 p-2.5 ${icon ? "w-36" : ""}`}
      >
        <div
          className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-[1.4rem] leading-[normal] font-bolder tracking-[0] transition-transform duration-300 group-hover:translate-x-1 ${
            icon ? "text-[#1A604E]" : ""
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};