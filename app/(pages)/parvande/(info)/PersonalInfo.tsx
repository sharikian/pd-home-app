"use client";
import React from "react";
import { Input } from "@/app/components";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { PersonalIcon, Calendar } from "@/public/icons";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-end gap-4">
        <div className="text-lg font-bold text-primary">مشخصات فردی</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={PersonalIcon} />
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DatePicker
          format="YYYY/MM/DD"
          calendar={persian}
          locale={gregorian_fa}
          className="w-full p-2 border border-[#1A604E] rounded-[5px] text-right bg-white"
          placeholder="1327/12/9"
          render={
            <Input title={"تولد"} placeholder="22/03/1385" icon={Calendar} />
          }
        />
        <Input title="کد ملی" placeholder="092547**89" />
        <Input title="نام و نام خانوادگی" placeholder="احمد شریفی" />
        <Input title="آدرس" placeholder="دانش آموز 64، پلاک 30" />
        <Input title="شغل" placeholder="بازنشسته" />
        <Input title="تحصیلات" placeholder="دیپلم" />
      </div>
      <hr className="h-[0.1rem] bg-slate-300" />

      {/* Contact Information */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold text-primary text-right">
          شماره تماس
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          {/* Column 1: Note (Centered, 1/3 width = 4/12 columns) */}
          <div className="col-span-1 md:col-span-4 flex items-center justify-center">
            <div className="text-sm text-gray-600 text-end max-w-80">
              درصورتی که شماره شما در هریک از پیام رسان ها با شماره تماس وارد
              شده متفاوت است، گزینه پیام رسان مورد نظر را غیرفعال کرده و شماره
              دیگر را وارد کنید
            </div>
          </div>

          {/* Column 2: Inputs and Checkboxes (2/3 width = 8/12 columns) */}
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {/* Row 1: Patient Contact */}
            <div className="flex items-end flex-row-reverse gap-4">
              <Input
                placeholder="0935***2315"
                title="بیمار"
                className="flex-1 w-full"
              />
              <div className="flex items-center gap-20 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">تلگرام</span>
                  <CheckBox />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">ایتا</span>
                  <CheckBox />
                </div>
              </div>
            </div>

            {/* Row 2: Companion Contact */}
            <div className="flex items-end flex-row-reverse gap-4">
              <Input
                placeholder="0915***4778"
                title="همراه"
                className="flex-1 w-full"
              />
              <div className="flex items-center gap-20 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">تلگرام</span>
                  <CheckBox />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">ایتا</span>
                  <CheckBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[0.1rem] bg-slate-300" />
    </div>
  );
};

export default PersonalInfo;
