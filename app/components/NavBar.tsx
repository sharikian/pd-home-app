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

export const NavBar = ({ className }: Props): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>("خانه");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { value: "خانه", icon: HomeTwo },
    { value: "پرونده", icon: FileCollection },
    { value: "توانبخشی", icon: ConnectionPointTwo },
    { value: "توصیه ها", icon: BookOpen },
    { value: "مشاوره", icon: PeopleSpeak },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`${isMobileOpen ? "hidden" : 'fixed'} bottom-4 right-4 z-50 p-3 bg-emerald-600 rounded-full shadow-lg md:hidden
                   hover:bg-emerald-700 transition-all duration-300 hover:scale-105
                   dark:bg-emerald-700 dark:hover:bg-emerald-600`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Open menu"
      >
        <svg
          className="w-8 h-8 text-white"
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
      <div className="hidden md:block fixed right-0 top-0 h-full z-40 w-[220px]">
        <div className={`bg-gradient-to-b from-[#E8F5E9] to-white relative flex h-full w-full flex-col items-center gap-2 px-0 py-6 shadow-[-4px_0px_24px_rgba(0,0,0,0.05)] border-l border-emerald-50
                        dark:from-slate-800 dark:to-slate-900 dark:border-emerald-900/30 ${className}`}>
          <Link href="/" className="mb-8">
            <Image 
              className="h-[100px] w-[100px] transition-transform duration-300 hover:scale-110" 
              src={Logo} 
              alt="Logo" 
              priority
            />
          </Link>

          <div className="flex flex-col items-end gap-4 w-full px-6">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                onClick={() => setActiveItem(item.value)}
              />
            ))}
          </div>

          <div className="mt-auto w-full px-6">
            <NavBarItem
              item={{ value: "خروج", icon: MingcuteExitLine }}
              isActive={false}
              onClick={() => {}}
              className="hover:bg-rose-50/50 hover:text-rose-600 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
            />
          </div>
        </div>
      </div>

      {/* Mobile NavBar */}
      <div
        className={`fixed inset-0 z-30 bg-white/95 backdrop-blur-sm transform transition-all duration-300 ease-out
          dark:bg-slate-800/95
          ${isMobileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
          md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="self-end p-2 mb-4 hover:bg-gray-100 rounded-full transition-all
                      hover:scale-110 duration-200 dark:hover:bg-slate-700"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Link href="/" className="mb-8 self-center">
            <Image 
              className="h-[90px] w-[90px] transition-transform duration-300 hover:scale-110" 
              src={Logo} 
              alt="Logo" 
              priority
            />
          </Link>

          <div className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                onClick={() => {
                  setActiveItem(item.value);
                  setIsMobileOpen(false);
                }}
                mobile
              />
            ))}
          </div>

          <div className="mt-8">
            <NavBarItem
              item={{ value: "خروج", icon: MingcuteExitLine }}
              isActive={false}
              onClick={() => setIsMobileOpen(false)}
              mobile
              className="hover:bg-rose-50/50 hover:text-rose-600 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
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
  onClick,
  mobile = false,
  className = ""
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: { value: string; icon: any };
  isActive: boolean;
  onClick: () => void;
  mobile?: boolean;
  className?:string;
}) => {
  
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl px-4 pt-2 pb-1 transition-all duration-300 group ${className} ${
        mobile ? "w-full py-4" : "w-full"
      } ${
        isActive
          ? "bg-emerald-600/10 border-l-4 border-emerald-600 text-emerald-700 dark:bg-emerald-400/10 dark:border-emerald-400 dark:text-emerald-100"
          : "hover:bg-emerald-100/50 hover:scale-[1.02] text-emerald-800 dark:text-emerald-200 dark:hover:bg-slate-700/50"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row-reverse items-center gap-3 w-full">
        <div className={`p-2 rounded-lg transition-all duration-300 ${
          isActive 
            ? "bg-emerald-300 border-emerald-600 scale-110 dark:bg-emerald-800 dark:border-emerald-400" 
            : "bg-emerald-100 group-hover:bg-emerald-500 group-hover:scale-110 dark:bg-emerald-900/50 dark:group-hover:bg-emerald-700"
        }`} style={{borderWidth: '2px'}}>
          <Image
            src={item.icon}
            alt="0"
            className={`h-7 w-7 transition-all duration-300 ${
              isActive 
                ? "text-white dark:text-emerald-300"
                : "text-emerald-600 group-hover:text-white dark:text-emerald-400"
            }`}
          />
        </div>
        <div className={`font-medium text-lg whitespace-nowrap transition-colors ${
          isActive ? "font-semibold" : ""
        } dark:text-emerald-50`}>
          {item.value}
        </div>
      </div>
    </div>
  );
};