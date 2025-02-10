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
      color: '#1A604E'
    },
    warning: {
      color: '#D85562'
    },
    secondary: {
      color: '#1A604E'
    },
  };

  return (
    <div className={`flex flex-col items-start gap-2.5 p-2.5 relative rounded-[15px] shadow-shadows w-full`}
      style={{backgroundColor: variant == 'secondary' ? "rgba(185, 208, 170, 0.51)" : 'rgba(234, 238, 241, 1)'}}>
      <div
        className={`relative flex items-center justify-end gap-2.5 rounded-[5px] border-[1.5px] border-solid px-[9px] py-[7px] ${className}`}
        style={{ borderColor: variantStyles[variant].color }}
      >
        <p className={`relative w-fit mt-[-1.00px] font-normal text-lg text-right `}
        style={{color: variantStyles[variant].color}}>
          {value}
        </p>
      </div>
    </div>
  );
};
