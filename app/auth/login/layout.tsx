"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
