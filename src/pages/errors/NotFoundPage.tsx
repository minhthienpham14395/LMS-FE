import { Link } from "react-router-dom";

import { PageMotion } from "@/components/layout";
import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <PageMotion>
      <main className="grid min-h-dvh place-items-center px-4 py-10 text-center">
        <div className="max-w-lg rounded-xl border border-border/70 bg-card/95 px-6 py-8 shadow-lg backdrop-blur-md sm:px-8">
          <p className="text-sm font-bold text-primary">404</p>
          <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Không tìm thấy trang
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Trang có thể đã được chuyển hoặc địa chỉ không chính xác.
          </p>
          <Button asChild className="mt-6 w-full xs:w-auto">
            <Link to="/">Về trang chủ</Link>
          </Button>
        </div>
      </main>
    </PageMotion>
  );
}


