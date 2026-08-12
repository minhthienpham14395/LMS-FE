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
    <Section id="how-it-works">
      <Container>
        <SectionHeading title="Cách hoạt động" />

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <li key={title} className="rounded-2xl border p-5 sm:p-6">
              <span className="text-3xl font-bold text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
