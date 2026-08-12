import { apiClient } from "@/services/apiClient";

import type {
  AvatarUploadResponse,
  LearnerProfile,
} from "../types/profile.type";
import type { ProfileFormValues } from "../schemas/profile.schema";

function unwrapData<T>(payload: T | { data: T }): T {
  return payload && typeof payload === "object" && "data" in payload
    ? payload.data
    : payload;
}

export const profileApi = {
  async get(): Promise<LearnerProfile> {
    const { data } = await apiClient.get<LearnerProfile | { data: LearnerProfile }>(
      "/me/profile"
    );
    return unwrapData(data);
  },

  async update(payload: ProfileFormValues): Promise<LearnerProfile> {
    const { data } = await apiClient.patch<LearnerProfile | { data: LearnerProfile }>(
      "/me/profile",
      payload
    );
    return unwrapData(data);
  },

  async uploadAvatar(file: File): Promise<AvatarUploadResponse> {
    const form = new FormData();
    form.append("avatar", file);

    const { data } = await apiClient.post<
      AvatarUploadResponse | { data: AvatarUploadResponse }
    >("/me/avatar", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return unwrapData(data);
  },
};
