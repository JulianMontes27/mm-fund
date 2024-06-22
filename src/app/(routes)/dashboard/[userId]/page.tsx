import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async ({ params }: { params: { userId: string } }) => {
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/");

  return <div>{params.userId}</div>;
};

export default DashboardPage;
