import { Help, HaveQuestion } from "@/public/icons";
import { FAQ, Button } from "@/app/components";
import Image from "next/image";

const FAQPage = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 w-full max-w-4xl mx-auto px-4 py-6 dark:bg-slate-800 dark:rounded-xl dark:p-6">
      {/* FAQ List */}
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-center justify-end text-[#1A604E] dark:text-emerald-400 font-black">
          <span className="text-xl md:text-2xl">سوالات شما</span>
          <Image 
            src={Help} 
            alt="?" 
            className="w-8 h-8 md:w-10 md:h-10 dark:invert"
          />
        </div>
        
        {Array.from({ length: 6 }, (_, i) => (
          <FAQ
            key={i}
            title="چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم؟"
            description="چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم"
            className="w-full"
          />
        ))}
      </div>

      {/* New Question Section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-2 items-center justify-end text-[#1A604E] dark:text-emerald-400 font-black">
          <span className="text-lg md:text-xl">سوال دیگری در این زمینه دارید؟</span>
          <Image 
            src={HaveQuestion} 
            alt="?" 
            className="w-8 h-8 md:w-10 md:h-10 dark:invert"
          />
        </div>
        
        <textarea
          className={`
            w-full h-32 md:h-40 rounded-lg border-2 border-[#1A604E] dark:border-emerald-400
            p-4 text-lg md:text-xl placeholder:text-[#1A604EBA] dark:placeholder:text-emerald-200
            focus:outline-none focus:ring-2 focus:ring-[#1A604E] dark:focus:ring-emerald-400
            shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff] dark:shadow-[inset_-1px_1px_4px_#00000080,_-1px_1px_4px_#334155]
            resize-none
            bg-transparent dark:text-white
          `}
          placeholder="سوال خود را اینجا بنویسید..."
        />
        
        <Button 
          text="ارسال پرسش" 
          variant="secondary" 
          className="w-full md:w-48 self-end text-lg md:text-xl dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700"
        />
      </div>
    </div>
  );
};

export default FAQPage;