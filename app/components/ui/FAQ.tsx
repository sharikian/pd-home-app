"use client"
import { useState } from 'react';
import { ArrowDown } from '../../static/icons';

interface FAQProps {
  title: string;
  description: string;
  variant?: 'primary' | 'warning';
  className?: string;
}

export const FAQ = ({ 
  title,
  description,
  variant = 'primary',
  className = ''
}: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const variantStyles = {
    primary: {
      border: '#1A604E',
      title: '#1A604E',
      iconFilter: 'brightness(0) saturate(100%) invert(13%) sepia(15%) saturate(1817%) hue-rotate(81deg) brightness(94%) contrast(86%)'
    },
    warning: {
      border: '#D85562',
      title: '#D85562',
      iconFilter: 'brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(2013%) hue-rotate(327deg) brightness(93%) contrast(92%)'
    }
  };

  return (
    <div
      className={`max-w-[1414px] w-full flex items-start gap-2.5 shadow-[-8px_23px_81.4px_#1a604e1a,8px_-23px_81.4px_#ffffff] p-2.5 overflow-hidden rounded-[15px] bg-[#eaeef1] relative transition-all duration-300 ${className}`}
      style={{
        border: `1.5px solid ${variantStyles[variant].border}`,
        height: isOpen ? 'auto' : '81px'
      }}
    >
      <div className="flex flex-col w-full">
        <div 
          className="flex items-center justify-between w-full p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 
            className="flex-1 [font-family:'Pelak-Bold',Helvetica] font-bold text-2xl tracking-[0] leading-[normal] [direction:rtl] transition-colors duration-300"
            style={{ color: variantStyles[variant].title }}
          >
            {title}
          </h3>
          
          <img
            className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ filter: variantStyles[variant].iconFilter }}
            src={ArrowDown}
            alt="Toggle icon"
          />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="p-4  font-medium text-black text-xl tracking-[0] leading-[normal] [direction:rtl]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};