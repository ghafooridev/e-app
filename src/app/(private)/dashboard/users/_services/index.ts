'use server';

import { clerkClient } from "@/config/clerk"
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export const getAllUsers = async () => {
  'use cache'
  cacheLife('days')
  return await clerkClient.users.getUserList()
}

export const getUserById = async (userId: string) => {
  if (userId) return await clerkClient.users.getUser(userId)

}

export const getUsersCount = async () => {
  'use cache'
  cacheLife('days')
  try {
    const userCount = await clerkClient.users.getCount();
    return userCount;
  }
  catch (e) {
    console.log(e)
    throw new Error('User not found')
  }

}

export const banUnBanUser = async (formData: FormData) => {
  try {
    const userId = formData.get('id') as string;
    const banned = formData.get('banned') as string;

    if (banned === 'true') {
      await clerkClient.users.unbanUser(userId)
    } else {
      await clerkClient.users.banUser(userId)
    }
  }
  catch (e) {
    console.log(e)
    throw new Error('User not found')
  }
  finally {
    revalidatePath('/dashboard/users')
  }
}

export const deleteUser = async (formData: FormData) => {
  try {
    const userId = formData.get('id') as string;


    await clerkClient.users.deleteUser(userId)
  }
  catch (e) {
    console.log(e)
    throw new Error('User not found')
  }
  finally {
    revalidatePath('/dashboard/users')
  }
}

export const userIsAdmin = async () => {
  try {
    const currentUser = await auth();
    const user = await getUserById(currentUser.userId as string);
    return user?.privateMetadata.isAdmin;
  }
  catch (e) {
    console.log(e)
    throw new Error('User not found')
  }

}

export const toggleIsAdmin = async (userId: string, isAdmin: boolean) => {
  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      isAdmin,
    },
  })
}