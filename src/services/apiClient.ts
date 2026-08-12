import axios from "axios";

import { env } from "@/config/env";
import { setupMockupApi } from "@/mockup";

import { authToken } from "./authToken";

export interface ApiError {
  status: number;
  message: string;
  details: unknown;
  original: unknown;
}

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

if (env.enableMock) {
  setupMockupApi(apiClient);
}

apiClient.interceptors.request.use((config) => {
  const token = authToken.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalized: ApiError = {
      status: error.response?.status ?? 0,
      message:
        error.response?.data?.message ||
        error.message ||
        "Đã có lỗi xảy ra.",
      details: error.response?.data?.errors ?? null,
      original: error,
    };

    return Promise.reject(normalized);
  }
);
