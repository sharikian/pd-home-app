import { Header, NavBar } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode
}

const Layout = ({ children }: Prop) => {
  return (
    <div className="flex flex-col md:flex-row">
      <NavBar className="shadow-left fixed top-0 right-0 z-50 bg-white pt-3 dark:bg-slate-900" />
      
      <main className="flex-1 md:mr-[200px] mt-0 dark:bg-slate-900">
        <div className="flex w-full md:w-[81vw] lg:w-[89vw] flex-col items-center gap-4 md:gap-6">
          <Header
            userName={"joe rp"}
            userId={20938457}
            className="px-2 md:px-6 lg:px-10 py-3 md:py-5"
          />
          <div className="w-full px-2 md:px-4 lg:px-8">
            <div className="rounded-[1.5rem] md:rounded-[2.1875rem] p-3 md:p-6 lg:p-8 border border-[#00000010] bg-white md:scale-90 md:mt-[-8rem]
                        dark:bg-slate-800 dark:border-slate-700/30">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;