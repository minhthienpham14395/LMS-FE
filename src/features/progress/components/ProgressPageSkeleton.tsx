export function ProgressPageSkeleton() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="h-8 w-36 animate-pulse rounded bg-slate-100" />
        <div className="mt-3 h-4 w-full max-w-sm animate-pulse rounded bg-slate-100" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5"
          >
            <div className="h-4 w-28 animate-pulse rounded bg-slate-100" />
            <div className="mt-4 h-8 w-20 animate-pulse rounded bg-slate-100" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
          <div className="h-5 w-40 animate-pulse rounded bg-slate-100" />
          <div className="mt-5 grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-xl border p-4">
                <div className="h-5 w-4/5 animate-pulse rounded bg-slate-100" />
                <div className="mt-4 h-3 w-full animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
          <div className="h-5 w-20 animate-pulse rounded bg-slate-100" />
          <div className="mt-5 space-y-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
                <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
