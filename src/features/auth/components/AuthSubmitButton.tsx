import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui";

interface AuthSubmitButtonProps {
  idleText: string;
  pendingText: string;
  isPending: boolean;
}

export function AuthSubmitButton({
  idleText,
  isPending,
  pendingText,
}: AuthSubmitButtonProps) {
  return (
    <Button
      type="submit"
      size="lg"
      className="relative w-full min-w-0"
      disabled={isPending}
    >
      <span className="invisible flex items-center gap-2">
        <Loader2 className="animate-spin" />
        {pendingText}
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 px-4">
        {isPending ? (
          <>
            <Loader2 className="animate-spin" />
            {pendingText}
          </>
        ) : (
          idleText
        )}
      </span>
    </Button>
  );
}
