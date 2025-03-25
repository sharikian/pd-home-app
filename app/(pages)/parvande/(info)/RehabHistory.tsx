"use client";
import React from "react";
import { Button, DropDown, Input } from "@/app/components";
import { Calendar, Plus } from "@/public/icons";
import ParkRow from "@/public/imgs/wents/parkRow.png";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

const RehabHistory = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-4">
        <div className="text-lg font-bold text-primary dark:text-emerald-100">
          سابقه توانبخشی
        </div>
        <Image
          className="w-8 h-8 dark:invert"
          alt="Rehab Icon"
          src={ParkRow}
        />
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DatePicker
          format="YYYY/MM/DD"
          calendar={persian}
          months={[
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ]}
          locale={gregorian_fa}
          className="w-full p-2 border border-[#1A604E] dark:border-emerald-500 rounded-[5px] text-right bg-white dark:bg-slate-800"
          placeholder="1327/12/9"
          render={
            <Input
              title={"تاریخ مراجعه"}
              placeholder="22/03/1385"
              icon={Calendar}
            />
          }
        />
        <Input title="کارشناس توانبخشی" placeholder=" " />
        <DropDown
          variant="input-like"
          options={["کاردرمانی", "فیزیوتراپی"]}
          placeholder="نوع توانبخشی"
          title="نوع توانبخشی"
        />
        <Input title="علت قطع جلسات" placeholder=" " />
        <Input title="نتیجه جلسات" placeholder=" " />
        <Input title="تعداد جلسات" type="number" placeholder="12" />
      </div>

      {/* Add Button */}
      <Button
        text={"اضافه کردن توانبخشی"}
        variant="secondary"
        className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        icon={Plus}
      />
      <hr className="h-[0.1rem] bg-slate-300 dark:bg-slate-600" />
    </div>
  );
};

export default RehabHistory;