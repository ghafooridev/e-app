'use server';

import { prisma, PrismaType } from "@/lib/prisma"
import { redirect } from "next/navigation";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";

export const getProductsService = async () => {
  const result = await prisma.product.findMany();
  return result
}

export const getProductByIdService = async (id: string) => {
  const result = await prisma.product.findFirst({ where: { id } })
  return result
}

export const upsertProductService = async (formData: FormData) => {
  const productData = {
    id: formData.get('id') as string | undefined,
    name: formData.get('name') as string,
    category: formData.get('category') as PrismaType.ProductCategory,
    description: formData.get('description') as string | null,
    image: formData.get('image') as string | null,
    price: parseFloat(formData.get('price') as string) || 0,
    quantity: parseInt(formData.get('quantity') as string, 10) || 0,
  };

  try {
    await prisma.product.upsert({
      where: { id: productData.id || '' },
      create: productData,
      update: productData,
    });
  } catch (error) {
    console.log(error)
    throw new Error('Failed to upsert product');
  }
  finally {
    redirect('/dashboard/products');
    // revalidatePath(`/dashboard/products/${productData.id}`)
  }
}


export const uploadImage = async (image: File) => {
  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n", e);
    }
  }

  // try {
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${image.name.replace(
    /\.[^/.]+$/,
    ""
  )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
  await writeFile(`${uploadDir}/${filename}`, buffer);
  const fileUrl = `${relativeUploadDir}/${filename}`;

  // Save to database
  debugger
  const result = await prisma.image.create({
    data: {
      image: fileUrl,
    },
  });

  return result
  // } catch (e) {
  //   console.error("Error while trying to upload a file\n", e);
  //   throw new Error("Image is Not uploaded")
  // }
}