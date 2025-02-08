import {
  SpeakAI,
  Sport,
  PersonWalking,
  ExerciseWalkingSupport,
  Food,
} from "@/public/icons";

import { MainCarousel } from "./Carousel";

import { ToggleShow } from "./ToggleShow";
import { PersonCard } from "./PersonCard";
import { MoreInfo } from "./MoreInfo";
import { GroupShow } from "./GroupShow";
import { JSX } from "react";

const Page = (): JSX.Element => {
  const toggles = [
    { title: "الگوهای حرکتی", icon: PersonWalking },
    { title: "گفتار درمانی", icon: SpeakAI },
    { title: "فیزیوتراپی", icon: Sport },
    { title: "کاردرمانی", icon: ExerciseWalkingSupport },
    { title: "تغذیه", icon: Food },
  ];
  return (
    <div className="w-full max-w-[1220px] px-4 md:px-0 mx-auto flex flex-col items-center gap-8 md:gap-[71px]">
      <MainCarousel/>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-40 w-full">
        {toggles.map((data, index) => (
            <ToggleShow Icon={data.icon} key={index} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-[19px] w-full p-4 md:pl-[19px] md:pr-[19px] md:py-[23px] bg-[#1a604eba] rounded-[15px]">
        <div className="flex-1 overflow-x-auto scroll-smooth">
            <div className="flex gap-2 md:gap-[13px] flex-nowrap w-full">
            {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="flex-shrink-0 min-w-[280px] md:min-w-[370px]">
                  <PersonCard />
                </div>
            ))}
            </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-semibold text-white text-3xl md:text-[50px] leading-normal [direction:rtl]">
            <span className="font-semibold block">
              آموزش های
            </span>
            <span className="font-black block mt-2">
              ویژه شما
            </span>
          </p>
        </div>
      </div>

      <MoreInfo />

      <GroupShow />

      <div className="flex gap-[19px] pl-[19px] pr-[19px] py-[23px] w-full bg-[#1a604eba] rounded-[15px]">
        <div className="flex-1 overflow-x-auto scroll-smooth">
          <div className="flex gap-[13px] flex-nowrap">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex-shrink-0">
                <PersonCard />
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex justify-center gap-2.5 p-2.5 items-center relative flex-[0_0_auto]">
          <p className="w-fit [font-family:'Pelak-SemiBold',Helvetica] font-normal text-white text-[50px] text-center relative mt-[-1.00px] tracking-[0] leading-[normal] [direction:rtl]">
            <span className="font-semibold">
              پربازدید ترین
              <br />
            </span>
            <span className="[font-family:'Pelak-Black',Helvetica] font-black">
              ویدیو ها
            </span>
          </p>
        </div>
      </div>

      <GroupShow />
    </div>
  );
};

export default Page;
