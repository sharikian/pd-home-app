import { ArrowDown } from "@/public/icons";
import { PersonCard } from "./PersonCard";
import Image from "next/image";

export const GroupShow = () => {
    return (
        <div className="flex flex-col w-full items-start gap-2.5 relative flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex items-center gap-2">
            <Image className="w-6 h-6" src={ArrowDown} alt="arrow icon" style={{transform:'rotate(90deg)'}} />
            <div className="font-pelak text-[#1a604e] text-base text-right">
              ویدیو های بیشتر
            </div>
          </div>

          <div className="inline-flex justify-center gap-2.5 p-2.5 items-center relative flex-[0_0_auto]">
            <div className="w-fit  font-medium text-black text-[32px] relative mt-[-1.00px] tracking-[0] leading-[normal] [direction:rtl]">
              تغذیه
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] z-0 overflow-x-scroll">
        <div className="flex-1 overflow-x-auto scroll-smooth">
            <div className="flex gap-12 flex-nowrap justify-center">
            {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex-shrink-0">
                <PersonCard />
                </div>
            ))}
            </div>
    </div>
        </div>
      </div>
    )
}