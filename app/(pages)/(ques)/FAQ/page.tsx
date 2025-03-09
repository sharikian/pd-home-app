import { Help, HaveQuestion } from "@/public/icons";
import { FAQ, Button } from "@/app/components";
import Image from "next/image";

const FAQPage = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full max-w-4xl mx-auto px-4 py-6 dark:bg-slate-800/90 dark:rounded-xl dark:p-6 backdrop-blur-sm">
      {/* FAQ List */}
      <div className="flex gap-6 flex-col">
        <div className="flex gap-2 items-center justify-end text-[#1A604E] dark:text-emerald-300 font-black">
          <span className="text-xl md:text-2xl">سوالات شما</span>
          <Image 
            src={Help} 
            alt="?" 
            className="w-8 h-8 md:w-10 md:h-10 dark:invert opacity-80 dark:opacity-90"
          />
        </div>
        
        {Array.from({ length: 6 }, (_, i) => (
          <FAQ
            key={i}
            title="چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم؟"
            description="چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم"
            className="w-full dark:bg-slate-700/50 dark:hover:bg-slate-700/70 dark:border-emerald-400/30"
          />
        ))}
      </div>

      {/* New Question Section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-2 items-center justify-end text-[#1A604E] dark:text-emerald-300 font-black">
          <span className="text-lg md:text-xl">سوال دیگری در این زمینه دارید؟</span>
          <Image 
            src={HaveQuestion} 
            alt="?" 
            className="w-8 h-8 md:w-10 md:h-10 dark:invert opacity-80 dark:opacity-90"
          />
        </div>
        
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
          placeholder="سوال خود را اینجا بنویسید..."
        />
        
        <Button 
          text="ارسال پرسش" 
          variant="secondary" 
          className="w-full md:w-48 self-start text-lg md:text-xl 
            dark:bg-emerald-700/60 dark:hover:bg-emerald-700/80 
            dark:text-emerald-100 dark:border dark:border-emerald-400/30
            hover:scale-[1.02] transition-transform"
        />
      </div>
    </div>
  );
};

export default FAQPage;