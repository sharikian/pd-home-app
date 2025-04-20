"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { Button, Notice, DropDown, Input } from "@/app/components";
import { ArrowLeft, GreenDanger, Calendar } from "@/public/icons";
import ParkRow from "@/public/imgs/wents/parkRow.png";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { toast } from "react-toastify";
import { DateObject } from "react-multi-date-picker";

export const Went = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [visitType, setVisitType] = useState<string>(""); // State for visit type
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null); // State for date
  const [visitTime, setVisitTime] = useState<string>(""); // State for time

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handler for registering visit
  const handleRegisterVisit = () => {
    if (!visitType) {
      toast.error("لطفا نحوه ویزیت را انتخاب کنید"); // Please select the visit type
    } else if (!selectedDate) {
      toast.error("لطفا تاریخ را انتخاب کنید"); // Please select the date
    } else if (!visitTime) {
      toast.error("لطفا ساعت را انتخاب کنید"); // Please select the time
    } else {
      toast.success("زمان ویزیت با موفقیت ثبت شد"); // Visit time registered successfully
      // Add logic here to save the visit (e.g., API call)
    }
  };

  // Sample options (replace with actual options)
  const visitTypeOptions = ["فیزیوتراپی", "کاردرمانی", "گفتار درمانی"];
  const timeOptions = ["09:00", "10:00", "11:00", "12:00"];

  return (
    <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-0 dark:bg-slate-800 dark:p-4 dark:rounded-xl">
      <div
        className="flex gap-1 flex-row-reverse items-center text-[#1A604E] dark:text-emerald-400 font-black text-sm md:text-base cursor-pointer"
        onClick={toggleCollapse}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleCollapse()}
      >
        <Image
          src={ArrowLeft}
          alt="^"
          className={`w-4 h-4 md:w-6 md:h-6 dark:invert transition-transform duration-300 ${
            isCollapsed ? "rotate-90" : "rotate-0"
          }`}
        />
        <Image
          src={ParkRow}
          alt="❤️"
          className="w-6 h-6 md:w-8 md:h-8 dark:invert"
        />
        <span>توان بخشی</span>
      </div>

      {!isCollapsed && (
        <>
          <div className="flex gap-3 flex-col-reverse md:flex-row items-center">
            <Notice
              className="w-full dark:bg-emerald-900/30 dark:text-emerald-100"
              variant="secondary"
              value="شما در حال حاضر نیاز به ویزیت توسط متخصص توانبخشی دارید، لطفا زمان ویزیت توانبخشی خود را انتخاب و ثبت کنید."
              center="text-start"
            />
            <Image
              src={GreenDanger}
              alt="!"
              className="w-6 h-6 md:w-14 md:h-14 dark:invert hidden md:block"
            />
          </div>
          <>
            <div className="flex flex-col-reverse md:flex-row-reverse gap-4 justify-end">
              <div className="flex-1 min-w-[200px]">
                <div className="flex flex-col gap-3">
                  <span className="text-[#1A604E] dark:text-emerald-400 text-end text-base md:text-lg">
                    نحوه ویزیت
                  </span>
                  <DropDown
                    placeholder="انتخاب کنید"
                    options={visitTypeOptions}
                    className="dark:bg-slate-700 dark:text-white"
                    variant="input-like"
                    value={visitType}
                    onChange={(value) => setVisitType(value)}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <div className="flex flex-col gap-3">
                  <span className="text-[#1A604E] dark:text-emerald-400 text-end text-base md:text-lg">
                    تاریخ
                  </span>
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
                    className="w-full p-2 border border-[#1A604E] rounded-[5px] text-right bg-white green"
                    placeholder="1327/12/9"
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date as DateObject)}
                    render={
                      <Input
                        placeholder=" "
                        icon={Calendar}
                      />
                    }
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
                    options={timeOptions}
                    className="dark:bg-slate-700 dark:text-white"
                    variant="input-like"
                    value={visitTime}
                    onChange={(value) => setVisitTime(value)}
                  />
                </div>
              </div>
            </div>

            <Button
              text={"ثبت زمان ویزیت"}
              variant="secondary"
              className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
              onClick={handleRegisterVisit}
            />
          </>
        </>
      )}
    </div>
  );
};