import { Chip } from "./Chip";
import Image from "next/image";
import BloodIcon from '@/public/imgs/myplan/blood.svg';
import ExperimentalIcon from '@/public/imgs/myplan/experimental.svg';
import { JSX } from "react";

export const Experimental = (): JSX.Element => {
  return (
    <div className="flex flex-col items-end gap-7 p-5 bg-[#eaeef1] rounded-[15px] overflow-scroll h-[100%]">
      <div className="flex items-center gap-[5px]">
        <p className="text-2xl">آزمایشات</p>
        <Image className="!relative !w-[42px] !h-[42px]" src={ExperimentalIcon} alt="آزمایشی" />
      </div>
      <div className="flex flex-col items-end gap-3 w-full">
        <Chip
          icon={BloodIcon}
          text="MRI"
        />
        <Chip
          icon={BloodIcon}
          text="MRI"
          varient="secondary"
        />
      </div>
    </div>
  );
};
