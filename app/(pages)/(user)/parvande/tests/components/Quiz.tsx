"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { Button, Input } from "@/app/components";
import { ArrowLeft } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

interface QuizProps {
  title: string;
  items: string[];
  icon?: string;
}

export const Quiz: React.FC<QuizProps> = ({ title, items, icon = "" }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // State for checkbox selections (one selected answer per question)
  const [answers, setAnswers] = useState<{ [key: string]: number | null }>(
    items.reduce((acc, item) => ({ ...acc, [item]: null }), {})
  );

  // State for result input
  const [result, setResult] = useState<string>("");

  const toggleCollapse = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  // Handler for checkbox click
  const handleCheckboxChange = (question: string, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: prev[question] === optionIndex ? null : optionIndex,
    }));
  };

  // Handler for result input
  const handleResultChange = (value: string) => {
    setResult(value);
  };

  // Handler for Register Test button
  const handleRegister = () => {
    const allQuestionsAnswered = items.every(
      (item) => answers[item] !== null
    );
    const isResultFilled = result.trim() !== "";

    if (!allQuestionsAnswered) {
      toast.error("لطفا برای هر سوال یک گزینه را انتخاب کنید"); // Please select one option for each question
    } else if (!isResultFilled) {
      toast.error("لطفا نتیجه تست را وارد کنید"); // Please enter the test result
    } else {
      toast.success("تست ثبت شد"); // Test registered
      // Add logic here to process the answers and result if needed
    }
  };

  const collapseVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
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
        {icon !== "" && (
          <Image
            src={icon}
            alt="Icon"
            className="w-6 h-6 md:w-8 md:h-8 dark:invert"
          />
        )}
        <h1 className="text-xl">{title}</h1>
      </div>

      {/* Collapsible Section with Animation */}
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
                window.innerWidth < 768 ? "flex-col" : "flex-row-reverse"
              } justify-between items-center self-stretch gap-4 md:gap-0`}
            >
              <h2 className="text-black dark:text-slate-200 text-xl">
                سوالات
              </h2>
              <div
                className={`flex justify-between items-center ${
                  window.innerWidth < 768 ? "gap-6" : "gap-14"
                }`}
              >
                <span className="text-black dark:text-slate-200 text-xl w-4 ml-4">
                  ۱
                </span>
                <span className="text-black dark:text-slate-200 text-xl w-4">
                  ۲
                </span>
                <span className="text-black dark:text-slate-200 text-xl w-4">
                  ۳
                </span>
                <span className="text-black dark:text-slate-200 text-xl w-4">
                  ۴
                </span>
              </div>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  window.innerWidth < 768 ? "flex-col" : "justify-between"
                } items-center gap-4 md:gap-0`}
                dir="rtl"
              >
                <Input
                  title=""
                  value={item}
                  readonly
                  alignRight
                  className={window.innerWidth < 768 ? "w-full" : "w-[160%]"}
                />
                <div
                  className={`flex justify-between items-center ${
                    window.innerWidth < 768 ? "gap-6" : "gap-10"
                  }`}
                >
                  {[0, 1, 2, 3].map((optionIndex) => (
                    <CheckBox
                      key={optionIndex}
                      className="check-box-instance dark:border-emerald-500"
                      active={answers[item] === optionIndex}
                      defaultActive={false}
                      onClick={() => handleCheckboxChange(item, optionIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div
              className={`flex ${
                window.innerWidth < 768 ? "flex-col" : "gap-4"
              } items-center ${
                window.innerWidth < 768 ? "gap-4" : "justify-end"
              }`}
              dir="rtl"
            >
              <h2
                className={`text-black dark:text-slate-200 text-xl ${
                  window.innerWidth < 768 ? "mt-0" : "mt-4"
                }`}
              >
                نتیجه:
              </h2>
              <div className={window.innerWidth < 768 ? "w-full" : "w-[12rem]"}>
                <Input
                  title=""
                  placeholder=" "
                  className={window.innerWidth < 768 ? "w-full" : ""}
                  value={result}
                  onChange={(e) => handleResultChange(e.target.value)}
                />
              </div>
            </div>
            <Button
              text={"ثبت تست"}
              variant="secondary"
              className="w-fit mt-2 dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
              onClick={handleRegister}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};