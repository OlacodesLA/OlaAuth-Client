import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/utils";
interface AuthRouteProps {
  children: ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const userIsAuthenticated: boolean = isAuthenticated();

  const location = useLocation();

  if (userIsAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;
