import { apiClient } from "@/services/apiClient";

import type {
  CourseProgressDetail,
  ProgressOverview,
} from "../types/progress.type";

function unwrapData<T>(payload: T | { data: T }): T {
  return payload && typeof payload === "object" && "data" in payload
    ? payload.data
    : payload;
}

function isProgressOverview(payload: unknown): payload is ProgressOverview {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const overview = payload as Partial<ProgressOverview>;

  return (
    Array.isArray(overview.courses) &&
    Array.isArray(overview.skills)
  );
}

function isCourseProgressDetail(payload: unknown): payload is CourseProgressDetail {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  return (
    "title" in payload &&
    "progress" in payload
  );
}

export const progressApi = {
  async overview(): Promise<ProgressOverview> {
    const { data } = await apiClient.get<ProgressOverview | { data: ProgressOverview }>(
      "/me/progress"
    );
    const overview = unwrapData(data);

    if (!isProgressOverview(overview)) {
      throw new Error("Invalid progress overview response.");
    }

    return overview;
  },

  async course(courseId: string | number): Promise<CourseProgressDetail> {
    const { data } = await apiClient.get<
      CourseProgressDetail | { data: CourseProgressDetail }
    >(`/me/progress/courses/${courseId}`);
    const progress = unwrapData(data);

    if (!isCourseProgressDetail(progress)) {
      throw new Error("Invalid course progress response.");
    }

    return progress;
  },
};
