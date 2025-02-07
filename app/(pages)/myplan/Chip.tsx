import PropTypes from "prop-types";
import { JSX } from "react";
import Image from "next/image";

interface Props {
  text: string;
  icon: string;
  varient?: 'primary' | 'secondary' | 'danger';
}

export const Chip = ({
  varient = 'primary',
  text,
  icon,
}: Props): JSX.Element => {
  // Determine background and text colors based on variant
  const variantStyles = {
    primary: {
      bg: 'bg-[#1a604e]',
      text: 'text-white',
    },
    secondary: {
      bg: 'bg-[#B9D0AA]',
      text: 'text-[#1a604e]',
    },
    danger: {
      bg: 'bg-[#D85562]',
      text: 'text-white',
    },
  };

  return (
    <div
      className={`flex w-[138px] items-center justify-end pl-1 pr-[5px] py-0 rounded-[5px] whitespace-nowrap ${variantStyles[varient].bg}`}
    >
      <div className="inline-flex items-center justify-center gap-2.5 pl-2.5 pr-0.5 py-2">
        <div
          className={`relative w-fit mt-[-1.00px] font-medium ${variantStyles[varient].text} text-base text-left`}
        >
          {text}
        </div>
      </div>
      <Image className="!relative !w-[25px] !h-[25px]" src={icon} alt="chip icon" />
    </div>
  );
};

Chip.propTypes = { text: PropTypes.string };