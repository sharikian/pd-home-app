import Image from "next/image";
import { CustomDropBox } from "./components/DropBox";
import { Button } from "@/app/components";
import { Plus } from "@/public/icons";
import Pill from './components/pill.svg';
import React, { useState } from "react";
import { toast } from "react-toastify";

const ConDrugs = () => {
  // State to track selected drugs and their inputs
  const [selectedDrugs, setSelectedDrugs] = useState<{
    [key: string]: { dose: string; quantity: string };
  }>({});

  // Handler for changes in CustomDropBox
  const handleDrugChange = (
    drugName: string,
    isChecked: boolean,
    dose: string,
    quantity: string
  ) => {
    setSelectedDrugs((prev) => {
      if (isChecked) {
        return { ...prev, [drugName]: { dose, quantity } };
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [drugName]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  // Handler for Add button click
  const handleAdd = () => {
    const selectedCount = Object.keys(selectedDrugs).length;
    const allValid = Object.values(selectedDrugs).every(
      (drug) => drug.dose.trim() !== "" && drug.quantity.trim() !== ""
    );

    if (selectedCount === 0) {
      toast.error("لطفا حداقل یک دارو را انتخاب کنید"); // Please select at least one drug
    } else if (!allValid) {
      toast.error("لطفا دوز و تعداد را برای تمام داروهای انتخاب شده وارد کنید"); // Please enter dose and quantity for all selected drugs
    } else {
      toast.success("داروهای مصرفی اضافه شد"); // Consumed drugs added
      // Add logic here to process the selected drugs if needed
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">داروهای مصرفی</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={Pill} />
      </div>
      <CustomDropBox
        title={'گوارشی'}
        items={[
          { checkboxName: 'پنتوپرازول', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'فاموتیدین', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'سی لاکس', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'پلی اتیلن گلیکول', firstInput: 'دوز دارو', secondInput: 'تعداد' }
        ]}
        onChange={handleDrugChange}
      />
      <CustomDropBox
        title={'روانپزشکی'}
        items={[
          { checkboxName: 'آسنترا', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'دولوکستین', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'گاباپنتین', firstInput: 'دوز دارو', secondInput: 'تعداد' }
        ]}
        onChange={handleDrugChange}
      />
      <CustomDropBox
        title={'دیابت'}
        items={[
          { checkboxName: 'انسولین', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'داروی خوراکی', firstInput: 'دوز دارو', secondInput: 'تعداد' }
        ]}
        onChange={handleDrugChange}
      />
      <CustomDropBox
        title={'خواب'}
        items={[
          { checkboxName: 'ملاتونین', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'زولپیدم', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'بنزودیازپین', firstInput: 'دوز دارو', secondInput: 'تعداد' }
        ]}
        onChange={handleDrugChange}
      />
      <CustomDropBox
        title={'مکمل‌ها'}
        items={[
          { checkboxName: 'ویتامین دی', firstInput: 'دوز دارو', secondInput: 'تعداد' },
          { checkboxName: 'کلسیم', firstInput: 'دوز دارو', secondInput: 'تعداد' }
        ]}
        onChange={handleDrugChange}
      />
      {/* Add Button */}
      <Button
        text={"اضافه کردن دارو"}
        variant="secondary"
        className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        icon={Plus}
        onClick={handleAdd}
      />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default ConDrugs;