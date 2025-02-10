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
    <div className="w-full max-w-[1220px] px-4 xs:px-6 sm:px-8 mx-auto flex flex-col items-center gap-6 md:gap-12 lg:gap-[71px]">
      <MainCarousel />

      <div className="flex flex-wrap justify-center md:justify-around gap-6 md:gap-6 lg:gap-8 w-full">
        {toggles.map((data, index) => (
          <ToggleShow title={data.title} Icon={data.icon} key={index} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full p-4 md:p-6 bg-[#1a604eba] rounded-2xl items-center">
        <div className="flex gap-4 md:gap-6 w-full md:w-[75%] [direction:rtl] overflow-x-auto">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[370px]"
            >
              <PersonCard />
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <p className="font-semibold text-white text-2xl md:text-4xl lg:text-[50px] leading-normal flex flex-row-reverse md:flex-col gap-2 items-center">
            <span className="block">آموزش های</span>
            <span className="font-black block mt-2">ویژه شما</span>
          </p>
        </div>
      </div>

      <MoreInfo />

      <GroupShow />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full p-4 md:p-6 bg-[#1a604eba] rounded-2xl items-center">
        <div className="flex gap-4 md:gap-6 w-full md:w-[75%] [direction:rtl] overflow-x-auto">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[370px]"
            >
              <PersonCard />
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <p className="font-semibold text-white text-2xl md:text-4xl lg:text-[40px] leading-normal flex flex-row-reverse md:flex-col gap-2 items-center">
            <span className="font-semibold block">پربازدید ترین</span>
            <span className="font-black block">ویدیو ها</span>
          </p>
        </div>
      </div>

      <GroupShow />
    </div>
  );
};

export default Page;
