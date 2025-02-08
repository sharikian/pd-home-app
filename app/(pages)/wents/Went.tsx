import React, { JSX } from "react";
import Image from "next/image";
import { Button, Notice, DropDown } from "@/app/components";
import { ArrowLeft, GreenDanger } from "@/public/icons";
import ParkRow from "@/public/imgs/wents/parkRow.svg";

export const Went = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex gap-1 flex-row-reverse items-center text-[#1A604E] font-black">
            <Image src={ArrowLeft} alt="^"/>
            <Image src={ParkRow} alt="❤️"/>
            <span>توان بخشی</span>
        </div>
        <div className="flex gap-3 justify-end">
            <Notice className="w-full" variant="secondary" value="شما در حال حاضر نیاز به ویزیت توسط متخصص توانبخشی دارید، لطفا زمان ویزیت توانبخشی خود را انتخاب و ثبت کنید." />
            <Image src={GreenDanger} alt="!"/>
        </div>
        <div className="flex gap-4 justify-end content-around">
            <div className="flex flex-col gap-3">
                <span className="text-[#1A604E] text-end text-lg">نحوه ویزیت</span>
                <DropDown placeholder="انتخاب کنید" options={[]} className="border-r-2 pr-4"  />
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-[#1A604E] text-end text-lg">تاریخ</span>
                <DropDown placeholder="تاریخ وارد کنید" options={[]} className="border-r-2 pr-4" />
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-[#1A604E] text-end text-lg">ساعت</span>
                <DropDown placeholder="انتخاب کنید" options={[]} />
            </div>
        </div>
        <Button text={"ثبت زمان ویزیت"} variant="secondary" className="w-fit"/>
    </div>
  );
};
