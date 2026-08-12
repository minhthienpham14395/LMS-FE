import { QuizBlock } from "@/features/quizzes/components/QuizBlock";

import { VocabularyBlock } from "./VocabularyBlock";
import type { LessonBlock } from "../types/lesson.type";

interface LessonBlocksProps {
  blocks: LessonBlock[];
}

export function LessonBlocks({ blocks }: LessonBlocksProps) {
  if (blocks.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border bg-slate-50 p-5 text-sm leading-6 text-slate-600">
        Nội dung bài học đang được chuẩn bị.
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="break-words text-base leading-8 text-slate-700"
              >
                {block.text}
              </p>
            );

          case "heading": {
            const HeadingTag = block.level === 3 ? "h3" : block.level === 4 ? "h4" : "h2";
            return (
              <HeadingTag
                key={index}
                className="break-words pt-2 text-xl font-bold leading-8 text-slate-950 sm:text-2xl"
              >
                {block.text}
              </HeadingTag>
            );
          }

          case "vocabulary":
            return (
              <VocabularyBlock
                key={index}
                title={block.title}
                items={block.items}
              />
            );

          case "quiz":
            return <QuizBlock key={index} quizId={block.quizId} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
