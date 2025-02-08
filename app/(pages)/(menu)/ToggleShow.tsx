import { PersonCard } from "./PersonCard";
import Image from "next/image";

interface Prop {
    Icon: string;
    // title?: string;
}

export const ToggleShow = ({Icon}:Prop) => {
    return (
        <div className="w-full flex flex-col items-start gap-2.5 relative">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 order-2 md:order-1">
                    <Image 
                        className="w-6 h-6" 
                        src={Icon} 
                        alt="arrow icon" 
                        style={{ transform: 'rotate(90deg)' }} 
                    />
                    <div className="font-pelak text-[#1a604e] text-sm md:text-base">
                        ویدیو های بیشتر
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <div className="font-medium text-black text-xl md:text-2xl lg:text-[32px] [direction:rtl]">
                        تغذیه
                    </div>
                </div>
            </div>

            <div className="w-full overflow-x-auto pb-4">
                <div className="flex gap-4 md:gap-12 flex-nowrap px-2 md:px-0">
                    {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[370px]">
                            <PersonCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}