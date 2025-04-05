"use client";
import { motion } from "framer-motion";
import Ques from "../tests/components/Ques";
import {
  Park,
  PeopleSpeak,
  NordicWalking,
  Spoon,
  Brain,
  Swimming,
  Medicine,
  PlusBox,
  Bone,
  MRI,
  Plus,
} from "@/public/icons";
import BloodIcon from "@/public/imgs/myplan/blood.svg";
import { Fragment } from "react";
import Image from "next/image";
import MedicalFiles from "./medical-files.svg";
import SimpleActivityTable from "./Table";
import { Button } from "@/app/components";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2, // Stagger child animations
    },
  },
};

// Animation variants for each child (Ques and hr)
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
  const items = [
    ["فیزیوتراپی", Park],
    ["گفتار درمانی", PeopleSpeak],
    ["کاردرمانی", NordicWalking],
    ["تغذیه", Spoon],
    ["روانشناسی", Brain],
    ["آب درمانی", Swimming],
    ["پزشک متخصص", Medicine],
    ["سایر", PlusBox],
    ["BMD", Bone],
    ["MRI", MRI],
    ["آزمایش خون", BloodIcon],
  ];

  return (
    <motion.div
      className="flex flex-col items-end gap-4 justify-center min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-end gap-4">
          <div className="text-lg font-bold text-primary dark:text-emerald-100">
            پیگیری
          </div>
          <Image
            className="w-8 h-8 dark:invert"
            alt="Personal Icon"
            src={MedicalFiles}
          />
        </div>
        <SimpleActivityTable />
        {/* Add Button */}
        <Button
          text={"اضافه کردن"}
          variant="secondary"
          className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
          icon={Plus}
        />
      </motion.div>
      <motion.hr
        variants={itemVariants}
        className="h-[0.1rem] bg-slate-300 dark:bg-slate-600 mt-4 w-full"
      />
      {items.map((data, index) => (
        <Fragment key={index}>
          <motion.div variants={itemVariants}>
            <Ques title={data[0]} icon={data[1]} className="dark:bg-slate-800 dark:border-emerald-500 dark:text-emerald-100" />
          </motion.div>
          <motion.hr
            variants={itemVariants}
            className="h-[0.1rem] bg-slate-300 dark:bg-slate-600 mt-4 w-full"
          />
        </Fragment>
      ))}
    </motion.div>
  );
};

export default Parvande;