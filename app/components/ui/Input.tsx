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
  maxWidth = "max-w-[429px]",
  centerize = false,
  variant = 'primary',
  type = 'text',
  ...rest
}: InputProps) => {
  const variantStyles = {
    primary: {
      border: '#1A604E',
      placeholder: '#1A604EBA',
      focusRing: '#1A604E'
    },
    warning: {
      border: '#D85562',
      placeholder: '#D85562BA',
      focusRing: '#D85562'
    }
  };

  return (
    <div className={`flex flex-col items-end gap-1 relative w-72 ${maxWidth} mx-auto`}>
      <div className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] z-[1] w-full">
        <div className={`relative w-fit font-medium text-[${variantStyles[variant].border}] text-lg tracking-[0] leading-[normal]`}>
          {title}
        </div>
      </div>
      
      <input
        {...rest}
        type={type}
        placeholder={placeholder || "متن مورد نظر را وارد کنید"}
        className={`
          w-full h-[50px] px-4 py-0.5 rounded-[5px] border-[2px] border-solid text-lg 
          focus:outline-none focus:ring-2 focus:border-transparent max-w-72 ${className}
          border-[${variantStyles[variant].border}]
          text-[${variantStyles[variant].border}]
          shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff]
          placeholder:text-[${variantStyles[variant].placeholder}]
          ${centerize ? 'text-center placeholder:text-center' : 'text-right placeholder:text-right'}
          focus:ring-[${variantStyles[variant].focusRing}]
        `}
      />
    </div>
  );
};