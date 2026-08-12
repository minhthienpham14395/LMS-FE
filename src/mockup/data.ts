import type { AuthSession, AuthUser } from "@/features/auth";
import type { Course } from "@/features/courses";
import type { CourseOutline, Lesson } from "@/features/lessons";
import type { CourseProgressDetail, ProgressOverview } from "@/features/progress";
import type { LearnerProfile } from "@/features/profile";
import type { Quiz } from "@/features/quizzes";

export const mockUser: AuthUser = {
  id: "student-001",
  email: "student@lms.test",
  fullName: "Nguyen Minh Anh",
  name: "Minh Anh",
  role: "student",
};

export const mockSession: AuthSession = {
  user: mockUser,
  accessToken: "mockup-access-token",
};

export const mockProfile: LearnerProfile = {
  id: mockUser.id,
  fullName: "Nguyen Minh Anh",
  displayName: "Minh Anh",
  email: mockUser.email,
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  level: "intermediate",
  learningGoal:
    "Giao tiếp tự tin trong công việc, thuyết trình ngắn rõ ý và mở rộng vốn từ học thuật.",
};

export const mockCourses: Course[] = [
  {
    id: 1,
    slug: "nen-tang-tieng-anh",
    title: "Nền tảng tiếng Anh",
    description:
      "Xây dựng phát âm, từ vựng và mẫu câu cốt lõi qua các tình huống hằng ngày.",
    category: "Foundation",
    level: "Beginner",
    duration: "6 tuần",
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Nắm các mẫu câu chào hỏi, hỏi thông tin và phản hồi lịch sự.",
      "Phát âm rõ những âm thường gây nhầm lẫn cho người Việt.",
      "Duy trì hội thoại ngắn trong lớp học, công việc và đời sống.",
      "Tự đánh giá tiến độ qua quiz và bài luyện nghe ngắn.",
    ],
    instructor: "Emma Wilson",
    lessonsCount: 8,
    enrolledCount: 1280,
  },
  {
    id: 2,
    slug: "tu-tin-giao-tiep",
    title: "Tự tin giao tiếp",
    description:
      "Luyện nghe nói theo ngữ cảnh thực tế: small talk, cuộc họp, đặt lịch và phản hồi ý kiến.",
    category: "Speaking",
    level: "Intermediate",
    duration: "8 tuần",
    rating: 4.9,
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Mở đầu và kết thúc cuộc trò chuyện tự nhiên hơn.",
      "Diễn đạt ý kiến với cấu trúc rõ ràng và lịch sự.",
      "Tăng độ trôi chảy bằng shadowing và phản hồi có hướng dẫn.",
      "Chuẩn bị bài nói một phút cho tình huống công việc.",
    ],
    instructor: "Lucas Brown",
    lessonsCount: 10,
    enrolledCount: 940,
  },
  {
    id: 3,
    slug: "ngu-phap-theo-ngu-canh",
    title: "Ngữ pháp theo ngữ cảnh",
    description:
      "Học ngữ pháp qua câu chuyện, email ngắn và hội thoại thay vì ghi nhớ công thức rời rạc.",
    category: "Grammar",
    level: "Beginner",
    duration: "5 tuần",
    rating: 4.7,
    thumbnail:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Dùng thì hiện tại, quá khứ và tương lai trong ngữ cảnh quen thuộc.",
      "Nhận biết lỗi thường gặp khi viết câu ngắn.",
      "Viết đoạn văn 80-120 từ với liên kết ý cơ bản.",
      "Ứng dụng cấu trúc câu vào hội thoại đời thường.",
    ],
    instructor: "Sophia Lee",
    lessonsCount: 9,
    enrolledCount: 760,
  },
  {
    id: 4,
    slug: "tang-toc-tu-vung-luyen-thi",
    title: "Tăng tốc từ vựng luyện thi",
    description:
      "Mở rộng vốn từ theo chủ đề thường gặp trong bài đọc, bài nghe và câu hỏi luyện thi.",
    category: "Vocabulary",
    level: "Intermediate",
    duration: "4 tuần",
    rating: 4.6,
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    outcomes: [
      "Học từ theo cụm và collocation thay vì từng từ riêng lẻ.",
      "Đoán nghĩa từ mới dựa vào ngữ cảnh.",
      "Ghi nhớ từ vựng bằng spaced review và ví dụ cá nhân hóa.",
      "Luyện đọc nhanh để tìm ý chính và chi tiết.",
    ],
    instructor: "Mia Carter",
    lessonsCount: 7,
    enrolledCount: 620,
  },
  {
    id: 5,
    slug: "viet-email-chuyen-nghiep",
    title: "Viết email chuyên nghiệp",
    description:
      "Soạn email rõ ràng, đúng giọng điệu và phù hợp môi trường học thuật lẫn công sở.",
    category: "Writing",
    level: "Advanced",
    duration: "3 tuần",
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    instructor: "Noah Grant",
    lessonsCount: 6,
    enrolledCount: 410,
  },
  {
    id: 6,
    slug: "luyen-nghe-qua-tin-tuc",
    title: "Luyện nghe qua tin tức",
    description:
      "Luyện bắt ý chính, ghi chú nhanh và nhận diện từ khóa trong các bản tin tiếng Anh ngắn.",
    category: "Listening",
    level: "Advanced",
    duration: "6 tuần",
    rating: 4.5,
    thumbnail:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    instructor: "Ava Brooks",
    lessonsCount: 8,
    enrolledCount: 530,
  },
];

