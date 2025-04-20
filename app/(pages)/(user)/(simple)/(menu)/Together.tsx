"use client";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";
import TegetherPic from '@/public/imgs/dashboard/together.svg'

interface Prop {
  className?: string;
}

export const Together = ({ className }: Prop) => {
  const screenSize = useScreenSize();
  return (
    <div
      className={`rtl relative w-full h-[16rem] md:h-[20.1rem] text-[#1a604e] bg-[#b9d0aa] rounded-[35px] overflow-hidden ${className}`}
    >
      <Image
        alt="together"
        src={TegetherPic}
        width={screenSize.width > 992 ? 230 : 240}
        height={250}
        className="mb-16"
      />

      <div className="absolute right-8 top-[20%] md:top-[38%]">امروز</div>

      <div className="absolute right-[60%] md:right-[43%] top-[74%] md:top-[75%]">امین</div>

      <div className="absolute right-[5%] top-[38%] md:top-[52%] text-9xl">۴۸</div>

      <div className="absolute w-fit bottom-[2%] md:bottom-[4%] right-[6%] ">
        !روزیه که کنارمون هستید
      </div>
    </div>
  );
};
