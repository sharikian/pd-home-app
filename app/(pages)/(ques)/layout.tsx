"use client";

import { Tabs } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const Layout1 = ({ children }: Prop) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <Tabs
        varient="ligth"
        className="w-full max-w-[90vw]"
        items={[
          { value: "درمان های نوین", activate: true, link: "/FAQ" },
          { value: "دارو ها", activate: false, link: "/FAQ" },
          { value: "مشکلات حرکتی", activate: false, link: "/FAQ" },
          { value: "اختلال خواب", activate: false, link: "/FAQ" },
          { value: "تکلم و بلع", activate: false, link: "/FAQ" },
        ]}
      />
      <div className="rounded-[1.5rem] md:rounded-[2.1875rem] p-3 md:p-6 lg:p-8 border border-[#00000010] bg-white w-full md:scale-90 md:mt-[-2rem] dark:bg-slate-800 dark:border-slate-700/30">
        {children}
      </div>
    </div>
  );
};

export default Layout1;
