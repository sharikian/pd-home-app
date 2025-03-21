"use client";
import { Button, Input } from "@/app/components";
import Image from "next/image";
import { FilePicker } from "@/app/components";
import { Bone, Calendar } from "@/public/icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

const BMD = () => {
  const items = [["HIP FEX", '15%'], ["Major osteoporotic FX", '3.4%'], ["HIP", '0.728'], ["SPINE", '0.735']];
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">BMD</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={Bone} />
      </div>
      <div className="flex flex-row-reverse justify-between mb-12">
        {items.map((item, index) => (
          <div
            className="flex gap-2 items-center"
            style={{ direction: "rtl" }}
            key={index}
          >
            <span className="text-black whitespace-nowrap mt-4">{item[0]}</span>
            <Input title="" className="max-w-24" placeholder={item[1]} />
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse justify-between items-center mx-12">
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
          className="w-full p-2 border border-[#1A604E] rounded-[5px] text-right bg-white"
          render={
            <div
              className="flex gap-2 items-center"
              style={{ direction: "rtl" }}
            >
              <span className="text-black whitespace-nowrap mt-4">تاریخ</span>
              <Input
                title=""
                className="max-w-28"
                placeholder=" "
                icon={Calendar}
              />
            </div>
          }
        />
        <FilePicker
          buttonName={"انتخاب فایل از سیستم"}
          title={"عکس آزمایش"}
          onFileSelected={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      {/* Add Button */}
      <Button
        text={"ثبت آزمایش"}
        variant="secondary"
        className="w-full md:w-fit ml-12 self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
      />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default BMD;
