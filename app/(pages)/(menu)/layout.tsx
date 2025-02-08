import { Header, NavBar } from "@/app/components";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode
}

const Layout = ({children}:Prop) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[calc(100%-180px)] flex flex-col items-center gap-4 md:gap-6">
          <Header
            userName={"joe rp"}
            userId={20938457}
            className="px-4 md:px-10 py-4"
          />
          <div className="w-full px-2 md:px-0 md:w-[95%] mx-0 md:mx-8 rounded-2xl md:rounded-[2.1875rem] p-4 md:p-8 border border-[#00000010] bg-white shadow-[8px_-23px_81.4px_#FFF,_-8px_23px_81.4px_rgba(26,_96,_78,_0.10)]">
            {children}
          </div>
        </div>

        <NavBar className="fixed bottom-0 md:bottom-auto md:top-0 right-0 w-full md:w-[180px] h-[70px] md:h-screen flex-row md:flex-col justify-center pt-0 md:pt-3 bg-white shadow-top md:shadow-left z-50" />
      </div>
    </>
  );
};

export default Layout;