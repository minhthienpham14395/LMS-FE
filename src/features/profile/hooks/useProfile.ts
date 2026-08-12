import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { profileApi } from "../api/profile.api";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: profileApi.get,
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: profileApi.update,
    onSuccess: (profile) => {
      queryClient.setQueryData(["profile"], profile);
      toast.success("Hồ sơ đã được cập nhật.");
    },
    onError: () => {
      toast.error("Không thể lưu hồ sơ.");
    },
  });
}

export function useUploadAvatar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: profileApi.uploadAvatar,
    onSuccess: (response) => {
      if (response.profile) {
        queryClient.setQueryData(["profile"], response.profile);
      } else {
        void queryClient.invalidateQueries({ queryKey: ["profile"] });
      }

      toast.success("Ảnh đã được cập nhật.");
    },
    onError: () => {
      toast.error("Không thể tải ảnh lên.");
    },
  });
}
