import { FC } from "react";
import { ILayout } from "@/interfaces";
import { Nav } from "@/components";

const AuthLayout: FC<ILayout.IAuthLayout> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AuthLayout;
