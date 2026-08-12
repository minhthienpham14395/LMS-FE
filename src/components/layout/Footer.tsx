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
    <footer className="border-t border-brand-100 bg-brand-50 text-slate-700">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Học tiếng Anh với lộ trình rõ ràng, bài học thực tế và tiến độ đo lường được.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h2 className="break-words font-semibold text-slate-950">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map(([label, href]) => (
                    <li key={href} className="min-w-0">
                      <Link
                        to={href}
                        className="break-words text-sm text-slate-600 transition hover:text-brand-700"
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

        <div className="mt-10 border-t border-brand-100 pt-6 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} LMS Tiếng Anh.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
