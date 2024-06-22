import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const session = await getSession();
  const user = session?.user;

  return <main className="mt-10"></main>;
}
