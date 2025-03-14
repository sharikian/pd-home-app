"use client"; // Required for client-side components in Next.js

import { useSession } from "next-auth/react";
import { Header, NavBar } from "@/app/components";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Mark } from "@/public/icons";
import Image from "next/image";
import useScreenSize from "../hooks/useScreenSize";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const { data: session, status } = useSession();
  const screenSize = useScreenSize()

  // Handle loading state
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        در حال بارگذاری...
      </div>
    );
  }

  // Handle unauthenticated state
  if (status === "unauthenticated") {
    redirect("/auth/login");
  }

  // Extract userName and userId from session
  const userName = session?.user?.name || "Guest"; // Fallback if name is missing
  const userId = session?.user?.id || "N/A"; // Fallback if ID is missing

  return (
    <div className="flex flex-col md:flex-row mb-20 md:mb-0">
      {screenSize.width <= 992 && (
        <Image className="fixed z-50 top-80" src={Mark} alt=">" />
      )}
      <NavBar className="shadow-left fixed top-0 right-0 z-50 bg-white pt-3 dark:bg-slate-800" />
      <main className="flex-1 md:mr-[200px] mt-0 dark:bg-slate-900">
        <div className="flex w-full md:w-[81vw] lg:w-[89vw] flex-col items-center gap-4 md:gap-6">
          <Header
            userName={userName}
            userId={userId}
            className="px-2 md:px-6 lg:px-10 py-3 md:py-5"
          />
          <div className="w-full px-2 md:px-4 lg:px-8">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;