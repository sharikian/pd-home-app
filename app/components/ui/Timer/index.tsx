"use client"
import { useState, useEffect } from "react";
import { AnimatedNumber } from "./AnimatedNumber";
import { convertToPersian } from "@/app/util";

interface Props {
  day: number;
  hour: number;
  minutes: number;
  className?: string;
  divClassName?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export const Timer = ({ day, hour, minutes, className, divClassName }: Props) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTargetDate = () => {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth(), day, hour, minutes);
      if (target < now) target.setMonth(target.getMonth() + 1);
      return target;
    };

    const calculateTimeLeft = (target: Date): TimeLeft => {
      const difference = target.getTime() - Date.now();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    };

    const targetDate = calculateTargetDate();
    const updateTimer = () => setTimeLeft(calculateTimeLeft(targetDate));
    
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [day, hour, minutes]);

  return (
    <div
      className={`flex flex-col w-fit items-end px-2.5 py-2 relative rounded-[15px] overflow-hidden backdrop-blur-[293px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(293px)_brightness(100%)] [background:linear-gradient(180deg,rgba(185,208,170,0.66)_0%,rgba(255,255,255,0)_54.99%,rgba(185,208,170,0.66)_98.32%)] ${className}`}
    >
      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        {["روز", "ساعت", "دقیقه"].map((label) => (
          <div 
            key={label}
            className="inline-flex items-center justify-center gap-1 p-1 relative flex-[1_1_0] min-w-[60px]"
          >
            <div className="relative w-fit [font-family:'PelakFA-light',Helvetica] font-normal text-[#1a604e] text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <AnimatedNumber value={convertToPersian(timeLeft.days)} className={`${divClassName} min-w-[40px]`} />
        <div className="relative w-fit [font-family:'Poppins-Bold',Helvetica] font-bold text-[#1a604e] text-[32px] mx-1">
          :
        </div>
        <AnimatedNumber value={convertToPersian(timeLeft.hours)} className="min-w-[40px]" />
        <div className="relative w-fit [font-family:'Poppins-Bold',Helvetica] font-bold text-[#1a604e] text-[32px] mx-1">
          :
        </div>
        <AnimatedNumber value={convertToPersian(timeLeft.minutes)} className="min-w-[40px]" />
      </div>
    </div>
  );
};