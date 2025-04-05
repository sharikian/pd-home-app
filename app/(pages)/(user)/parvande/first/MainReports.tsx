import Image from "next/image";
import { WorriedFace } from "@/public/icons";
import { CheckBox } from "@/app/components/ui/CheckBox";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder?: string;
  className?: string;
  maxWidth?: string;
  centerize?: boolean;
  variant?: "primary" | "warning";
  Size?: "sm" | "md" | "lg";
  icon?: string;
  alignRight?: boolean;
}

const Input = ({
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

  return (
    <div
      className={`flex flex-col ${currentSize.container} relative ${maxWidth} ${
        alignRight ? "ml-auto" : "mx-auto"
      }`}
    >
      <div className="w-full flex items-center justify-end p-1.5 sm:p-2.5">
        <div
          className={`font-bold text-[${variantStyles[variant].border}] dark:text-emerald-600 ${currentSize.titleSize}`}
        >
          {title}
        </div>
      </div>
      <div
        className={`w-full rounded-[15px] bg-[#eaeef165] dark:bg-transparent ${currentSize.padding} relative`}
      >
        <input
          {...rest}
          type={type}
          placeholder={placeholder || "متن مورد نظر را وارد کنید"}
          className={`
            w-full ${currentSize.inputHeight} px-[5px] rounded-[5px] border-[1.5px] border-solid
            bg-white ${currentSize.fontSize} ${className}
            border-[${variantStyles[variant].border}]
            border-[2px]
            outline-none
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

// MainReports Component
const MainReports = () => {
  const items = [
    { text: "راه رفتن" },
    { text: "تعادل" },
    { text: "ترمور" },
    { text: "تکلم" },
    { text: "بلع" },
    { text: "سفتی عضلات" },
    { text: "کندی" },
    { text: "سقوط" },
    { text: "فریزینگ" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 mb-6">
        <div className="text-lg font-bold text-primary">شکایات اصلی</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={WorriedFace} />
      </div>
      {/* Items aligned to the right */}
      <div className="flex flex-wrap gap-4 justify-end">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 
                       lg:w-[calc(20%-16px)]    // 5 items per row at lg and above
                       md:w-[calc(25%-16px)]    // 4 items per row at md
                       sm:w-[calc(33.33%-16px)] // 3 items per row at sm
                       xs:w-[calc(50%-16px)]    // 2 items per row at xs
                       xxs:w-full               // 1 item per row at xxs
                       min-w-[120px] flex-row-reverse"
          >
            <CheckBox className="check-box-instance" />
            <span className="text-sm text-black">{item.text}</span>
          </div>
        ))}
      </div>
      {/* Input aligned to the right */}
      <Input title="سایر" alignRight={true} />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default MainReports;