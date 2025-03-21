"use client";
import React from "react";
import { motion } from "framer-motion";
import TestComponent from "./TestComponent";
import BloodIcon from "@/public/imgs/myplan/blood.svg";
import { Bone, MRI as MRIIcon } from "@/public/icons";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each child component
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

const ExperPage = () => {
  const bmdInputs: [string, string][] = [
    ["HIP FEX", "15%"],
    ["Major osteoporotic FX", "3.4%"],
    ["HIP", "0.728"],
    ["SPINE", "0.735"],
  ];

  return (
    <motion.div
      className="flex flex-col gap-8 p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <TestComponent title="BMD" icon={Bone} extraInputs={bmdInputs} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TestComponent title="MRI" icon={MRIIcon} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TestComponent title="آزمایش خون" icon={BloodIcon} />
      </motion.div>
    </motion.div>
  );
};

export default ExperPage;