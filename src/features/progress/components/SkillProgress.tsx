import { Progress } from "@/components/ui-shadcn/progress";

import type { SkillProgressItem } from "../types/progress.type";

interface SkillProgressProps {
  skills: SkillProgressItem[];
}

export function SkillProgress({ skills }: SkillProgressProps) {
  return (
    <section className="rounded-xl border bg-card p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-foreground">Kỹ năng</h2>

      <div className="mt-5 space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="min-w-0">
            <div className="flex justify-between gap-3 text-sm">
              <span className="min-w-0 break-words font-semibold text-muted-foreground">
                {skill.name}
              </span>
              <span className="shrink-0 text-muted-foreground">{skill.score}%</span>
            </div>
            <Progress value={skill.score} className="mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}


