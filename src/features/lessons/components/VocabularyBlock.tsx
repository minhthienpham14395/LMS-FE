import type { VocabularyItem } from "../types/lesson.type";

interface VocabularyBlockProps {
  title?: string;
  items: VocabularyItem[];
}

export function VocabularyBlock({ title = "Từ vựng", items }: VocabularyBlockProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border bg-slate-50 p-4 sm:p-5">
      <h2 className="font-bold text-slate-950">{title}</h2>

      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            key={item.word}
            className="grid gap-1 rounded-xl bg-white p-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4"
          >
            <div className="min-w-0">
              <p className="break-words font-bold text-slate-950">{item.word}</p>
              {item.pronunciation && (
                <p className="break-words text-xs text-slate-500">
                  {item.pronunciation}
                </p>
              )}
            </div>
            <p className="min-w-0 break-words text-sm leading-6 text-slate-600">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
