"use client";
import React from "react";
import Image from "next/image";
import { Button, Input, FilePicker } from "@/app/components";
import { Calendar } from "@/public/icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

interface TestComponentProps {
  title: string;
  icon: string;
  extraInputs?: [string, string][]; // Array of [label, placeholder] pairs
}

const TestComponent: React.FC<TestComponentProps> = ({
  title,
  icon,
  extraInputs = [],
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary dark:text-emerald-100">
          {title}
        </div>
        <Image
          className="w-8 h-8 dark:invert"
          alt={`${title} Icon`}
          src={icon}
        />
      </div>

      {/* Extra Inputs (for BMD) */}
      {extraInputs.length > 0 && (
        <div className="flex flex-col md:flex-row md:flex-row-reverse justify-between mb-12 mx-4 md:mx-0">
          {extraInputs.map((item, index) => (
            <div
              className="flex gap-2 items-center"
              style={{ direction: "rtl" }}
              key={index}
            >
              <span className="text-black dark:text-slate-200 whitespace-nowrap mt-4">
                {item[0]}
              </span>
              <Input title="" className="max-w-24" placeholder={item[1]} />
            </div>
          ))}
        </div>
      )}

      {/* DatePicker and FilePicker */}
      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center mx-4 md:mx-12 gap-4 md:gap-0">
        <DatePicker
          format="YYYY/MM/DD"
          calendar={persian}
          locale={gregorian_fa}
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
          className="w-full p-2 border border-[#1A604E] dark:border-emerald-500 rounded-[5px] text-right bg-white dark:bg-slate-800"
          render={
            <div
              className="flex gap-2 items-center"
              style={{ direction: "rtl" }}
            >
              <span className="text-black dark:text-slate-200 whitespace-nowrap mt-4">
                تاریخ
              </span>
              <Input
                title=""
                className="max-w-28 md:max-w-28 w-full md:w-auto"
                placeholder=" "
                icon={Calendar}
              />
            </div>
          }
        />
        <FilePicker
          buttonName={"انتخاب فایل از سیستم"}
          title={"عکس آزمایش"}
          onFileSelected={() => {
            throw new Error("Function not implemented.");
          }}
          className="dark:bg-slate-800 dark:border-emerald-500 dark:text-emerald-100"
        />
      </div>

      {/* Add Button */}
      <Button
        text={"ثبت آزمایش"}
        variant="secondary"
        className="w-full md:w-fit ml-4 md:ml-12 self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
      />
      <hr className="h-[0.1rem] bg-slate-300 dark:bg-slate-600 mt-2" />
    </div>
  );
};

export default TestComponent;