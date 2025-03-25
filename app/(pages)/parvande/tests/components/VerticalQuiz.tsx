"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { Button, Container, Input, Slider } from "@/app/components";
import { ArrowLeft } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";

interface QuizItem {
  title: string;
  items: string[];
}

interface QuizProps {
  title: string;
  items: QuizItem[];
  icon?: string;
}

export const VerticalQuiz: React.FC<QuizProps> = ({
  title,
  items,
  icon = "",
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    items.map(() => null)
  );

  const toggleCollapse = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  const handleCheckboxClick = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) =>
      prev.map((selected, idx) =>
        idx === questionIndex
          ? selected === answerIndex
            ? null
            : answerIndex
          : selected
      )
    );
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

  return (
    <div className="flex flex-col gap-8">
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

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="flex flex-col gap-4 mx-4 md:mx-8"
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {items.map((item, questionIndex) => (
              <Container key={questionIndex} className="dark:bg-slate-800 dark:border-emerald-500">
                <div
                  className="flex flex-col justify-between gap-4 items-start"
                  dir="rtl"
                >
                  <h2 className="text-black dark:text-slate-200 text-xl">
                    {item.title}
                  </h2>
                  <div
                    className={`flex flex-col flex-wrap justify-between items-start ${
                      window.innerWidth < 768 ? "gap-2 mx-4" : "gap-4 mx-8"
                    } w-full`}
                  >
                    {item.items.map((data, answerIndex) => (
                      <div
                        className="flex items-center gap-2"
                        key={answerIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCheckboxClick(questionIndex, answerIndex);
                        }}
                      >
                        <CheckBox
                          active={
                            selectedAnswers[questionIndex] === answerIndex
                          }
                          className="check-box-instance dark:border-emerald-500"
                        />
                        <span
                          className={`${
                            window.innerWidth < 768 ? "text-xs" : "text-sm"
                          } text-black dark:text-slate-200`}
                        >
                          {data}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            ))}
            <Container className="dark:bg-slate-800 dark:border-emerald-500">
              <div
                className={`flex ${
                  window.innerWidth < 768 ? "flex-col" : "flex-col-reverse"
                } justify-between gap-6 md:gap-14 items-${
                  window.innerWidth < 768 ? "start" : "end"
                }`}
              >
                <Slider min={0} max={10} steps={10} />
                <h2
                  className={`text-black dark:text-slate-200 ${
                    window.innerWidth < 768 ? "text-lg" : "text-xl"
                  }`}
                >
                  به طور کلی، نشت ادرار چقدر با زندگی روزمره شما تداخل دارد؟
                  لطفاً بین 0 (اصلاً) و 10 (بسیار) زنگ بزنید
                </h2>
              </div>
            </Container>
            <Container className="dark:bg-slate-800 dark:border-emerald-500">
              <div
                className="flex flex-col justify-between gap-4 items-start"
                dir="rtl"
              >
                <h2 className="text-black dark:text-slate-200 text-xl">
                  چه زمانی ادرار نشت می کند؟ (لطفاً تمام مواردی که برای شما
                  اعمال می شود را علامت بزنید)
                </h2>
                <div
                  className={`flex flex-col flex-wrap justify-between items-start ${
                    window.innerWidth < 768 ? "gap-2 mx-4" : "gap-4 mx-8"
                  } w-full`}
                >
                  {[
                    "هرگز ادرار نشت نمی کند",
                    "قبل از اینکه بتوانید به توالت بروید نشت می کند",
                    "هنگام سرفه یا عطسه نشت می کند",
                    "هنگام خواب نشت می کند",
                    "وقتی از نظر بدنی فعال هستید/ورزش می کنید نشت می کند",
                    "وقتی که ادرارتان تمام شده و لباس پوشیده اید",
                    "بدون هیچ دلیل واضحی نشت می کند",
                  ].map((data, answerIndex) => (
                    <div className="flex items-center gap-2" key={answerIndex}>
                      <CheckBox className="check-box-instance dark:border-emerald-500" />
                      <span
                        className={`${
                          window.innerWidth < 768 ? "text-xs" : "text-sm"
                        } text-black dark:text-slate-200`}
                      >
                        {data}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
            <div
              className={`flex ${
                window.innerWidth < 768 ? "flex-col" : "gap-4"
              } items-center ${
                window.innerWidth < 768 ? "gap-4" : "justify-end"
              }`}
              dir="rtl"
            >
              <h2
                className={`text-black dark:text-slate-200 ${
                  window.innerWidth < 768 ? "text-lg mt-0" : "text-xl mt-4"
                }`}
              >
                نتیجه:
              </h2>
              <div className={window.innerWidth < 768 ? "w-full" : "w-[12rem]"}>
                <Input
                  title=""
                  placeholder=" "
                  className={window.innerWidth < 768 ? "w-full" : ""}
                />
              </div>
            </div>
            <Button
              text={"ثبت تست"}
              variant="secondary"
              className="w-fit mt-2 dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};