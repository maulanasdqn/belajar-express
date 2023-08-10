
import { TPrefixResponse } from "@/utilities";

export type TBookItem = {
  id: string;
  title: string;
  year: number;
  price: number;
  author: string;
  category: string;
  authorId: string;
}

export type TBookResponse = TPrefixResponse<TBookItem[]>
