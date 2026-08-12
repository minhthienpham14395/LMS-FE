import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { useAuthStore } from "../store/auth.store";
import type { AuthSession } from "../types";
import type { RegisterFormValues } from "../utils/auth.utils";

type RedirectState = {
  from?: string;
};

const isAuthSession = (value: unknown): value is AuthSession => {
  return (
    typeof value === "object" &&
    value !== null &&
    "user" in value &&
    "accessToken" in value
  );
};

export function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const setSession = useAuthStore((state) => state.setSession);
  const stateFrom = (location.state as RedirectState | null)?.from;

  const redirectTo = stateFrom && stateFrom !== "/login" ? stateFrom : "/student";

  return useMutation({
    mutationFn: authApi.login,
    onSuccess(data) {
      setSession(data);
      queryClient.setQueryData(["auth", "me"], data.user);
      toast.success("Chào mừng bạn quay lại.");
      navigate(redirectTo, { replace: true });
    },
    onError(error) {
      toast.error(
        error instanceof Error ? error.message : "Không thể đăng nhập."
      );
    },
  });
}

export function useRegister() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (values: RegisterFormValues) =>
      authApi.register({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      }),
    onSuccess(data) {
      if (isAuthSession(data)) {
        setSession(data);
        queryClient.setQueryData(["auth", "me"], data.user);
        toast.success("Tài khoản đã được tạo.");
        navigate("/student", { replace: true });
        return;
      }

      toast.success(data.message ?? "Tài khoản đã được tạo. Bạn có thể đăng nhập ngay.");
      navigate("/login", { replace: true });
    },
    onError(error) {
      toast.error(
        error instanceof Error ? error.message : "Không thể tạo tài khoản."
      );
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess(data) {
      toast.success(
        data.message ?? "Nếu tài khoản tồn tại, hướng dẫn đặt lại mật khẩu đã được gửi."
      );
    },
    onError(error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Không thể gửi hướng dẫn đặt lại mật khẩu."
      );
    },
  });
}
