import Image from "next/image";

interface Prop {
    Icon: string;
    title?: string;
}

export const ToggleShow = ({Icon, title}:Prop) => {
    return (
        <div className="flex flex-col w-[100px] items-center gap-2.5 relative">
          <div className="relative w-[100px] h-[100px] bg-[#B9D0AA] rounded-[50px] shadow-[-6px_7px_21px_-6px_#1a604e,2px_-1px_66.3px_18px_#ffffff]">
            <Image
              className="absolute w-[51px] h-[51px] top-6 left-6"
              alt="Fluent person"
              src={Icon}
            />
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] ml-[-27.50px] mr-[-27.50px]">
            <div className="relative w-fit mt-[-1.00px]  font-medium text-black text-[21px] tracking-[0] leading-[normal] [direction:rtl]">
              {title}
            </div>
          </div>
        </div>
    )
}