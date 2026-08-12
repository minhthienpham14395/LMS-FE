import { Link } from "react-router-dom";

import { LoginForm } from "@/features/auth/components";

export default function LoginPage() {
  return (
    <section className="min-w-0">
      <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
        Chào mừng bạn quay lại
      </h1>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
        Đăng nhập để tiếp tục bài học của bạn.
      </p>

      <div className="mt-7">
        <LoginForm />
      </div>

      <p className="mt-6 text-center text-sm leading-6 text-slate-600">
        Bạn chưa có tài khoản?{" "}
        <Link
          to="/register"
          className="rounded-md font-semibold text-brand-600 hover:underline focus-visible:outline-brand-500"
        >
          Tạo tài khoản
        </Link>
      </p>
    </section>
  );
}
