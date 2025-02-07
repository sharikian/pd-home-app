import { Button } from '@/app/components';
import { Danger, ArrowDown } from "@/public/icons";
import { JSX } from 'react';
import Image from 'next/image';

export const NotDoIt = (): JSX.Element => (
    <div className="flex items-center justify-between pt-[15px] pb-5 px-0 relative border-b border-solid border-[#00000030] gap-10">
        {/* Left Activities Panel */}
        <div className="flex flex-col items-start gap-5 flex-1 max-w-[677px]">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                <Image className="w-6 h-6" src={ArrowDown} alt="arrow icon" style={{transform:'rotate(90deg)'}} />
            <div className="font-pelak text-[#1a604e] text-base text-right">
              شرح فعالیت ها
            </div>
                </div>
                <div className="font-medium text-black text-2xl text-right">
                    فعالیت های انجام نشده
                </div>
            </div>

            {/* Activities List */}
            <div className="w-full space-y-4">
                {[
            { title: "ویزیت توسط متخصص توانبخشی", date: "شنبه 8 دی ماه - دکتر روحانی", icon: <Image alt='دکتر روحانی' src={Danger}/>, bgColor: 'bg-[#d855621a]', },
            { title: "جلسه تمرین گفتاردرمانی", date: "سه شنبه 11 دی ماه - دکتر عطایی", icon: <Image alt='دکتر عطایی' src={Danger}/>, bgColor: 'bg-[#d855621a]', },
            { title: "جلسه تمرین کاردرمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری", icon: <Image alt='دکتر نوری' src={Danger}/>, bgColor: 'bg-[#d855621a]', },
            { title: "جلسه تمرین آب درمانی", date: "پنج شنبه 13 دی ماه - دکتر نوری", icon: <Image alt='دکتر نوری' src={Danger}/>, bgColor: 'bg-[#d855621a]', },
            { title: "جلسه تمرین فیزیوتراپی", date: "پنج شنبه 13 دی ماه - دکتر نوری", icon: <Image alt='دکتر نوری' src={Danger}/>, bgColor: 'bg-[#d855621a]', },
          ].map((activity, index) => (
                    <div key={index} className={`p-4 rounded-[15px] ${activity.bgColor}`}>
                        <div className="flex items-center justify-end gap-2">
                            <span className="font-pelak text-black text-2xl text-right">
                                {activity.title}
                            </span>
                            {activity.icon}
                        </div>
                        <p className="text-right text-base text-black mt-2">
                            {activity.date}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Image Panel */}
        <div className="relative w-[677px] h-[585px] bg-[#b9d0aa] rounded-[35px] overflow-hidden">
            <div
                className="relative h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(/imgs/dashboard/park-family.png)`,
                    backgroundPosition: 'center 35%'
                }}
            >
                {/* Adjusted gradient - starts higher */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b9d0aa] to-[#b9d0aa] via-60%" />

                <div className="flex flex-col items-end absolute bottom-[120px] left-[31px] right-[31px]">
                    <div className="flex items-end gap-8">
                        <Button
                            text="اطلاعات بیشتر" />
                        <p className="font-semibold text-[#1a604e] text-[50px] text-right leading-normal">
                            رویداد ها <br />
                            و همایش های <br />
                            <span className="font-black font-pelak">خانواده پارکینسون</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);