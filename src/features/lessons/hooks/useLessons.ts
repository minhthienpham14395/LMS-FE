import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { lessonsApi } from "../api/lessons.api";
import type { LessonId } from "../types/lesson.type";

export function useCourseOutline(courseId: LessonId | undefined) {
  return useQuery({
    queryKey: ["lessons", "outline", courseId],
    queryFn: () => lessonsApi.getCourseOutline(courseId ?? ""),
    enabled: Boolean(courseId),
  });
}

export function useLesson(lessonId: LessonId | undefined) {
  return useQuery({
    queryKey: ["lessons", "detail", lessonId],
    queryFn: () => lessonsApi.getLesson(lessonId ?? ""),
    enabled: Boolean(lessonId),
  });
}

export function useCompleteLesson(lessonId: LessonId | undefined) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => lessonsApi.completeLesson(lessonId ?? ""),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["lessons"] });
    },
  });
}
