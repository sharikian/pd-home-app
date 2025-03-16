import { ArrowDown } from "@/public/icons";
import { PersonCard } from "./PersonCard";
import Image from "next/image";

export const GroupShow = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-row md:items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image 
            src={ArrowDown} 
            alt="arrow icon" 
            className="w-6 h-6 transform rotate-90 dark:invert"
          />
          <span className="text-[#1a604e] dark:text-emerald-400 text-base md:text-lg">
            ویدیو های بیشتر
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-medium text-black dark:text-white">
          تغذیه
        </h2>
      </div>

      <div className="overflow-x-auto scroll-smooth flex dark:bg-slate-800/50 rounded-xl py-4">
        <div className="flex gap-4 md:gap-6 flex-nowrap justify-between w-full">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[360px]">
              <PersonCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};