import { useQuery } from "@tanstack/react-query";

import type { StudentCourse } from "../types/my-course.type";

const myCourses: StudentCourse[] = [
  {
    id: 1,
    title: "Nền tảng tiếng Anh",
    description: "Xây dựng vốn từ, ngữ pháp và sự tự tin khi nghe hằng ngày.",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    instructor: "Emma Wilson",
    nextLesson: "Hội thoại hằng ngày: hỏi thông tin",
    progress: 72,
    status: "active",
    lastActivity: "Hôm nay",
  },
  {
    id: 2,
    title: "Tự tin giao tiếp",
    description: "Luyện phát âm, độ trôi chảy và các bài nói ngắn có hướng dẫn.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    instructor: "Lucas Brown",
    nextLesson: "Kể một câu chuyện ngắn rõ ràng",
    progress: 48,
    status: "active",
    lastActivity: "Hôm qua",
  },
  {
    id: 3,
    title: "Ngữ pháp theo ngữ cảnh",
    description: "Dùng mẫu ngữ pháp thiết yếu trong các tình huống thực tế.",
    thumbnail:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    instructor: "Sophia Lee",
    nextLesson: "Ôn thì quá khứ qua câu chuyện du lịch",
    progress: 100,
    status: "completed",
    lastActivity: "2 tuần trước",
  },
  {
    id: 4,
    title: "Tăng tốc từ vựng luyện thi",
    description: "Ôn từ vựng thường gặp và chiến lược đọc ngắn.",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    instructor: "Mia Carter",
    nextLesson: "Đọc tìm ý chính",
    progress: 34,
    status: "active",
    lastActivity: "3 ngày trước",
  },
];

export function useMyCourses() {
  return useQuery({
    queryKey: ["student", "my-courses"],
    queryFn: async () => myCourses,
  });
}
