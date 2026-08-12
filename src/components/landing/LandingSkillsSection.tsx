import { BookOpen, Headphones, MessageCircle, PenLine } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const skills = [
  {
    icon: MessageCircle,
    title: "Nói",
    text: "Luyện hội thoại tự nhiên.",
  },
  {
    icon: Headphones,
    title: "Nghe",
    text: "Hiểu tiếng Anh trong đời sống.",
  },
  {
    icon: BookOpen,
    title: "Đọc",
    text: "Mở rộng từ vựng theo ngữ cảnh.",
  },
  {
    icon: PenLine,
    title: "Viết",
    text: "Viết rõ ràng và chính xác.",
  },
];

export default function LandingSkillsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Kỹ năng cốt lõi"
          title="Cải thiện toàn diện năng lực tiếng Anh"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border bg-white p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50">
                <Icon className="size-5 text-brand-600" />
              </span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
