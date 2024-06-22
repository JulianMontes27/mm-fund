import { DefaultSession } from "next-auth";

//modify the shape of existing types in modulles
declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }
  interface User {
    role: String | null;
  }
}
