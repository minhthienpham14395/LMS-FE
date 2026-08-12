import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

import { coursesApi } from "../api/courses.api";
import type { CourseFiltersState } from "../types/course.type";

export function useCourses(filters: CourseFiltersState) {
  return useQuery({
    queryKey: ["courses", filters],
    queryFn: () => coursesApi.list(filters),
    placeholderData: keepPreviousData,
  });
}

export function useCourse(slug: string | undefined) {
  return useQuery({
    queryKey: ["courses", "detail", slug],
    queryFn: () => coursesApi.detail(slug ?? ""),
    enabled: Boolean(slug),
  });
}

export function useEnrollCourse() {
  return useMutation({
    mutationFn: coursesApi.enroll,
  });
}
