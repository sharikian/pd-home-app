"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { Button, Input } from "@/app/components";
import { ArrowLeft } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";

interface QuizProps {
  title: string;
  items: string[];
  icon?: string;
}

export const Quiz: React.FC<QuizProps> = ({ title, items, icon = "" }) => {
  // Changed to true so it starts collapsed
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Toggle collapse state when header is clicked
  const toggleCollapse = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  // Animation variants for the collapsible section
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
      overflow: "hidden", // Moved here for consistency
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

      {/* Collapsible Section with Animation */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="flex flex-col gap-4 mx-8"
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-row-reverse justify-between items-center self-stretch">
              <h2 className="text-black text-xl">سوالات</h2>
              <div className="flex justify-between items-center gap-14">
                <span className="text-black text-xl w-4 ml-4">۱</span>
                <span className="text-black text-xl w-4">۲</span>
                <span className="text-black text-xl w-4">۳</span>
                <span className="text-black text-xl w-4">۴</span>
              </div>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center"
                dir="rtl"
              >
                <Input title="" value={item} readonly alignRight />
                <div className="flex justify-between items-center gap-10">
                  <CheckBox className="check-box-instance" />
                  <CheckBox className="check-box-instance" />
                  <CheckBox className="check-box-instance" />
                  <CheckBox className="check-box-instance" />
                </div>
              </div>
            ))}
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