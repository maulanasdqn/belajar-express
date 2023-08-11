
import { TPrefixResponse } from "@/utilities";

export type TBookItem = {
  id: string;
  title: string;
  year: number;
  price: number;
  categoryId: string;
  authorId: string;
}

export type TBookResponse = TPrefixResponse<TBookItem[]>

export type TBookDetailResponse = TPrefixResponse<TBookItem>
