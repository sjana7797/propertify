"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/sheet";
import { Button } from "~ui/components/ui/button";
import { Building2, Menu } from "@repo/common/lucide-react";
import { navs } from "./constants";
import { cn } from "~ui/lib/utils";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Building2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          {navs.map((nav, index) => {
            return (
              <Link
                key={index}
                href={nav.link}
                className={cn(
                  "hover:text-foreground font-medium transition-colors",
                  pathname.includes(nav.link)
                    ? "text-primary"
                    : "text-foreground",
                )}
              >
                {nav.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
