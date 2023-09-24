import * as React from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/dashboard";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Verify from "@/pages/auth/verify";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./protectedRoute";
import AuthRoute from "./authRoute";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/auth/register",
      element: (
        <AuthRoute>
          <Register />
        </AuthRoute>
      ),
    },
    {
      path: "/auth/login",
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      ),
    },
    {
      path: "/auth/verify",
      element: (
        <AuthRoute>
          <Verify />
        </AuthRoute>
      ),
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
