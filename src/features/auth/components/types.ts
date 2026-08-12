import type { InputProps } from "@/components/ui";
import type { ReactNode } from "react";

export interface AuthFieldProps extends InputProps {
  label: string;
  error?: string;
  action?: ReactNode;
  inputClassName?: string;
}
