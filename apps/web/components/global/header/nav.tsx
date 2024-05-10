"use client";

import { Building2 } from "@repo/common/lucide-react";
import Link from "next/link";
import { navs } from "./constants";
import { usePathname } from "next/navigation";
import { cn } from "~ui/lib/utils";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="text-primary flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Building2 className="h-6 w-6" />
        <span className="sr-only">Propertify</span>
      </Link>
      {navs.map((nav, index) => {
        return (
          <Link
            key={index}
            href={nav.link}
            className={cn(
              "hover:text-foreground font-medium transition-colors",
              pathname.includes(nav.link) ? "text-primary" : "text-foreground",
            )}
          >
            {nav.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
