"use client";
import { useState, JSX } from "react";
import {
  BookOpen,
  ConnectionPointTwo,
  FileCollection,
  HomeTwo,
  PeopleSpeak,
  MingcuteExitLine,
} from "@/public/icons";
import Logo from "@/public/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

interface NavBarValProps {
  value: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const NavBarVal = ({
  value,
  icon,
  isActive,
  onClick,
}: NavBarValProps): JSX.Element => {
  return (
    <div
      className={`relative flex w-full flex-[0_0_auto] flex-col items-center justify-center self-stretch rounded-[10px] px-[25px] pt-2.5 pb-0 transition duration-300 ease-in-out whitespace-nowrap ${
        isActive
          ? "shadow-[inset_2px_4px_4px_#00000040] bg-[#b9d0aa57]"
          : "hover:bg-[#b9d0aa57] hover:translate-x-[-4px]"
      }`}
      onClick={onClick}
    >
      <Image
        className="relative h-[31px] w-[31px] transition duration-300 ease-in-out"
        alt={value}
        src={icon}
      />

      <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-2.5 py-1.5 transition duration-300 ease-in-out">
        <div
          className={`text-[#1A604E] relative mt-[-1.00px] w-fit ext-lg leading-[normal] font-medium transition duration-300 ease-in-out ${
            isActive ? "text-shadow-active" : ""
          }`}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export const NavBar = ({ className }: Props): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>("خانه");

  const navels = [
    { value: "خانه", icon: HomeTwo },
    { value: "پرونده", icon: FileCollection },
    { value: "مسیر توانبخشی", icon: ConnectionPointTwo },
    { value: "توصیه ها و آموزش ها", icon: BookOpen },
    { value: "مشاوره", icon: PeopleSpeak },
  ];

  return (
    <div
      className={`bg-gray relative flex h-[1099px] w-[180px] flex-col items-center gap-14 px-0 py-3 shadow-[-4px_0px_46.7px_#0000001c] ${className}`}
    >
      {/* Logo */}
      <Link href="/">
        <Image className="!h-[122px] !w-[122px]" src={Logo} alt="Logo" />
      </Link>

      {/* Navigation Items */}
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-end gap-[13px] self-stretch">
        {navels.map((data) => (
          <NavBarVal
            key={data.value}
            value={data.value}
            icon={data.icon}
            isActive={activeItem === data.value}
            onClick={() => setActiveItem(data.value)}
          />
        ))}
      </div>

      {/* Logout Section */}
      <div
        className={`absolute top-[918px] flex h-[86px] w-[197px] flex-col items-center justify-center gap-[7px] rounded-[10px] px-[25px] pt-2.5 pb-0 transition duration-300 ease-in-out ${
          activeItem === "خروج"
            ? "shadow-[inset_2px_4px_4px_#00000040] bg-[#b9d0aa57]"
            : "hover:bg-[#b9d0aa57] hover:translate-x-2"
        }`}
      >
        <Image
          className="relative h-[31px] w-[31px] transition duration-300 ease-in-out"
          alt="خروج"
          src={MingcuteExitLine}
        />

        <div className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5 px-2.5 py-1.5 transition duration-300 ease-in-out">
          <div
            className={`text-[#1A604E] relative mt-[-1.00px] w-fit text-lg leading-[normal] font-medium tracking-[0] transition duration-300 ease-in-out`}
          >
            خروج
          </div>
        </div>
      </div>
    </div>
  );
};
