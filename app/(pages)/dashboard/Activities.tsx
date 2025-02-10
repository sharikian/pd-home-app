import { Button } from "@/app/components";
import { ArrowDown, Clock } from "@/public/icons";
import Image from "next/image";

export const Activities = () => { 
  return ( 
    <div className="flex flex-col-reverse xl:flex-row md:flex-col-reverse sm:flex-col-reverse gap-6 md:gap-8 p-4 md:p-6 border-b border-[#00000030]">
      {/* Activities Panel - Maintained original structure with NotDoIt's layout */}
      <div className="w-full xl:w-1/2">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#1a604e]">
              <Image 
                src={ArrowDown} 
                alt="arrow" 
                className="w-5 h-5 transform rotate-90"
              />
              <span className="text-sm md:text-base">شرح فعالیت ها</span>
            </div>
            <h2 className="text-md md:text-2xl font-medium text-black">
              فعالیت های پیش رو
            </h2>
          </div>

          {/* Activities List - Kept original alternating background colors */}
          <div className="space-y-3 md:space-y-4">
            {[
              { title: "ویزیت توسط متخصص توانبخشی", date: "شنبه 8 دی ماه - دکتر روحانی" },
              { title: "جلسه تمرین گفتاردرمانی", date: "سه شنبه 11 دی ماه - دکتر عطایی" },
              { title: "جلسه تمرین کاردرمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
              { title: "جلسه تمرین آب درمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
              { title: "جلسه تمرین فیزیوتراپی", date: "پنج شنبه 13 دی ماه - دکتر نوری" },
            ].map((activity, index) => (
              <div key={index} className={`p-3 md:p-4 rounded-xl ${index % 2 === 0 ? 'bg-[#b9d0aa24]' : ''}`}>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-sm md:text-base lg:text-lg text-black font-pelak">
                    {activity.title}
                  </span>
                  <Image src={Clock} alt="clock" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-xs md:text-sm text-black mt-1 md:mt-2">
                  {activity.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Panel - Maintained original absolute positioning and gradients */}
      <div className="w-full xl:w-1/2 relative aspect-[1.3] bg-[#1a604e] rounded-2xl xl:rounded-[35px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/imgs/dashboard/parkinsons.png)] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a604e] via-[#1a604ee6] to-transparent">
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
              <div className="flex flex-col md:flex-row items-end justify-between gap-4">
                <p className="text-white text-xl md:text-3xl xl:text-[40px] font-semibold" style={{lineHeight: '3rem'}}>
                  کارگاه های <br /> حضوری و آنلاین <br /> 
                  <span className="font-black font-pelak">زندگی با پارکینسون</span>
                </p>
                <Button text="اطلاعات بیشتر" variant="secondary" className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};