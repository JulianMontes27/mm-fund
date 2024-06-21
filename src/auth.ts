import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"; //connect prisma to nextauth
import prisma from "./lib/prisma";

//providers
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

//initialize next auth
export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: { logo: "./logo.png" },
  adapter: PrismaAdapter(prisma),
  providers: [Google, Github], //responsible for letting the user sign in, but there is no active session on both on those providers
  //users IN OUR APP ARE NOT CONNECTED TO THE PROVIDERS' ACCOUNT, WE USE THIS DATA TO LOGIN. THEY ARE RESPONSIBLE FOR LETTING USERS SIGN IN
});
