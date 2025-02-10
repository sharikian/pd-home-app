import Image from "next/image";

interface Prop {
  Icon: string;
  title?: string;
}

export const ToggleShow = ({ Icon, title }: Prop) => {
  return (
    <div className="flex flex-col gap-2 sm:w-[100px] items-center">
      <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-full md:h-[100px] bg-[#B9D0AA] rounded-full shadow-lg flex items-center justify-evenly">
        <Image
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          alt="Icon"
          src={Icon}
          width={48}
          height={48}
        />
      </div>
      <span className="text-sm sm:text-base md:text-lg font-medium text-center text-black">
        {title}
      </span>
    </div>
  );
};