import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useLogin } from "../hooks/useAuth";
import {
  loginSchema,
  type LoginFormValues,
} from "../utils/auth.utils";

import { AuthField } from "./AuthField";
import { AuthSubmitButton } from "./AuthSubmitButton";
import { PasswordField } from "./PasswordField";

export function LoginForm() {
  const login = useLogin();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => login.mutate(values))}
      className="space-y-5"
      noValidate
    >
      <AuthField
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        inputMode="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        id="password"
        label="Mật khẩu"
        autoComplete="current-password"
        error={errors.password?.message}
        action={
          <Link
            to="/forgot-password"
            className="min-w-0 rounded-md text-right text-sm font-semibold text-brand-600 hover:underline focus-visible:outline-brand-500"
          >
            Quên mật khẩu?
          </Link>
        }
        {...register("password")}
      />

      <AuthSubmitButton
        idleText="Đăng nhập"
        pendingText="Đang đăng nhập..."
        isPending={login.isPending}
      />
    </form>
  );
}
