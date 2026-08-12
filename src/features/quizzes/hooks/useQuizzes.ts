import { useMutation, useQuery } from "@tanstack/react-query";

import type { LessonId } from "@/features/lessons";

import { quizzesApi } from "../api/quizzes.api";
import type { QuizAnswers } from "../types/quiz.type";

export function useQuiz(quizId: LessonId | undefined) {
  return useQuery({
    queryKey: ["quizzes", "detail", quizId],
    queryFn: () => quizzesApi.getQuiz(quizId ?? ""),
    enabled: Boolean(quizId),
  });
}

export function useSubmitQuiz(quizId: LessonId | undefined) {
  return useMutation({
    mutationFn: (answers: QuizAnswers) => quizzesApi.submitQuiz(quizId ?? "", answers),
  });
}
