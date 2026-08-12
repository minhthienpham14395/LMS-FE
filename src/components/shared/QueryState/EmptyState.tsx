import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed bg-white px-4 py-10 text-center sm:px-8 sm:py-14">
      <h2 className="font-bold text-slate-950">{title}</h2>
      {description && (
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
