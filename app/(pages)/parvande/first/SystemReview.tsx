import Image from "next/image";
import { UserPosition } from "@/public/icons";
import { Button } from "@/app/components";
import { Plus } from "@/public/icons";
import { CheckBox } from "@/app/components/ui/CheckBox";

const SystemReview = () => {
  const items = [
    { text: "تنگی نفس" },
    { text: "تب و تعریق شدید" },
    { text: "ضعف و خستگی" },
    { text: "کاهش وزن" },
    { text: "کاهش اشتها" },
    { text: "سیری زودرس" },
    { text: "یبوست" },
    { text: "آرتوستاتیک هایپوتنشن" },
    { text: "سرفه مزمن" },
    { text: "درد قفسه سینه" },
    { text: "خلق پایین" },
    { text: "درد مفاصل" },
    { text: "GIB" },
    { text: "بی اختیاری ادرار" },
    { text: "اختلال بلع" },
    { text: "اختلال توجه" },
    { text: "اختلال حافظه" },
    { text: "تاری دید" },
    { text: "سرگیجه" },
    { text: "بی خوابی" },
  ];
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-end gap-4 items-center">
        <div className="text-lg font-bold text-primary">مرور سیستم ها</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={UserPosition} />
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
            <CheckBox className="check-box-instance" />
            <span className="text-sm text-black">{item.text}</span>
          </div>
        ))}
      </div>
      {/* Add Button */}
      <Button
        text={"اضافه کردن علامت"}
        variant="secondary"
        className="w-full md:w-fit self-start dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        icon={Plus}
      />
      <hr className="h-[0.1rem] bg-slate-300 mt-2" />
    </div>
  );
};

export default SystemReview;
