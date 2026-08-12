export const ROUTES = Object.freeze({
  home: "/landing",
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  courses: "/courses",
  student: {
    dashboard: "/student",
    myCourses: "/student/courses",
    progress: "/student/progress",
    profile: "/student/profile",
  },
});

export const COURSE_LEVELS = [
  { value: "beginner", label: "Mới bắt đầu" },
  { value: "intermediate", label: "Trung cấp" },
  { value: "advanced", label: "Nâng cao" },
] as const;
