import $ from "@/axios";
import { IResponseType } from "@/interfaces/components";

export function profileAPI(): Promise<IResponseType> {
  // console.log('look i got here');
  return $({
    url: "/profile",
    method: "get",
  });
}
