import { Button } from '@/app/components';
import { Danger, ArrowDown } from "@/public/icons";
import Image from 'next/image';

export const NotDoIt = () => (
  <div className="flex flex-col xl:flex-row md:flex-col-reverse sm:flex-col-reverse gap-6 md:gap-8 p-4 md:p-6 border-b border-[#00000030]">
    {/* Activities Panel */}
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
          <h2 className="text-xl md:text-2xl font-medium text-black">
            فعالیت های انجام نشده
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="p-3 md:p-4 rounded-xl bg-[#d855621a]">
              <div className="flex items-center justify-end gap-2">
                <span className="text-sm md:text-base lg:text-lg text-black">
                  ویزیت توسط متخصص توانبخشی
                </span>
                <Image src={Danger} alt="danger" className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-xs md:text-sm text-black mt-1 md:mt-2">
                شنبه 8 دی ماه - دکتر روحانی
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Image Panel */}
    <div className="w-full xl:w-1/2 relative aspect-[1.3] bg-[#b9d0aa] rounded-2xl xl:rounded-[35px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/imgs/dashboard/park-family.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b9d0aa] to-[#b9d0aa] via-60%">
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
            <div className="flex flex-col md:flex-row items-end justify-between gap-4">
              <p className="text-white text-xl md:text-3xl xl:text-[40px]" style={{lineHeight: '3rem'}}>
                رویداد ها و همایش های<br />
                <span className="font-black">خانواده پارکینسون</span>
              </p>
              <Button text="اطلاعات بیشتر" className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);