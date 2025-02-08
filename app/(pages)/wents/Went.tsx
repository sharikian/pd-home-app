import React, { JSX } from "react";
import Image from "next/image";
import { Button, Notice, DropDown } from "@/app/components";
import { ArrowLeft, GreenDanger } from "@/public/icons";
import ParkRow from "@/public/imgs/wents/parkRow.svg";

export const Went = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-0">
      <div className="flex gap-1 flex-row-reverse items-center text-[#1A604E] font-black text-sm md:text-base">
        <Image src={ArrowLeft} alt="^" className="w-4 h-4 md:w-6 md:h-6"/>
        <Image src={ParkRow} alt="❤️" className="w-6 h-6 md:w-8 md:h-8"/>
        <span>توان بخشی</span>
      </div>
      
      <div className="flex gap-3 flex-col md:flex-row items-end">
        <Image src={GreenDanger} alt="!" className="w-6 h-6 md:w-8 md:h-8"/>
        <Notice 
          className="w-full" 
          variant="secondary" 
          value="شما در حال حاضر نیاز به ویزیت توسط متخصص توانبخشی دارید، لطفا زمان ویزیت توانبخشی خود را انتخاب و ثبت کنید." 
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] text-end text-base md:text-lg">نحوه ویزیت</span>
            <DropDown placeholder="انتخاب کنید" options={[]} />
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] text-end text-base md:text-lg">تاریخ</span>
            <DropDown placeholder="تاریخ وارد کنید" options={[]} />
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="flex flex-col gap-3">
            <span className="text-[#1A604E] text-end text-base md:text-lg">ساعت</span>
            <DropDown placeholder="انتخاب کنید" options={[]} />
          </div>
        </div>
      </div>

      <Button 
        text={"ثبت زمان ویزیت"} 
        variant="secondary" 
        className="w-full md:w-fit self-end"
      />
    </div>
  );
};