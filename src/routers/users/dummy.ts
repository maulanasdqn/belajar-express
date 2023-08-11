import { TUserResponse } from "./types";
import { prefixResponse } from "@/utilities";

export const usersDummy: TUserResponse = prefixResponse([
  {
    id: "qwe",
    fullname: "Maulana Sodiqin",
    age: 22,
    email: "maul@org.com",
  },
  {
    id: "qrt",
    fullname: "Fenny Oktaviani",
    age: 23,
    email: "waduh@waduh.com",
  },
]);
