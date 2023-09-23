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
export function verifyAPI(data: any): Promise<IResponseType> {
  // console.log('look i got here');
  return $({
    url: "/auth/verify",
    method: "post",
    data: data,
  });
}

export function checkUsernameAPI(data: any): Promise<IResponseType> {
  return $({
    url: "/auth/check-username",
    method: "post",
    data: data,
  });
}
