import { TBookItem } from "@/routers";
import { TPrefixResponse } from "@/utilities";

export type TUserItem = {
  id: string;
  fullname: string;
  age: number;
  email: string;
  books?: Array<TBookItem>
}

export type TUserResponse = TPrefixResponse<TUserItem[]>
