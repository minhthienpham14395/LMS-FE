import { Award } from "lucide-react";

import type { RecentAchievement } from "../types/progress.type";

interface RecentAchievementsProps {
  achievements: RecentAchievement[];
}

export function RecentAchievements({ achievements }: RecentAchievementsProps) {
  return (
    <section className="rounded-2xl border bg-card p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-foreground">Thành tích gần đây</h2>

      <div className="mt-4 grid gap-3">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="flex min-w-0 gap-3 rounded-xl border bg-background-soft p-3"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/20 text-foreground">
              <Award className="size-4" />
            </span>
            <div className="min-w-0">
              <h3 className="break-words text-sm font-bold text-foreground">
                {achievement.title}
              </h3>
              {achievement.description && (
                <p className="mt-1 break-words text-xs leading-5 text-muted-foreground">
                  {achievement.description}
                </p>
              )}
              {achievement.earnedAt && (
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  {achievement.earnedAt}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


