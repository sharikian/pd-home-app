import { ReactNode } from "react";

interface Props {
  variant?: "primary" | "warning" | "secondary";
  value: string | ReactNode;
  className?: string;
}

export const Notice = ({
  variant = "primary",
  value,
  className = "",
}: Props) => {
  const variantStyles = {
    primary: {
      color: 'text-[#1A604E]',
      darkColor: 'dark:text-emerald-300'
    },
    warning: {
      color: 'text-[#D85562]',
      darkColor: 'dark:text-rose-400'
    },
    secondary: {
      color: 'text-[#1A604E]',
      darkColor: 'dark:text-emerald-300'
    },
  };

  return (
    <div className={`flex flex-col items-start gap-2.5 p-2.5 relative rounded-[15px] shadow-shadows w-full
      ${variant === 'secondary' 
        ? "bg-[rgba(185,208,170,0.51)] dark:bg-emerald-900/30" 
        : "bg-[rgba(234,238,241,1)] dark:bg-slate-700"}
      ${className}`}
    >
      <div
        className={`relative flex items-center justify-end gap-2.5 rounded-[5px] border-[1.5px] border-solid px-[9px] py-[7px]
        dark:border-emerald-400 ${className}`}
        style={{ borderColor: variantStyles[variant].color }}
      >
        <p dir="rtl" className={`relative w-fit mt-[-1.00px] font-normal text-lg text-right
          ${variantStyles[variant].darkColor}
          ${variantStyles[variant].color}
          `}
        >
          {value}
        </p>
      </div>
    </div>
  );
};