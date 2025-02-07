import { Clock } from "@/public/icons";
import Rectangle from "@/public/imgs/menu/rectangle.png";
import Image from "next/image";

export const PersonCard = () => {
    return (
        <div className="flex flex-col py-[20px] px-3.5 rounded-[15px] bg-[#B9D0AA]" style={{width:'370px'}}>
            <Image
              src={Rectangle}
              alt="person card"
            />
            <div className="flex flex-col justify-between">
              <div className="inline-flex flex-col items-end gap-2.5">
                <div className="flex w-[214px] items-center justify-center gap-2.5">
                  <div className="flex-1 font-medium text-black text-[21px] mt-[-1.00px] ">
                    رژیم بیماران پارکینسون
                  </div>
                </div>

              </div>
              <div className="flex gap-30 mt-6">
              <div className="flex w-[83px] items-center gap-1.5">
                <p className="whitespace-nowrap font-medium text-[#0000008f]">
                  دقیقه ۱۵
                </p>
                <Image
                  alt="Lucide clock"
                  src={Clock}
                  width={20}
                />
              </div>

                <div className="flex w-[79px] items-center justify-center gap-2.5">
                  <div className="whitespace-nowrap mt-[-1.00px] font-medium text-[#0000008f]">
                    1 هفته پیش
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

