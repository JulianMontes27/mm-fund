import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import getSession from "@/lib/getSession";

import React from "react";
import Container from "@/components/container";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div>
      <Navbar user={user} />
      <Container> {children}</Container>
      <Footer />
    </div>
  );
};

export default HomeLayout;
