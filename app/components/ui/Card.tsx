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
}

export const Card = ({
  title,
  description,
  closeHandler,
  variant = "primary",
  children,
}: CardProps): JSX.Element => {
  const variantConfig = {
    primary: {
      bg: "bg-[#1a604e]",
      text: "text-white",
      color: 'white'
    },
    secondary: {
      bg: "bg-[#B9D0AA]",
      text: "text-[#1A604E]",
      color: '#1A604E'
    },
    warning: {
      bg: "bg-[#D85562]",
      text: "text-white",
      color: 'white'
    },
  };

  return (
    <div className="shadow-shadows relative flex w-fit flex-col items-start gap-[18px] overflow-hidden rounded-[25px] bg-[#eaeef1]">
      {/* Header Section */}
      <div
        className={`relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch px-5 py-4 ${variantConfig[variant].bg} overflow-hidden rounded-[15px_15px_0px_0px]`}
      >
        <RadixIconsCrossCircled
          className="relative h-[35px] w-[35px] cursor-pointer"
          color={variantConfig[variant].color}
          closeHandler={closeHandler}
        />
        <div className="relative inline-flex flex-[0_0_auto] flex-col items-end">
          <div className="relative inline-flex flex-[0_0_auto] items-center justify-end gap-2.5 p-2.5">
            <div
              className={`relative mt-[-1.00px] w-fit text-left  text-xl leading-[normal] font-medium tracking-[0] [direction:rtl] ${variantConfig[variant].text}`}
            >
              {title}
            </div>
          </div>
          <div className="relative mt-[-9px] inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-2.5 py-0">
            <div
              className={`relative mt-[-1.00px] w-fit text-left [font-family:'Pelak-Regular',Helvetica] text-sm leading-[normal] font-normal tracking-[0] [direction:rtl] ${variantConfig[variant].text}`}
            >
              {description}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the card content (same as original) */}
      <div className="relative flex w-full p-4 pb-5 flex-col items-center justify-center gap-5 self-stretch py-0">
        {children}
      </div>
    </div>
  );
};
