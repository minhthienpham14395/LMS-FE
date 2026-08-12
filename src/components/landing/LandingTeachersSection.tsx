import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeacherCard } from "@/components/shared/TeacherCard";

const teachers = [
  {
    id: 1,
    name: "Emma Carter",
    role: "Huấn luyện viên giao tiếp",
    bio: "Giúp học viên xây dựng thói quen hội thoại tự nhiên qua luyện tập hằng tuần.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 2,
    name: "Daniel Brooks",
    role: "Giảng viên IELTS",
    bio: "Hướng dẫn học viên luyện thi bằng kế hoạch kỹ năng rõ ràng, phản hồi và bài thi thử.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 3,
    name: "Sophia Nguyen",
    role: "Cố vấn kỹ năng viết",
    bio: "Hỗ trợ ngữ pháp, cấu trúc và sự tự tin cho bài viết học thuật lẫn công việc.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
  },
];

export default function LandingTeachersSection() {
  return (
    <Section id="teachers" className="bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Giáo viên"
          title="Học cùng giảng viên giàu kinh nghiệm"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
