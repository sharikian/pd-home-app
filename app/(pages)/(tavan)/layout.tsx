"use client"; // Required for client-side components in Next.js

import { useSession } from "next-auth/react";
import { Header, NavBar, Tabs } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">در حال بارگذاری...</div>;
  }

  // Handle unauthenticated state (optional: redirect to login)
  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        لطفاً وارد حساب کاربری خود شوید.
      </div>
    );
  }

  // Extract userName and userId from session
  const userName = session?.user?.name || "Guest"; // Fallback if name is missing
  const userId = session?.user?.id || "N/A"; // Fallback if ID is missing

  return (
    <div className="flex flex-col md:flex-row">
      <NavBar className="shadow-left fixed top-0 right-0 z-50 bg-white pt-3 dark:bg-slate-800" />

      <main className="flex-1 md:mr-[200px] mt-0 dark:bg-slate-900">
        <div className="flex w-full md:w-[81vw] lg:w-[89vw] flex-col items-center gap-4 md:gap-6">
          <Header
            userName={userName}
            userId={userId}
            className="px-2 md:px-6 lg:px-10 py-3 md:py-5"
          />
          <div className="w-full px-2 md:px-4 lg:px-8">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <Tabs
                varient="ligth"
                className="w-full max-w-[90vw]"
                items={[
                  { value: "ارجاعات", activate: true, link: "/wents" },
                  { value: "برنامه من", activate: false, link: "/myplan" },
                ]}
              />
              <div
                className="rounded-[1.5rem] md:rounded-[2.1875rem] p-3 md:p-6 lg:p-8 border border-[#00000010] bg-white w-full md:scale-90 md:mt-[-2rem] dark:bg-slate-800 dark:border-slate-700/30"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;