"use client";
import { useState } from "react";
import { ArrowDown } from "@/public/icons";
import Image from "next/image";
import { motion } from "framer-motion";

interface FAQProps {
  title: string;
  description: string;
  className?: string;
}

export const FAQ = ({
  title,
  description,
  className = "",
}: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.55, 0.05, 0.95, 0.25] },
    },
  };

  return (
    <div
      className={`w-full mx-auto flex items-start cursor-pointer gap-2.5 shadow-shadows p-2.5 overflow-hidden rounded-[15px] bg-[#eaeef1] relative transition-all duration-300 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`border-[1.5px] border-solid border-[#1a604e] w-full flex gap-2.5 flex-1 overflow-hidden rounded-[5px] relative flex-col`}
      >
        <div
          className={`flex items-center justify-between w-full px-4 md:px-[19px] py-[7px] flex-[0_0_auto]`}
        >
          <Image
            className="relative w-6 md:w-[34px] transition-transform duration-300"
            src={ArrowDown}
            alt="Toggle icon"
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          <h3 className="relative flex-1 text-right font-bold text-[#1a604e] dark:text-emerald-600 text-sm md:text-md leading-normal [direction:rtl] px-2 whitespace-wrap">
            {title}
          </h3>
        </div>

        <motion.div
          layout
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={contentVariants}
          className="overflow-hidden"
        >
          <motion.p
            className="w-full font-medium text-black dark:text-slate-300 text-lg md:text-xl leading-normal [direction:rtl] px-4 md:px-[19px] pb-[11px] break-words"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};