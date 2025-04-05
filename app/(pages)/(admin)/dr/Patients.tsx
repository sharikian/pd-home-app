import { ClipBoard, ArrowDown } from "@/public/icons";
import ActivityTable from "./components/Table";
import Image from "next/image";

const Patients = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-row-reverse">
        <div className="flex justify-end gap-4">
          <div className="text-lg font-bold text-primary dark:text-emerald-100">
            بیماران هفته جاری در یک نگاه
          </div>
          <Image
            className="w-8 h-8 dark:invert"
            alt="Personal Icon"
            src={ClipBoard}
          />
        </div>
        <div className="flex items-center gap-2 text-[#1a604e] dark:text-emerald-400">
          <Image
            src={ArrowDown}
            alt="arrow"
            className="w-5 h-5 transform rotate-90 dark:invert"
          />
          <span className="text-sm md:text-base cursor-pointer">
            شرح فعالیت ها
          </span>
        </div>
      </div>
      <ActivityTable />
    </div>
  );
};

export default Patients;
