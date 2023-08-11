import { prefixResponse } from "@/utilities";
import { TBookResponse } from "./types";

export const booksDummy: TBookResponse = prefixResponse([
  {
    id: "qweqwrqwe",
    title: "How To Rich",
    year: 2023,
    price: 20000,
    authorId: "qwe",
    categoryId: "qwe",
  },
  {
    id: "lkjlkjlkj",
    title: "How To Rich",
    year: 2003,
    price: 30000,
    authorId: "qrt",
    categoryId: "qwe",
  },
]);
