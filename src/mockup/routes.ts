import type { InternalAxiosRequestConfig } from "axios";

import type { CourseFiltersState } from "@/features/courses";
import type { ProfileFormValues } from "@/features/profile/schemas/profile.schema";

import {
  mockCourseProgressDetails,
  mockCourses,
  mockLessons,
  mockOutlines,
  mockProfile,
  mockProgressOverview,
  mockQuizzes,
  mockSession,
  mockUser,
} from "./data";

export interface MockupRouteResponse {
  data: unknown;
  status?: number;
  statusText?: string;
}

type MutableProfile = typeof mockProfile;

let profile: MutableProfile = { ...mockProfile };

function normalizePath(url: string | undefined) {
  if (!url) {
    return "/";
  }

  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.pathname.replace(/^\/api(?=\/)/, "") || "/";
  } catch {
    return url.split("?")[0]?.replace(/^\/api(?=\/)/, "") || "/";
  }
}

function parseData<T>(data: unknown): T | undefined {
  if (!data) {
    return undefined;
  }

  if (typeof data === "string") {
    try {
      return JSON.parse(data) as T;
    } catch {
      return undefined;
    }
  }

  return data as T;
}

function filterCourses(params: Partial<CourseFiltersState>) {
  const query = params.q?.trim().toLowerCase();
  const level = params.level?.trim().toLowerCase();
  const category = params.category?.trim().toLowerCase();
  const sort = params.sort || "popular";
  const page = Number(params.page || 1);
  const pageSize = 6;

  const filtered = mockCourses
    .filter((course) => {
      const matchesQuery = query
        ? [course.title, course.description, course.category, course.instructor]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(query))
        : true;
      const matchesLevel = level
        ? course.level.toLowerCase() === level
        : true;
      const matchesCategory = category
        ? course.category.toLowerCase() === category
        : true;

      return matchesQuery && matchesLevel && matchesCategory;
    })
    .sort((left, right) => {
      if (sort === "rating") {
        return Number(right.rating) - Number(left.rating);
      }

      if (sort === "newest") {
        return Number(right.id) - Number(left.id);
      }

      return (right.enrolledCount ?? 0) - (left.enrolledCount ?? 0);
    });

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return {
    items,
    page,
    total: filtered.length,
    totalPages: Math.max(1, Math.ceil(filtered.length / pageSize)),
    hasMore: start + pageSize < filtered.length,
  };
}

function submitQuiz() {
  return {
    score: 88,
    feedback:
      "Bài làm tốt. Hãy luyện thêm cách dùng câu hỏi mở để phần hội thoại tự nhiên hơn.",
    canRetry: true,
  };
}

function fallbackCourseOutline(courseId: string) {
  const course =
    mockCourses.find((item) => String(item.id) === courseId) ?? mockCourses[0];

  return {
    courseId: course.id,
    courseTitle: course.title,
    currentLessonId: "1-1",
    modules: mockOutlines["1"].modules,
  };
}

export function handleMockupRequest(
  config: InternalAxiosRequestConfig
): MockupRouteResponse | null {
  const method = (config.method ?? "get").toLowerCase();
  const path = normalizePath(config.url);

  if (method === "post" && path === "/auth/login") {
    return { data: mockSession };
  }

  if (method === "post" && path === "/auth/register") {
    const payload = parseData<{ fullName?: string; email?: string }>(config.data);

    return {
      data: {
        ...mockSession,
        user: {
          ...mockUser,
          fullName: payload?.fullName || mockUser.fullName,
          name: payload?.fullName || mockUser.name,
          email: payload?.email || mockUser.email,
        },
      },
    };
  }

  if (method === "post" && path === "/auth/forgot-password") {
    return { data: { message: "Mockup: hướng dẫn đặt lại mật khẩu đã được gửi." } };
  }

  if (method === "get" && path === "/auth/me") {
    return { data: mockUser };
  }

  if (method === "get" && path === "/courses") {
    return { data: filterCourses(config.params ?? {}) };
  }

  const courseDetailMatch = path.match(/^\/courses\/([^/]+)$/);
  if (method === "get" && courseDetailMatch) {
    const slug = decodeURIComponent(courseDetailMatch[1] ?? "");
    const course = mockCourses.find(
      (item) => item.slug === slug || String(item.id) === slug
    );

    return course
      ? { data: course }
      : { data: { message: "Course not found" }, status: 404, statusText: "Not Found" };
  }

  const enrollMatch = path.match(/^\/courses\/([^/]+)\/enroll$/);
  if (method === "post" && enrollMatch) {
    return {
      data: {
        message: "Mockup: ghi danh thành công.",
        courseId: decodeURIComponent(enrollMatch[1] ?? ""),
      },
    };
  }

  const outlineMatch = path.match(/^\/courses\/([^/]+)\/lessons$/);
  if (method === "get" && outlineMatch) {
    const courseId = decodeURIComponent(outlineMatch[1] ?? "");
    return { data: mockOutlines[courseId] ?? fallbackCourseOutline(courseId) };
  }

  const lessonMatch = path.match(/^\/lessons\/([^/]+)$/);
  if (method === "get" && lessonMatch) {
    const lessonId = decodeURIComponent(lessonMatch[1] ?? "");
    const lesson = mockLessons[lessonId];

    return lesson
      ? { data: lesson }
      : { data: { message: "Lesson not found" }, status: 404, statusText: "Not Found" };
  }

  const completeLessonMatch = path.match(/^\/lessons\/([^/]+)\/complete$/);
  if (method === "post" && completeLessonMatch) {
    return {
      data: {
        message: "Mockup: bài học đã được đánh dấu hoàn thành.",
        lessonId: decodeURIComponent(completeLessonMatch[1] ?? ""),
      },
    };
  }

  const quizMatch = path.match(/^\/quizzes\/([^/]+)$/);
  if (method === "get" && quizMatch) {
    const quizId = decodeURIComponent(quizMatch[1] ?? "");
    const quiz = mockQuizzes[quizId];

    return quiz
      ? { data: quiz }
      : { data: { message: "Quiz not found" }, status: 404, statusText: "Not Found" };
  }

  if (method === "post" && /^\/quizzes\/([^/]+)\/submit$/.test(path)) {
    return { data: submitQuiz() };
  }

  if (method === "get" && path === "/me/progress") {
    return { data: mockProgressOverview };
  }

  const progressCourseMatch = path.match(/^\/me\/progress\/courses\/([^/]+)$/);
  if (method === "get" && progressCourseMatch) {
    const courseId = decodeURIComponent(progressCourseMatch[1] ?? "");
    return {
      data:
        mockCourseProgressDetails[courseId] ??
        mockProgressOverview.courses.find((course) => String(course.id) === courseId) ??
        mockCourseProgressDetails["1"],
    };
  }

  if (method === "get" && path === "/me/profile") {
    return { data: profile };
  }

  if (method === "patch" && path === "/me/profile") {
    const payload = parseData<ProfileFormValues>(config.data);
    profile = {
      ...profile,
      ...payload,
    };

    return { data: profile };
  }

  if (method === "post" && path === "/me/avatar") {
    profile = {
      ...profile,
      avatarUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    };

    return {
      data: {
        avatarUrl: profile.avatarUrl,
        profile,
      },
    };
  }

  return null;
}
