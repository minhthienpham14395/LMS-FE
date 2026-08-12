import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().trim().min(2, "Tên quá ngắn."),
  displayName: z.string().trim().max(50, "Tên hiển thị quá dài.").optional(),
  learningGoal: z.string().trim().max(300, "Mục tiêu học tập quá dài.").optional(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
