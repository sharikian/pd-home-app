"use client";
import PropTypes from "prop-types";
import { useState, JSX } from "react";

interface Props {
  active?: boolean;          // Controlled active state (optional)
  defaultActive?: boolean;   // Initial state for uncontrolled mode
  onClick?: () => void;      // Callback for radio-like behavior
  className?: string;        // Optional CSS class
}

export const CheckBox = ({
  active,
  defaultActive = false,
  onClick,
  className = "",
}: Props): JSX.Element => {
  // Determine if the component is controlled by the `active` prop
  const isControlled = active !== undefined;
  
  // Internal state for uncontrolled mode, initialized with defaultActive
  const [internalActive, setInternalActive] = useState(
    isControlled ? false : defaultActive
  );
  
  // Current active state: use `active` if controlled, otherwise `internalActive`
  const currentActive = isControlled ? active : internalActive;
  
  // Hover state for styling
  const [isHovered, setIsHovered] = useState(false);

  // Handle click behavior
  const handleClick = () => {
    if (onClick) {
      // Radio-like mode: only activate if not already active, and call onClick
      if (!currentActive) {
        if (!isControlled) {
          setInternalActive(true);
        }
        onClick();
      }
    } else {
      // Default mode: toggle the state
      if (!isControlled) {
        setInternalActive(!internalActive);
      }
    }
  };

  // Determine the visual variant based on active and hover states
  const variant = currentActive
    ? isHovered ? "hover-2" : "default"      // Selected states
    : isHovered ? "hover-1" : "not-select";  // Unselected states

  return (
    <div
      className={`flex items-center p-[3px] cursor-pointer relative ${
        variant === "not-select" ? "w-8 h-8 rotate-90" : "h-8 w-8"
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
        className={`rounded-sm relative ${
          variant === "hover-2"
            ? "w-[8px] h-[8px]"
            : variant === "hover-1"
            ? "w-[24px] h-[24px]"
            : "w-[20px] h-[20px]"
        } ${
          variant === "hover-1" || variant === "not-select"
            ? "shadow-[-1px_1px_4px_#00000040,inset_-1px_1px_4px_#ffffff] dark:shadow-none"
            : "shadow-[inset_-2px_2px_2px_#00000030] dark:shadow-[inset_-2px_2px_2px_#00000050]"
        } ${
          variant === "not-select"
            ? "bg-[#eaeef1] dark:bg-[#444c56]"
            : variant === "hover-1"
            ? "bg-[#B9D0AADB] dark:bg-[#347d39db]"
            : "bg-[#b9d0aa] dark:bg-[#347d39]"
        } transition-all duration-300`}
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