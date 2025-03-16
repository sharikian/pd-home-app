import PropTypes from "prop-types";
import { JSX } from "react";
import Image from "next/image";

interface Props {
  text: string;
  icon: string;
  varient?: "primary" | "secondary" | "danger";
}

export const Chip = ({
  varient = "primary",
  text,
  icon,
}: Props): JSX.Element => {
  const variantStyles = {
    primary: {
      bg: "bg-[#1a604e]",
      text: "text-white",
    },
    secondary: {
      bg: "bg-[#B9D0AA]",
      text: "text-[#1a604e]",
    },
    danger: {
      bg: "bg-[#D85562]",
      text: "text-white",
    },
  };

  return (
    <div
      className={`flex w-full items-center gap-2.5 px-2.5 py-1 rounded-[5px] ${variantStyles[varient].bg} direction-[inherit] rtl:flex-row-reverse`}
      style={{direction: 'rtl'}}

    >
      <Image
        className="relative w-[20px] h-[20px]"
        src={icon}
        alt="chip icon"
      />
      <span
        className={`flex-1 font-medium ${variantStyles[varient].text} text-base whitespace-normal line-clamp-2 ltr:text-left rtl:text-right`}
      >
        {text}
      </span>
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  varient: PropTypes.oneOf(["primary", "secondary", "danger"]),
};