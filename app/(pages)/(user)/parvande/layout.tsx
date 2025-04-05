import { Tabs } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export const metadata = {
  title: "پرونده",
};

const Layout4 = ({ children }: Prop) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 min-h-screen">
      {/* Tabs Section */}
      <Tabs
        varient="ligth"
        className="w-full max-w-[90vw]"
        items={[
          { value: "مشخصات عمومی",  link: "/parvande" },
          { value: "شرح حال اولیه",  link: "/parvande/first" },
          { value: "آزمایش ها",  link: "/parvande/exper" },
          { value: "تست ها",  link: "/parvande/tests" },
          { value: "ارجاعات",  link: "/parvande/wents" },
          { value: "تایم لانگ پرونده",  link: "/parvande/timing" },
          { value: "پیگیری",  link: "/parvande/feed" },
        ]}
      />

      {/* Content Section with Fixed Positioning */}
      <div className="flex-1 w-full max-w-[84vw] overflow-auto rounded-[1.5rem] md:rounded-[2.1875rem] p-3 md:p-6 lg:p-8 border border-[#00000010] bg-white dark:bg-slate-800 dark:border-slate-700/30">
        {children}
      </div>
    </div>
  );
};

export default Layout4;
