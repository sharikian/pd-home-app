"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClockArrowDown, SearchVisual } from "@/public/icons";
import { Input, DropDown } from "@/app/components";
import ActivityTable from "./Table";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger child animations
      when: "beforeChildren",
    },
  },
};

// Animation variants for each child
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Parvande = () => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">
          فعالت ها در یک نگاه
        </div>
        <Image className="w-8 h-8" alt="Personal Icon" src={ClockArrowDown} />
      </motion.div>

      {/* Search and Dropdown */}
      <motion.div variants={itemVariants} className="flex justify-between flex-row-reverse">
        <Input icon={SearchVisual} placeholder="جستجو" alignRight />
        <div className="flex gap-4 items-center justify-end" dir="rtl">
          <h2 className="text-black text-xl">تعداد ردیف:</h2>
          <div className="w-fit" dir="ltr">
            <DropDown
              options={["1", "2", "3", "4"]}
              variant="input-like"
              placeholder="1"
            />
          </div>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div variants={itemVariants}>
        <ActivityTable />
      </motion.div>
    </motion.div>
  );
};

export default Parvande;