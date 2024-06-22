"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SignInBtn } from "../auth/sign-in-btn";
import { User } from "next-auth";
import UserButton from "../auth/user-button";

interface Route {
  href: string;
  label: string;
  isActive: boolean;
}
type RouteList = Route[];

const MainNav = ({ user }: { user: User | undefined }) => {
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
    <header className="bg-white ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-4 ">
            <Image src={"/logo.png"} alt={"logo"} height={40} width={40} />
            <h1 className="hidden md:block">MM Capital</h1>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-gray-500 transition hover:text-gray-500/75"
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
                <SignInBtn className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" />
              )}
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
