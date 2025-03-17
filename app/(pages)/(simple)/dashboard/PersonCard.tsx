import { Clock } from "@/public/icons";
import Rectangle from "@/public/imgs/menu/rectangle.png";
import Image from "next/image";

export const PersonCard = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 rounded-xl bg-[#B9D0AA] dark:bg-emerald-800 w-full max-w-[370px] text-black dark:text-white">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Image
          src={Rectangle}
          alt="person card"
          fill
          className="object-cover dark:brightness-90"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col mt-4">
        <h3 className="font-medium text-lg md:text-xl text-right cursor-pointer">
          رژیم بیماران پارکینسون
        </h3>
        
        <div className="flex justify-between items-center mt-4 md:mt-6">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Image 
              alt="Clock" 
              src={Clock} 
              className="w-4 h-4 md:w-5 md:h-5 dark:invert"
            />
            <span>دقیقه ۱۵</span>
          </div>
          <span className="text-sm md:text-base">1 هفته پیش</span>
        </div>
      </div>
    </div>
  );
};