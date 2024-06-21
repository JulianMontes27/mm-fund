import { auth, signIn } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";

//since it is a server component, we can make it async and fetch data
export default async function NavBar() {
  // TODO: Show the currently logged-in user
  const session = await auth();
  const user = session?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link>
        {user ? <UserButton user={user} /> : <SignInBtn />}
      </nav>
    </header>
  );
}

function SignInBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}
