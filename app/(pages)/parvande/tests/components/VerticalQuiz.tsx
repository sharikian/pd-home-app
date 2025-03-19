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
  // Changed to true so it starts collapsed
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
            ? null // Allow deselection (optional)
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
      overflow: "hidden", // Moved here for consistency
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex gap-2 flex-row-reverse items-center text-primary font-bold cursor-pointer"
        onClick={toggleCollapse}
      >
        <Image
          src={ArrowLeft}
          alt="Toggle collapse"
          className={`w-4 h-4 transition-transform duration-300 ${
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
            className="flex flex-col gap-4 mx-8"
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {items.map((item, questionIndex) => (
              <Container key={questionIndex}>
                <div
                  className="flex flex-col justify-between gap-4 items-start"
                  dir="rtl"
                >
                  <h2 className="text-black text-xl">{item.title}</h2>
                  <div className="flex flex-col flex-wrap justify-between items-start gap-4 mx-8 w-full">
                    {item.items.map((data, answerIndex) => (
                      <div
                        className="flex items-center gap-2"
                        key={answerIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent CheckBox’s internal click from bubbling
                          handleCheckboxClick(questionIndex, answerIndex);
                        }}
                      >
                        <CheckBox
                          active={
                            selectedAnswers[questionIndex] === answerIndex
                          }
                          className="check-box-instance"
                        />
                        <span className="text-sm text-black">{data}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            ))}
            <Container>
              <div className="flex flex-col-reverse justify-between gap-14 items-end">
                <Slider min={0} max={10} steps={10} />
                <h2 className="text-black text-xl">
                  به طور کلی، نشت ادرار چقدر با زندگی روزمره شما تداخل دارد؟
                  لطفاً بین 0 (اصلاً) و 10 (بسیار) زنگ بزنید
                </h2>
              </div>
            </Container>
            <Container>
              <div
                className="flex flex-col justify-between gap-4 items-start"
                dir="rtl"
              >
                <h2 className="text-black text-xl">
                  چه زمانی ادرار نشت می کند؟ (لطفاً تمام مواردی که برای شما
                  اعمال می شود را علامت بزنید)
                </h2>
                <div className="flex flex-col flex-wrap justify-between items-start gap-4 mx-8 w-full">
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
                      <CheckBox className="check-box-instance" />
                      <span className="text-sm text-black">{data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
            <div className="flex gap-4 items-center justify-end" dir="rtl">
              <h2 className="text-black text-xl mt-4">نتیجه:</h2>
              <div className="w-[12rem]">
                <Input title={""} placeholder=" " />
              </div>
            </div>
            <Button
              text={"ثبت تست"}
              variant="secondary"
              className="w-fit mt-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};