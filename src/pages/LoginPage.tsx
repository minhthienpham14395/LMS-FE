import { Link } from "react-router-dom";

import { Reveal } from "@/components/layout";
import { LoginForm } from "@/features/auth/components";

export default function LoginPage() {
  return (
    <section className="min-w-0">
        <Reveal className="auth-reveal">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Chào mừng bạn quay lại
          </h1>
        </Reveal>
        <Reveal delay={140} className="auth-reveal">
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Đăng nhập để tiếp tục bài học của bạn.
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-7 auth-reveal">
          <LoginForm />
        </Reveal>

        <Reveal delay={380} className="auth-reveal">
          <p className="mt-6 text-center text-sm leading-6 text-muted-foreground">
            Bạn chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="rounded-md font-semibold text-primary hover:underline focus-visible:outline-primary"
            >
              Tạo tài khoản
            </Link>
          </p>
        </Reveal>
    </section>
  );
}

