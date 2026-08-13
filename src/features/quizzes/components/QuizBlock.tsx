import { useState } from "react";
import { RotateCw } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/Button";
import type { LessonId } from "@/features/lessons";
import { cn } from "@/utils/cn";

import { QuizResult } from "./QuizResult";
import { useQuiz, useSubmitQuiz } from "../hooks/useQuizzes";
import type { QuizAnswers, QuizResultData } from "../types/quiz.type";

interface QuizBlockProps {
  quizId: LessonId;
}

export function QuizBlock({ quizId }: QuizBlockProps) {
  const quiz = useQuiz(quizId);
  const submit = useSubmitQuiz(quizId);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizResultData | null>(null);

  if (quiz.isLoading) {
    return <QuizSkeleton />;
  }

  if (quiz.isError) {
    return <QuizError onRetry={quiz.refetch} />;
  }

  if (!quiz.data) {
    return null;
  }

  if (result) {
    return (
      <QuizResult
        result={result}
        onRetry={() => {
          setAnswers({});
          setResult(null);
        }}
      />
    );
  }

  const complete = quiz.data.questions.every(
    (question) => answers[String(question.id)] != null
  );

  return (
    <section className="rounded-xl border bg-card p-4 sm:p-6">
      <h2 className="break-words text-xl font-bold text-foreground">
        {quiz.data.title}
      </h2>

      <div className="mt-6 space-y-7">
        {quiz.data.questions.map((question, questionIndex) => (
          <fieldset key={question.id}>
            <legend className="break-words font-bold leading-6 text-foreground">
              {questionIndex + 1}. {question.prompt}
            </legend>

            <div className="mt-3 grid gap-2">
              {question.options.map((option) => {
                const selected = answers[String(question.id)] === option.id;

                return (
                  <label
                    key={option.id}
                    className={cn(
                      "flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border p-3 transition",
                      "hover:bg-background-soft",
                      selected && "border-primary bg-primary-soft"
                    )}
                  >
                    <input
                      type="radio"
                      name={String(question.id)}
                      value={String(option.id)}
                      checked={selected}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [String(question.id)]: option.id,
                        }))
                      }
                      className="mt-1"
                    />

                    <span className="min-w-0 break-words text-sm leading-6 text-muted-foreground">
                      {option.text}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <Button
        className="mt-7 w-full sm:w-auto"
        disabled={!complete || submit.isPending}
        onClick={() =>
          submit.mutate(answers, {
            onSuccess: setResult,
            onError: () => toast.error("Không thể gửi bài quiz này."),
          })
        }
      >
        {submit.isPending ? "Đang gửi..." : "Nộp bài quiz"}
      </Button>
    </section>
  );
}

function QuizSkeleton() {
  return (
    <section className="rounded-xl border bg-card p-4 sm:p-6">
      <div className="h-6 w-44 animate-pulse rounded bg-secondary" />
      <div className="mt-6 space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-4 w-4/5 animate-pulse rounded bg-secondary" />
            <div className="h-12 animate-pulse rounded-xl bg-secondary" />
            <div className="h-12 animate-pulse rounded-xl bg-secondary" />
          </div>
        ))}
      </div>
    </section>
  );
}

function QuizError({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="rounded-xl border bg-card p-4 sm:p-6">
      <h2 className="text-xl font-bold text-foreground">Không thể tải quiz</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Hiện không thể tải quiz này.
      </p>
      <Button variant="outline" className="mt-5" onClick={onRetry}>
        <RotateCw className="size-4" />
        Thử lại
      </Button>
    </section>
  );
}


