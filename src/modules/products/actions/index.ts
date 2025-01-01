import { fetcher } from "@/lib/fetcher";
import type { PrismaType } from "../../../lib/prisma";

export const getProducts = async (): Promise<PrismaType.Product[]> => {
  return await fetcher('/api/product');

}