import { Chip } from "./Chip";
import Image from "next/image";
import BloodIcon from '@/public/imgs/myplan/blood.svg';
import { MRI } from "@/public/icons";
import ExperimentalIcon from '@/public/imgs/myplan/experimental.svg';
import { JSX } from "react";

export const Experimental = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center lg:items-stretch gap-4 p-4 bg-[#eaeef1] dark:bg-slate-700 rounded-xl overflow-hidden h-full shadow-md dark:shadow-slate-900/50 transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-center w-full gap-3 justify-center">
        <h2 className="text-xl md:text-2xl dark:text-slate-200 font-medium flex items-center gap-2">
          <span>آزمایشات</span>
          <Image 
            className="w-8 h-8 md:w-10 md:h-10 dark:invert shrink-0"
            src={ExperimentalIcon} 
            alt="آزمایشی"
            aria-hidden="true"
          />
        </h2>
      </div>

      {/* Chips Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-3 w-full overflow-y-auto custom-scrollbar">
        <Chip
          icon={BloodIcon}
          text="آزمایش خون"
          varient="secondary"
        />
        <Chip
          icon={MRI}
          text="MRI"
          varient="danger"
        />
      </div>
    </div>
  );
};