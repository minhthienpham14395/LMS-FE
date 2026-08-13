import { Link, useLocation } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { isPublicNavigationActive, publicNavigation } from "@/config/navigation";
import { cn } from "@/utils/cn";

export function Header() {
  const { pathname, hash } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-18">
        <Logo />

        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-1 lg:flex"
        >
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={
                isPublicNavigationActive(item, pathname, hash) ? "page" : undefined
              }
              className={cn(
                "relative rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition",
                "after:absolute after:inset-x-3 after:-bottom-[7px] after:h-0.5 after:rounded-full after:bg-transparent after:transition-colors",
                "hover:bg-primary-soft hover:text-primary",
                isPublicNavigationActive(item, pathname, hash) &&
                  "bg-primary-soft font-semibold text-primary shadow-sm ring-1 ring-primary-light after:bg-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Đăng nhập</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Bắt đầu</Link>
          </Button>
        </div>

        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

