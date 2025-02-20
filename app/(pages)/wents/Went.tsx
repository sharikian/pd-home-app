import React, { JSX } from "react";
import Image from "next/image";
import { Button, Notice, DropDown } from "@/app/components";
import { ArrowLeft, GreenDanger } from "@/public/icons";
import ParkRow from "@/public/imgs/wents/parkRow.svg";

export const Went = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-0 dark:bg-slate-800 dark:p-4 dark:rounded-xl">
      <div className="flex gap-1 flex-row-reverse items-center text-[#1A604E] dark:text-emerald-400 font-black text-sm md:text-base">
        <Image 
          src={ArrowLeft} 
          alt="^" 
          className="w-4 h-4 md:w-6 md:h-6 dark:invert"
        />
        <Image 
          src={ParkRow} 
          alt="❤️" 
          className="w-6 h-6 md:w-8 md:h-8 dark:invert"
        />
        <span>توان بخشی</span>
      </div>
      
      <div className="flex gap-3 flex-col-reverse md:flex-row items-center">
        <Notice 
          className="w-full dark:bg-emerald-900/30 dark:text-emerald-100" 
          variant="secondary" 
          value="شما در حال حاضر نیاز به ویزیت توسط متخصص توانبخشی دارید، لطفا زمان ویزیت توانبخشی خود را انتخاب و ثبت کنید." 
        />
        <Image 
          src={GreenDanger} 
          alt="!" 
          className="w-6 h-6 md:w-8 md:h-8 dark:invert"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] dark:text-emerald-400 text-end text-base md:text-lg">
              نحوه ویزیت
            </span>
            <DropDown 
              placeholder="انتخاب کنید" 
              options={[]} 
              className="dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] dark:text-emerald-400 text-end text-base md:text-lg">
              تاریخ
            </span>
            <DropDown 
              placeholder="تاریخ وارد کنید" 
              options={[]} 
              className="dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] dark:text-emerald-400 text-end text-base md:text-lg">
              ساعت
            </span>
            <DropDown 
              placeholder="انتخاب کنید" 
              options={[]} 
              className="dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      <Button 
        text={"ثبت زمان ویزیت"} 
        variant="secondary" 
        className="w-full md:w-fit self-end dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
      />
    </div>
  );
};