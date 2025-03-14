import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export const metadata = {
  title: 'داشبورد',
};

const Layout2 = ({ children }: Prop) => {
  return (
    <div className="rounded-[1.5rem] md:rounded-[2.1875rem] p-3 md:p-6 lg:p-8 border border-[#00000010] bg-white md:scale-90 md:mt-[-8rem] dark:bg-slate-800 dark:border-slate-700/30">
      {children}
    </div>
  );
};

export default Layout2;
