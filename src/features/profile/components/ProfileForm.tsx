import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, RotateCcw, Save } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";

import {
  profileSchema,
  type ProfileFormValues,
} from "../schemas/profile.schema";
import { useProfile, useUpdateProfile } from "../hooks/useProfile";
import type { LearnerProfile } from "../types/profile.type";

const emptyProfileValues: ProfileFormValues = {
  fullName: "",
  displayName: "",
  level: "beginner",
  learningGoal: "",
};

function toFormValues(profile: LearnerProfile | undefined): ProfileFormValues {
  if (!profile) {
    return emptyProfileValues;
  }

  return {
    fullName: profile.fullName ?? "",
    displayName: profile.displayName ?? "",
    level: profile.level ?? "beginner",
    learningGoal: profile.learningGoal ?? "",
  };
}

interface FieldErrorProps {
  message?: string;
}

function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-xs font-semibold text-destructive">{message}</p>;
}

interface FormFieldProps {
  form: ReturnType<typeof useForm<ProfileFormValues>>;
  label: string;
  name: "fullName" | "displayName";
}

function FormField({ form, label, name }: FormFieldProps) {
  const error = form.formState.errors[name]?.message;

  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-slate-800">
        {label}
      </label>
      <Input
        id={name}
        className="mt-2"
        invalid={Boolean(error)}
        {...form.register(name)}
      />
      <FieldError message={error} />
    </div>
  );
}

export function ProfileForm() {
  const profile = useProfile();
  const mutation = useUpdateProfile();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: emptyProfileValues,
  });

  useEffect(() => {
    if (profile.data) {
      form.reset(toFormValues(profile.data));
    }
  }, [form, profile.data]);

  const learningGoalError = form.formState.errors.learningGoal?.message;
  const levelError = form.formState.errors.level?.message;

  if (profile.isLoading) {
    return (
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <div className="h-4 w-24 animate-pulse rounded bg-slate-100" />
              <div className="mt-2 h-11 animate-pulse rounded-xl bg-slate-100" />
            </div>
          ))}
        </div>
        <div className="h-11 animate-pulse rounded-xl bg-slate-100" />
        <div className="h-32 animate-pulse rounded-xl bg-slate-100" />
      </div>
    );
  }

  if (profile.isError) {
    return (
      <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-4">
        <h2 className="font-bold text-slate-950">Không thể tải hồ sơ</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          Hãy tải lại trang hoặc thử lại sau khi phiên học được kết nối lại.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField form={form} name="fullName" label="Họ và tên" />
        <FormField form={form} name="displayName" label="Tên hiển thị" />
      </div>

      <div>
        <label htmlFor="level" className="text-sm font-semibold text-slate-800">
          Trình độ hiện tại
        </label>
        <select
          id="level"
          className={cn(
            "mt-2 flex min-h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition md:text-sm",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            levelError &&
              "border-destructive bg-destructive/5 focus-visible:outline-destructive"
          )}
          aria-invalid={Boolean(levelError)}
          {...form.register("level")}
        >
          <option value="beginner">Mới bắt đầu</option>
          <option value="intermediate">Trung cấp</option>
          <option value="advanced">Nâng cao</option>
        </select>
        <FieldError message={levelError} />
      </div>

      <div>
        <label
          htmlFor="learningGoal"
          className="text-sm font-semibold text-slate-800"
        >
          Mục tiêu học tập
        </label>
        <textarea
          id="learningGoal"
          rows={5}
          className={cn(
            "mt-2 min-h-32 w-full resize-y rounded-xl border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition",
            "placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            learningGoalError &&
              "border-destructive bg-destructive/5 focus-visible:outline-destructive"
          )}
          aria-invalid={Boolean(learningGoalError)}
          {...form.register("learningGoal")}
        />
        <FieldError message={learningGoalError} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => form.reset(toFormValues(profile.data))}
        >
          <RotateCcw className="size-4" />
          Đặt lại
        </Button>
        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Save className="size-4" />
          )}
          {mutation.isPending ? "Đang lưu..." : "Lưu thay đổi"}
        </Button>
      </div>
    </form>
  );
}
