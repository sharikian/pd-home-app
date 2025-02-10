"use client";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

interface Prop {
  className?: string;
}

export const Together = ({ className }: Prop) => {
  const screenSize = useScreenSize();
  return (
    <div
      className={`rtl relative w-[36.5rem] h-[18rem] md:h-[21.1rem] text-[#1a604e] bg-[#b9d0aa] rounded-[35px] overflow-hidden ${className}`}
    >
      <Image
        alt="together"
        src="/imgs/dashboard/together.svg"
        width={screenSize.width > 992 ? 250 : 140}
        height={250}
        className="mb-16"
      />

      <div className="absolute right-8 top-[38%]">امروز</div>

      <div className="absolute right-[60%] md:right-[40%] top-[75%]">امین</div>

      <div className="absolute right-[5%] top-[52%] text-9xl">۴۸</div>

      <div className="absolute w-fit bottom-[2%] md:bottom-[4%] right-[6%] ">
        !روزیه که کنارمون هستید
      </div>
    </div>
  );
};
