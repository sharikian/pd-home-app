"use client"
import React from 'react';
import { motion } from 'framer-motion';
import PersonalInfo from './PersonalInfo';
import InsuranceInfo from './InsuranceInfo';
import MedicalHistory from './MedicalHistory';
import RehabHistory from './RehabHistory';
import ReferralSource from './ReferralSource';

const ProfilePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <motion.div variants={sectionVariants}><PersonalInfo /></motion.div>
      <motion.div variants={sectionVariants}><InsuranceInfo /></motion.div>
      <motion.div variants={sectionVariants}><MedicalHistory /></motion.div>
      <motion.div variants={sectionVariants}><RehabHistory /></motion.div>
      <motion.div variants={sectionVariants}><ReferralSource /></motion.div>
    </motion.div>
  );
};

export default ProfilePage;