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
    <Section className="bg-background-soft/90">
      <Container>
        <div className="rounded-xl border border-border/80 bg-card px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10">
          <SectionHeading
            eyebrow="Kỹ năng cốt lõi"
            title="Cải thiện toàn diện năng lực tiếng Anh"
            align="left"
          />

          <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-xl border border-border/80 bg-card p-5 shadow-md ring-1 ring-border/80"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft">
                  <Icon className="size-5 text-primary" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}



