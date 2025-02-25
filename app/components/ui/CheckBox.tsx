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
      className={`flex items-center p-[5px] relative ${
        state.variant === "not-select" ? "w-10 h-10 rotate-90" : "h-10 w-10"
      } flex-col rounded-[7px] gap-2.5 bg-[#eaeef1] dark:bg-[#2d333b] overflow-hidden justify-center ${
        state.variant === "hover-1"
          ? "shadow-[inset_-7px_7px_4.7px_-5px_#00000059,inset_13px_-9px_4.3px_-12px_#ffffffa1] dark:shadow-none"
          : "shadow-[-6px_7px_21px_-6px_#1a604e,2px_-1px_66.3px_18px_#ffffff] dark:shadow-[-6px_7px_21px_-6px_#1a604e,2px_-1px_66.3px_18px_#2d333b]"
      } ${
        state.variant === "not-select"
          ? "shadow-[inset_6px_7px_21px_-6px_#6b7280,2px_-1px_66.3px_18px_#f8fafc] dark:shadow-none"
          : ""
      } ${className}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onClick={() => dispatch("click")}
      onMouseLeave={() => dispatch("mouse_leave")}
    >
      <div
        className={`rounded-sm relative ${
          state.variant === "hover-2"
            ? "w-2.5 h-2.5"
            : state.variant === "hover-1"
            ? "w-[30px] h-[30px]"
            : "w-[22px] h-[22px]"
        } ${
          state.variant === "hover-1" || state.variant === "not-select"
            ? "shadow-[-1px_1px_4px_#00000040,inset_-1px_1px_4px_#ffffff] dark:shadow-none"
            : "shadow-[inset_-1px_1px_4px_#00000040,-1px_1px_4px_#ffffff] dark:shadow-[inset_-1px_1px_4px_#00000080,-1px_1px_4px_#ffffff20]"
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

// Reducer function remains the same
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