import { prefixResponse } from "@/utilities";
import { TBookResponse } from "./types";

export const booksDummy: TBookResponse = prefixResponse([
  {
    id: "qweqwrqwe",
    title: "How To Rich",
    year: 2023,
    category: "Self Improve",
    author: "Maulana Sodiqin",
    price: 20000,
    authorId: "qwe",
  },
  {
    id: "lkjlkjlkj",
    title: "How To Rich",
    year: 2003,
    category: "Self Improve",
    author: "Maulana Sodiqin",
    price: 30000,
    authorId: "qrt",
  },
]);
