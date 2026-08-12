import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

import { StudentSidebar } from "./StudentSidebar";

export function StudentMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Mở điều hướng học viên">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[min(88vw,320px)] overflow-y-auto p-0"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Điều hướng học viên</SheetTitle>
        </SheetHeader>
        <StudentSidebar onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
