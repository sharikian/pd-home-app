"use client"
import {
  SpeakAI,
  Sport,
  PersonWalking,
  ExerciseWalkingSupport,
  Food,
} from "@/public/icons";
import { MainCarousel } from "./Carousel";
import { ToggleShow } from "./ToggleShow";
import { PersonCard } from "./PersonCard";
import { MoreInfo } from "./MoreInfo";
import { GroupShow } from "./GroupShow";
import { JSX } from "react";
import { motion } from "framer-motion";

const Page = (): JSX.Element => {
  const toggles = [
    { title: "الگوهای حرکتی", icon: PersonWalking },
    { title: "گفتار درمانی", icon: SpeakAI },
    { title: "فیزیوتراپی", icon: Sport },
    { title: "کاردرمانی", icon: ExerciseWalkingSupport },
    { title: "تغذیه", icon: Food },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2 
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div 
      className="w-full max-w-[1220px] px-4 xs:px-6 sm:px-8 mx-auto flex flex-col items-center gap-6 md:gap-12 lg:gap-[71px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MainCarousel />

      {/* Second section - Toggles */}
      <motion.div 
        className="flex flex-wrap justify-between w-full"
        variants={containerVariants}
      >
        {toggles.map((data, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ToggleShow title={data.title} Icon={data.icon} />
          </motion.div>
        ))}
      </motion.div>

      {/* PersonCard section */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between w-full p-4 md:p-6 bg-[#1a604eba] rounded-2xl"
        variants={itemVariants}
      >
        <div className="flex gap-4 md:gap-6 w-full lg:w-[75%] [direction:rtl] overflow-x-auto">
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[370px]"
              variants={itemVariants}
            >
              <PersonCard />
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants} 
          className="flex items-center justify-center lg:w-[25%] mt-4 lg:mt-0"
        >
          <p className="font-semibold text-white text-2xl md:text-4xl lg:text-[50px] leading-normal flex flex-row-reverse md:flex-col gap-2 items-center text-center">
            <span className="block">آموزش های</span>
            <span className="font-black block mt-2">ویژه شما</span>
          </p>
        </motion.div>
      </motion.div>

      {/* MoreInfo section */}
      <motion.div 
        className="w-full flex justify-center"
        variants={itemVariants}
      >
        <MoreInfo />
      </motion.div>

      {/* First GroupShow section */}
      <motion.div 
        className="w-full flex justify-center"
        variants={itemVariants}
      >
        <GroupShow />
      </motion.div>

      {/* Second PersonCard section */}
      <motion.div 
        className="flex flex-col lg:flex-row justify-between w-full p-4 md:p-6 bg-[#1a604eba] rounded-2xl"
        variants={itemVariants}
      >
        <div className="flex gap-4 md:gap-6 w-full lg:w-[75%] [direction:rtl] overflow-x-auto">
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[370px]"
              variants={itemVariants}
            >
              <PersonCard />
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants} 
          className="flex items-center justify-center lg:w-[25%] mt-4 lg:mt-0"
        >
          <p className="font-semibold text-white text-2xl md:text-4xl lg:text-[40px] leading-normal flex flex-row-reverse md:flex-col gap-2 items-center text-center">
            <span className="font-semibold block">پربازدید ترین</span>
            <span className="font-black block">ویدیو ها</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Second GroupShow section */}
      <motion.div 
        className="w-full flex justify-center"
        variants={itemVariants}
      >
        <GroupShow />
      </motion.div>
    </motion.div>
  );
};

export default Page;