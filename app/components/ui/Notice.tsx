import { ReactNode } from "react";
import PropTypes from "prop-types";

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
    <div className={`w-full flex items-start gap-2.5 shadow-shadows p-2.5 overflow-hidden rounded-[15px] ${variantStyles[variant].bg} ${className}`}>
      <div
        className={`w-full border-[1.5px] border-solid ${variantStyles[variant].border} flex items-center justify-end gap-2.5 rounded-[5px] px-[9px] py-[7px]`}
      >
        <p 
          dir="rtl" 
          className={`w-full font-pelak-regular text-lg text-right ${variantStyles[variant].color}`}
          style={{ direction: 'rtl' }}
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