import { apiClient } from "@/services/apiClient";

import type { LessonId } from "@/features/lessons";
import type { Quiz, QuizAnswers, QuizResultData } from "../types/quiz.type";

type Wrapped<T> = T | { data: T };

function unwrap<T>(payload: Wrapped<T>): T {
  return "data" in Object(payload) ? (payload as { data: T }).data : (payload as T);
}

export const quizzesApi = {
  async getQuiz(quizId: LessonId): Promise<Quiz> {
    const { data } = await apiClient.get<Wrapped<Quiz>>(`/quizzes/${quizId}`);
    return unwrap(data);
  },

  async submitQuiz(
    quizId: LessonId,
    answers: QuizAnswers
  ): Promise<QuizResultData> {
    const { data } = await apiClient.post<Wrapped<QuizResultData>>(
      `/quizzes/${quizId}/submit`,
      { answers }
    );
    return unwrap(data);
  },
};
