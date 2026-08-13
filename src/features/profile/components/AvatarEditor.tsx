import { useId, useMemo, useState } from "react";
import { Camera, Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

import { useProfile, useUploadAvatar } from "../hooks/useProfile";

function getInitials(name: string | undefined) {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return "ST";
  }

  return trimmedName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function AvatarEditor() {
  const generatedId = useId();
  const inputId = `avatar-upload-${generatedId}`;
  const profile = useProfile();
  const uploadAvatar = useUploadAvatar();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const initials = useMemo(
    () => getInitials(profile.data?.displayName || profile.data?.fullName),
    [profile.data?.displayName, profile.data?.fullName]
  );
  const avatarUrl = previewUrl || profile.data?.avatarUrl;

  return (
    <section className="rounded-2xl border bg-card p-4 text-center shadow-sm sm:p-6">
      <div className="mx-auto grid size-24 place-items-center overflow-hidden rounded-full bg-primary-soft text-2xl font-bold text-primary-active">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setPreviewUrl(null)}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <label
        htmlFor={inputId}
        className={cn(
          "mt-4 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold transition",
          "hover:bg-background-soft focus-within:outline focus-within:outline-2 focus-within:outline-ring",
          uploadAvatar.isPending && "pointer-events-none opacity-60"
        )}
      >
        {uploadAvatar.isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Camera className="size-4" />
        )}
        {uploadAvatar.isPending ? "Đang tải lên..." : "Đổi ảnh"}
      </label>

      <input
        id={inputId}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="sr-only"
        disabled={uploadAvatar.isPending}
        onChange={(event) => {
          const file = event.target.files?.[0];

          if (!file) {
            return;
          }

          setPreviewUrl(URL.createObjectURL(file));
          uploadAvatar.mutate(file);
          event.target.value = "";
        }}
      />

      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Hỗ trợ JPG, PNG hoặc WebP. Hãy dùng tệp có dung lượng vừa phải.
      </p>
    </section>
  );
}


