import { ReactNode } from "react";

export interface IAuthLayout {
  children: ReactNode;
  tab?: boolean;
  panel?: string;
}
export interface IDashboardLayout {
  children: ReactNode;
}
