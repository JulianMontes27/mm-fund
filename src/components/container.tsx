import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-28 max-w-screen-xl px-4">{children}</div>;
};

export default Container;
