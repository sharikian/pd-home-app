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
import { Fragment, useState } from "react";
import Image from "next/image";
import MedicalFiles from "./medical-files.svg";
import SimpleActivityTable from "./Table";
import { Button } from "@/app/components";
import { toast } from "react-toastify";

interface FormRowData {
  specialist: string;
  information: string;
  referralReason: string;
  description: string;
  visitDate: string;
  briefResult: string;
  fullReport: string;
}

interface QuesData {
  title: string;
  formRows: FormRowData[];
}

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
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

  // State to track form data for all Ques components
  const [quesData, setQuesData] = useState<QuesData[]>(
    items.map(([title]) => ({
      title,
      formRows: [
        {
          specialist: "",
          information: "",
          referralReason: "",
          description: "",
          visitDate: "",
          briefResult: "",
          fullReport: "",
        },
        {
          specialist: "",
          information: "",
          referralReason: "",
          description: "",
          visitDate: "",
          briefResult: "",
          fullReport: "",
        },
      ],
    }))
  );

  // Handler for Ques form data changes
  const handleQuesChange = (title: string, formRows: FormRowData[]) => {
    setQuesData((prev) =>
      prev.map((data) =>
        data.title === title ? { ...data, formRows } : data
      )
    );
  };

  // Handler for Add button
  const handleAdd = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allFieldsFilled = quesData.every((ques: { formRows: any[]; }) =>
      ques.formRows.every((row) =>
        Object.values(row).every((value) => value.trim() !== "")
      )
    );

    if (!allFieldsFilled) {
      toast.error("لطفا تمام فیلدهای همه ارجاع‌ها را پر کنید"); // Please fill all fields in all referrals
    } else {
      toast.success("ارجاع‌ها ثبت شد"); // Referrals registered
      // Add logic here to process the quesData if needed
    }
  };

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
          onClick={handleAdd}
        />
      </motion.div>
      <motion.hr
        variants={itemVariants}
        className="h-[0.1rem] bg-slate-300 dark:bg-slate-600 mt-4 w-full"
      />
      {items.map((data, index) => (
        <Fragment key={index}>
          <motion.div variants={itemVariants}>
            <Ques
              title={data[0]}
              icon={data[1]}
              className="dark:bg-slate-800 dark:border-emerald-500 dark:text-emerald-100"
              formRows={quesData[index].formRows}
              onChange={(formRows) => handleQuesChange(data[0], formRows)}
            />
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