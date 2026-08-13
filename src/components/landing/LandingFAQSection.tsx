import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-shadcn/accordion";

const faqs = [
  {
    q: "Tôi có thể học trên điện thoại không?",
    a: "Có. Giao diện học được thiết kế mobile-first.",
  },
  {
    q: "Tôi có thể học tiếp trên thiết bị khác không?",
    a: "Có, khi tính năng đồng bộ tiến độ được kết nối với backend.",
  },
  {
    q: "Tôi nên bắt đầu từ trình độ nào?",
    a: "Hãy bắt đầu với khóa phù hợp mức tự tin hiện tại. Bạn có thể điều chỉnh lộ trình khi tiến bộ.",
  },
  {
    q: "Giáo viên có phản hồi không?",
    a: "Có. Bài luyện có hướng dẫn và phản hồi từ giáo viên giúp bạn hiểu điểm mạnh và phần cần cải thiện.",
  },
];

export default function LandingFAQSection() {
  return (
    <Section id="faq" className="bg-background-soft/90">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/80 bg-card px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10">
          <SectionHeading title="Câu hỏi thường gặp" align="left" />

          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="border-border/80"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-6 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}



