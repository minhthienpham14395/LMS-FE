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
import { Reveal } from "@/components/layout";

function CoursesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border bg-card shadow-sm"
        >
          <div className="aspect-[16/10] w-full animate-pulse bg-secondary" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-24 animate-pulse rounded bg-secondary" />
            <div className="h-6 w-4/5 animate-pulse rounded bg-secondary" />
            <div className="h-4 w-full animate-pulse rounded bg-secondary" />
            <div className="h-11 w-full animate-pulse rounded-xl bg-secondary" />
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
    "rounded-xl border border-border/80 bg-card/95 shadow-lg";

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
        <Reveal className={`${frostedPanelClassName} p-6 sm:p-8 lg:p-10`}>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              Danh mục khóa học
            </p>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Khóa học
            </h1>
            <p className="mt-2 text-muted-foreground">
              Tìm lộ trình phù hợp với trình độ, thời gian và mục tiêu của bạn.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
                className="border-border/70 bg-card/95 pl-10"
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full border-border/70 bg-card/95 sm:w-auto lg:hidden"
                >
                  <SlidersHorizontal className="size-4" />
                  Bộ lọc
                </Button>
              </SheetTrigger>

              <SheetContent
                side="bottom"
                className="max-h-[85dvh] overflow-y-auto rounded-t-xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
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
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <Reveal delay={120} className={`sticky top-24 p-4 ${frostedPanelClassName}`}>
              <CourseFilters filters={filters} onChange={handleFilterChange} />
            </Reveal>
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
              <Reveal className={`${frostedPanelClassName} p-6 sm:p-8`}>
                <EmptyState
                  title="Không tìm thấy khóa học"
                  description="Hãy thử từ khóa, trình độ hoặc danh mục khác."
                />
              </Reveal>
            )}

            {!query.isLoading && !query.isError && courses.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {courses.map((course, index) => (
                    <Reveal key={course.id} delay={index * 80}>
                      <CourseCard course={course} />
                    </Reveal>
                  ))}
                </div>

                <Reveal
                  delay={160}
                  className={`mt-8 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between ${frostedPanelClassName}`}
                >
                  <p className="text-sm text-muted-foreground">
                    Trang {filters.page}
                    {totalPages ? ` / ${totalPages}` : ""}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:flex">
                    <Button
                      variant="outline"
                      className="border-border/70 bg-card/95"
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
                </Reveal>
              </>
            )}

            <div className="max-w-2xl">
              <Reveal delay={240} className="mt-8 text-sm text-muted-foreground">
                <Link
                  to="/landing#courses"
                  className="font-semibold text-primary-active"
                >
                  Quay lại khóa học nổi bật
                </Link>
              </Reveal>
            </div>
          </section>
        </div>
    </Container>
  );
}



