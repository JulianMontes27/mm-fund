"use server";

import { signIn, signOut } from "@/auth";
import getSession from "@/lib/getSession";

export const signInAction = async () => {
  return await signIn();
};

export const signOutAction = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) throw new Error("Unauthorized");

  return await signOut();
};
