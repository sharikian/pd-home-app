"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Input, DropDown, Button } from "@/app/components";
import { ArrowLeft, Plus } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

interface QuesProps {
  title: string;
  icon: string | StaticImageData;
  className?: string;
  formRows: FormRowData[]; // Added to receive form data
  onChange: (formRows: FormRowData[]) => void; // Added to notify parent of changes
}

interface FormRowProps {
  rowNumber: number;
  index?: number;
  formData: FormRowData;
  onChange: (rowNumber: number, data: FormRowData) => void;
}

interface FormRowData {
  specialist: string;
  information: string;
  referralReason: string;
  description: string;
  visitDate: string;
  briefResult: string;
  fullReport: string;
}

const FormRow: React.FC<FormRowProps> = ({
  rowNumber,
  index = 0,
  formData,
  onChange,
}) => {
  const fieldStyles = (fieldIndex: number) => `
    w-full
    ${fieldIndex % 2 === 0 ? "bg-[#EAEEF1] dark:bg-[#2d333b]" : "bg-[#d4dadf] dark:bg-[#3b444b]"}
  `;

  const containerStyles = `
    flex items-center flex-col 
    ${window.innerWidth < 768 ? "gap-2 pt-4" : "gap-0"} 
    rounded-[15px] 
    border-r-[2px] border-r-[#B9D0AA] dark:border-r-emerald-400/50 
    border-l-[2px] border-l-[#B9D0AA] dark:border-l-emerald-400/50
    shadow-[0_2px_4px_rgba(0,0,0,0.1)]
    ${index % 2 === 0 ? "bg-[#EAEEF1] dark:bg-[#2d333b]" : "bg-[#d4dadf] dark:bg-[#3b444b]"}
  `;

  const textareaStyles = `
    w-[95%] ${
      window.innerWidth < 768 ? "h-24" : "h-32 md:h-40"
    } rounded-lg border-2 border-[#1A604E] dark:border-emerald-400/50
    p-4 text-lg md:text-xl placeholder:text-[#1A604EBA] dark:placeholder:text-emerald-200/80
    focus:outline-none focus:ring-2 focus:ring-[#1A604E] dark:focus:ring-emerald-400/50
    shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff] 
    dark:shadow-[inset_-1px_1px_4px_#00000080,_-1px_1px_4px_#1e293b]
    resize-none mt-0 mb-2 
    text-[#1A604E] dark:text-slate-200 text-right transition-all
    hover:border-[#1A604E]/80 dark:hover:border-emerald-400/70
    mt-2
  `;

  const labels = [
    "متخصص",
    "اطلاعات",
    "علت ارجاع",
    "توضیحات",
    "تاریخ مراجعه",
    "نتیجه مختصر",
    "گزارش کامل",
  ];

  const handleInputChange = (field: keyof FormRowData, value: string) => {
    onChange(rowNumber, { ...formData, [field]: value });
  };

  return (
    <div
      className={`flex flex-col gap-4 ${
        window.innerWidth < 768 ? "" : "min-w-[400px]"
      }`}
      style={{ width: "-webkit-fill-available" }}
    >
      <h2 className="text-black dark:text-slate-200 text-xl mr-4" dir="rtl">
        {rowNumber}
      </h2>
      <div className={containerStyles} dir="ltr">
        <DropDown
          options={["1", "2", "3"]}
          placeholder={window.innerWidth < 768 ? labels[0] : "انتخاب کنید"}
          variant="input-like"
          value={formData.specialist}
          onChange={(value) => handleInputChange("specialist", value)}
        />
        <div className={fieldStyles(1)}>
          <Input
            placeholder={window.innerWidth < 768 ? labels[1] : " "}
            bgIndex={1}
            value={formData.information}
            onChange={(e) => handleInputChange("information", e.target.value)}
          />
        </div>
        <div className={fieldStyles(2)}>
          <Input
            placeholder={window.innerWidth < 768 ? labels[2] : " "}
            bgIndex={2}
            value={formData.referralReason}
            onChange={(e) => handleInputChange("referralReason", e.target.value)}
          />
        </div>
        <div className={fieldStyles(3)}>
          <Input
            placeholder={window.innerWidth < 768 ? labels[3] : " "}
            bgIndex={3}
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
        <div className={fieldStyles(4)}>
          <Input
            placeholder={window.innerWidth < 768 ? labels[4] : " "}
            bgIndex={4}
            value={formData.visitDate}
            onChange={(e) => handleInputChange("visitDate", e.target.value)}
          />
        </div>
        <div className={fieldStyles(5)}>
          <Input
            placeholder={window.innerWidth < 768 ? labels[5] : " "}
            bgIndex={5}
            value={formData.briefResult}
            onChange={(e) => handleInputChange("briefResult", e.target.value)}
          />
        </div>
        <textarea
          className={`${textareaStyles} ${
            6 % 2 === 0
              ? "bg-[#EAEEF1] dark:bg-[#2d333b]"
              : "bg-[#d4dadf] dark:bg-[#3b444b]"
          }`}
          placeholder={window.innerWidth < 768 ? labels[6] : ""}
          style={{ direction: "rtl" }}
          value={formData.fullReport}
          onChange={(e) => handleInputChange("fullReport", e.target.value)}
        />
      </div>
    </div>
  );
};

