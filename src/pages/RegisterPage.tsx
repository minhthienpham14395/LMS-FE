import { Link } from "react-router-dom";

import { Reveal } from "@/components/layout";
import { RegisterForm } from "@/features/auth/components";

export default function RegisterPage() {
  return (
    <section className="min-w-0">
        <Reveal className="auth-reveal">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Tạo tài khoản
          </h1>
        </Reveal>
        <Reveal delay={140} className="auth-reveal">
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Bắt đầu học với hồ sơ giúp bạn theo dõi tiến độ ở một nơi.
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-7 auth-reveal">
          <RegisterForm />
        </Reveal>

        <Reveal delay={380} className="auth-reveal">
          <p className="mt-6 text-center text-sm leading-6 text-muted-foreground">
            Bạn đã có tài khoản?{" "}
            <Link
              to="/login"
              className="rounded-md font-semibold text-primary hover:underline focus-visible:outline-primary"
            >
              Đăng nhập
            </Link>
          </p>
        </Reveal>
    </section>
  );
}

