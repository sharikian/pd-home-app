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
  link: string | string[]; // link can be a string or an array of strings
}

export const NavBar = ({ className }: Props): JSX.Element => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { value: "خانه", icon: HomeTwo, link: "" },
    { value: "پرونده", icon: FileCollection, link: "parvande" },
    { value: "مسیر توانبخشی", icon: ConnectionPointTwo, link: ["wents", "myplan"] },
    { value: "توصیه و آموزش ها", icon: BookOpen, link: "dashboard" },
    { value: "مشاوره", icon: PeopleSpeak, link: "FAQ" },
  ];

  const getActiveItem = () => {
    const currentPath = pathname?.split("/")[1] || "";
    const active = navItems.find((item) => {
      if (Array.isArray(item.link)) {
        return item.link.includes(currentPath); // Check if current path is in the array
      }
      return item.link === currentPath;
    });
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

  // Helper function to get the target link (first item if array)
  const getTargetLink = (link: string | string[]): string => {
    return Array.isArray(link) ? link[0] : link;
  };

  return (
    <>
      {/* Desktop NavBar */}
      <div className="hidden md:block fixed right-0 top-0 h-[100vh]" style={{zIndex: 60}}>
        <div
          className={`bg-gray relative flex h-full w-[calc(1.8229vw+132px)] flex-col items-center gap-12 px-0 py-3 shadow-[-4px_0px_46.7px_#0000001c] ${className}`}
        >
          <Link href="/" className="mt-4">
            <Image className="h-[122px] w-[122px]" src={Logo} alt="Logo" />
          </Link>

          <div className="flex flex-col items-center gap-[8px] w-full px-2">
            {navItems.map((item) => (
              <NavBarItem
                key={item.value}
                item={item}
                isActive={activeItem === item.value}
                link={getTargetLink(item.link)} // Use first link if array
              />
            ))}
          </div>

          <div className="mt-auto w-full px-2">
            <button
              onClick={handleLogout}
              className="relative flex flex-col items-center justify-center rounded-[10px] px-4 pt-2 pb-1 transition-all duration-300 w-[90%] py-2 hover:scale-105"
            >
              <Image
                className="h-[31px] w-[31px] transition duration-300"
                alt="خروج"
                src={MingcuteExitLine}
                width={31}
                height={31}
              />
              <div className="mt-1 text-[#1A604E] font-medium text-lg whitespace-nowrap dark:text-slate-200">
                خروج
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Toolbar */}
      <div className="md:hidden fixed bottom-2 left-2 right-2 z-50 bg-[#EAEEF1] dark:bg-slate-700 shadow-[0_-8px_20px_rgba(0,0,0,0.15),0_2px_10px_rgba(0,0,0,0.1)] border border-[#00000010] dark:border-slate-600/50 px-1 py-1 flex justify-around items-center h-[80px] rounded-[20px]">
        {navItems.map((item) => (
          <MobileNavItem
            key={item.value}
            item={item}
            isActive={activeItem === item.value}
            link={getTargetLink(item.link)} // Use first link if array
          />
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center p-1 w-[50px]"
        >
          <Image
            className="h-[24px] w-[24px] transition duration-300"
            alt="خروج"
            src={MingcuteExitLine}
            width={24}
            height={24}
          />
          <span className="text-[#1A604E] dark:text-slate-200 text-[10px] font-medium mt-[2px]">
            خروج
          </span>
        </button>
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
      className={`relative flex flex-col items-center justify-center rounded-[10px] px-4 pt-2 pb-1 transition-all duration-300 w-full ${
        isActive ? "bg-[#b9d0aa57]" : "hover:scale-105"
      } py-2`}
    >
      <Image
        className="h-[31px] w-[31px] transition duration-300"
        alt={item.value}
        src={item.icon}
        width={31}
        height={31}
      />
      <div
        className="mt-1 text-[#1A604E] font-medium whitespace-nowrap dark:text-slate-200"
        style={{ fontSize: "90%" }}
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
  <Link href={`/${link}`} className="flex flex-col items-center justify-center p-1 w-[50px]">
    <div
      className={`flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all duration-300 ease-in-out ${
        isActive ? "bg-[#1A604E] scale-110" : ""
      }`}
    >
      <Image
        className={`h-[24px] w-[24px] transition-all duration-300 ease-in-out ${
          isActive ? "invert" : ""
        }`}
        alt={item.value}
        src={item.icon}
        width={24}
        height={24}
      />
    </div>
    {!isActive && (
      <span
        className={`text-[#1A604E] dark:text-slate-200 text-[10px] font-medium mt-[2px] transition-opacity duration-300 ease-in-out ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        {item.value.split(" ")[0]}
      </span>
    )}
  </Link>
);