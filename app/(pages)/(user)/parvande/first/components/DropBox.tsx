"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/app/components";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { ArrowLeft } from "@/public/icons";

interface DropBoxItem {
  checkboxName: string;
  firstInput: string;
  secondInput: string;
}

interface CustomDropBoxProps {
  title: string;
  items: DropBoxItem[];
  icon?: string;
  onChange?: (drugName: string, isChecked: boolean, dose: string, quantity: string) => void; // Optional prop
}

export const CustomDropBox: React.FC<CustomDropBoxProps> = ({
  title,
  items,
  icon = "",
  onChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // State to track checkbox and input values for each item
  const [drugStates, setDrugStates] = useState<{
    [key: string]: { isChecked: boolean; dose: string; quantity: string };
  }>(
    items.reduce((acc, item) => ({
      ...acc,
      [item.checkboxName]: { isChecked: false, dose: "", quantity: "" },
    }), {})
  );

  const toggleCollapse = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (drugName: string, isChecked: boolean) => {
    setDrugStates((prev) => {
      const updated = { ...prev, [drugName]: { ...prev[drugName], isChecked } };
      if (onChange) {
        onChange(drugName, isChecked, updated[drugName].dose, updated[drugName].quantity);
      }
      return updated;
    });
  };

  // Handle input changes (dose or quantity)
  const handleInputChange = (drugName: string, field: "dose" | "quantity", value: string) => {
    setDrugStates((prev) => {
      const updated = { ...prev, [drugName]: { ...prev[drugName], [field]: value } };
      if (onChange) {
        onChange(drugName, updated[drugName].isChecked, updated[drugName].dose, updated[drugName].quantity);
      }
      return updated;
    });
  };

  // Animation variants for the collapsible section
  const collapseVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div
        className="flex gap-2 flex-row-reverse items-center text-primary font-bold cursor-pointer"
        onClick={toggleCollapse}
      >
        <Image
          src={ArrowLeft}
          alt="Toggle collapse"
          className={`w-4 h-4 transition-transform duration-300 ${
            isCollapsed ? "rotate-90" : "rotate-0"
          }`}
        />
        {icon !== "" && (
          <Image
            src={icon}
            alt="❤️"
            className="w-6 h-6 md:w-8 md:h-8 dark:invert"
          />
        )}
        <span>{title}</span>
      </div>

      {/* Collapsible Section with Animation */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="flex flex-col gap-4 mx-8"
            variants={collapseVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {items.map((item, index) =>
              window.innerWidth < 768 ? (
                // Mobile Layout
                <div
                  key={index}
                  className="flex flex-col-reverse items-center w-full gap-4"
                >
                  <div className="flex flex-row flex-wrap justify-between w-full gap-4">
                    {/* Second Input (Quantity) */}
                    <div
                      className="flex gap-2 items-center flex-1 min-w-0"
                      style={{ direction: "rtl" }}
                    >
                      <span className="text-primary whitespace-nowrap">
                        {item.secondInput}
                      </span>
                      <Input
                        title=""
                        className="w-full md:max-w-24"
                        placeholder="12"
                        value={drugStates[item.checkboxName].quantity}
                        onChange={(e) => handleInputChange(item.checkboxName, "quantity", e.target.value)}
                      />
                    </div>
                    {/* First Input (Dose) */}
                    <div
                      className="flex gap-2 items-center flex-1 min-w-0"
                      style={{ direction: "rtl" }}
                    >
                      <span className="text-primary whitespace-nowrap">
                        {item.firstInput}
                      </span>
                      <Input
                        title=""
                        className="w-full md:max-w-24"
                        placeholder="4"
                        value={drugStates[item.checkboxName].dose}
                        onChange={(e) => handleInputChange(item.checkboxName, "dose", e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Checkbox and Label */}
                  <div className="flex items-center gap-2 flex-row-reverse w-full">
                    <CheckBox
                      className="check-box-instance"
                      active={drugStates[item.checkboxName].isChecked}
                      onClick={() => handleCheckboxChange(item.checkboxName, !drugStates[item.checkboxName].isChecked)}
                    />
                    <span className="text-xs text-black w-full" dir="rtl">
                      {item.checkboxName}
                    </span>
                  </div>
                </div>
              ) : (
                // Desktop Layout
                <div
                  key={index}
                  className="flex justify-between items-center w-full min-w-[300px]"
                >
                  {/* Second Input (Quantity) */}
                  <div
                    className="flex gap-2 items-center"
                    style={{ direction: "rtl" }}
                  >
                    <span className="text-primary whitespace-nowrap">
                      {item.secondInput}
                    </span>
                    <Input
                      title=""
                      className="max-w-24"
                      placeholder="12"
                      value={drugStates[item.checkboxName].quantity}
                      onChange={(e) => handleInputChange(item.checkboxName, "quantity", e.target.value)}
                    />
                  </div>
                  {/* First Input (Dose) */}
                  <div
                    className="flex gap-2 items-center"
                    style={{ direction: "rtl" }}
                  >
                    <span className="text-primary whitespace-nowrap">
                      {item.firstInput}
                    </span>
                    <Input
                      title=""
                      className="max-w-24"
                      placeholder="4"
                      value={drugStates[item.checkboxName].dose}
                      onChange={(e) => handleInputChange(item.checkboxName, "dose", e.target.value)}
                    />
                  </div>
                  {/* Checkbox and Label */}
                  <div className="flex items-center gap-2 flex-row-reverse">
                    <CheckBox
                      className="check-box-instance"
                      active={drugStates[item.checkboxName].isChecked}
                      onClick={() => handleCheckboxChange(item.checkboxName, !drugStates[item.checkboxName].isChecked)}
                    />
                    <span className="text-sm text-black w-40" dir="rtl">
                      {item.checkboxName}
                    </span>
                  </div>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};