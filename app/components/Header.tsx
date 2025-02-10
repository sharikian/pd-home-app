import { Help, MessageEmoji, SettingTwo, Remind } from "@/public/icons";
import { DarkLightToggle } from "./ui/DarkLigthToggle/DarkLigthToggle";
import Amo from "@/public/imgs/amo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

interface Props {
  userName: string;
  userId: number;
  className?: string;
}

export const Header = ({ userName, userId, className }: Props): JSX.Element => {
  return (
    <header className={`w-full bg-gradient-to-r from-[#E8F5E9] to-white/80 backdrop-blur-sm
                       border-b border-emerald-50 shadow-sm ${className}`}>
      <div className="mx-auto h-8 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Left Side Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <Link href="/myplan" className="p-2 rounded-lg transition-all hover:bg-emerald-100/50 hover:scale-105">
              <Image src={SettingTwo} alt="icon" className="h-7 w-7 text-emerald-600 transition-colors hover:text-emerald-700" />
            </Link>
            <Link href="/FAQ" className="p-2 rounded-lg transition-all hover:bg-emerald-100/50 hover:scale-105">
              <Image src={Help} alt="icon" className="h-7 w-7 text-emerald-600 transition-colors hover:text-emerald-700" />
            </Link>
            <Link href='/wents' className="p-2 rounded-lg transition-all hover:bg-emerald-100/50 hover:scale-105">
              <Image src={MessageEmoji} alt="icon" className="h-7 w-7 text-emerald-600 transition-colors hover:text-emerald-700" />
            </Link>
            <DarkLightToggle activate className="hover:scale-105 transition-transform" />
          </div>

          {/* Right Side Profile */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <Link href="/dashboard" className="flex items-center gap-2 md:gap-3 group">
              <div className="flex flex-col items-end text-right">
                <span className="font-pelak text-sm font-medium text-emerald-800 md:text-base transition-colors
                               group-hover:text-emerald-900">
                  {userName}
                </span>
                <span className="font-pelak-fa text-xs text-emerald-600/80 md:text-sm transition-colors
                               group-hover:text-emerald-700">
                  {userId}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative group">
                  <Image
                    className="h-11 w-11 rounded-full border-2 border-emerald-100 object-cover transition-all
                             md:h-12 md:w-12 group-hover:border-emerald-200 group-hover:scale-105"
                    alt="Profile"
                    src={Amo}
                  />
                  <div className="absolute -right-3 -bottom-2 p-1.5 bg-white rounded-full shadow-sm border
                                border-emerald-50 transition-transform group-hover:scale-110">
                    <Image src={Remind} alt="icon" className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};