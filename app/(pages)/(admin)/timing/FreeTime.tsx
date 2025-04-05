import { Clock } from "@/public/icons";
import Image from "next/image";

const FreeTime = () => {
  const days = [
    "جمعه",
    "پنجشنبه",
    "چهارشنبه",
    "سه شنبه",
    "دوشنبه",
    "یکشنبه",
    "شنبه",
  ];

  return (
    <div className="flex flex-col gap-10 pb-8 border-b border-black/20">
      {/* Header */}
      <div className="flex justify-end items-center gap-3">
        <div className="text-xl font-bold text-teal-800 font-[Pelak]">
          زمان های آزاد
        </div>
        <Image src={Clock} alt="Clock" className="w-6 h-6" />
      </div>

      {/* Duration Input */}
      <div className="flex flex-row-reverse items-center gap-6 pr-4 h-14">
        <div className="text-lg font-medium text-black font-[Pelak]">
          مدت زمان هر ویزیت
        </div>
        <div className="w-48 p-2 bg-slate-200 rounded-xl shadow-[8px_-23px_81.4px_rgba(255,255,255,1),-8px_23px_81.4px_rgba(26,96,78,0.1)]">
          <div className="flex items-center h-10 px-2 py-1 rounded-[4px] outline outline-[1.5px] outline-teal-800">
            <div className="text-base font-medium text-black font-[Pelak]">
              دقیقه
            </div>
          </div>
        </div>
      </div>

      {/* Days Schedule */}
      <div className="flex flex-col gap-3 overflow-x-auto">
        {/* Days Header */}
        <div className="flex justify-between min-w-[1000px] gap-2 px-2">
          {days.map((day) => (
            <div 
              key={day} 
              className="w-32 text-center text-base font-medium text-black font-[Pelak] whitespace-nowrap"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Selectors */}
        <div className="flex justify-between min-w-[1000px] gap-2 px-2">
          {days.map((_, index) => (
            <div 
              key={index} 
              className="w-32 p-2 bg-slate-200 rounded-xl shadow-[8px_-23px_81.4px_rgba(255,255,255,1),-8px_23px_81.4px_rgba(26,96,78,0.1)]"
            >
              <div className="flex justify-between items-center px-1 py-1 rounded-[4px] outline outline-[1.5px] outline-teal-800">
                <Image 
                  src={Clock} 
                  alt="Clock" 
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-sm font-normal text-teal-800/75 font-[Pelak] whitespace-nowrap">
                  انتخاب کنید
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeTime;