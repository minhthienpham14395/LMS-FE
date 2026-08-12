import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import type { CourseFiltersState } from "../types/course.type";

type CourseFilterPatch = Partial<CourseFiltersState>;

export function useCourseFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: CourseFiltersState = {
    q: searchParams.get("q") || "",
    level: searchParams.get("level") || "",
    category: searchParams.get("category") || "",
    sort: searchParams.get("sort") || "popular",
    page: Number(searchParams.get("page") || 1),
  };

  const update = useCallback(
    (patch: CourseFilterPatch) => {
      const next = new URLSearchParams(searchParams);

      Object.entries(patch).forEach(([key, value]) => {
        if (value === "" || value == null) {
          next.delete(key);
        } else {
          next.set(key, String(value));
        }
      });

      if (!("page" in patch)) {
        next.set("page", "1");
      }

      if (next.get("sort") === "popular") {
        next.delete("sort");
      }

      if (next.get("page") === "1") {
        next.delete("page");
      }

      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return { filters, update };
}
