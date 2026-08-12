import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CourseCard } from "@/components/shared/CourseCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

const mockCourses = [
  {
    id: 1,
    slug: "1",
    title: "Nền tảng tiếng Anh",
    category: "Tiếng Anh tổng quát",
    level: "Mới bắt đầu",
    description: "Xây dựng ngữ pháp, từ vựng và sự tự tin khi giao tiếp.",
    duration: "8 tuần",
    rating: "4.9",
    thumbnail:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    slug: "2",
    title: "Hội thoại thực tế",
    category: "Giao tiếp",
    level: "Trung cấp",
    description: "Luyện nói hằng ngày với phản hồi có hướng dẫn và chủ đề thực tế.",
    duration: "6 tuần",
    rating: "4.8",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    slug: "3",
    title: "Xây dựng kỹ năng IELTS",
    category: "Luyện thi",
    level: "Nâng cao",
    description: "Củng cố đọc, nghe, viết và nói cho kỳ thi IELTS.",
    duration: "10 tuần",
    rating: "4.9",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
  },
];

export default function LandingPopularCoursesSection() {
  return (
    <Section id="courses">
      <Container>
        <SectionHeading
          eyebrow="Khóa học phổ biến"
          title="Bắt đầu với khóa học phù hợp mục tiêu"
          description="Các lộ trình ngắn, tập trung và dễ đo lường tiến độ."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
