import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    id: 1,
    quote: "Lộ trình bài học dễ theo dõi và tôi nhìn thấy tiến bộ của mình.",
    name: "Linh Tran",
    meta: "Học viên trình độ trung cấp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 2,
    quote: "Bài luyện nói thực tế, thân thiện và bớt áp lực hơn nhiều.",
    name: "Minh Nguyen",
    meta: "Học viên tiếng Anh công việc",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 3,
    quote: "Tôi thích mục tiêu rõ ràng. Mỗi tuần tôi biết mình cần cải thiện gì.",
    name: "An Pham",
    meta: "Học viên luyện IELTS",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
  },
];

export default function LandingTestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-background-soft/90">
      <Container>
        <div className="rounded-xl border border-border/80 bg-card px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10">
          <SectionHeading
            eyebrow="Câu chuyện học viên"
            title="Tiến bộ có thể cảm nhận qua từng tuần"
            description="Học viên dùng bài học có hướng dẫn, phản hồi từ giáo viên và theo dõi thói quen để duy trì nhịp học."
            align="left"
          />

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}



