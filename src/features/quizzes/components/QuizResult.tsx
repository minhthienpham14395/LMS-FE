import { Button } from "@/components/ui/Button";

import type { QuizResultData } from "../types/quiz.type";

interface QuizResultProps {
  result: QuizResultData;
  onRetry: () => void;
}

export function QuizResult({ result, onRetry }: QuizResultProps) {
  return (
    <section
      aria-live="polite"
      className="rounded-2xl border bg-slate-50 p-4 sm:p-6"
    >
      <p className="text-sm font-semibold text-slate-500">Điểm của bạn</p>
      <p className="mt-1 text-4xl font-bold text-slate-950">
        {result.score}%
      </p>

      {result.feedback && (
        <p className="mt-3 break-words text-sm leading-6 text-slate-600">
          {result.feedback}
        </p>
      )}

      {result.canRetry && (
        <Button
          variant="outline"
          className="mt-5 w-full sm:w-auto"
          onClick={onRetry}
        >
          Làm lại
        </Button>
      )}
    </section>
  );
}
