import { FC } from "react";
import { ILayout } from "@/interfaces";

import { classNames } from "@/helpers/classNames";
import { Link, useLocation } from "react-router-dom";
import { ParallaxText } from "@/animations/ParallaxText";

const AuthLayout: FC<ILayout.IAuthLayout> = ({ children, tab }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className=" bg-gray-900">
      <section className="">
        <ParallaxText baseVelocity={-2}>{"<OLACODES👾/>"}</ParallaxText>
        <ParallaxText baseVelocity={2}>FULL STACK AUTH🔐</ParallaxText>
        <ParallaxText baseVelocity={-2}>{"<OLACODES👾/>"}</ParallaxText>
        <ParallaxText baseVelocity={2}>FULL STACK AUTH🔐</ParallaxText>
        <ParallaxText baseVelocity={-2}>{"<OLACODES👾/>"}</ParallaxText>
        <ParallaxText baseVelocity={2}>FULL STACK AUTH🔐</ParallaxText>
      </section>
      <div className="relative">
        <div className="glass backdrop-blur-[20px] fixed top-0 right-0 w-1/2 h-screen flex flex-col p-2 border-l border-gray-700">
          <div className="mt-24">
            {tab ? (
              <div>
                <div className="text-white  space-x-5 flex items-center p-2 justify-center">
                  <div className=" space-x-5 flex border-gray-500 border items-center p-1 justify-center bg-gray-600 py-1  px-1 rounded-[90px]">
                    {["register", "login"].map((i, index) => {
                      const route = `/auth/${i}`;
                      return (
                        <Link
                          key={index}
                          to={route}
                          className={classNames(
                            "px-8 rounded-2xl py-1 text-sm font-medium leading-5 text-white",
                            " focus:outline-none focus:ring-0 cursor-pointer",
                            route === currentRoute
                              ? "bg-purple-600 shadow shadow-neutral-600"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )}
                        >
                          <div className="capitalize">{i}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="pt-10">
                  <div className="mx-auto max-w-sm">{children}</div>
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-sm">{children}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
