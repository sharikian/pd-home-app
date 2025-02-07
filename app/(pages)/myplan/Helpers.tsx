import { JSX } from "react";

export const Helpers = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-[27px] relative mt-16" style={{justifyContent:'end'}}>
      <div className="gap-[7px] inline-flex items-center relative ">
        <div className="justify-center gap-2.5 p-2.5 inline-flex items-center relative ">
          <div className="relative w-fit mt-[-1.00px] font-medium text-black text-base text-left ">
            رزرو شده
          </div>
        </div>
        <div className="relative w-[37px] h-[37px] bg-[#1a604e] rounded-[18.5px]" />
      </div>
      <div className="gap-[7px] inline-flex items-center relative ">
        <div className="justify-center gap-2.5 p-2.5 inline-flex items-center relative ">
          <div className="relative w-fit mt-[-1.00px] font-medium text-black text-base text-left ">
            مراجعه نشده
          </div>
        </div>
        <div className="bg-[#d85562] relative w-[37px] h-[37px] rounded-[18.5px]" />
      </div>
      <div className="gap-[7px] inline-flex items-center relative ">
        <div className="justify-center gap-2.5 p-2.5 inline-flex items-center relative ">
          <div className="relative w-fit mt-[-1.00px] font-medium text-black text-base text-left ">
            مراجعه شده
          </div>
        </div>
        <div className="bg-[#b9d0aa] relative w-[37px] h-[37px] rounded-[18.5px]" />
      </div>
    </div>
  );
};
