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

  // Define animation variants using maxHeight
  const contentVariants = {
    open: {
      maxHeight: 1000, // Adjust this value based on your content's maximum height
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div
      // Removed transition-all duration-300 to avoid conflicts
      className={`w-full mx-auto flex items-start cursor-pointer gap-2.5 shadow-shadows p-2.5 overflow-hidden rounded-[15px] bg-[#eaeef1] relative ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`border-[1.5px] border-solid border-[#1a604e] w-full flex gap-2.5 flex-1 overflow-hidden rounded-[5px] relative flex-col`}
      >
        <div
          className={`flex items-center justify-between w-full pt-2 flex-[0_0_auto]`}
        >
          <Image
            className="relative w-6 md:w-[34px] transition-transform duration-300"
            src={ArrowDown}
            alt="Toggle icon"
            style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
          />
          <h3 className="relative font-black flex-1 text-right text-[#1a604e] dark:text-emerald-600 text-sm md:text-lg leading-normal [direction:rtl] px-2 whitespace-wrap">
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
          {/* Changed motion.p to regular p since animation is on the container */}
          <p
            className="w-full font-bold text-black dark:text-slate-300 text-md leading-normal [direction:rtl] px-4 md:px-[19px] pb-[11px] break-words"
          >
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};