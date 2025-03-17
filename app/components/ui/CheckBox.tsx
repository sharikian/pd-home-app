import PropTypes from "prop-types";
import { useReducer, JSX } from "react";

interface Props {
  active?: boolean;
  className?: string;
}

export const CheckBox = ({ active = false, className }: Props): JSX.Element => {
  const initialState = active ? "default" : "not-select";
  const [state, dispatch] = useReducer(reducer, { variant: initialState });

  return (
    <div
      className={`flex items-center p-[3px] cursor-pointer relative ${
        state.variant === "not-select" ? "w-6 h-6 rotate-90" : "h-6 w-6"
      } flex-col rounded-[4px] gap-2.5 bg-[#eaeef1] dark:bg-[#2d333b] overflow-hidden justify-center ${
        state.variant === "hover-1"
          ? "shadow-[inset_-7px_7px_4.7px_-5px_#00000059,inset_13px_-9px_4.3px_-12px_#ffffffa1] dark:shadow-none"
          : "" // حذف سایه‌های خارجی
      } ${className}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onClick={() => dispatch("click")}
      onMouseLeave={() => dispatch("mouse_leave")}
    >
      <div
        className={`rounded-sm relative ${
          state.variant === "hover-2"
            ? "w-[6px] h-[6px]"
            : state.variant === "hover-1"
            ? "w-[18px] h-[18px]"
            : "w-[14px] h-[14px]"
        } ${
          state.variant === "hover-1" || state.variant === "not-select"
            ? "shadow-[-1px_1px_4px_#00000040,inset_-1px_1px_4px_#ffffff] dark:shadow-none"
            : "shadow-[inset_-2px_2px_2px_#00000030] dark:shadow-[inset_-2px_2px_2px_#00000050]" // تورفتگی متمرکز بالا-راست
        } ${
          state.variant === "not-select"
            ? "bg-[#eaeef1] dark:bg-[#444c56]"
            : state.variant === "hover-1"
            ? "bg-[#B9D0AADB] dark:bg-[#347d39db]"
            : "bg-[#b9d0aa] dark:bg-[#347d39]"
        } transition-all duration-300`}
      />
    </div>
  );
};

function reducer(state: { variant: string }, action: string) {
  switch (state.variant) {
    case "default":
      return action === "click"
        ? { variant: "not-select" }
        : action === "mouse_enter"
        ? { variant: "hover-2" }
        : state;
    case "hover-2":
      return action === "mouse_leave"
        ? { variant: "default" }
        : action === "click"
        ? { variant: "not-select" }
        : state;
    case "not-select":
      return action === "click"
        ? { variant: "default" }
        : action === "mouse_enter"
        ? { variant: "hover-1" }
        : state;
    case "hover-1":
      return action === "mouse_leave"
        ? { variant: "not-select" }
        : action === "click"
        ? { variant: "default" }
        : state;
    default:
      return state;
  }
}

CheckBox.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};