import Image from "next/image";
import { Writing } from "@/public/icons";

const Symptoms = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-end gap-4 mb-6 items-center">
        <div className="text-lg font-bold text-primary">سیر علائم بیماری</div>
        <Image className="w-8 h-8" alt="Personal Icon" src={Writing} />
      </div>
      <p className="text-black flex justify-end">شرح سیر علائم بیمار</p>
      <textarea
        className={`
          w-full h-32 md:h-40 rounded-lg border-2 border-[#1A604E] dark:border-emerald-400/50
          p-4 text-lg md:text-xl placeholder:text-[#1A604EBA] dark:placeholder:text-emerald-200/80
          focus:outline-none focus:ring-2 focus:ring-[#1A604E] dark:focus:ring-emerald-400/50
          shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff] 
          dark:shadow-[inset_-1px_1px_4px_#00000080,_-1px_1px_4px_#1e293b]
          resize-none
          bg-white/50 dark:bg-slate-700/50 
          text-[#1A604E] dark:text-slate-200
          text-right
          transition-all
          hover:border-[#1A604E]/80 dark:hover:border-emerald-400/70
        `}
        placeholder="شروع 10 سال پیش با درد و گرفتگی دست راست، تشدید علائم در دو سال بعد و اقدام برای عمل"
        style={{ direction: "rtl" }}
      />
      <hr className="h-[0.1rem] bg-slate-300 mt-8" />
    </div>
  );
};

export default Symptoms;