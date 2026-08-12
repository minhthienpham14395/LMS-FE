import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRegister } from "../hooks/useAuth";
import {
  registerSchema,
  type RegisterFormValues,
} from "../utils/auth.utils";

import { AuthField } from "./AuthField";
import { AuthSubmitButton } from "./AuthSubmitButton";
import { PasswordField } from "./PasswordField";

export function RegisterForm() {
  const registerMutation = useRegister();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => registerMutation.mutate(values))}
      className="space-y-4"
      noValidate
    >
      <AuthField
        id="fullName"
        label="Họ và tên"
        type="text"
        autoComplete="name"
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      <AuthField
        id="register-email"
        label="Email"
        type="email"
        autoComplete="email"
        inputMode="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        id="register-password"
        label="Mật khẩu"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <PasswordField
        id="confirmPassword"
        label="Xác nhận mật khẩu"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <div className="min-w-0">
        <label className="flex min-w-0 items-start gap-3 rounded-xl border border-transparent p-1 text-sm leading-6 text-slate-600 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring">
          <input
            type="checkbox"
            className="mt-1 size-5 shrink-0 rounded border border-slate-300 accent-brand-600"
            {...register("acceptTerms")}
          />
          <span className="min-w-0 break-words">
            Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật.
          </span>
        </label>
        {errors.acceptTerms && (
          <p
            role="alert"
            className="mt-1.5 break-words text-sm leading-5 text-red-600"
          >
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

      <AuthSubmitButton
        idleText="Tạo tài khoản"
        pendingText="Đang tạo tài khoản..."
        isPending={registerMutation.isPending}
      />
    </form>
  );
}
