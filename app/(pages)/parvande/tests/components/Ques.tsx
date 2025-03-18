"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Input, DropDown, Button } from "@/app/components";
import { ArrowLeft, Plus } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";

interface QuesProps {
  title: string;
  icon: string | StaticImageData;
}

const Ques = ({ title, icon }: QuesProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapse = (): void => {
    setIsCollapsed((prev) => !prev);
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
            className="flex flex-col gap-4 mx-8"
            variants={collapseVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden" }}
          >
            <div className="flex gap-24 items-start justify-between" dir="rtl">
              <div className="flex flex-col gap-12">
                {[
                  "ردیف",
                  "متخصص",
                  "اطلاعات",
                  "علت ارجاع",
                  "توضیحات",
                  "تاریخ مراجعه",
                  "نتیجه مختصر",
                  "گزارش کامل",
                ].map((data, index) => (
                  <h2
                    className="text-black text-xl whitespace-nowrap"
                    dir="rtl"
                    key={index}
                  >
                    {data}
                  </h2>
                ))}
              </div>
              <div
                className="flex flex-col gap-4"
                style={{ width: "-webkit-fill-available" }}
              >
                <h2 className="text-black text-xl mr-4" dir="rtl">
                  ۱
                </h2>
                {/* Styled Title Container 1 */}
                <div
                  className="flex flex-col items-center gap-2 bg-[#eaeef1] dark:bg-[#2d333b] border-[1.5px] border-solid border-[#1a604e] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  dir="ltr"
                >
                  <DropDown
                    options={[]}
                    placeholder="انتخاب کنید"
                    variant="input-like"
                  />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <textarea
                    className={`
                        w-[95%] h-32 md:h-40 rounded-lg border-2 border-[#1A604E] dark:border-emerald-400/50
                        p-4 text-lg md:text-xl placeholder:text-[#1A604EBA] dark:placeholder:text-emerald-200/80
                        focus:outline-none focus:ring-2 focus:ring-[#1A604E] dark:focus:ring-emerald-400/50
                        shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff] 
                        dark:shadow-[inset_-1px_1px_4px_#00000080,_-1px_1px_4px_#1e293b]
                        resize-none
                        mt-0
                        mb-2
                        bg-white/50 dark:bg-slate-700/50 
                        text-[#1A604E] dark:text-slate-200
                        text-right
                        transition-all
                        hover:border-[#1A604E]/80 dark:hover:border-emerald-400/70
                      `}
                    placeholder=""
                    style={{ direction: "rtl" }}
                  />
                </div>
              </div>
              <div
                className="flex flex-col gap-4"
                style={{ width: "-webkit-fill-available" }}
              >
                <h2 className="text-black text-xl mr-4" dir="rtl">
                  ۲
                </h2>
                {/* Styled Title Container 2 */}
                <div
                  className="flex items-center flex-col gap-2 bg-[#eaeef1] dark:bg-[#2d333b] border-[1.5px] border-solid border-[#1a604e] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  dir="ltr"
                >
                  <DropDown
                    options={[]}
                    placeholder="انتخاب کنید"
                    variant="input-like"
                  />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <Input placeholder=" " />
                  <textarea
                    className={`
                      w-[95%] h-32 md:h-40 rounded-lg border-2 border-[#1A604E] dark:border-emerald-400/50
                      p-4 text-lg md:text-xl placeholder:text-[#1A604EBA] dark:placeholder:text-emerald-200/80
                      focus:outline-none focus:ring-2 focus:ring-[#1A604E] dark:focus:ring-emerald-400/50
                      shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff] 
                      dark:shadow-[inset_-1px_1px_4px_#00000080,_-1px_1px_4px_#1e293b]
                      resize-none
                      mt-0
                      mb-2
                      bg-white/50 dark:bg-slate-700/50 
                      text-[#1A604E] dark:text-slate-200
                      text-right
                      transition-all
                      hover:border-[#1A604E]/80 dark:hover:border-emerald-400/70
                    `}
                    placeholder=""
                    style={{ direction: "rtl" }}
                  />
                </div>
              </div>
            </div>
            <Button
              text={"اضافه کردن"}
              variant="secondary"
              className="w-full mt-4 md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
              icon={Plus}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ques;
