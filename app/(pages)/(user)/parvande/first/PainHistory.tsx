import Image from "next/image";
import { FileCollection, Plus } from "@/public/icons";
import { CheckBox } from "@/app/components/ui/CheckBox";
import { Button } from "@/app/components";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PainHistory = () => {
  const items = [
    { text: "استئوپروز" },
    { text: "COPD" },
    { text: "CAD" },
    { text: "HTN" },
    { text: "دیابت" },
    { text: "HF" },
    { text: "هایپوتیروئیدی" },
    { text: "CVA" },
    { text: "افسردگی" },
    { text: "BPH" },
  ];

  // State to track selected diseases
  const [selectedDiseases, setSelectedDiseases] = useState<string[]>([]);

  // Handler for checkbox changes
  const handleCheckboxChange = (disease: string) => {
    setSelectedDiseases((prev) =>
      prev.includes(disease)
        ? prev.filter((item) => item !== disease)
        : [...prev, disease]
    );
  };

  // Handler for Add button click
  const handleAdd = () => {
    if (selectedDiseases.length === 0) {
      toast.error("لطفا حداقل یک بیماری را انتخاب کنید"); // Please select at least one disease
    } else {
      toast.success("سابقه بیماری اضافه شد"); // Disease history added
      // Add logic here to process the selected diseases if needed
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">سابقه بیماری ها</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={FileCollection} />
      </div>
      <div className="flex flex-wrap gap-4 justify-end">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 
                             lg:w-[calc(20%-16px)]    // 5 items per row at lg and above
                             md:w-[calc(25%-16px)]    // 4 items per row at md
                             sm:w-[calc(33.33%-16px)] // 3 items per row at sm
                             xs:w-[calc(50%-16px)]    // 2 items per row at xs
                             xxs:w-full               // 1 item per row at xxs
                             min-w-[120px] flex-row-reverse"
          >
            <CheckBox
              className="check-box-instance"
              active={selectedDiseases.includes(item.text)}
              defaultActive={false}
              onClick={() => handleCheckboxChange(item.text)}
            />
            <span className="text-sm text-black">{item.text}</span>
          </div>
        ))}
      </div>
      {/* Add Button */}
      <Button
        text={"اضافه کردن بیماری"}
        variant="secondary"
        className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        icon={Plus}
        onClick={handleAdd}
      />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default PainHistory;