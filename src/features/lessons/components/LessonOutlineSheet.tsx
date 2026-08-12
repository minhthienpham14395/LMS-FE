import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

import { LessonOutline } from "./LessonOutline";
import type { LessonId } from "../types/lesson.type";

interface LessonOutlineSheetProps {
  courseId: LessonId | undefined;
}

export function LessonOutlineSheet({ courseId }: LessonOutlineSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="size-4" />
          <span className="hidden xs:inline">Bài học</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[min(92vw,360px)] overflow-y-auto p-0">
        <SheetHeader className="border-b p-4 pr-12 text-left">
          <SheetTitle>Bài học của khóa</SheetTitle>
        </SheetHeader>
        <LessonOutline courseId={courseId} onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
