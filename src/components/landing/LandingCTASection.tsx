import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function LandingCTASection() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-50 px-5 py-8 text-slate-950 shadow-sm ring-1 ring-brand-100 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Sẵn sàng bắt đầu học?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Chọn khóa học đầu tiên và xây dựng thói quen học đều đặn.
              </p>
            </div>

            <Button asChild className="w-full lg:w-auto">
              <Link to="/register">Tạo tài khoản</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
