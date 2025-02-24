"use client";
import { useState, JSX } from "react";
import { usePathname } from "next/navigation";
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

export const NavBar = ({ className }: Props): JSX.Element => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { value: "خانه", icon: HomeTwo, link: "" },
    { value: "پرونده", icon: FileCollection, link: "" },
    { value: "مسیر توانبخشی", icon: ConnectionPointTwo, link: "wents" },
    { value: "توصیه و آموزش ها", icon: BookOpen, link: "" },
    { value: "مشاوره", icon: PeopleSpeak, link: "" },
  ];

  const getActiveItem = () => {
    const currentPath = pathname?.split("/")[1] || ""; // Get first path segment
    const active = navItems.find(item => item.link === currentPath);
    return active?.value || "خانه";
  };

  const activeItem = getActiveItem();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`${
          isMobileOpen ? "hidden" : "fixed"
        } bottom-4 right-4 z-50 p-3 bg-emerald-600 rounded-full shadow-lg md:hidden
                   hover:bg-emerald-700 transition-all duration-300 hover:scale-105
                   dark:bg-emerald-700 dark:hover:bg-emerald-600`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop NavBar */}
      <div className="hidden md:block fixed right-0 top-0 z-40">
        <div
          className={`bg-gray relative flex h-full w-[190px] flex-col items-center gap-12 px-0 py-3 shadow-[-4px_0px_46.7px_#0000001c] ${className}`}
        >
          <Link href="/" className="mt-4">
            <Image className="h-[122px] w-[122px]" src={Logo} alt="Logo" />
          </Link>

          <div className="flex flex-col items-end gap-[8px] w-full px-4">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                link={item.link}
              />
            ))}
          </div>

          <div className="mt-auto w-full px-4">
            <NavBarItem
              item={{ value: "خروج", icon: MingcuteExitLine }}
              isActive={false}
              link="logout"
            />
          </div>
        </div>
      </div>

      {/* Mobile NavBar */}
      <div
        className={`fixed inset-0 z-30 bg-white transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden`}
      >
        <button
          onClick={() => setIsMobileOpen(false)}
          className="p-2 mb-4 hover:bg-gray-100 rounded-full transition-all
                      duration-200 dark:hover:bg-slate-700 absolute right-2 top-2"
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col h-full p-6">
          <Link href="/" className="mb-8 self-center">
            <Image className="h-[100px] w-[100px]" src={Logo} alt="Logo" />
          </Link>

          <div className="flex flex-col gap-4 flex-1">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                onClick={() => setIsMobileOpen(false)}
                mobile
                link={item.link}
              />
            ))}
          </div>

          <div className="mt-8">
            <NavBarItem
              item={{ value: "خروج", icon: MingcuteExitLine }}
              isActive={false}
              onClick={() => setIsMobileOpen(false)}
              mobile
              link="logout"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const NavBarItem = ({
  item,
  isActive,
  mobile = false,
  link = "",
  onClick,
}: {
  item: { value: string; icon: string };
  isActive: boolean;
  mobile?: boolean;
  link?: string;
  onClick?: () => void;
}) => (
  <Link href={`/${link}`} className="shrink-0" onClick={onClick}>
    <div
      className={`relative flex flex-col items-center justify-center rounded-[10px] px-4 pt-2 pb-1 transition-all duration-300 ${
        mobile ? "w-full" : "w-[160px]"
      } ${
        isActive
          ? "shadow-[inset_2px_4px_4px_#00000040] bg-[#b9d0aa57]"
          : "hover:bg-[#b9d0aa57] hover:scale-105"
      } ${mobile ? "py-3" : "py-2"}`}
    >
      <Image
        className="h-[31px] w-[31px] transition duration-300"
        alt={item.value}
        src={item.icon}
        width={31}
        height={31}
      />
      <div className="mt-1 text-[#1A604E] font-medium text-lg whitespace-nowrap dark:text-slate-400">
        {item.value}
      </div>
    </div>
  </Link>
);