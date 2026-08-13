import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const benefits = [
  "Lộ trình học rõ ràng",
  "Bài luyện nói thực tế",
  "Theo dõi tiến độ mỗi ngày",
];

export default function LandingHeroSection() {
  return (
    <section className="overflow-clip bg-gradient-to-br from-background-soft via-background-secondary to-info-soft">
      <Container className="py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-primary-light bg-card px-3 py-1.5 text-xs font-bold text-primary-active sm:text-sm">
              Học tiếng Anh tự tin hơn
            </p>

            <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.15rem,9vw,3.2rem)] font-bold leading-[1.04] tracking-tight lg:text-6xl">
              Xây dựng kỹ năng tiếng Anh thật, từng bài học một.
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Khóa học tương tác, giáo viên giàu kinh nghiệm và hệ thống theo dõi
              tiến độ rõ ràng cho mọi trình độ.
            </p>

            <div className="mt-7 flex flex-col gap-3 xs:flex-row">
              <Button asChild className="w-full xs:w-auto">
                <Link to="/landing#courses">
                  Khám phá khóa học
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full xs:w-auto">
                <Link to="/register">Bắt đầu miễn phí</Link>
              </Button>
            </div>

            <ul className="mt-7 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary shadow-2xl shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Học viên đang học tiếng Anh trực tuyến"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-3 right-3 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:right-5 sm:w-64">
              <p className="text-xs font-semibold text-muted-foreground">Tiến độ tuần này</p>
              <p className="mt-1 text-xl font-bold text-foreground">+18% hoàn thành</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[72%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


