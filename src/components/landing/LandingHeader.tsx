import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8dfeb] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/landing"
          className="text-lg font-semibold tracking-tight text-[#0d3278]"
        >
          Academic Atelier
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#475569] md:flex">
          <a href="#disciplines" className="font-medium text-[#0d3278]">
            Danh mục
          </a>
          <a href="#courses" className="transition hover:text-[#0d3278]">
            Thư viện
          </a>
          <a href="#teachers" className="transition hover:text-[#0d3278]">
            Giảng viên
          </a>
          <a href="#testimonials" className="transition hover:text-[#0d3278]">
            Bảng giá
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium text-[#334155] transition hover:text-[#0d3278]"
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-[#0d3278] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(13,50,120,0.22)] transition hover:-translate-y-0.5"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
}