export const mockOutlines: Record<string, CourseOutline> = {
  "1": {
    courseId: 1,
    courseTitle: "Nền tảng tiếng Anh",
    currentLessonId: "1-1",
    modules: [
      {
        id: "1-m1",
        title: "Khởi động giao tiếp",
        lessons: [
          { id: "1-1", title: "Chào hỏi và giới thiệu bản thân", completed: true, duration: "12 phút" },
          { id: "1-2", title: "Hỏi thông tin cơ bản", completed: false, duration: "15 phút" },
          { id: "1-3", title: "Mini quiz: mẫu câu hằng ngày", completed: false, duration: "8 phút" },
        ],
      },
      {
        id: "1-m2",
        title: "Phát âm rõ hơn",
        lessons: [
          { id: "1-4", title: "Âm cuối và trọng âm từ", completed: false, duration: "14 phút" },
          { id: "1-5", title: "Luyện nghe câu ngắn", completed: false, duration: "16 phút" },
        ],
      },
    ],
  },
  "2": {
    courseId: 2,
    courseTitle: "Tự tin giao tiếp",
    currentLessonId: "2-1",
    modules: [
      {
        id: "2-m1",
        title: "Small talk tự nhiên",
        lessons: [
          { id: "2-1", title: "Mở đầu cuộc trò chuyện", completed: true, duration: "10 phút" },
          { id: "2-2", title: "Phản hồi và hỏi tiếp", completed: false, duration: "13 phút" },
        ],
      },
      {
        id: "2-m2",
        title: "Trao đổi trong công việc",
        lessons: [
          { id: "2-3", title: "Đưa ý kiến trong cuộc họp", completed: false, duration: "18 phút" },
          { id: "2-4", title: "Quiz: chọn câu phản hồi phù hợp", completed: false, duration: "9 phút" },
        ],
      },
    ],
  },
};

export const mockLessons: Record<string, Lesson> = {
  "1-1": {
    id: "1-1",
    courseId: 1,
    moduleTitle: "Khởi động giao tiếp",
    title: "Chào hỏi và giới thiệu bản thân",
    blocks: [
      {
        type: "paragraph",
        text:
          "Trong một cuộc trò chuyện đầu tiên, mục tiêu không phải là nói thật dài mà là tạo cảm giác rõ ràng, thân thiện và dễ tiếp tục.",
      },
      { type: "heading", level: 2, text: "Mẫu câu trọng tâm" },
      {
        type: "vocabulary",
        title: "Từ và cụm từ nên nhớ",
        items: [
          { word: "Nice to meet you", pronunciation: "/naɪs tə miːt juː/", definition: "Rất vui được gặp bạn" },
          { word: "I am currently", definition: "Tôi hiện đang..." },
          { word: "I am interested in", definition: "Tôi quan tâm đến..." },
        ],
      },
      {
        type: "paragraph",
        text:
          "Hãy luyện nói câu giới thiệu trong 20 giây: tên, công việc hoặc việc học, và một điều bạn đang quan tâm.",
      },
    ],
    previous: null,
    next: { id: "1-2", title: "Hỏi thông tin cơ bản" },
  },
  "1-2": {
    id: "1-2",
    courseId: 1,
    moduleTitle: "Khởi động giao tiếp",
    title: "Hỏi thông tin cơ bản",
    blocks: [
      { type: "heading", level: 2, text: "Câu hỏi mở giúp hội thoại dài hơn" },
      {
        type: "paragraph",
        text:
          "Thay vì chỉ hỏi câu yes/no, hãy dùng what, how, where hoặc why để người nghe có thêm không gian trả lời.",
      },
      {
        type: "vocabulary",
        title: "Question starters",
        items: [
          { word: "What do you usually...?", definition: "Bạn thường... gì?" },
          { word: "How often do you...?", definition: "Bạn thường xuyên... như thế nào?" },
          { word: "Could you tell me more?", definition: "Bạn có thể nói thêm không?" },
        ],
      },
      { type: "quiz", quizId: "quiz-1-2" },
    ],
    previous: { id: "1-1", title: "Chào hỏi và giới thiệu bản thân" },
    next: { id: "1-3", title: "Mini quiz: mẫu câu hằng ngày" },
  },
  "1-3": {
    id: "1-3",
    courseId: 1,
    moduleTitle: "Khởi động giao tiếp",
    title: "Mini quiz: mẫu câu hằng ngày",
    blocks: [
      {
        type: "paragraph",
        text:
          "Bài quiz ngắn này giúp bạn kiểm tra cách chọn câu hỏi và phản hồi phù hợp trong tình huống quen thuộc.",
      },
      { type: "quiz", quizId: "quiz-1-3" },
    ],
    previous: { id: "1-2", title: "Hỏi thông tin cơ bản" },
    next: { id: "1-4", title: "Âm cuối và trọng âm từ" },
  },
  "2-1": {
    id: "2-1",
    courseId: 2,
    moduleTitle: "Small talk tự nhiên",
    title: "Mở đầu cuộc trò chuyện",
    blocks: [
      {
        type: "paragraph",
        text:
          "Một lời mở đầu tốt thường gắn với bối cảnh hiện tại: lớp học, cuộc họp, thời tiết, hoặc một việc cả hai cùng quan tâm.",
      },
      {
        type: "vocabulary",
        title: "Useful openers",
        items: [
          { word: "How has your day been?", definition: "Hôm nay của bạn thế nào?" },
          { word: "That sounds interesting", definition: "Nghe có vẻ thú vị đấy" },
          { word: "I have been meaning to ask", definition: "Tôi đã định hỏi..." },
        ],
      },
    ],
    previous: null,
    next: { id: "2-2", title: "Phản hồi và hỏi tiếp" },
  },
};

