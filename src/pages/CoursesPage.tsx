import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { CourseCard, EmptyState, QueryError } from "@/components/shared";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import {
  CourseFilters,
  type CourseFiltersState,
  useCourseFilters,
  useCourses,
} from "@/features/courses";
import { useDebounce } from "@/hooks/useDebounce";

function CoursesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border bg-white shadow-sm"
        >
          <div className="aspect-[16/10] w-full animate-pulse bg-slate-100" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-24 animate-pulse rounded bg-slate-100" />
            <div className="h-6 w-4/5 animate-pulse rounded bg-slate-100" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-11 w-full animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CoursesPage() {
  const { filters, update } = useCourseFilters();
  const [searchDraft, setSearchDraft] = useState<{
    value: string;
    baseQ: string;
  } | null>(null);
  const [isSearchComposing, setIsSearchComposing] = useState(false);
  const searchValue =
    searchDraft && searchDraft.baseQ === filters.q
      ? searchDraft.value
      : filters.q;
  const debouncedSearchValue = useDebounce(searchValue, 350);
  const query = useCourses(filters);

  useEffect(() => {
    if (isSearchComposing || debouncedSearchValue === filters.q) {
      return;
    }

    update({ q: debouncedSearchValue });
  }, [debouncedSearchValue, filters.q, isSearchComposing, update]);

  const handleFilterChange = (patch: Partial<CourseFiltersState>) => {
    if ("q" in patch) {
      setSearchDraft(null);
    }

    update(patch);
  };

  const courses = query.data?.items ?? [];
  const totalPages = query.data?.totalPages;
  const hasNextPage =
    query.data?.hasMore ??
    (totalPages ? filters.page < totalPages : courses.length > 0);
  const hasPreviousPage = filters.page > 1;
  const frostedPanelClassName =
    "rounded-[1.75rem] border border-white/70 bg-white/72 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md";

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <div className={`${frostedPanelClassName} p-6 sm:p-8 lg:p-10`}>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Danh mục khóa học
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            Khóa học
          </h1>
          <p className="mt-2 text-slate-600">
            Tìm lộ trình phù hợp với trình độ, thời gian và mục tiêu của bạn.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={searchValue}
              onChange={(event) =>
                setSearchDraft({
                  value: event.target.value,
                  baseQ: filters.q,
                })
              }
              onCompositionStart={() => setIsSearchComposing(true)}
              onCompositionEnd={(event) => {
                setIsSearchComposing(false);
                setSearchDraft({
                  value: event.currentTarget.value,
                  baseQ: filters.q,
                });
                update({ q: event.currentTarget.value });
              }}
              placeholder="Tìm khóa học"
              className="border-white/70 bg-white/80 pl-10"
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-white/70 bg-white/80 sm:w-auto lg:hidden"
              >
                <SlidersHorizontal className="size-4" />
                Bộ lọc
              </Button>
            </SheetTrigger>

            <SheetContent
              side="bottom"
              className="max-h-[85dvh] overflow-y-auto rounded-t-3xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            >
              <SheetHeader>
                <SheetTitle>Lọc khóa học</SheetTitle>
              </SheetHeader>

              <div className="py-5">
                <CourseFilters
                  filters={filters}
                  onChange={handleFilterChange}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className={`sticky top-24 p-4 ${frostedPanelClassName}`}>
            <CourseFilters filters={filters} onChange={handleFilterChange} />
          </div>
        </aside>

        <section className="min-w-0" aria-live="polite">
          {query.isLoading && <CoursesSkeleton />}

          {query.isError && (
            <QueryError
              title="Không thể tải khóa học"
              message="Danh mục khóa học hiện chưa khả dụng. Vui lòng thử lại."
              onRetry={() => void query.refetch()}
            />
          )}

          {!query.isLoading && !query.isError && courses.length === 0 && (
            <div className={`${frostedPanelClassName} p-6 sm:p-8`}>
              <EmptyState
                title="Không tìm thấy khóa học"
                description="Hãy thử từ khóa, trình độ hoặc danh mục khác."
              />
            </div>
          )}

          {!query.isLoading && !query.isError && courses.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              <div
                className={`mt-8 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between ${frostedPanelClassName}`}
              >
                <p className="text-sm text-slate-500">
                  Trang {filters.page}
                  {totalPages ? ` / ${totalPages}` : ""}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                  <Button
                    variant="outline"
                    className="border-white/70 bg-white/80"
                    disabled={!hasPreviousPage || query.isFetching}
                    onClick={() =>
                      update({ page: Math.max(1, filters.page - 1) })
                    }
                  >
                    <ChevronLeft className="size-4" />
                    Trước
                  </Button>
                  <Button
                    className="shadow-sm"
                    disabled={!hasNextPage || query.isFetching}
                    onClick={() => update({ page: filters.page + 1 })}
                  >
                    Sau
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          <div className="max-w-2xl">
            <div className="mt-8 text-sm text-slate-500">
              <Link
                to="/landing#courses"
                className="font-semibold text-brand-700"
              >
                Quay lại khóa học nổi bật
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
