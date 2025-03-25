"use client";
import { JSX } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
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

interface NavItem {
  value: string;
  icon: string;
  link: string | string[];
}

export const NavBar = ({ className }: Props): JSX.Element => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { value: "خانه", icon: HomeTwo, link: "" },
    { value: "پرونده", icon: FileCollection, link: "parvande" },
    { value: "مسیر توانبخشی", icon: ConnectionPointTwo, link: ["myplan", "wents"] },
    { value: "توصیه و آموزش ها", icon: BookOpen, link: "dashboard" },
    { value: "مشاوره", icon: PeopleSpeak, link: ["FAQ/1", "FAQ/2", "FAQ/3", "FAQ/4", "FAQ/5"] },
  ];

  const getActiveItem = () => {
    // Split the pathname into segments
    const pathSegments = pathname?.split("/").filter(segment => segment) || [];
    
    // If there's only one segment (e.g., "/parvande"), use it; if more (e.g., "/FAQ/1"), join the first two segments
    const currentPath = pathSegments.length >= 2 ? `${pathSegments[0]}/${pathSegments[1]}` : pathSegments[0] || "";

    const active = navItems.find((item) =>
      Array.isArray(item.link) ? item.link.includes(currentPath) : item.link === currentPath
    );
    return active?.value || "خانه";
  };

  const activeItem = getActiveItem();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/auth/login" });
      toast.success("شما با موفقیت خارج شدید.");
    } catch (error) {
      toast.error("خروج با خطا مواجه شد.");
      console.error("Logout error:", error);
    }
  };

  const getTargetLink = (link: string | string[]): string => {
    return Array.isArray(link) ? link[0] : link;
  };

  return (
    <>
      {/* Desktop NavBar */}
      <div className="hidden md:block fixed right-0 top-0 h-[100vh]" style={{ zIndex: 60 }}>
        <div
          className={`bg-gray relative flex h-full w-[140px] flex-col items-center gap-8 px-0 py-2 shadow-[-4px_0px_46.7px_#0000001c] ${className}`}
        >
          <Link href="/" className="mt-3">
            <Image className="h-[80px] w-[80px]" src={Logo} alt="Logo" />
          </Link>

          <div className="flex flex-col items-center gap-[6px] w-full px-1">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                link={getTargetLink(item.link)}
              />
            ))}
          </div>

          <div className="mt-auto mb-4 w-full px-1 justify-center flex">
            <button
              onClick={handleLogout}
              className="relative flex flex-col items-center justify-center rounded-[8px] px-2 pt-1 pb-1 transition-all duration-300 w-[90%] hover:scale-105"
            >
              <Image
                className="h-[24px] w-[24px] transition duration-300"
                alt="خروج"
                src={MingcuteExitLine}
                width={24}
                height={24}
              />
              <div className="mt-1 text-[#1A604E] font-medium text-sm whitespace-nowrap dark:text-slate-200">
                خروج
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Toolbar */}
      <div className="md:hidden fixed bottom-1 left-1 right-1 z-50 bg-[#EAEEF1] dark:bg-slate-700 shadow-[0_-8px_20px_rgba(0,0,0,0.15),0_2px_10px_rgba(0,0,0,0.1)] border border-[#00000010] dark:border-slate-600/50 px-2 py-2 flex justify-around items-center h-[80px] rounded-[9999px]">
        {/* Reordered nav items: مشاوره, مسیر توانبخشی, خانه, پرونده, آموزش ها */}
        <MobileNavItem
          item={navItems[4]} // مشاوره
          isActive={activeItem === navItems[4].value}
          link={getTargetLink(navItems[4].link)}
        />
        <MobileNavItem
          item={navItems[2]} // مسیر توانبخشی
          isActive={activeItem === navItems[2].value}
          link={getTargetLink(navItems[2].link)}
        />
        <MobileNavItem
          item={navItems[0]} // خانه
          isActive={activeItem === navItems[0].value}
          link={getTargetLink(navItems[0].link)}
        />
        <MobileNavItem
          item={navItems[1]} // پرونده
          isActive={activeItem === navItems[1].value}
          link={getTargetLink(navItems[1].link)}
        />
        <MobileNavItem
          item={navItems[3]} // توصیه و آموزش ها
          isActive={activeItem === navItems[3].value}
          link={getTargetLink(navItems[3].link)}
        />
      </div>
    </>
  );
};

// Desktop NavBarItem
const NavBarItem = ({
  item,
  isActive,
  link = "",
}: {
  item: NavItem;
  isActive: boolean;
  link?: string;
}) => (
  <Link href={`/${link}`} className="w-[90%]">
    <div
      className={`relative flex flex-col items-center justify-center rounded-[8px] px-2 pt-1 pb-1 transition-all duration-300 w-full ${
        isActive ? "bg-[#b9d0aa57]" : "hover:scale-105"
      }`}
    >
      <Image
        className="h-[24px] w-[24px] transition duration-300"
        alt={item.value}
        src={item.icon}
        width={24}
        height={24}
      />
      <div
        className="mt-1 text-[#1A604E] font-medium whitespace-nowrap dark:text-slate-200 text-sm"
      >
        {item.value}
      </div>
    </div>
  </Link>
);

// Mobile NavBarItem
const MobileNavItem = ({
  item,
  isActive,
  link = "",
}: {
  item: NavItem;
  isActive: boolean;
  link?: string;
}) => (
  <Link href={`/${link}`} className="flex flex-col items-center justify-center p-1 w-[70px]">
    <div
      className={`flex items-center justify-center w-[48px] h-[48px] rounded-full transition-all duration-300 ease-in-out ${
        isActive ? "bg-[#1A604E]" : ""
      }`}
    >
      <Image
        className="h-[28px] w-[28px] transition-all duration-300 ease-in-out"
        alt={item.value}
        src={item.icon}
        width={28}
        height={28}
      />
    </div>
    {!isActive && (
      <span
        className="text-[#1A604E] dark:text-slate-200 text-[9px] font-medium mt-1 transition-opacity duration-300 ease-in-out whitespace-normal w-full text-center leading-tight"
      >
        {item.value}
      </span>
    )}
  </Link>
);