import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

export const metadata = {
  title: "ورود",
};

const Layout = ({ children }: Prop) => {
  return <div>{children}</div>;
};

export default Layout;
