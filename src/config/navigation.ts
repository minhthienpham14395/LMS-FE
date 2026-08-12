import { ROUTES } from "@/utils/constants";

export const publicNavigation = [
  { label: "Trang chủ", href: ROUTES.home },
  { label: "Khóa học", href: ROUTES.courses },
  { label: "Giáo viên", href: "/landing#teachers" },
  { label: "Đánh giá", href: "/landing#testimonials" },
  { label: "FAQ", href: "/landing#faq" },
] as const;

export type PublicNavigationItem = (typeof publicNavigation)[number];

export function isPublicNavigationActive(
  item: PublicNavigationItem,
  pathname: string,
  hash: string
) {
  const [itemPath, itemHash] = item.href.split("#");
  const normalizedPathname = pathname === "/" ? ROUTES.home : pathname;

  if (itemHash) {
    return normalizedPathname === itemPath && hash === `#${itemHash}`;
  }

  if (item.href === ROUTES.home) {
    return (pathname === "/" || pathname === ROUTES.home) && !hash;
  }

  if (item.href === ROUTES.courses) {
    return (
      normalizedPathname === ROUTES.courses ||
      normalizedPathname.startsWith(`${ROUTES.courses}/`)
    );
  }

  return normalizedPathname === item.href;
}

export const studentNavigation = [
  { label: "Tổng quan", href: ROUTES.student.dashboard },
  { label: "Khóa học của tôi", href: ROUTES.student.myCourses },
  { label: "Tiến độ", href: ROUTES.student.progress },
  { label: "Hồ sơ", href: ROUTES.student.profile },
] as const;
