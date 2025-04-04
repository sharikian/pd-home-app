"use client"
import { useState, useEffect, JSX } from "react";
import cloudsBack from "./svgs/clouds-back.svg";
import cloudsFront from "./svgs/clouds-front.svg";
import stars from "./svgs/stars.svg";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useScreenSize";

interface Props {
    activate: boolean;
    className: string;
}

export const DarkLightToggle = ({ activate, className }: Props): JSX.Element => {
    const screenSize = useScreenSize();
    
    const [isDark, setIsDark] = useState<boolean>(() => {
        // First load: Check localStorage -> then use prop
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme === 'dark';
        }
        return activate;
    });

    useEffect(() => {
        // Sync with HTML class and localStorage
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleMode = () => {
        setIsDark(prev => {
            const newMode = !prev;
            // Update localStorage immediately
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    return (
        <div
            className={`relative ${screenSize.width > 992 ? "w-[4.25rem] h-[1.75rem]" : "w-[1.8rem] h-[1.8rem]"} ${isDark ? "bg-[#242d36]" : "bg-[#1179f4]"} rounded-full overflow-hidden shadow-[inset_0_0.07rem_0.09rem_#00000040,inset_0_-0.05rem_0.14rem_#00000040,0_0.02rem_0.02rem_#fffffff0,0_-0.02rem_0.02rem_#00000040] ${className} transition-colors duration-500 cursor-pointer`}
            onClick={toggleMode}
            role="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div
                className={`absolute ${isDark ? "w-[4.88rem]" : "w-[5.88rem]"} ${isDark ? "left-[0.42rem]" : "left-[-1.29rem]"} ${isDark ? "top-[-1.22rem]" : "top-[-1.22rem]"} transition-all duration-500`}
            >
                <div className={`absolute w-[4.18rem] h-[4.18rem] ${isDark ? "left-0" : "left-0"} top-0`}>
                    <div className="relative h-[4.18rem] rounded-full">
                        <div className="absolute w-[2.25rem] h-[2.25rem] top-[0.97rem] left-[0.97rem] bg-[#ffffff1a] rounded-full" />
                        <div className="absolute w-[3.18rem] h-[3.18rem] top-[0.51rem] left-[0.51rem] bg-[#ffffff1a] rounded-full" />
                        <div className="absolute w-[4.18rem] h-[4.18rem] top-0 left-0 bg-[#ffffff1a] rounded-full" />
                    </div>
                </div>

                <Image
                    className={`absolute ${isDark ? "w-[1.75rem] h-[1.29rem]" : "w-[4.25rem] h-[1.75rem]"} ${isDark ? "left-0 top-[1.44rem]" : "left-[1.29rem] top-[1.22rem]"} transition-transform duration-500`}
                    alt="Clouds back"
                    src={isDark ? stars : cloudsBack}
                />

                {!isDark && (
                    <Image
                        className="absolute w-[4.18rem] h-[1.69rem] top-[1.22rem] left-[1.29rem] transition-transform duration-500"
                        alt="Clouds front"
                        src={cloudsFront}
                    />
                )}

                <div
                    className={`absolute w-[1.38rem] h-[1.38rem] ${isDark ? "left-[1.88rem] top-[1.38rem]" : "left-[1.38rem] top-[1.38rem]"} bg-[#ebcd2c] rounded-full overflow-hidden shadow-[inset_0.03rem_0.05rem_0.05rem_#ffffff99,inset_0_-0.05rem_0.05rem_#82841f] transition-all duration-500`}
                >
                    <div className={`relative h-[1.38rem] ${isDark ? "left-0" : "left-[1.52rem]"} bg-[#c8c8c8] rounded-full shadow-[inset_0.03rem_0.05rem_0.05rem_#ffffff99,inset_0_-0.05rem_0.05rem_#6b6b6b]`}>
                        <div className="relative w-[0.87rem] h-[0.77rem] top-[0.26rem] left-[0.29rem]">
                            <div className="absolute w-[0.18rem] h-[0.18rem] top-0 left-[0.26rem] bg-[#889398] rounded-full shadow-[inset_0_0.01rem_0.05rem_#00000040]" />
                            <div className="absolute w-[0.44rem] h-[0.44rem] top-[0.32rem] left-0 bg-[#889398] rounded-full shadow-[inset_0_0.01rem_0.05rem_#00000040]" />
                            <div className="absolute w-[0.27rem] h-[0.27rem] top-[0.39rem] left-[0.61rem] bg-[#889398] rounded-full shadow-[inset_0_0.01rem_0.05rem_#00000040]" />
                        </div>
                    </div>
                </div>
            </div>

            {isDark && (
                <div className="absolute top-[-5rem] left-[1.5rem] h-[4rem] w-[7rem] transition-transform duration-500">
                    <Image
                        className="absolute top-0 left-0 h-full w-full"
                        alt="Clouds back"
                        src={cloudsBack}
                    />
                    <Image
                        className="absolute top-[10%] left-[10%] h-full w-full"
                        alt="Clouds front"
                        src={cloudsFront}
                    />
                    <Image
                        className="absolute w-[1.75rem] h-[1.29rem] top-[1.44rem] left-0 transition-transform duration-500"
                        alt="Stars"
                        src={stars}
                    />
                </div>
            )}

            {!isDark && (
                <Image
                    className="absolute top-[-4rem] left-[2rem] h-[1.29rem] w-[1.75rem] transition-transform duration-500"
                    alt="Stars"
                    src={stars}
                />
            )}
        </div>
    );
};