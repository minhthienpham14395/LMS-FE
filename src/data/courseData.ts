export interface Course {
  id: number;
  icon: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  age: string;
  currentPrice: string;
  oldPrice: string;
}

export interface CourseGroup {
  title: string;
  subtitle?: string;
  courses: Course[];
}

export const courseGroups: CourseGroup[] = [
  {
    title: "Most Popular Certificates",
    subtitle: "4 courses mới nhất trong chương trình hàng đầu của chúng tôi",
    courses: [
      {
        id: 1,
        icon: "Monitor",
        badge: "MỚI",
        title: "Coding Champion II",
        description: "Khóa học lập trình nâng cao dành cho học viên mới làm quen.",
        duration: "60 phút",
        type: "1-1",
        age: "6-8 tuổi",
        currentPrice: "$2,699",
        oldPrice: "$4,499",
      },
      {
        id: 2,
        icon: "DollarSign",
        badge: "PHỔ BIẾN",
        title: "Finlit Certification L1",
        description: "Khóa học kiến thức tài chính căn bản cho trẻ em.",
        duration: "60 phút",
        type: "1-1",
        age: "4-8 tuổi",
        currentPrice: "$2,999",
        oldPrice: "$4,499",
      },
      {
        id: 3,
        icon: "Cpu",
        badge: "HOT",
        title: "RoboMaster",
        description: "Khóa học Robotics nâng cao giúp học viên thạo lập trình phần cứng.",
        duration: "60 phút",
        type: "1-1",
        age: "4-8 tuổi",
        currentPrice: "$2,099",
        oldPrice: "$3,099",
      },
      {
        id: 4,
        icon: "Lightbulb",
        badge: "Free Trial",
        title: "Creative Coding",
        description: "Sáng tạo với lập trình đồ họa và trò chơi tương tác.",
        duration: "60 phút",
        type: "Lớp nhóm",
        age: "6-10 tuổi",
        currentPrice: "$2,399",
        oldPrice: "$3,799",
      },
      {
        id: 5,
        icon: "User",
        badge: "AI skills",
        title: "AI Foundations",
        description: "Giới thiệu về trí tuệ nhân tạo và tư duy máy học.",
        duration: "60 phút",
        type: "1-1",
        age: "8-12 tuổi",
        currentPrice: "$3,199",
        oldPrice: "$4,899",
      },
    ],
  },
  {
    title: "Personalized Specializations for You",
    subtitle: "Các chương trình phù hợp theo lộ trình học cá nhân",
    courses: [
      {
        id: 6,
        icon: "Target",
        badge: "New",
        title: "Junior Product Design",
        description: "Lộ trình thiết kế giao diện và trải nghiệm cho trẻ em.",
        duration: "60 phút",
        type: "1-1",
        age: "7-12 tuổi",
        currentPrice: "$2,899",
        oldPrice: "$4,599",
      },
      {
        id: 7,
        icon: "GraduationCap",
        badge: "PHỔ BIẾN",
        title: "Tech Entrepreneurship",
        description: "Kết hợp tư duy khởi nghiệp và kỹ năng công nghệ.",
        duration: "60 phút",
        type: "Lớp nhóm",
        age: "9-13 tuổi",
        currentPrice: "$3,199",
        oldPrice: "$5,199",
      },
      {
        id: 8,
        icon: "Award",
        badge: "HOT",
        title: "Cyber Safety",
        description: "Đào tạo an toàn trực tuyến và bảo mật thông tin.",
        duration: "60 phút",
        type: "1-1",
        age: "8-12 tuổi",
        currentPrice: "$2,499",
        oldPrice: "$3,999",
      },
      {
        id: 9,
        icon: "Users",
        badge: "Free Trial",
        title: "Team Collaboration",
        description: "Rèn kỹ năng làm việc nhóm và giao tiếp kỹ thuật số.",
        duration: "60 phút",
        type: "Lớp nhóm",
        age: "8-12 tuổi",
        currentPrice: "$2,799",
        oldPrice: "$4,299",
      },
      {
        id: 10,
        icon: "Handshake",
        badge: "AI skills",
        title: "Future Skills Lab",
        description: "Học tập theo dự án thực tế, chuẩn bị cho xu hướng nghề nghiệp.",
        duration: "60 phút",
        type: "Lớp nhóm",
        age: "10-14 tuổi",
        currentPrice: "$3,499",
        oldPrice: "$5,299",
      },
    ],
  },
];

export const allCourses = courseGroups.flatMap((group) =>
  group.courses.map((course) => ({
    ...course,
    groupTitle: group.title,
    groupSubtitle: group.subtitle,
  }))
);
