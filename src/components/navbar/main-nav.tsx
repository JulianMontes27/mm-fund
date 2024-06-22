"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SignInBtn } from "../auth/sign-in-btn";
import { User } from "next-auth";
import UserButton from "../auth/user-button";
import DropdownMenu from "./dropdown-menu";
import { cn } from "@/lib/utils";

export interface Route {
  href: string;
  label: string;
  isActive: boolean;
}
export type RouteList = Route[];

const MainNav = ({ user }: { user: User | undefined }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  const pathname = usePathname();
  const routes: RouteList = [
    {
      href: "/nosotros",
      label: "Nosotros",
      isActive: pathname.includes("/nosotros"),
    },
    {
      href: "/inversiones",
      label: "Inversiones",
      isActive: pathname.includes("/inversiones"),
    },
    {
      href: "/propiedades",
      label: "Propiedades",
      isActive: pathname.includes("/propiedades"),
    },
    {
      href: "/preguntas",
      label: "Preguntas",
      isActive: pathname.includes("/preguntas"),
    },
  ];
  return (
    <header
      className={cn(
        "z-999 fixed left-0 right-0 top-0 w-full p-6 transition",
        scroll ? "stick bg-zinc-50" : "",
      )}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-2 ">
            <Image src={"/logo.png"} alt={"logo"} height={40} width={40} />
            <h1 className="hidden text-lg font-extrabold text-yellow-700 md:block">
              <Link href={"/"}>MM Capital</Link>
            </h1>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-gray-500 transition hover:text-gray-500/75",
                      route.isActive && "font-extrabold",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user !== undefined ? (
                <UserButton user={user} />
              ) : (
                <SignInBtn className="rounded-md bg-blue-800 px-5 py-2.5 text-sm font-medium text-white shadow" />
              )}
            </div>

            <div className="block md:hidden">
              <DropdownMenu routes={routes} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
