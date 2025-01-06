import { fetcher } from "@/lib/fetcher";
import type { PrismaType } from "@/lib/prisma";

export const getProductsAction = async (): Promise<PrismaType.Product[]> => {
  return await fetcher('/api/product');
}

export const getProductByIdAction = async (id: string): Promise<PrismaType.Product> => {
  return await fetcher(`/api/product?id=${id}`);

}