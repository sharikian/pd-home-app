"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/app/components";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { ArrowLeft } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";

interface DropBoxItem {
  checkboxName: string;
  firstInput: string;
  secondInput: string;
}

interface CustomDropBoxProps {
  title: string;
  items: DropBoxItem[];
}

export const CustomDropBox: React.FC<CustomDropBoxProps> = ({ title, items }) => {
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
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
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
        <span>{title}</span>
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
            style={{ overflow: "hidden" }} // Prevents content overflow during animation
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full min-w-[300px]"
              >
                {/* Second Input with Title on Right */}
                <div
                  className="flex gap-2 items-center"
                  style={{ direction: "rtl" }}
                >
                  <span className="text-primary whitespace-nowrap">
                    {item.secondInput}
                  </span>
                  <Input
                    title=""
                    className="max-w-24"
                    placeholder="12"
                  />
                </div>

                {/* First Input with Title on Right */}
                <div
                  className="flex gap-2 items-center"
                  style={{ direction: "rtl" }}
                >
                  <span className="text-primary whitespace-nowrap">
                    {item.firstInput}
                  </span>
                  <Input
                    title=""
                    className="max-w-24"
                    placeholder="4"
                  />
                </div>

                {/* Checkbox and Label */}
                <div className="flex items-center gap-2 flex-row-reverse">
                  <CheckBox className="check-box-instance" />
                  <span className="text-sm text-black w-40" dir="rtl">{item.checkboxName}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};