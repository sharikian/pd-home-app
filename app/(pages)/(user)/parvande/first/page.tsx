"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Symptoms from './Symptoms';
import MainReports from './MainReports';
import PainHistory from './PainHistory';
import ConDrugs from './ConDrugs';
import SystemReview from './SystemReview';
import Examinations from './Examinations';

const FirstPage = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of child components
        delayChildren: 0.1
      }
    }
  };

  // Individual section animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-8 p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Symptoms />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <MainReports />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <PainHistory />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ConDrugs />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SystemReview />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Examinations />
      </motion.div>
    </motion.div>
  );
};

export default FirstPage;