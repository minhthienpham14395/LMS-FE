import { apiClient } from "@/services/apiClient";

import type {
  AuthSession,
  AuthUser,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
} from "../types";

export const authApi = {
  async login(payload: LoginPayload) {
    const { data } = await apiClient.post<AuthSession>("/auth/login", payload);
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await apiClient.post<AuthSession | { message?: string }>(
      "/auth/register",
      payload
    );
    return data;
  },

  async forgotPassword(payload: ForgotPasswordPayload) {
    const { data } = await apiClient.post<{ message?: string }>(
      "/auth/forgot-password",
      payload
    );
    return data;
  },

  async me() {
    const { data } = await apiClient.get<AuthUser>("/auth/me");
    return data;
  },
};
