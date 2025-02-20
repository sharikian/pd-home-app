import { ReactNode } from "react";
import { RadixIconsCrossCircled } from "@/public/icons";
import { JSX } from "react";

type Variant = "primary" | "secondary" | "warning";

interface CardProps {
  title: string;
  description: string;
  closeHandler: () => void;
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}

export const Card = ({
  title,
  description,
  closeHandler,
  variant = "primary",
  children,
  className = "",
}: CardProps): JSX.Element => {
  const variantConfig = {
    primary: {
      bg: "bg-[#1a604e] dark:bg-emerald-800",
      text: "text-white dark:text-emerald-100",
      icon: "dark:stroke-emerald-100"
    },
    secondary: {
      bg: "bg-[#B9D0AA] dark:bg-emerald-900",
      text: "text-[#1A604E] dark:text-emerald-100",
      icon: "dark:stroke-emerald-100"
    },
    warning: {
      bg: "bg-[#D85562] dark:bg-rose-700",
      text: "text-white dark:text-rose-100",
      icon: "dark:stroke-rose-100"
    },
  };

  return (
    <div className={`shadow-shadows relative flex w-fit flex-col items-start gap-[18px] overflow-hidden rounded-[25px] bg-[#eaeef1] dark:bg-slate-800 scale-75 ${className}`}>
      {/* Header Section */}
      <div
        className={`relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch px-5 py-4 ${variantConfig[variant].bg} overflow-hidden rounded-[15px_15px_0px_0px]`}
      >
        <RadixIconsCrossCircled
          className={`relative h-[35px] w-[35px] cursor-pointer ${variantConfig[variant].text} ${variantConfig[variant].icon}`}
          closeHandler={closeHandler} color={""}        />
        <div className="relative inline-flex flex-[0_0_auto] flex-col items-end">
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-end gap-2.5 p-2.5">
            <div
              className={`relative mt-[-1.00px] w-fit text-left text-xl leading-[normal] font-medium tracking-[0] [direction:rtl] ${variantConfig[variant].text}`}
            >
              <span>{title}</span>
            </div>
          </div>
          <div className="relative mt-[-9px] inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-2.5 py-0">
            <div
              className={`relative mt-[-1.00px] w-fit text-left [font-family:'Pelak-Regular',Helvetica] text-sm leading-[normal] font-normal tracking-[0] [direction:rtl] ${variantConfig[variant].text}`}
            >
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex w-full p-4 pb-5 flex-col items-center justify-center gap-5 self-stretch py-0 dark:text-slate-200">
        {children}
      </div>
    </div>
  );
};