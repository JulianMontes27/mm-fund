import Navbar from "@/components/navbar/navbar";
import getSession from "@/lib/getSession";

import React from "react";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  const user = session?.user;
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
};

export default HomeLayout;
