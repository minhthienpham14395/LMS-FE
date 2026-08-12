import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { isPublicNavigationActive, publicNavigation } from "@/config/navigation";
import { cn } from "@/utils/cn";

export function MobileMenu() {
  const { pathname, hash } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-11"
          aria-label="Mở điều hướng"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-[min(88vw,360px)] flex-col overflow-y-auto p-0"
      >
        <SheetHeader className="border-b px-5 py-4 text-left">
          <SheetTitle className="sr-only">Điều hướng</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Điều hướng di động">
          {publicNavigation.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                to={item.href}
                aria-current={
                  isPublicNavigationActive(item, pathname, hash) ? "page" : undefined
                }
                className={cn(
                  "flex min-h-11 items-center rounded-xl px-3 text-base font-semibold text-slate-700 transition",
                  "hover:bg-brand-50 hover:text-brand-700",
                  isPublicNavigationActive(item, pathname, hash) &&
                    "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="grid gap-2 border-t p-4">
          <SheetClose asChild>
            <Button asChild>
              <Link to="/register">Bắt đầu</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline" asChild>
              <Link to="/login">Đăng nhập</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
