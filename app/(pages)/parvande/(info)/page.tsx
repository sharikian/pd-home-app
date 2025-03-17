"use client";

import { motion } from "framer-motion";

const Parvande = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren", // Ensure container animates before children
      },
    },
  };

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen" // Centered layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-black font-bold text-3xl" // Removed fixed positioning
        variants={textVariants}
      >
        ...در دست تاسیس
      </motion.h1>
    </motion.div>
  );
};

export default Parvande;