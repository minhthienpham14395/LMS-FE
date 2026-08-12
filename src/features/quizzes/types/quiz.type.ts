import type { LessonId } from "@/features/lessons";

export interface QuizOption {
  id: LessonId;
  text: string;
}

export interface QuizQuestion {
  id: LessonId;
  prompt: string;
  options: QuizOption[];
}

export interface Quiz {
  id: LessonId;
  title: string;
  questions: QuizQuestion[];
}

export type QuizAnswers = Record<string, LessonId>;

export interface QuizResultData {
  score: number;
  feedback?: string;
  canRetry?: boolean;
}
