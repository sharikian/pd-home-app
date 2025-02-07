import { Header, NavBar } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  haveTabs?: boolean;
  children: ReactNode
}

const Layout = ({children}:Prop) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex w-full flex-col items-center gap-6">
          <Header
            userName={"joe rp"}
            userId={20938457}
            className="px-10 py-5"
          />
          <div className="flex flex-col justify-center w-[95%] mx-8 rounded-[2.1875rem] p-8 border border-[#00000010] bg-white shadow-[8px_-23px_81.4px_#FFF,_-8px_23px_81.4px_rgba(26,_96,_78,_0.10)]">
            {children}
          </div>
        </div>

        <NavBar className="shadow-left fixed top-0 right-0 z-50 bg-white pt-3" />
      </div>
    </>
  );
};

export default Layout;
