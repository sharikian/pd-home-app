"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, FilePicker } from "@/app/components";
import { Calendar } from "@/public/icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { toast } from "react-toastify";

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
  // State for inputs
  const [testDate, setTestDate] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // Store an array of Files
  const [extraValues, setExtraValues] = useState<{ [key: string]: string }>(
    extraInputs.reduce((acc, [label]) => ({ ...acc, [label]: "" }), {})
  );

  // Handler for DatePicker
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (date: any) => {
    setTestDate(date ? date.format("YYYY/MM/DD") : "");
  };

  // Handler for FilePicker, updated to accept FileList
  const handleFileSelected = (files: FileList) => {
    setSelectedFiles(Array.from(files)); // Convert FileList to an array of File objects
  };

  // Handler for extra inputs
  const handleExtraInputChange = (label: string, value: string) => {
    setExtraValues((prev) => ({ ...prev, [label]: value }));
  };

  // Handler for Add button
  const handleAdd = () => {
    const hasExtraInputs = extraInputs.length > 0;
    const allExtraFilled = extraInputs.every(
      ([label]) => extraValues[label].trim() !== ""
    );

    if (!testDate) {
      toast.error("لطفا تاریخ آزمایش را وارد کنید"); // Please enter the test date
    } else if (selectedFiles.length === 0) {
      toast.error("لطفا حداقل یک فایل آزمایش را انتخاب کنید"); // Please select at least one test file
    } else if (hasExtraInputs && !allExtraFilled) {
      toast.error("لطفا تمام فیلدهای اضافی را پر کنید"); // Please fill all extra fields
    } else {
      toast.success("آزمایش ثبت شد"); // Test registered
      // Add your logic here to process the data
    }
  };

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
        <div className="flex flex-col md:flex-row justify-between mb-12 mx-4 md:mx-0 gap-4 md:gap-0">
          {extraInputs.map(([label, placeholder], index) => (
            <div
              className="flex gap-2 items-center"
              style={{ direction: "rtl" }}
              key={index}
            >
              <span className="text-black dark:text-slate-200 whitespace-nowrap">
                {label}
              </span>
              <Input
                title=""
                className="max-w-24"
                placeholder={placeholder}
                value={extraValues[label]}
                onChange={(e) => handleExtraInputChange(label, e.target.value)}
              />
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
          className="w-full p-2 border border-[#1A604E] dark:border-emerald-500 rounded-[5px] text-right bg-white dark:bg-slate-800 green"
          onChange={handleDateChange}
          render={
            <div
              className="flex gap-2 items-center"
              style={{ direction: "rtl" }}
            >
              <span className="text-black dark:text-slate-200 whitespace-nowrap">
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
          onFileSelected={handleFileSelected} // Pass the updated handler
          className="dark:bg-slate-800 dark:border-emerald-500 dark:text-emerald-100"
        />
      </div>

      {/* Add Button */}
      <Button
        text={"ثبت آزمایش"}
        variant="secondary"
        className="w-full md:w-fit md:ml-12 self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        onClick={handleAdd}
      />
      <hr className="h-[0.1rem] bg-slate-300 dark:bg-slate-600 mt-2" />
    </div>
  );
};

export default TestComponent;