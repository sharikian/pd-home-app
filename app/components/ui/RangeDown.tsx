
interface DropDownProps {
  className?: string;
  options: number[];
}

export const RangeDown = ({ className, options }: DropDownProps): JSX.Element => (
  <select
    className={`flex h-[50px] items-center justify-end gap-2.5 px-[9px] py-1 relative rounded-[5px] overflow-hidden border-[1.5px] border-solid border-[#1a604e] bg-[#eaeef1] text-[#1a604e] ${className}`}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

