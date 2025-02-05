"use client"
import { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export const AnimatedNumber = ({ value, className }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (value !== displayValue) {
      setAnimationKey(prev => prev + 1);
      setDisplayValue(value);
    }
  }, [value]);

  return (
    <div 
      key={animationKey}
      className={`relative h-[40px] flex justify-center overflow-hidden ${className}`}
    >
      <div className="absolute animate-slide-in [font-family:'Poppins-Bold',Helvetica] font-bold text-[#1a604e] text-[32px] text-center tracking-[0] leading-[normal]">
        {displayValue.toString().padStart(2, "0")}
      </div>
    </div>
  );
};