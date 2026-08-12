import { Link } from "react-router-dom";

import { RegisterForm } from "@/features/auth/components";

export default function RegisterPage() {
  return (
    <section className="min-w-0">
      <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
        Tạo tài khoản
      </h1>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
        Bắt đầu học với hồ sơ giúp bạn theo dõi tiến độ ở một nơi.
      </p>

      <div className="mt-7">
        <RegisterForm />
      </div>

      <p className="mt-6 text-center text-sm leading-6 text-slate-600">
        Bạn đã có tài khoản?{" "}
        <Link
          to="/login"
          className="rounded-md font-semibold text-brand-600 hover:underline focus-visible:outline-brand-500"
        >
          Đăng nhập
        </Link>
      </p>
    </section>
  );
}
