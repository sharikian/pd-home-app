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
} from "@/public/icons";
import { Fragment } from "react";

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
  ];

  return (
    <motion.div
      className="flex flex-col items-end gap-4 justify-center min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((data, index) => (
        <Fragment key={index}>
          <motion.div variants={itemVariants}>
            <Ques title={data[0]} icon={data[1]} />
          </motion.div>
          <motion.hr
            variants={itemVariants}
            className="h-[0.1rem] bg-slate-300 mt-4 w-full"
          />
        </Fragment>
      ))}
    </motion.div>
  );
};

export default Parvande;