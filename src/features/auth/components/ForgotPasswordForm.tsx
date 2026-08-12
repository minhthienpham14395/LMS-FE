import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useForgotPassword } from "../hooks/useAuth";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "../utils/auth.utils";

import { AuthField } from "./AuthField";
import { AuthSubmitButton } from "./AuthSubmitButton";

export function ForgotPasswordForm() {
  const forgotPassword = useForgotPassword();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => forgotPassword.mutate(values))}
      className="space-y-5"
      noValidate
    >
      <AuthField
        id="forgot-email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <AuthSubmitButton
        idleText="Gửi hướng dẫn đặt lại"
        pendingText="Đang gửi..."
        isPending={forgotPassword.isPending}
      />
    </form>
  );
}
