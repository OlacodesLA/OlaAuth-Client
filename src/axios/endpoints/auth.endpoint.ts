import $ from "@/axios";
import { IResponseType } from "@/interfaces/components";

export function registerAPI(data: any): Promise<IResponseType> {
  // console.log('look i got here');
  return $({
    url: "/auth/register",
    method: "post",
    data: data,
  });
}
export function loginAPI(data: any): Promise<IResponseType> {
  // console.log('look i got here');
  return $({
    url: "/auth/login",
    method: "post",
    data: data,
  });
}
