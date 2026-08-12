import { useQuery } from "@tanstack/react-query";

import { progressApi } from "../api/progress.api";

export function useProgressOverview() {
  return useQuery({
    queryKey: ["progress", "overview"],
    queryFn: progressApi.overview,
  });
}

export function useCourseProgress(courseId: string | number | undefined) {
  return useQuery({
    queryKey: ["progress", "course", courseId],
    queryFn: () => progressApi.course(courseId ?? ""),
    enabled: courseId !== undefined && courseId !== "",
  });
}
