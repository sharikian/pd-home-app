"use client";
import React from "react";
import { motion } from "framer-motion";
import BMD from "./BMD";
import MRI from "./MRI";
import BloodTest from "./BloodTest";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
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
  return (
    <motion.div
      className="flex flex-col gap-8 p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <BMD />
      </motion.div>
      <motion.div variants={itemVariants}>
        <MRI />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BloodTest />
      </motion.div>
    </motion.div>
  );
};

export default ExperPage;