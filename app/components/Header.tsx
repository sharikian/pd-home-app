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
    <header
      className={`relative mx-auto h-20 w-full max-w-screen-2xl bg-[#eaeef1] shadow-lg ${className}`}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-8">
        {/* Left Side Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/myplan">
            <Image
              className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
              alt="Settings"
              src={SettingTwo}
            />
          </Link>
          <Link href="/FAQ">
            <Image
              className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
              alt="Help"
              src={Help}
            />
          </Link>
          <Link href='/wents'>
            <Image
              className="h-8 w-8 transition-opacity hover:opacity-80 md:h-9 md:w-9"
              alt="Messages"
              src={MessageEmoji}
            />
          </Link>
          <DarkLightToggle activate className={""} />
        </div>

        {/* Right Side Profile */}
        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <Link href="/dashboard">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex flex-col items-end text-right">
                <span className="[font-family:'Pelak-Regular',Helvetica] text-sm font-medium text-gray-800 md:text-base">
                  {userName}
                </span>
                <span className="[font-family:'PelakFA-Regular',Helvetica] text-xs text-gray-600 md:text-sm">
                  {userId}
                </span>
              </div>
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
    </header>
  );
};
