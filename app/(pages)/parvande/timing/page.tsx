import Image from "next/image";
import { ClockArrowDown, SearchVisual } from "@/public/icons";
import { Input, DropDown } from "@/app/components";
import ActivityTable from "./Table";

const Parvande = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">
          فعالت ها در یک نگاه
        </div>
        <Image className="w-8 h-8" alt="Personal Icon" src={ClockArrowDown} />
      </div>
      <div className="flex justify-between flex-row-reverse">
        <Input icon={SearchVisual} placeholder="جستجو" alignRight />
        <div className="flex gap-4 items-center justify-end" dir="rtl">
          <h2 className="text-black text-xl">تعداد ردیف:</h2>
          <div className="w-fit" dir="ltr">
            <DropDown options={['1', '2', '3', '4']} variant="input-like" placeholder="1" />
          </div>
        </div>
      </div>
      <ActivityTable/>
    </div>
  );
};

export default Parvande;
