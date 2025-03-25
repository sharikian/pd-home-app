"use client";
import PropTypes from "prop-types";
import { useState, JSX } from "react";

interface Props {
  active?: boolean;
  defaultActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CheckBox = ({
  active,
  defaultActive = false,
  onClick,
  className = "",
}: Props): JSX.Element => {
  const isControlled = active !== undefined;
  const [internalActive, setInternalActive] = useState(
    isControlled ? false : defaultActive
  );
  const currentActive = isControlled ? active : internalActive;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      if (!currentActive) {
        if (!isControlled) {
          setInternalActive(true);
        }
        onClick();
      }
    } else {
      if (!isControlled) {
        setInternalActive(!internalActive);
      }
    }
  };

  const variant = currentActive
    ? isHovered ? "hover-2" : "default"
    : isHovered ? "hover-1" : "not-select";

  return (
    <div
      className={`flex items-center p-[3px] cursor-pointer relative ${
        variant === "not-select" ? "w-8 h-8 rotate-90 shadow-[inset_7px_7px_3.7px_-5px_#00000059]" : "h-8 w-8"
      } flex-col rounded-[4px] gap-2.5 bg-[#eaeef1] dark:bg-[#2d333b] overflow-hidden justify-center ${
        variant === "hover-1"
          ? "shadow-[inset_-7px_7px_4.7px_-5px_#00000059,inset_13px_-9px_4.3px_-12px_#ffffffa1] dark:shadow-none"
          : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`
          rounded-sm relative
          ${
            variant === "hover-2"
              ? "w-[8px] h-[8px]"
              : variant === "hover-1"
              ? "w-[24px] h-[24px]"
              : "w-[20px] h-[20px]"
          }
          ${
            variant === "not-select"
              ? "shadow-[0_2px_4px_#00000040,0_-2px_4px_#00000040,inset_0_0_4px_#ffffff80] dark:shadow-[0_2px_4px_#00000060,0_-2px_4px_#00000060,inset_0_0_4px_#55555580]"
              : variant === "hover-1"
              ? "shadow-[-1px_1px_4px_#00000040,inset_-1px_1px_4px_#ffffff] dark:shadow-none"
              : "shadow-[inset_-2px_2px_2px_#00000030] dark:shadow-[inset_-2px_2px_2px_#00000050]"
          }
          ${
            variant === "not-select"
              ? "bg-[#eaeef1] dark:bg-[#444c56]"
              : variant === "hover-1"
              ? "bg-[#B9D0AADB] dark:bg-[#347d39db]"
              : "bg-[#b9d0aa] dark:bg-[#347d39]"
          }
          transition-all duration-300
        `}
      />
    </div>
  );
};

CheckBox.propTypes = {
  active: PropTypes.bool,
  defaultActive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};