import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/shared/Logo";

const columns = [
  {
    title: "Học tập",
    links: [
      ["Khóa học", "/courses"],
      ["Giáo viên", "/landing#teachers"],
      ["Cách hoạt động", "/landing#how-it-works"],
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      ["FAQ", "/landing#faq"],
      ["Liên hệ", "/contact"],
      ["Bảo mật", "/privacy"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary text-muted-foreground">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Học tiếng Anh với lộ trình rõ ràng, bài học thực tế và tiến độ đo lường được.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h2 className="break-words font-semibold text-foreground">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map(([label, href]) => (
                    <li key={href} className="min-w-0">
                      <Link
                        to={href}
                        className="break-words text-sm text-muted-foreground transition hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} LMS Tiếng Anh.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
