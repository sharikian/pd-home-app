import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder?: string;
  className?: string;
  maxWidth?: string;
  centerize?: boolean;
  variant?: 'primary' | 'warning';
}

export const Input = ({ 
  title,
  placeholder, 
  className,
  maxWidth = "w-[429px]",
  centerize = false,
  variant = 'primary',
  type = 'text',
  ...rest
}: InputProps) => {
  const variantStyles = {
    primary: {
      border: '#1A604E',
      placeholder: '#1A604EBA',
    },
    warning: {
      border: '#D85562',
      placeholder: '#D85562BA',
    }
  };

  return (
    <div className={`flex flex-col gap-1 relative ${maxWidth} mx-auto`}>
      <div className="w-full flex items-center justify-end p-2.5">
        <div className={`font-bold text-[${variantStyles[variant].border}] dark:text-emerald-600 text-lg`}>
          {title}
        </div>
      </div>
      
      <div className="w-full rounded-[15px] bg-[#eaeef165] dark:bg-transparent p-2.5 py-0">
        <input
          {...rest}
          type={type}
          placeholder={placeholder || "متن مورد نظر را وارد کنید"}
          className={`
            w-full h-[50px] px-[5px] rounded-[5px] border-[1.5px] border-solid
            bg-white text-lg ${className}
            border-[${variantStyles[variant].border}]
            border-[2px]
            outline-none
            text-[${variantStyles[variant].border}]
            placeholder:text-[${variantStyles[variant].placeholder}]
            ${centerize ? 'text-center placeholder:text-center' : 'text-right placeholder:text-right'}
          `}
        />
      </div>
    </div>
  );
};