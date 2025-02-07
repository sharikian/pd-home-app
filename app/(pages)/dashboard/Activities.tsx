import { Button } from "@/app/components";
import { ArrowDown, Clock } from "@/public/icons";
import { JSX } from "react";
import Image from "next/image";

export const Activities = (): JSX.Element => { 
  return ( 
    <div className="flex items-center justify-between pt-[15px] pb-5 px-0 relative border-b border-solid border-[#00000030] gap-10">
      <div className="relative w-[640px] h-[585px] bg-[#1a604e] rounded-[35px] overflow-hidden">
        <div className="relative h-full rounded-[35px]">
          <div className={`absolute inset-0 bg-[url(/imgs/dashboard/parkinsons.png)] bg-cover bg-center rounded-[35px]`} />
          <div className="absolute inset-0 rounded-[35px] bg-gradient-to-b from-[#1a604e] via-[#1a604ee6] to-transparent" />
          <div className="flex flex-col items-start gap-3 absolute top-[23px] left-[26px] right-[26px]">
            <p className="w-full font-semibold text-white text-[50px] text-right leading-normal">
              کارگاه های <br /> حضوری و آنلاین <br /> 
              <span className="font-black font-pelak">زندگی با پارکینسون</span>
            </p>
            <Button text="اطلاعات بیشتر" variant="secondary" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-start gap-5 flex-1 max-w-[677px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image className="w-6 h-6" src={ArrowDown} alt="arrow icon" style={{transform:'rotate(90deg)'}} />
            <div className="font-pelak text-[#1a604e] text-base text-right">
              شرح فعالیت ها
            </div>
          </div>
          <div className="font-medium text-black text-2xl text-right">
            فعالیت های پیش رو
          </div>
        </div>

        {/* Activities List */}
        <div className="w-full space-y-4">
          {[
            { title: "ویزیت توسط متخصص توانبخشی", date: "شنبه 8 دی ماه - دکتر روحانی" },
            { title: "جلسه تمرین گفتاردرمانی", date: "سه شنبه 11 دی ماه - دکتر عطایی" },
            { title: "جلسه تمرین کاردرمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
            { title: "جلسه تمرین آب درمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
            { title: "جلسه تمرین فیزیوتراپی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
          ].map((activity, index) => (
            <div key={index} className={`p-4 rounded-[15px] ${index % 2 === 0 ? 'bg-[#b9d0aa24]' : ''}`}>
              <div className="flex items-center justify-end gap-2">
                <span className="font-pelak text-black text-2xl text-right">
                  {activity.title}
                </span>
                <Image className="w-6 h-6" src={Clock} alt="clock icon" />
              </div>
              <p className="text-right text-base text-black mt-2">
                {activity.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};