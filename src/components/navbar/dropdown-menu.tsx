import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { RouteList } from "./main-nav";

import { AlignJustify } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = ({ routes }: { routes: RouteList }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MM Capital Funds</SheetTitle>
        </SheetHeader>
        <div className="mt-7 flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn("text-md", route.isActive && "font-extrabold")}
            >
              {route.label}
              <Separator />
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DropdownMenu;
