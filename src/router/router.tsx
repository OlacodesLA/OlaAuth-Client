import * as React from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/dashboard";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Verify from "@/pages/auth/verify";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/verify",
      element: <Verify />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
