import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui";

import { AuthField } from "./AuthField";
import type { AuthFieldProps } from "./types";

export function PasswordField(props: AuthFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <AuthField
        type={isVisible ? "text" : "password"}
        inputClassName="pr-12"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={isVisible ? "Hide password" : "Show password"}
        className="absolute right-0 top-7 text-slate-500 hover:text-slate-900"
        onClick={() => setIsVisible((value) => !value)}
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
}
