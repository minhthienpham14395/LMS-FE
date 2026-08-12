import { apiClient } from "@/services/apiClient";

import type { CourseOutline, Lesson, LessonId } from "../types/lesson.type";

type Wrapped<T> = T | { data: T };

function unwrap<T>(payload: Wrapped<T>): T {
  return "data" in Object(payload) ? (payload as { data: T }).data : (payload as T);
}

export const lessonsApi = {
  async getCourseOutline(courseId: LessonId): Promise<CourseOutline> {
    const { data } = await apiClient.get<Wrapped<CourseOutline>>(
      `/courses/${courseId}/lessons`
    );
    return unwrap(data);
  },

  async getLesson(lessonId: LessonId): Promise<Lesson> {
    const { data } = await apiClient.get<Wrapped<Lesson>>(
      `/lessons/${lessonId}`
    );
    return unwrap(data);
  },

  async completeLesson(lessonId: LessonId) {
    const { data } = await apiClient.post(`/lessons/${lessonId}/complete`);
    return data;
  },
};
