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
    <header className={`w-full bg-[#eaeef1] shadow-lg ${className}`}>
      <div className="mx-auto h-20 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* Left Side Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link href="/myplan" className="shrink-0">
              <Image
                className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
                alt="Settings"
                src={SettingTwo}
              />
            </Link>
            <Link href="/FAQ" className="shrink-0">
              <Image
                className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
                alt="Help"
                src={Help}
              />
            </Link>
            <Link href='/wents' className="shrink-0">
              <Image
                className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
                alt="Messages"
                src={MessageEmoji}
              />
            </Link>
            <DarkLightToggle activate className="shrink-0" />
          </div>

          {/* Right Side Profile */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link href="/dashboard" className="flex items-center gap-2 md:gap-4">
              <div className="flex flex-col items-end text-right">
                <span className="font-pelak text-sm font-medium text-gray-800 md:text-base">
                  {userName}
                </span>
                <span className="font-pelak-fa text-xs text-gray-600 md:text-sm">
                  {userId}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12"
                  alt="Profile"
                  src={Amo}
                />
                <Image
                  className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
                  alt="Notifications"
                  src={Remind}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};