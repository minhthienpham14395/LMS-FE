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
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Câu hỏi thường gặp" />

          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="leading-6 text-slate-600">
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