export const mockQuizzes: Record<string, Quiz> = {
  "quiz-1-2": {
    id: "quiz-1-2",
    title: "Kiểm tra nhanh: câu hỏi cơ bản",
    questions: [
      {
        id: "q1",
        prompt: "Câu nào phù hợp nhất để hỏi về công việc hiện tại?",
        options: [
          { id: "a", text: "What do you currently do?" },
          { id: "b", text: "Where are you yesterday?" },
          { id: "c", text: "Do you can work?" },
        ],
      },
      {
        id: "q2",
        prompt: "Khi muốn người khác nói thêm, bạn nên dùng câu nào?",
        options: [
          { id: "a", text: "Stop talking, please." },
          { id: "b", text: "Could you tell me more?" },
          { id: "c", text: "I am not hear." },
        ],
      },
    ],
  },
  "quiz-1-3": {
    id: "quiz-1-3",
    title: "Mini quiz: mẫu câu hằng ngày",
    questions: [
      {
        id: "q1",
        prompt: "Câu nào là lời chào tự nhiên trong lần gặp đầu?",
        options: [
          { id: "a", text: "Nice to meet you." },
          { id: "b", text: "I met you tomorrow." },
          { id: "c", text: "You name what?" },
        ],
      },
    ],
  },
};

export const mockProgressOverview: ProgressOverview = {
  lessonsCompleted: 27,
  studyTimeLabel: "18 giờ 40 phút",
  averageQuizScore: 86,
  streak: 9,
  courses: [
    { id: 1, title: "Nền tảng tiếng Anh", completedLessons: 6, totalLessons: 8, progress: 75 },
    { id: 2, title: "Tự tin giao tiếp", completedLessons: 4, totalLessons: 10, progress: 40 },
    { id: 3, title: "Ngữ pháp theo ngữ cảnh", completedLessons: 9, totalLessons: 9, progress: 100 },
  ],
  skills: [
    { name: "Listening", score: 78 },
    { name: "Speaking", score: 72 },
    { name: "Grammar", score: 88 },
    { name: "Vocabulary", score: 91 },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Chuỗi học 7 ngày",
      description: "Hoàn thành ít nhất một hoạt động học mỗi ngày trong một tuần.",
      earnedAt: "2026-08-10",
    },
    {
      id: "ach-2",
      title: "Quiz trên 85%",
      description: "Đạt điểm cao trong ba bài quiz liên tiếp.",
      earnedAt: "2026-08-08",
    },
  ],
};

export const mockCourseProgressDetails: Record<string, CourseProgressDetail> = {
  "1": {
    id: 1,
    title: "Nền tảng tiếng Anh",
    completedLessons: 6,
    totalLessons: 8,
    progress: 75,
    lessons: [
      { id: "1-1", title: "Chào hỏi và giới thiệu bản thân", completed: true, score: 92 },
      { id: "1-2", title: "Hỏi thông tin cơ bản", completed: true, score: 86 },
      { id: "1-3", title: "Mini quiz: mẫu câu hằng ngày", completed: false },
    ],
  },
};
