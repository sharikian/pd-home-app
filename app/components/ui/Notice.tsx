interface Props {
  variant?: "primary" | "warning";
  value: string;
  className?: string;
}

export const Notice = ({
  variant = "primary",
  value,
  className = "",
}: Props) => {
  const variantStyles = {
    primary: {
      color: '#1A604E'
    },
    warning: {
      color: '#D85562'
    },
  };

  return (
    <div className="flex flex-col items-start gap-2.5 p-2.5 relative bg-[#eaeef1] rounded-[15px] overflow-hidden shadow-shadows w-fit">
      <div
        className={`relative flex items-center justify-end gap-2.5 overflow-hidden rounded-[5px] border-[1.5px] border-solid px-[9px] py-[7px] ${className}`}
        style={{ borderColor: variantStyles[variant].color }}
      >
        <p className={`relative w-fit mt-[-1.00px] [font-family:'Pelak-Regular',Helvetica] font-normal text-lg text-left tracking-[0] leading-[normal] [direction:rtl]`}
        style={{color: variantStyles[variant].color}}>
          {value}
        </p>
      </div>
    </div>
  );
};
