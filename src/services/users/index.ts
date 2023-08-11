import { TUserDetailResponse, TUserResponse } from "@/routers";
import { prefixResponse } from "@/utilities";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (): Promise<TUserResponse> => {
  const users = await prisma.user.findMany({
    include: { books: true },
  });
  return prefixResponse(users);
};

export const getDetailUser = async (
  id?: string,
): Promise<TUserDetailResponse> => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  return prefixResponse(user);
};
