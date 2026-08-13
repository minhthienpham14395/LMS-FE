import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn/select";
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
        <legend className="text-sm font-bold text-foreground">Trình độ</legend>
        <div className="mt-3 grid gap-2">
          {COURSE_LEVELS.map((level) => (
            <label
              key={level.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm transition",
                "hover:bg-background-soft",
                filters.level === level.value && "bg-primary-soft text-primary-active"
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
        <legend className="text-sm font-bold text-foreground">Danh mục</legend>
        <div className="mt-3 grid gap-2">
          {courseCategories.map((category) => (
            <label
              key={category.value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm transition",
                "hover:bg-background-soft",
                filters.category === category.value &&
                  "bg-primary-soft text-primary-active"
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
        <span className="text-sm font-semibold text-foreground">Sắp xếp</span>
        <div className="mt-2">
          <Select value={filters.sort} onValueChange={(value) => onChange({ sort: value })}>
            <SelectTrigger className={cn("rounded-lg border-border")}>
              <SelectValue placeholder="Chọn kiểu sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="cursor-pointer">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </label>

      <Button
        variant="outline"
        className="w-full cursor-pointer "
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

