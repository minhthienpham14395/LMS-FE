import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/layout";
import { ForgotPasswordForm } from "@/features/auth/components";

export default function ForgotPasswordPage() {
  return (
    <section className="min-w-0">
        <Reveal className="auth-reveal">
          <Link
            to="/login"
            className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-muted-foreground hover:text-primary focus-visible:outline-primary"
          >
            <ArrowLeft className="size-4" />
            Quay lại đăng nhập
          </Link>
        </Reveal>

        <Reveal delay={140} className="auth-reveal">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Đặt lại mật khẩu
          </h1>
        </Reveal>
        <Reveal delay={260} className="auth-reveal">
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Nhập email của bạn. Nếu tài khoản tồn tại, chúng tôi sẽ gửi hướng dẫn
            đặt lại mật khẩu.
          </p>
        </Reveal>

        <Reveal delay={380} className="mt-7 auth-reveal">
          <ForgotPasswordForm />
        </Reveal>
    </section>
  );
}

