import { signInAction } from "@/actions/auth-actions";

import { Button } from "../ui/button";
import React from "react";

import { cn } from "@/lib/utils";

interface SignInBtnProps {
  className: string;
}

export const SignInBtn: React.FC<SignInBtnProps> = ({ className }) => {
  return (
    <form action={signInAction}>
      <Button type="submit" className={cn("", className)}>
        Iniciar sesión
      </Button>
    </form>
  );
};
