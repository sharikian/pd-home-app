import { ReactNode } from "react";
import PropTypes from "prop-types";

interface Props {
  variant?: "primary" | "warning" | "secondary";
  value: string | ReactNode;
  className?: string;
  center?: string;
}

export const Notice = ({
  variant = "primary",
  value,
  className = "",
  center = "text-center ",
}: Props) => {
  const variantStyles = {
    primary: {
      color: 'text-[#1A604E]',
      border: 'border-[#1a604e]',
      bg: 'bg-[#eaeef1]'
    },
    warning: {
      color: 'text-[#D85562]',
      border: 'border-[#D85562]',
      bg: 'bg-[#fbe9eb]'
    },
    secondary: {
      color: 'text-[#1A604E]',
      border: 'border-[#1a604e]',
      bg: 'bg-[rgba(185,208,170,0.51)]'
    },
  };

  return (
    <div className={`w-full flex items-start gap-4 shadow-shadows p-2 overflow-hidden rounded-[15px] ${variantStyles[variant].bg} ${className}`}>
      <div
        className={`w-full border-[1.5px] border-solid ${variantStyles[variant].border} flex items-center justify-end gap-4 rounded-[10px] px-4 py-3`}
      >
        <p 
          dir="rtl" 
          className={`w-full font-black ${center} ${variantStyles[variant].color} dark:text-emerald-400  whitespace-nowrap`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

Notice.propTypes = {
  variant: PropTypes.oneOf(["primary", "warning", "secondary"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};