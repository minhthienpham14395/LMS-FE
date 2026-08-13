import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  ["Chọn lộ trình", "Chọn trình độ và mục tiêu học tập của bạn."],
  ["Học và luyện tập", "Hoàn thành bài học và hoạt động tương tác."],
  ["Đo tiến độ", "Xem kết quả và tiếp tục từ điểm đã dừng."],
] as const;

export default function LandingHowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-background-soft/90">
      <Container>
        <div className="rounded-xl border border-border/80 bg-card px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10">
          <SectionHeading title="Cách hoạt động" align="left" />

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map(([title, text], index) => (
              <li
                key={title}
                className="rounded-xl border border-border/80 bg-card p-5 shadow-md ring-1 ring-border/80 sm:p-6"
              >
                <span className="text-3xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}



