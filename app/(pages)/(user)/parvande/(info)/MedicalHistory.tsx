"use client";
import React, { useState } from "react";
import { Input, Button } from "@/app/components";
import { LoveHelp, Calendar, Plus } from "@/public/icons";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { toast } from "react-toastify";

const MedicalHistory = () => {
  // State for each input field
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [physician, setPhysician] = useState("");
  const [illnessStartDate, setIllnessStartDate] = useState("");

  // Handler for Add button click
  const handleAdd = () => {
    if (!fromDate || !toDate || !physician || !illnessStartDate) {
      toast.error("لطفا تمام فیلدها را پر کنید"); // Please fill all fields
    } else {
      toast.success("سابقه پزشکی اضافه شد"); // Medical history added
      // Add logic here to process the data if needed
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-4">
        <div className="text-lg font-bold text-primary dark:text-emerald-100">
          سابقه پزشکی
        </div>
        <Image
          className="w-8 h-8 dark:invert"
          alt="Medical Icon"
          src={LoveHelp}
        />
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          title="تا تاریخ"
          placeholder="اکنون"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
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
          className="w-full p-2 border border-[#1A604E] dark:border-emerald-500 rounded-[5px] text-right bg-white dark:bg-slate-800 green"
          onChange={(date) => setFromDate(date ? date.format("YYYY/MM/DD") : "")}
          render={
            <Input
              title={"از تاریخ"}
              placeholder="22/03/1385"
              icon={Calendar}
            />
          }
        />
        <Input
          title="پزشک معالج"
          placeholder=" "
          value={physician}
          onChange={(e) => setPhysician(e.target.value)}
        />
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
          className="w-full p-2 border border-[#1A604E] dark:border-emerald-500 rounded-[5px] text-right bg-white dark:bg-slate-800 green"
          onChange={(date) =>
            setIllnessStartDate(date ? date.format("YYYY/MM/DD") : "")
          }
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
        onClick={handleAdd}
      />
      <hr className="h-[0.1rem] bg-slate-300 dark:bg-slate-600" />
    </div>
  );
};

export default MedicalHistory;