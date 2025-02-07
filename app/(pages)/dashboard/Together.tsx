import Image from "next/image";

interface Prop {
    className?: string
}

export const Together = ({className}:Prop) => {
  return (
    <div className={`rtl relative w-[36.5rem] h-[21.1rem] text-[#1a604e] bg-[#b9d0aa] rounded-[35px] overflow-hidden ${className}`}>
        <Image alt="together" src='/imgs/dashboard/together.svg' width={250} height={250}/>

            <div className="absolute right-8 top-[38%]">
              امروز
            </div>

              <div className="absolute right-[37%] top-[73%]">
                امین
              </div>

              <div className="absolute right-[5%] top-[52%] text-9xl">
                ۴۸
              </div>

            <div className="absolute w-fit bottom-[4%] right-[6%] ">
              !روزیه که کنارمون هستید
            </div>
      
    </div>
  );
};