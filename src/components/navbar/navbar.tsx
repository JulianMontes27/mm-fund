import { User } from "next-auth";
import MainNav from "./main-nav";

export default async function Navbar({ user }: { user: User | undefined }) {
  return <MainNav user={user} />;
}
