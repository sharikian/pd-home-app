import { Help, HaveQuestion } from "@/public/icons";
import { FAQ, Button } from "@/app/components";
import Image from "next/image";

const FAQPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 flex-col">
        <div
          className="flex gap-4 text-[#1A604E] font-black items-center"
          style={{ justifyContent: "end" }}
        >
          <span>سوالات شما</span>
          <Image src={Help} alt="?" />
        </div>
        {Array.from({ length: 6 }, (_, i) => (
          <FAQ
            key={i}
            title={
              "چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم؟"
            }
            description={
              "چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم چگونه از لباس‌های هوشمند یا حسگرهای پوشیدنی* برای بهبود تعادل و پیشگیری از زمین خوردن استفاده کنم"
            }
          />
        ))}
      </div>
      <div
        className="flex gap-4 text-[#1A604E] font-black items-center"
        style={{ justifyContent: "end" }}
      >
        <span>سوال دیگری در این زمینه دارید؟</span>
        <Image src={HaveQuestion} alt="?" />
      </div>
      <textarea
        className={`
          w-auto h-[8rem] rounded-[5px] border-[2px] border-solid text-lg 
          focus:outline-none focus:ring-2 focus:border-transparent
          border-[#1A604E]
          text-[#1A604E]
          shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff]
          placeholder:text-[#1A604EBA]
        focus:ring-[#1A604E]
        `}
      ></textarea>
      <Button text={"ارسال پرسش"} variant="secondary" className="w-min"/>
    </div>
  );
};

export default FAQPage;
