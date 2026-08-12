import { apiClient } from "@/services/apiClient";

import type {
  Course,
  CourseFiltersState,
  CourseListResponse,
} from "../types/course.type";

type RawCourseListResponse =
  | Course[]
  | {
      data?: Course[] | { items?: Course[] };
      items?: Course[];
      courses?: Course[];
      page?: number;
      total?: number;
      totalPages?: number;
      hasMore?: boolean;
      meta?: {
        page?: number;
        total?: number;
        totalPages?: number;
        hasMore?: boolean;
      };
    };

function normalizeCourseList(
  payload: RawCourseListResponse,
  fallbackPage: number
): CourseListResponse {
  if (Array.isArray(payload)) {
    return {
      items: payload,
      page: fallbackPage,
      hasMore: false,
    };
  }

  const nestedData = payload.data;
  const items = Array.isArray(payload.items)
    ? payload.items
    : Array.isArray(payload.courses)
      ? payload.courses
      : Array.isArray(nestedData)
        ? nestedData
        : nestedData?.items ?? [];

  return {
    items,
    page: payload.page ?? payload.meta?.page ?? fallbackPage,
    total: payload.total ?? payload.meta?.total,
    totalPages: payload.totalPages ?? payload.meta?.totalPages,
    hasMore: payload.hasMore ?? payload.meta?.hasMore,
  };
}

export const coursesApi = {
  async list(params: CourseFiltersState): Promise<CourseListResponse> {
    const { data } = await apiClient.get<RawCourseListResponse>("/courses", {
      params,
    });

    return normalizeCourseList(data, params.page);
  },

  async detail(slug: string): Promise<Course> {
    const { data } = await apiClient.get<Course | { data: Course }>(
      `/courses/${slug}`
    );
    return "data" in data ? data.data : data;
  },

  async enroll(courseId: number | string) {
    const { data } = await apiClient.post(`/courses/${courseId}/enroll`);
    return data;
  },
};
