import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { COURSE_LEVELS } from "@/utils/constants";
import { cn } from "@/utils/cn";

import type { CourseFiltersState } from "../types/course.type";

const courseCategories = [
  { value: "general-english", label: "Tiếng Anh tổng quát" },
  { value: "speaking", label: "Giao tiếp" },
  { value: "exam-prep", label: "Luyện thi" },
  { value: "business", label: "Tiếng Anh công việc" },
] as const;

const sortOptions = [
  { value: "popular", label: "Phổ biến nhất" },
  { value: "newest", label: "Mới nhất" },
  { value: "rating", label: "Đánh giá cao nhất" },
  { value: "duration", label: "Thời lượng ngắn nhất" },
] as const;

interface CourseFiltersProps {
  filters: CourseFiltersState;
  onChange: (patch: Partial<CourseFiltersState>) => void;
}

export function CourseFilters({ filters, onChange }: CourseFiltersProps) {
  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="text-sm font-bold text-slate-950">Trình độ</legend>
        <div className="mt-3 grid gap-2">
          {COURSE_LEVELS.map((level) => (
            <label
              key={level.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm transition",
                "hover:bg-slate-50",
                filters.level === level.value && "bg-brand-50 text-brand-700"
              )}
            >
              <input
                type="radio"
                name="level"
                checked={filters.level === level.value}
                onChange={() => onChange({ level: level.value })}
              />
              <span>{level.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-bold text-slate-950">Danh mục</legend>
        <div className="mt-3 grid gap-2">
          {courseCategories.map((category) => (
            <label
              key={category.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm transition",
                "hover:bg-slate-50",
                filters.category === category.value &&
                  "bg-brand-50 text-brand-700"
              )}
            >
              <input
                type="radio"
                name="category"
                checked={filters.category === category.value}
                onChange={() => onChange({ category: category.value })}
              />
              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm font-bold text-slate-950">Sắp xếp</span>
        <select
          value={filters.sort}
          onChange={(event) => onChange({ sort: event.target.value })}
          className="mt-3 min-h-11 w-full rounded-xl border border-input bg-white px-3 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          onChange({
            q: "",
            level: "",
            category: "",
            sort: "popular",
            page: 1,
          })
        }
      >
        <RotateCcw className="size-4" />
        Đặt lại bộ lọc
      </Button>
    </div>
  );
}
