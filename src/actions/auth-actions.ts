"use server";

import { signIn, signOut, auth } from "@/auth";

export const signInAction = async () => {
  return await signIn();
};

export const signOutAction = async () => {
  const session = await auth();
  const user = session?.user;
  
  if (!user) throw new Error("Unauthorized");

  return await signOut();
};
