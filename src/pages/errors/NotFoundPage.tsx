import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 py-10 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-bold text-brand-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
          Không tìm thấy trang
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Trang có thể đã được chuyển hoặc địa chỉ không chính xác.
        </p>
        <Button asChild className="mt-6 w-full xs:w-auto">
          <Link to="/">Về trang chủ</Link>
        </Button>
      </div>
    </main>
  );
}
