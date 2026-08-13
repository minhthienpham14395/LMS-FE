import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface QueryErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function QueryError({
  title = "Không thể tải dữ liệu",
  message = "Vui lòng thử lại.",
  onRetry,
}: QueryErrorProps) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-900"
    >
      <div className="flex gap-3">
        <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <div className="min-w-0">
          <h2 className="font-bold">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-red-700">{message}</p>

          {onRetry && (
            <Button variant="outline" className="mt-4" onClick={onRetry}>
              Thử lại
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
