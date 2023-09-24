import { FC } from "react";
import { ILayout } from "@/interfaces";

const DashboardLayout: FC<ILayout.IDashboardLayout> = ({ children }) => {
  return (
    <div className="bg-gray-900 w-full h-screen text-white">{children}</div>
  );
};

export default DashboardLayout;
