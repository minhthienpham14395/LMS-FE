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
      className="rounded-2xl border bg-background-soft p-4 sm:p-6"
    >
      <p className="text-sm font-semibold text-muted-foreground">Điểm của bạn</p>
      <p className="mt-1 text-4xl font-bold text-foreground">
        {result.score}%
      </p>

      {result.feedback && (
        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
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

