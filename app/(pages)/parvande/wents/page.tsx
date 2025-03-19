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

const Parvande = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };
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
      className="flex flex-col items-end gap-4 justify-center min-h-screen" // Centered layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((data, index) => (
        <>
          <Ques title={data[0]} icon={data[1]} key={index} />
          <hr className="h-[0.1rem] bg-slate-300 mt-4 w-full" />
        </>
      ))}
    </motion.div>
  );
};

export default Parvande;
