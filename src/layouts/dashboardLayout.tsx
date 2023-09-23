import { FC } from "react";
import { ILayout } from "@/interfaces";
import { Nav } from "@/components";

const DashboardLayout: FC<ILayout.IDashboardLayout> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default DashboardLayout;
