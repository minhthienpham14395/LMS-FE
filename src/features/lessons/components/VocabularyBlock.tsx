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
    <section className="rounded-xl border bg-background-soft p-4 sm:p-5">
      <h2 className="font-bold text-foreground">{title}</h2>

      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            key={item.word}
            className="grid gap-1 rounded-xl bg-card p-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4"
          >
            <div className="min-w-0">
              <p className="break-words font-bold text-foreground">{item.word}</p>
              {item.pronunciation && (
                <p className="break-words text-xs text-muted-foreground">
                  {item.pronunciation}
                </p>
              )}
            </div>
            <p className="min-w-0 break-words text-sm leading-6 text-muted-foreground">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


