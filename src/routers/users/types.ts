import { TBookItem } from "@/routers";
import { TPrefixResponse } from "@/utilities";

export type TUserItem = {
  id: string;
  fullname?: string | null;
  age?: number | null;
  email: string;
  books?: Array<TBookItem>;
};

export type TUserResponse = TPrefixResponse<TUserItem[]>;

export type TUserDetailResponse = TPrefixResponse<TUserItem>;
