import { InputHTMLAttributes } from "react";
import Image from "next/image";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  placeholder?: string;
  className?: string;
  maxWidth?: string;
  centerize?: boolean;
  variant?: "primary" | "warning";
  Size?: "sm" | "md" | "lg";
  icon?: string;
  alignRight?: boolean;
  readonly?: boolean;
  bgIndex?: number;
  noBorder?: boolean;
}

export const Input = ({
  title,
  placeholder,
  className,
  maxWidth = "w-full max-w-[429px]",
  centerize = false,
  variant = "primary",
  type = "text",
  Size = "md",
  icon,
  alignRight = false,
  readonly = false,
  bgIndex,
  noBorder = false,
  ...rest
}: InputProps) => {
  const variantStyles = {
    primary: {
      border: "#1A604E",
      placeholder: "#1A604EBA",
    },
    warning: {
      border: "#D85562",
      placeholder: "#D85562BA",
    },
  };

  const sizeStyles = {
    sm: {
      container: "gap-1",
      inputHeight: "h-[36px] sm:h-[40px]",
      padding: "p-1.5 sm:p-2 py-0",
      fontSize: "text-xs sm:text-sm",
      titleSize: "text-sm sm:text-base",
    },
    md: {
      container: "gap-1",
      inputHeight: "h-[40px] sm:h-[50px]",
      padding: "p-2 sm:p-2.5 py-0",
      fontSize: "text-sm sm:text-lg",
      titleSize: "text-base sm:text-lg",
    },
    lg: {
      container: "gap-2",
      inputHeight: "h-[48px] sm:h-[60px]",
      padding: "p-2.5 sm:p-3 py-0",
      fontSize: "text-base sm:text-xl",
      titleSize: "text-lg sm:text-xl",
    },
  };

  const currentSize = sizeStyles[Size];
  const bgColor =
    bgIndex !== undefined
      ? bgIndex % 2 === 0
        ? ""
        : ""
      : "bg-white";

  return (
    <div
      className={`flex flex-col ${currentSize.container} relative font-pelak  ${maxWidth} ${
        alignRight ? "ml-auto" : "mx-auto"
      }`}
    >
      {title && (
        <div className="w-full flex items-center justify-end p-1.5 sm:p-2.5">
          <div
            className={`font-bold text-[${variantStyles[variant].border}] dark:text-emerald-600 ${currentSize.titleSize}`}
          >
            {title}
          </div>
        </div>
      )}
      <div
        className={`w-full rounded-[15px] ${!noBorder && "bg-[#eaeef165]"} dark:bg-transparent ${currentSize.padding} relative`}
      >
        <input
          {...rest}
          type={type}
          placeholder={placeholder || "متن مورد نظر را وارد کنید"}
          readOnly={readonly}
          className={`
            w-full ${currentSize.inputHeight} px-[5px] rounded-[5px] ${bgColor} ${currentSize.fontSize} ${className}
            ${noBorder ? "border-none shadow-none" : `border-[1.5px] border-solid border-[${variantStyles[variant].border}]`}
            outline-none
            font-pelak
            text-[${variantStyles[variant].border}]
            placeholder:text-[${variantStyles[variant].placeholder}]
            ${centerize ? "text-center placeholder:text-center" : "text-right placeholder:text-right"}
            ${icon ? "pr-2" : ""}
          `}
        />
        {icon && (
          <Image
            src={icon}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5"
            alt="icon"
          />
        )}
      </div>
    </div>
  );
};