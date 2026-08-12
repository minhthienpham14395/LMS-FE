import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { ForgotPasswordForm } from "@/features/auth/components";

export default function ForgotPasswordPage() {
  return (
    <section className="min-w-0">
      <Link
        to="/login"
        className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-slate-600 hover:text-brand-600 focus-visible:outline-brand-500"
      >
        <ArrowLeft className="size-4" />
        Quay lại đăng nhập
      </Link>

      <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
        Đặt lại mật khẩu
      </h1>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
        Nhập email của bạn. Nếu tài khoản tồn tại, chúng tôi sẽ gửi hướng dẫn
        đặt lại mật khẩu.
      </p>

      <div className="mt-7">
        <ForgotPasswordForm />
      </div>
    </section>
  );
}
