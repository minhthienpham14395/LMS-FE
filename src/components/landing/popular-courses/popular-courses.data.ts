import { mockCourses } from "@/mockup/data";

import type { CourseGroup, LandingCourse } from "./popular-courses.types";

const courseMetadata: Record<
  string,
  Pick<
    LandingCourse,
    | "provider"
    | "category"
    | "badges"
    | "credential"
    | "degreePath"
  >
> = {
  "nen-tang-tieng-anh": {
    provider: "LMS Academy",
    category: "Tiếng Anh tổng quát",
    badges: ["Học thử miễn phí", "Mới"],
    credential: "Chứng chỉ hoàn thành",
    degreePath: "Thuộc lộ trình học",
  },
  "tu-tin-giao-tiep": {
    provider: "British Council",
    category: "Giao tiếp",
    badges: ["Bán chạy"],
    credential: "Chứng chỉ kỹ năng",
    degreePath: "Có thể dùng cho lộ trình",
  },
  "ngu-phap-theo-ngu-canh": {
    provider: "Cambridge English",
    category: "Ngữ pháp",
    badges: ["Học thử miễn phí"],
    credential: "Chứng chỉ hoàn thành",
    degreePath: "Thuộc lộ trình học",
  },
  "tang-toc-tu-vung-luyen-thi": {
    provider: "Oxford Learning",
    category: "Từ vựng",
    badges: ["Luyện thi"],
    credential: "Khóa học chuyên môn",
    degreePath: "Lộ trình nghề nghiệp",
  },
  "viet-email-chuyen-nghiep": {
    provider: "LMS Academy",
    category: "Viết tiếng Anh",
    badges: ["Kỹ năng công việc"],
    credential: "Chứng chỉ hoàn thành",
    degreePath: "Thuộc lộ trình học",
  },
  "luyen-nghe-qua-tin-tuc": {
    provider: "British Council",
    category: "Nghe thực tế",
    badges: ["Nâng cao"],
    credential: "Khóa học kỹ năng",
    degreePath: "Có thể dùng cho lộ trình",
  },
};

const fallbackMetadata = {
  provider: "LMS Academy",
  category: "Tiếng Anh",
  badges: ["Học thử miễn phí"],
  credential: "Chứng chỉ hoàn thành",
  degreePath: "Thuộc lộ trình học",
} satisfies Omit<LandingCourse, "id" | "slug" | "title" | "image">;

const landingCourses = mockCourses.map<LandingCourse>((course) => {
  const metadata = courseMetadata[course.slug] ?? fallbackMetadata;

  return {
    id: String(course.id),
    slug: course.slug,
    title: course.title,
    image: course.thumbnail,
    ...metadata,
  };
});

export const courseGroups: CourseGroup[] = [
  {
    id: "popular",
    title: "Khóa học phổ biến",
    courses: landingCourses,
  },
  {
    id: "recommended",
    title: "Lộ trình được đề xuất cho bạn",
    courses: [
      landingCourses[0],
      landingCourses[1],
      landingCourses[4],
      landingCourses[2],
      landingCourses[5],
      landingCourses[3],
    ].filter(Boolean),
  },
];
