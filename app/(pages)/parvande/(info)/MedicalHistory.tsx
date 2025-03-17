"use client";
import React from "react";
import { Input, Button } from "@/app/components";
import { LoveHelp, Calendar, Plus } from "@/public/icons";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

const MedicalHistory = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-4">
        <div className="text-lg font-bold text-primary">سابقه پزشکی</div>
        <Image className="w-8 h-8" alt="Medical Icon" src={LoveHelp} />
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input title="تا تاریخ" placeholder="اکنون" />
        <DatePicker
          format="YYYY/MM/DD"
          calendar={persian}
          locale={gregorian_fa}
          className="w-full p-2 border border-[#1A604E] rounded-[5px] text-right bg-white"
          placeholder="1327/12/9"
          render={
            <Input
              title={"از تاریخ"}
              placeholder="22/03/1385"
              icon={Calendar}
            />
          }
        />
        <Input title="پزشک معالج" placeholder="دکتر شعیبی" />
        <DatePicker
          format="YYYY/MM/DD"
          calendar={persian}
          locale={gregorian_fa}
          className="w-full p-2 border border-[#1A604E] rounded-[5px] text-right bg-white"
          placeholder="1327/12/9"
          render={
            <Input
              title={"زمان شروع بیماری از"}
              placeholder="22/03/1385"
              icon={Calendar}
            />
          }
        />
      </div>

      {/* Add Button */}
      <Button
        text={"اضافه کردن"}
        variant="secondary"
        className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        icon={Plus}
      />
      <hr className="h-[0.1rem] bg-slate-300" />
    </div>
  );
};

export default MedicalHistory;
