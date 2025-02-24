import { Chip } from "./Chip";
import Image from "next/image";
import BloodIcon from '@/public/imgs/myplan/blood.svg';
import ExperimentalIcon from '@/public/imgs/myplan/experimental.svg';
import { JSX } from "react";

export const Experimental = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center md:items-end gap-7 p-5 bg-[#eaeef1] dark:bg-slate-700 rounded-[15px] overflow-scroll h-[100%] shadow-md dark:shadow-slate-900/50">
      <div className="flex items-center gap-[5px]">
        <p className="text-2xl dark:text-slate-200 font-medium">آزمایشات</p>
        <Image 
          className="!relative !w-[42px] !h-[42px] dark:invert" 
          src={ExperimentalIcon} 
          alt="آزمایشی" 
        />
      </div>
      <div className="flex flex-col items-end gap-3 w-full">
        <Chip
          icon={BloodIcon}
          text="MRI"
          // className="dark:bg-emerald-800 dark:text-emerald-100"
        />
        <Chip
          icon={BloodIcon}
          text="MRI"
          varient="secondary"
          // className="dark:bg-slate-600 dark:text-slate-200"
        />
      </div>
    </div>
  );
};