const Ques = ({
  title,
  icon,
  className = "",
  formRows,
  onChange,
}: QuesProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapse = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIsCollapsed((prev: any) => !prev);
  };

  // Handler for form row changes
  const handleFormRowChange = (rowNumber: number, data: FormRowData) => {
    const updatedFormRows = formRows.map((row, index) =>
      index + 1 === rowNumber ? data : row
    );
    onChange(updatedFormRows);
  };

  // Handler for Add button
  const handleAdd = () => {
    const allRowsFilled = formRows.every((row) =>
      Object.values(row).every((value) => value.trim() !== "")
    );

    if (!allRowsFilled) {
      toast.error("لطفا تمام فیلدهای ردیف‌ها را پر کنید"); // Please fill all fields in the rows
    } else {
      toast.success("ارجاع ثبت شد"); // Referral registered
      // Optionally add a new empty row
      onChange([
        ...formRows,
        {
          specialist: "",
          information: "",
          referralReason: "",
          description: "",
          visitDate: "",
          briefResult: "",
          fullReport: "",
        },
      ]);
    }
  };

  const collapseVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const labels = [
    "ردیف",
    "متخصص",
    "اطلاعات",
    "علت ارجاع",
    "توضیحات",
    "تاریخ مراجعه",
    "نتیجه مختصر",
    "گزارش کامل",
  ];

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      <div
        className="flex gap-2 flex-row-reverse items-center text-primary dark:text-emerald-100 font-bold cursor-pointer"
        onClick={toggleCollapse}
      >
        <Image
          src={ArrowLeft}
          alt="Toggle collapse"
          className={`w-4 h-4 transition-transform duration-300 dark:invert ${
            isCollapsed ? "rotate-90" : "rotate-0"
          }`}
        />
        <Image
          src={icon}
          alt="Icon"
          className="w-6 h-6 md:w-8 md:h-8 dark:invert"
        />
        <h1 className="text-xl">{title}</h1>
      </div>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="flex flex-col gap-4 mx-4 md:mx-8"
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div
              className={`flex ${
                window.innerWidth < 768 ? "flex-col" : "gap-8"
              } items-start justify-between ${
                window.innerWidth < 768 ? "gap-4 p-2" : "p-4"
              }`}
              dir="rtl"
            >
              {window.innerWidth >= 768 && (
                <div className="flex flex-col gap-12">
                  {labels.map((data, index) => (
                    <h2
                      className="text-black dark:text-slate-200 text-xl whitespace-nowrap"
                      dir="rtl"
                      key={index}
                    >
                      {data}
                    </h2>
                  ))}
                </div>
              )}
              {formRows.map((formData, index) => (
                <FormRow
                  key={index}
                  rowNumber={index + 1}
                  index={index}
                  formData={formData}
                  onChange={handleFormRowChange}
                />
              ))}
            </div>
            <Button
              text={"اضافه کردن"}
              variant="secondary"
              className={`${
                window.innerWidth < 768 ? "w-full" : "w-full md:w-fit"
              } mt-4 self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700`}
              icon={Plus}
              onClick={handleAdd}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ques;